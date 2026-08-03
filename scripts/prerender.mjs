// 프리렌더링: 헤드리스 크롬으로 각 라우트를 실제로 열어,
// React 가 다 그린 뒤의 HTML(본문 텍스트 포함)을 정적 파일로 저장한다.
// 검색엔진(특히 JS 렌더링이 약한 네이버)이 본문을 바로 읽을 수 있게 하기 위함이다.
//
// 단독 테스트:
//   PRERENDER_BASE=http://127.0.0.1:5175 PRERENDER_OUT=경로 node scripts/prerender.mjs
//   (BASE 를 주면 dist 정적 서버를 띄우지 않고 해당 서버를 렌더링한다)
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join, extname, normalize } from 'path';
import { ROUTES } from './routes.mjs';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

// dist 를 GitHub Pages 처럼 서빙(없는 경로는 index.html 폴백)하는 초소형 서버
function serveDist(distDir) {
  const server = createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let file = normalize(join(distDir, urlPath));
    if (!file.startsWith(normalize(distDir))) {
      res.writeHead(403).end();
      return;
    }
    if (!existsSync(file) || extname(file) === '') {
      file = join(distDir, 'index.html'); // SPA 폴백
    }
    try {
      const body = readFileSync(file);
      res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404).end();
    }
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

// 스크롤을 끝까지 내려 whileInView 애니메이션을 전부 발동시킨다
// (안 하면 화면 아래쪽 요소가 opacity:0 상태로 저장된다)
async function triggerInViewAnimations(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 600)); // 애니메이션 마무리 대기
}

export async function prerender() {
  const { default: puppeteer } = await import('puppeteer');

  const baseOverride = process.env.PRERENDER_BASE;
  const outDir = process.env.PRERENDER_OUT || 'dist';
  let server = null;
  let base = baseOverride;

  if (!base) {
    server = await serveDist('dist');
    base = `http://127.0.0.1:${server.address().port}`;
  }

  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });

    // 배경 영상은 렌더링에 불필요하고 로딩만 늦추므로 차단
    await page.setRequestInterception(true);
    page.on('request', (req) =>
      req.url().endsWith('.mp4') ? req.abort() : req.continue(),
    );

    const targets = [{ path: '/' }, ...ROUTES];
    for (const route of targets) {
      await page.goto(`${base}${route.path}`, { waitUntil: 'networkidle2', timeout: 45000 });
      // React 가 본문을 그릴 때까지 대기
      await page.waitForFunction(
        () => (document.querySelector('#root')?.innerText || '').length > 100,
        { timeout: 20000 },
      );
      await triggerInViewAnimations(page);

      const html = await page.content();
      const file =
        route.path === '/'
          ? join(outDir, 'index.html')
          : join(outDir, `${route.path.slice(1)}.html`);
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, html);

      const textLen = await page.evaluate(
        () => (document.querySelector('#root')?.innerText || '').length,
      );
      console.log(`prerendered ${route.path} → ${file} (본문 ${textLen}자)`);
    }
  } finally {
    await browser.close();
    if (server) server.close();
  }
}

// 단독 실행 지원
if (process.argv[1] && process.argv[1].endsWith('prerender.mjs')) {
  prerender().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
