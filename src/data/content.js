// 스토어 콘텐츠 데이터 — 뉴스/스토리
// 제품 데이터(products.js)와 동일한 패턴으로 한/영 필드를 함께 담아
// 컴포넌트에서 i18n.language 에 따라 선택해 사용한다.

// ── 뉴스 · 스토리 (외부 기사 링크) ──
//
// image: (선택) 기사 대표 이미지. 넣으면 카드 오른쪽에 사진이 붙고,
//        생략하면 글만 표시된다. 파일이 없거나 경로가 틀려도 자동으로 글만 표시된다.
//        public/image/news/ 에 파일을 저장한 뒤 '/image/news/파일명.png' 형태로 지정한다.
//        파일명은 공백·한글 없이 영문으로 (URL 인코딩 문제를 피하기 위함).
//        여러 기사가 같은 사진을 공유해도 된다 — n1, n2 가 AFPRO 사진 하나를 함께 쓴다.
//        기사 사진은 언론사에 저작권이 있으므로, 직접 촬영·제공한 사진만 쓰는 것이 안전하다.
export const newsItems = [
  {
    id: 'n1',
    date: '2026.06.23',
    image: '/image/news/afpro2026-corex.png',
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
    image: '/image/news/afpro2026-corex.png',
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
    image: '/image/news/startupdaily-corex.png',
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
    image: '/image/news/kookmin-campustown-mou.jpg',
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
