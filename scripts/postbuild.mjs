// 빌드 후처리: GitHub Pages는 정적 파일 서버라 /news 같은 라우트에 실제 파일이 없으면
// 404.html(폴백)을 status 404로 응답한다 → 구글이 색인을 거부한다.
// 그래서 라우트마다 진짜 HTML 파일을 만들어 200으로 응답하게 하고,
// 파일마다 title/description/canonical 을 그 페이지 값으로 바꿔 넣는다(간이 프리렌더링).
// 라우트 목록은 public/sitemap.xml, src/components/RouteMeta.jsx 와 맞춰서 관리한다.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'fs';
import { dirname, join } from 'path';

const SITE = 'https://corexbiotech.com';

const ROUTES = [
  {
    path: '/about',
    title: 'COREX 회사소개',
    desc: '스마트팜 기반 고기능성 바이오 소재 기업 코렉스(COREX)의 비전과 사업을 소개합니다.',
  },
  {
    path: '/technology',
    title: 'COREX 기술',
    desc: '코렉스(COREX)의 AI 정밀 재배와 바이오 추출·표준화 기술(Bioactive Passport)을 소개합니다.',
  },
  {
    path: '/roadmap',
    title: 'COREX 로드맵',
    desc: '코렉스(COREX)의 성장 로드맵과 단계별 목표를 소개합니다.',
  },
  {
    path: '/news',
    title: 'COREX 뉴스',
    desc: '코렉스(COREX) 관련 언론 보도와 소식을 모았습니다.',
  },
  {
    path: '/contact',
    title: 'COREX 문의',
    desc: '코렉스(COREX) 원료·협업 문의와 오시는 길을 안내합니다.',
  },
  {
    path: '/shopHome',
    title: 'COREX 원료 스토어',
    desc: '코렉스(COREX) 천연물 표준화 원료 스토어. 화장품·건강기능식품 B2B 원료를 만나보세요.',
  },
  {
    path: '/shopHome/company',
    title: 'COREX 원료 스토어',
    desc: '코렉스(COREX) 원료 스토어 회사 소개.',
  },
  {
    path: '/shopHome/business',
    title: 'COREX 사업안내',
    desc: '코렉스(COREX)의 원료 표준화 사업과 공급 방식을 안내합니다.',
  },
  {
    path: '/shopHome/products',
    title: 'COREX 원료 목록',
    desc: '코렉스(COREX)가 공급하는 화장품·건강기능식품 표준화 원료 목록.',
  },
  {
    path: '/shopHome/news',
    title: 'COREX 뉴스',
    desc: '코렉스(COREX) 관련 언론 보도와 소식을 모았습니다.',
  },
  {
    path: '/shopHome/quote',
    title: 'COREX 견적 문의',
    desc: '코렉스(COREX) 원료 견적을 문의하세요.',
  },
];

const html = readFileSync('dist/index.html', 'utf8');

const rewrite = (src, { path, title, desc }) =>
  src
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${desc}$2`,
    )
    .replace(
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1${SITE}${path}$2`,
    )
    .replace(
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${SITE}${path}$2`,
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${title}$2`,
    );

for (const route of ROUTES) {
  // '/news' → dist/news.html, '/shopHome/products' → dist/shopHome/products.html
  const file = join('dist', `${route.path.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, rewrite(html, route));
  console.log(`generated ${file}`);
}

// 동적 라우트(/shopHome/product/:id 등)용 SPA 폴백은 유지한다
copyFileSync('dist/index.html', 'dist/404.html');
console.log('generated dist/404.html (SPA fallback)');
