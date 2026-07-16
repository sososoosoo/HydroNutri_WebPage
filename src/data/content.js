// 스토어 콘텐츠 데이터 — 뉴스/스토리, 공지사항
// 제품 데이터(products.js)와 동일한 패턴으로 한/영 필드를 함께 담아
// 컴포넌트에서 i18n.language 에 따라 선택해 사용한다.

// ── 뉴스 · 스토리 (외부 기사 링크) ──
export const newsItems = [
  {
    id: 'n1',
    date: '2026.06.23',
    source: '에이빙(AVING)',
    sourceEn: 'AVING',
    title: '코렉스, AFPRO 2026서 기능성 식물 표준 원료 공개… "K-Ingredient 표준화"',
    titleEn: 'COREX unveils standardized functional-plant materials at AFPRO 2026',
    summary:
      '2026년 2월 강원특별자치도에서 창업한 코렉스가 AI 기반 정밀 재배와 성분 분석으로 병풀·새싹인삼 등 기능성 식물을 데이터 기반으로 표준화해 화장품·건강기능식품 산업에 공급한다.',
    summaryEn:
      'Founded in Gangwon in February 2026, COREX standardizes functional plants such as centella and sprout ginseng through AI-based precision cultivation and compound analysis for the cosmetics and health-food industries.',
    url: 'https://kr.aving.net/news/articleView.html?idxno=1811897',
  },
  {
    id: 'n2',
    date: '2026.06.23',
    source: '라이브뉴스',
    sourceEn: 'Live News',
    title: '코렉스, AFPRO 2026에 K-Ingredient 표준화 솔루션 선보인다',
    titleEn: 'COREX to present its K-Ingredient standardization solution at AFPRO 2026',
    summary:
      '7월 15–17일 코엑스에서 열리는 제4회 농식품 스타트업 라이징 엑스포(AFPRO 2026)에서, Bioactive Passport 기반 표준 정보 카드로 OEM/ODM 기업의 제품 개발 시간을 단축하는 솔루션을 공개한다.',
    summaryEn:
      'At AFPRO 2026 (COEX, July 15–17), COREX presents a solution that shortens OEM/ODM product-development time with standardized information cards built on its Bioactive Passport.',
    url: 'https://m.news.nate.com/view/20260623n18551',
  },
  {
    id: 'n3',
    date: '2026.06.11',
    source: '스타트업데일리',
    sourceEn: 'Startup Daily',
    title: "COREX, 한국 인삼·병풀을 '글로벌 표준 원료'로 바꾼다",
    titleEn: "COREX turns Korean ginseng and centella into 'global standard materials'",
    summary:
      '재배부터 추출·품질관리까지 데이터로 연결한 Bioactive Passport로, 한 파일럿에서 아시아티코사이드 함량을 4.2배 높이고 성분 편차를 6.7배 줄인 성과를 소개했다.',
    summaryEn:
      'With a Bioactive Passport that links cultivation, extraction and quality control through data, a pilot raised asiaticoside content 4.2× and reduced compound variation 6.7×.',
    url: 'https://www.startupdaily.kr/news/articleView.html?idxno=10169',
  },
  {
    id: 'n4',
    date: '2026.05.21',
    source: '이투데이',
    sourceEn: 'Etoday',
    title: '국민대 캠퍼스타운, 국제공정무역기구와 창업생태계 조성 위한 MOU 체결',
    titleEn: 'Kookmin Univ. Campus Town signs MOU with Fairtrade Korea to build a startup ecosystem',
    summary:
      '국민대 캠퍼스타운이 국제공정무역기구 한국사무소와 협약을 맺고, 청년 창업기업의 글로벌 진출과 ESG·공정무역 가치 접목을 지원한다.',
    summaryEn:
      'Kookmin University Campus Town signed an agreement with Fairtrade International Korea to support young startups going global and to weave ESG and fair-trade values into their business models.',
    url: 'https://v.daum.net/v/2nbK520HvV?f=p',
  },
];

// ── 공지사항 ──
export const notices = [
  {
    id: 'no1',
    date: '2026.06.23',
    category: '행사',
    categoryEn: 'Event',
    title: 'AFPRO 2026 참가 안내',
    titleEn: 'COREX at AFPRO 2026',
    body: '7월 15–17일 코엑스에서 열리는 제4회 농식품 스타트업 라이징 엑스포(AFPRO 2026)에 참가합니다. COREX 부스에서 K-Ingredient 표준화 솔루션과 Bioactive Passport를 직접 만나보실 수 있습니다.',
    bodyEn: 'COREX is exhibiting at AFPRO 2026 (COEX, July 15–17). Visit our booth to see the K-Ingredient standardization solution and the Bioactive Passport in person.',
  },
  {
    id: 'no2',
    date: '2026.06.11',
    category: '보도',
    categoryEn: 'Press',
    title: '언론 보도 — 표준화 기술 소개',
    titleEn: 'In the press — our standardization technology',
    body: '스타트업데일리에 COREX의 기능성 식물 표준화 기술과 성과가 소개되었습니다. 자세한 내용은 뉴스·스토리에서 확인하실 수 있습니다.',
    bodyEn: 'Startup Daily featured COREX’s functional-plant standardization technology and results. Read more in the News & Stories section.',
  },
  {
    id: 'no3',
    date: '2026.02.01',
    category: '안내',
    categoryEn: 'Notice',
    title: 'COREX 법인 설립',
    titleEn: 'COREX founded',
    body: '강원특별자치도 춘천에서 COREX가 사업을 시작했습니다. 기능성 식물을 기반으로 표준화된 바이오액티브 소재를 공급합니다.',
    bodyEn: 'COREX began operations in Chuncheon, Gangwon. We supply standardized bioactive materials made from functional plants.',
  },
  {
    id: 'no4',
    date: '2026.07.01',
    category: '스토어',
    categoryEn: 'Store',
    title: '온라인 결제 준비 안내',
    titleEn: 'Online payment coming soon',
    body: '현재 스토어는 문의 기반으로 운영됩니다. 온라인 결제 기능은 준비 중이며, 견적문의를 남겨주시면 결제·배송 일정을 안내해 드립니다.',
    bodyEn: 'The store currently runs on an inquiry basis. Online payment is in preparation — leave a quote request and we will guide you through payment and delivery.',
  },
];
