import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { findProduct } from '../data/products';

// SPA라 라우트가 바뀌어도 <title>·description 이 자동으로 안 바뀐다.
// 여기서 경로별로 직접 갱신한다.
// 방침: 파란 제목 링크는 항상 'COREX'로 시작한다(브랜드 우선, '|' 미사용).
//       홈은 브랜드명만("COREX"), 나머지는 'COREX 페이지명'.
// 네이버 서치어드바이저 권고: 사이트 설명은 80자 이내
const DEFAULT_DESC =
  '스마트팜 기반 고기능성 바이오 소재 기업 코렉스(COREX). AI 정밀 재배와 추출 기술로 의료·제약·화장품 핵심 원료를 개발합니다.';

const META = {
  '/': { title: 'COREX', desc: DEFAULT_DESC },
  '/about': {
    title: 'COREX 회사소개',
    desc: '스마트팜 기반 고기능성 바이오 소재 기업 코렉스(COREX)의 비전과 사업을 소개합니다.',
  },
  '/technology': {
    title: 'COREX 기술',
    desc: '코렉스(COREX)의 AI 정밀 재배와 바이오 추출·표준화 기술(Bioactive Passport)을 소개합니다.',
  },
  '/roadmap': {
    title: 'COREX 로드맵',
    desc: '코렉스(COREX)의 성장 로드맵과 단계별 목표를 소개합니다.',
  },
  '/news': {
    title: 'COREX 뉴스',
    desc: '코렉스(COREX) 관련 언론 보도와 소식을 모았습니다.',
  },
  '/contact': {
    title: 'COREX 문의',
    desc: '코렉스(COREX) 원료·협업 문의와 오시는 길을 안내합니다.',
  },
  '/shopHome': {
    title: 'COREX 원료 스토어',
    desc: '코렉스(COREX) 천연물 표준화 원료 스토어. 화장품·건강기능식품 B2B 원료를 만나보세요.',
  },
  '/shopHome/company': {
    title: 'COREX 원료 스토어',
    desc: '코렉스(COREX) 원료 스토어 회사 소개.',
  },
  '/shopHome/cosmetics': {
    title: 'COREX 화장품',
    desc: '코렉스(COREX) 코스메슈티컬 완제품 목록.',
  },
  '/shopHome/ingredients': {
    title: 'COREX 원료 목록',
    desc: '코렉스(COREX)가 공급하는 화장품·건강기능식품 표준화 원료 목록.',
  },
  '/shopHome/news': {
    title: 'COREX 뉴스',
    desc: '코렉스(COREX) 관련 언론 보도와 소식을 모았습니다.',
  },
  '/shopHome/quote': {
    title: 'COREX 문의하기',
    desc: '코렉스(COREX) 제품 구매·원료 견적을 문의하세요.',
  },
};

function resolve(pathname) {
  if (META[pathname]) return META[pathname];

  // 상품 상세: /shopHome/product/:id → 상품명을 제목에
  const m = pathname.match(/^\/shopHome\/product\/(.+)$/);
  if (m) {
    const product = findProduct(m[1]);
    if (product) {
      return {
        title: `COREX ${product.name}`,
        desc: `코렉스(COREX) ${product.name} 원료 정보와 견적 안내.`,
      };
    }
    return { title: 'COREX 원료 스토어', desc: DEFAULT_DESC };
  }

  // 스토어 카테고리 등 나머지 /shopHome/*
  if (pathname.startsWith('/shopHome')) {
    return { title: 'COREX 원료 스토어', desc: DEFAULT_DESC };
  }

  // 그 외(404 등)는 브랜드명만
  return { title: 'COREX', desc: DEFAULT_DESC };
}

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, desc } = resolve(pathname);
    document.title = title;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', desc);

    // canonical·og 도 현재 페이지를 가리키게 한다 (index.html 기본값은 홈)
    const url = `https://corexbiotech.com${pathname === '/' ? '' : pathname}`;
    const set = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    set('link[rel="canonical"]', 'href', url);
    set('meta[property="og:url"]', 'content', url);
    // 홈은 index.html 에 작성해 둔 공유 문구(og)를 그대로 쓴다
    if (pathname !== '/') {
      set('meta[property="og:title"]', 'content', title);
      set('meta[property="og:description"]', 'content', desc);
    }
  }, [pathname]);

  return null;
}
