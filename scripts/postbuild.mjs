// 빌드 후처리: GitHub Pages는 정적 파일 서버라 /news 같은 라우트에 실제 파일이 없으면
// 404.html(폴백)을 status 404로 응답한다 → 구글이 색인을 거부한다.
// 그래서 라우트마다 진짜 HTML 파일을 만들어 200으로 응답하게 한다.
//
// 1순위: 프리렌더링(scripts/prerender.mjs) — 헤드리스 크롬으로 본문까지 포함해 저장
// 2순위(프리렌더 실패 시): index.html 복사 + title/description/canonical 만 치환
// 어느 쪽이든 배포가 막히지는 않는다.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'fs';
import { dirname, join } from 'path';
import { SITE, ROUTES } from './routes.mjs';
import { prerender } from './prerender.mjs';

// 동적 라우트(/shopHome/product/:id 등)용 SPA 폴백.
// 프리렌더가 index.html 을 덮어쓰기 전, 순수한 셸 상태로 먼저 복사해 둔다.
copyFileSync('dist/index.html', 'dist/404.html');
console.log('generated dist/404.html (SPA fallback)');

const rewrite = (src, { path, title, desc }) =>
  src
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${desc}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${SITE}${path}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${SITE}${path}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`);

function staticFallback() {
  const html = readFileSync('dist/index.html', 'utf8');
  for (const route of ROUTES) {
    const file = join('dist', `${route.path.slice(1)}.html`);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, rewrite(html, route));
    console.log(`generated ${file} (메타 치환)`);
  }
}

try {
  await prerender();
  console.log('프리렌더링 완료');
} catch (e) {
  console.warn('프리렌더링 실패 — 메타 치환 폴백으로 진행합니다:', e.message);
  staticFallback();
}
