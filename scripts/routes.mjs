// 프리렌더/메타 치환 대상 라우트 목록.
// public/sitemap.xml, src/components/RouteMeta.jsx 와 맞춰서 관리한다.
// title/desc 는 프리렌더 실패 시 정적 치환 폴백에서 쓴다(프리렌더 성공 시엔
// 브라우저 안에서 RouteMeta 가 직접 세팅한 값이 그대로 저장된다).
export const SITE = 'https://corexbiotech.com';

export const ROUTES = [
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
