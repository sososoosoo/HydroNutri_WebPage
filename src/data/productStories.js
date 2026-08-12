// 화장품 상세설명 스토리 데이터.
// - 한국어가 기준. *En 필드가 있으면 영어 모드에서 그 값을 쓴다 (없으면 한국어 노출).
// - link: { to, label, labelEn } 이 있는 섹션은 본문 아래에 이동 링크가 붙는다.
// - 효능·수치 클레임 금지: "관리에 도움을 줍니다" 계열의 표시광고법-안전 화법 유지.
export const productStories = {
  c1: {
    sections: [
      {
        type: 'band',
        eyebrow: 'COREX BIOACTIVE',
        subtitle: 'Botanical Science for Balanced Skin',
        title: 'BEYOND BOTANICALS. INTO BIOACTIVES.',
        paras: [
          'COREX BIOACTIVE는 단순히 식물 추출물을 첨가하는 데 그치지 않고, 식물 안에 존재하는 Bioactive Components와 피부에 필요한 기능성·보습·컨디셔닝 성분의 조합에 주목한 스킨케어 라인입니다.',
          '인삼의 Saponin–Ginsenoside Profile, 병풀의 Centelloside–Triterpenoid Profile 등 식물 고유의 성분 특성을 바탕으로 현대적인 스킨케어 포뮬레이션을 설계하여, 일상적인 외부 환경과 피부 컨디션 변화 속에서도 건강하고 균형 잡힌 피부 상태를 유지할 수 있도록 합니다.',
        ],
        parasEn: [
          'COREX BIOACTIVE is a skincare line that goes beyond simply adding botanical extracts — it focuses on the bioactive components within each plant and how they combine with the functional, moisturizing, and conditioning ingredients skin needs.',
          'Building on each plant’s distinctive component profile — the saponin–ginsenoside profile of ginseng, the centelloside–triterpenoid profile of centella — we design modern skincare formulations that help skin stay healthy and balanced through everyday environmental stress and changing skin conditions.',
        ],
        flowLine: 'Plant → Bioactive Profile → Skin Application',
        lead: '식물의 이름을 넘어, 그 안의 유효성분까지 바라봅니다.',
        leadEn: 'We look beyond the plant’s name — into the actives within.',
      },
      {
        type: 'hero',
        kicker: '01',
        title: 'COREX BIOACTIVE REPAIR AMPOULE',
        subtitle: '코렉스 바이오액티브 리페어 앰플',
        subtitleEn: 'COREX Bioactive Repair Ampoule',
        tags: 'Panax Ginseng · Niacinamide',
        badge: 'REVITALIZE & RESTORE',
        volume: '30 mL / 1.01 fl. oz.',
        image: '/image/products/앰플.png',
      },
      {
        type: 'band',
        eyebrow: '제품 한 줄 소개',
        eyebrowEn: 'AT A GLANCE',
        lead: '인삼 유래 성분과 나이아신아마이드, 판테놀 및 다중 보습 시스템을 복합 설계하여 건조하고 지친 피부에 수분과 생기를 더하는 데일리 리페어 앰플',
        leadEn: 'A daily repair ampoule that combines ginseng-derived components with niacinamide, panthenol, and a multi-layered hydration system to bring moisture and vitality to dry, tired-looking skin.',
      },
      {
        type: 'band',
        eyebrow: 'PRODUCT CONCEPT',
        title: '인삼의 Bioactive Profile에서 시작하는 Daily Repair',
        titleEn: 'Daily Repair, Starting from the Bioactive Profile of Ginseng',
        paras: [
          '인삼(Panax ginseng)은 다양한 식물성 성분을 함유하고 있으며, 특히 인삼의 대표적인 생리활성 성분군으로 알려진 사포닌(Saponins)과 진세노사이드(Ginsenosides)가 중요한 Bioactive Profile을 구성합니다.',
          'COREX BIOACTIVE REPAIR AMPOULE은 인삼 유래 성분을 중심으로 Niacinamide, Panthenol, Betaine, Tranexamic Acid 및 다양한 히알루론산계 보습 성분을 조합하여 건조하고 컨디션이 저하된 피부에 수분을 공급하고 매끄럽고 생기 있는 피부 상태를 유지하도록 설계했습니다.',
          '가볍고 산뜻한 수분 베이스 텍스처가 피부에 부드럽게 퍼지며, 피부 수분 밸런스를 관리하고 다음 단계의 스킨케어가 편안하게 이어질 수 있도록 도와줍니다.',
        ],
        parasEn: [
          'Panax ginseng contains a wide range of botanical components; its saponins and ginsenosides — the plant’s best-known groups of constituents — form its key bioactive profile.',
          'COREX BIOACTIVE REPAIR AMPOULE is built around ginseng-derived components combined with niacinamide, panthenol, betaine, tranexamic acid, and multiple hyaluronic-acid-based moisturizers, designed to hydrate dry, fatigued skin and help maintain a smooth, revitalized look.',
          'Its light, refreshing water-based texture spreads gently over the skin, helping manage moisture balance and letting the next skincare step layer comfortably.',
        ],
      },
      {
        type: 'band',
        eyebrow: 'GINSENG BIOACTIVE PROFILE',
        title: 'Ginseng Saponins & Ginsenosides',
        paras: [
          '인삼의 대표적인 Bioactive 성분군 중 하나가 트리테르펜 사포닌(Triterpene Saponins)이며, 인삼에 특징적으로 존재하는 사포닌 성분을 일반적으로 Ginsenosides라고 합니다.',
          'Ginsenosides는 화학 구조에 따라 여러 계열로 구분되며, 인삼 원료의 특성과 품질을 평가하는 주요 Marker Components로 활용됩니다.',
        ],
        parasEn: [
          'One of ginseng’s signature bioactive groups is its triterpene saponins; the saponins characteristic of ginseng are commonly known as ginsenosides.',
          'Ginsenosides are classified into several families by chemical structure and serve as key marker components for evaluating the character and quality of ginseng raw materials.',
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Representative Ginsenosides',
        items: [
          {
            name: 'Ginsenoside Rg1',
            paras: [
              'Protopanaxatriol(PPT) 계열의 대표적인 진세노사이드로, 인삼 원료의 Bioactive Profile을 평가할 때 주요 지표성분 중 하나로 활용됩니다.',
            ],
            parasEn: [
              'A representative ginsenoside of the protopanaxatriol (PPT) family, used as one of the key marker compounds when evaluating the bioactive profile of ginseng materials.',
            ],
          },
          {
            name: 'Ginsenoside Rb1',
            paras: [
              'Protopanaxadiol(PPD) 계열의 대표적인 진세노사이드로 인삼의 주요 사포닌 성분 중 하나입니다.',
            ],
            parasEn: [
              'A representative ginsenoside of the protopanaxadiol (PPD) family and one of ginseng’s principal saponin components.',
            ],
          },
          {
            name: 'Ginsenoside Re',
            paras: [
              'Rg1과 함께 인삼의 주요 PPT 계열 성분으로 알려져 있으며 인삼 추출물의 성분 프로파일을 구성합니다.',
            ],
            parasEn: [
              'Known alongside Rg1 as a major PPT-family constituent, contributing to the component profile of ginseng extract.',
            ],
          },
          {
            name: 'Ginsenoside Rc · Rd 등',
            nameEn: 'Ginsenoside Rc · Rd and others',
            paras: [
              '인삼에서 확인되는 다양한 진세노사이드 성분군으로, 전체적인 Ginseng Bioactive Profile을 형성합니다.',
            ],
            parasEn: [
              'The broader family of ginsenosides found in ginseng, together forming the overall ginseng bioactive profile.',
            ],
          },
        ],
      },
      {
        type: 'flow',
        eyebrow: 'GINSENG COMPONENT MAP',
        steps: [
          { name: 'Panax Ginseng' },
          { name: 'Ginseng Saponins' },
          { name: 'Ginsenoside Profile', desc: 'Rg1 · Rb1 · Re · Rc · Rd · Other Ginsenosides' },
          { name: 'Skin Conditioning Application', desc: 'Revitalizing · Moisture · Skin Balance' },
        ],
        note: 'COREX는 단순히 "인삼 추출물을 사용했다"는 설명에서 그치지 않고, 인삼 내부의 Bioactive Profile까지 이해하고 이를 제품 콘셉트와 연결하는 것을 지향합니다.',
        noteEn: 'COREX aims to go beyond saying "made with ginseng extract" — we work to understand the bioactive profile inside the plant and connect it to the product concept.',
        fineprint: '※ 개별 진세노사이드의 종류 및 실제 함량은 적용된 인삼 원료의 규격, 산지, 추출공정 및 분석 결과에 따라 달라질 수 있습니다.',
        fineprintEn: '* The specific ginsenosides present and their actual content may vary depending on the specification, origin, extraction process, and analytical results of the ginseng material used.',
      },
      {
        type: 'cards',
        eyebrow: 'FORMULATION HIGHLIGHTS',
        items: [
          {
            step: '01',
            name: 'Panax Ginseng Root Extract',
            paras: [
              '인삼 뿌리 유래 추출물로 사포닌을 비롯한 다양한 식물성 성분을 포함하는 Botanical Active Source입니다.',
              '피부 컨디셔닝을 돕고 건조하고 생기 없이 느껴지는 피부를 건강한 피부 상태로 관리하는 데 도움을 줍니다.',
            ],
            parasEn: [
              'An extract derived from ginseng root — a botanical active source containing saponins and a range of other plant constituents.',
              'Supports skin conditioning and helps care for dry, dull-feeling skin toward a healthier look.',
            ],
          },
          {
            step: '02',
            name: 'Niacinamide',
            paras: [
              'Vitamin B3 계열의 대표적인 화장품 성분입니다.',
              '칙칙하고 불균형해 보이는 피부를 보다 균일하고 건강한 인상으로 관리하고, 피부 컨디셔닝과 피부톤 케어에 도움을 줍니다.',
            ],
            parasEn: [
              'A widely used cosmetic ingredient of the vitamin B3 family.',
              'Helps care for dull, uneven-looking skin toward a more even, healthy impression, supporting skin conditioning and tone care.',
            ],
          },
          {
            step: '03',
            name: 'Panthenol',
            paras: [
              'Pro-Vitamin B5로도 알려진 대표적인 보습·피부 컨디셔닝 성분입니다.',
              '피부에 수분을 공급하고 건조함으로 인해 민감하게 느껴지는 피부를 편안하게 관리하도록 돕습니다.',
            ],
            parasEn: [
              'A well-known moisturizing and skin-conditioning ingredient, also called pro-vitamin B5.',
              'Delivers hydration and helps comfort skin that feels sensitive from dryness.',
            ],
          },
          {
            step: '04',
            name: 'Betaine',
            paras: [
              '수분을 끌어당기고 유지하는 Humectant 성분으로 피부의 수분 밸런스를 관리하고 건조함을 줄이는 데 도움을 줍니다.',
            ],
            parasEn: [
              'A humectant that attracts and holds moisture, helping manage the skin’s hydration balance and reduce dryness.',
            ],
          },
          {
            step: '05',
            name: 'Tranexamic Acid',
            paras: [
              '포뮬러 내 피부 컨디셔닝 성분으로 적용되어 피부를 보다 균일하고 건강한 인상으로 관리하는 데 도움을 줍니다.',
            ],
            parasEn: [
              'Included in the formula as a skin-conditioning agent, helping care for skin toward a more even, healthy impression.',
            ],
          },
          {
            step: '06',
            name: 'Allantoin & Dipotassium Glycyrrhizate',
            paras: [
              '외부 환경과 건조함으로 민감해진 피부를 편안하게 관리하는 데 도움을 주는 피부 컨디셔닝 성분입니다.',
            ],
            parasEn: [
              'Skin-conditioning ingredients that help comfort skin made sensitive by dryness and environmental stress.',
            ],
          },
          {
            step: '07',
            name: 'Multi-Hyaluronic Acid Complex',
            paras: [
              '다양한 형태의 히알루론산계 성분을 복합적으로 적용하여 피부에 풍부하고 입체적인 수분감을 전달하도록 설계했습니다.',
              '적용 성분에는 다음과 같은 다양한 Hyaluronic Acid Derivatives가 포함됩니다.',
            ],
            parasEn: [
              'Multiple forms of hyaluronic-acid-based ingredients are combined to deliver rich, multi-dimensional hydration.',
              'The formula includes the following hyaluronic acid derivatives:',
            ],
            blocks: [
              {
                label: 'Hyaluronic Acid Derivatives',
                list: [
                  'Hydrolyzed Hyaluronic Acid',
                  'Hyaluronic Acid',
                  'Sodium Hyaluronate',
                  'Sodium Acetylated Hyaluronate',
                  'Hydroxypropyltrimonium Hyaluronate',
                  'Hydrolyzed Sodium Hyaluronate',
                  'Sodium Hyaluronate Crosspolymer',
                  'Potassium Hyaluronate 등',
                ],
                listEn: [
                  'Hydrolyzed Hyaluronic Acid',
                  'Hyaluronic Acid',
                  'Sodium Hyaluronate',
                  'Sodium Acetylated Hyaluronate',
                  'Hydroxypropyltrimonium Hyaluronate',
                  'Hydrolyzed Sodium Hyaluronate',
                  'Sodium Hyaluronate Crosspolymer',
                  'Potassium Hyaluronate, and more',
                ],
              },
            ],
            note: '이를 통해 단일 보습 성분에 의존하지 않고 다양한 형태의 수분 공급 및 유지 시스템을 구성했습니다.',
            noteEn: 'Rather than relying on a single moisturizer, the formula builds a hydration system from multiple forms of moisture delivery and retention.',
          },
        ],
      },
      {
        type: 'stack',
        eyebrow: 'BIOACTIVE REPAIR SYSTEM',
        items: [
          { name: 'GINSENG BIOACTIVE PROFILE', desc: 'Saponins · Ginsenosides' },
          { name: 'NIACINAMIDE', desc: 'Skin Conditioning' },
          { name: 'PANTHENOL', desc: 'Moisture & Comfort' },
          { name: 'BETAINE', desc: 'Moisture Balance' },
          { name: 'MULTI-HYALURONIC ACID', desc: 'Multi-Level Hydration' },
        ],
        result: 'REVITALIZE · HYDRATE · BALANCE',
      },
      {
        type: 'cards',
        eyebrow: 'KEY BENEFITS',
        items: [
          {
            step: '01',
            name: 'REVITALIZING CARE',
            paras: [
              '인삼 유래 성분을 적용하여 생기 없이 지쳐 보이는 피부를 건강하고 활력 있는 피부 컨디션으로 관리하는 데 도움을 줍니다.',
            ],
            parasEn: [
              'Ginseng-derived components help care for tired, lackluster-looking skin toward a healthy, energized condition.',
            ],
          },
          {
            step: '02',
            name: 'MOISTURE CONDITIONING',
            paras: [
              '글리세린, 베타인, 판테놀 및 다양한 히알루론산계 보습 성분을 통해 피부에 수분을 공급하고 촉촉한 피부 상태를 유지하도록 도와줍니다.',
            ],
            parasEn: [
              'Glycerin, betaine, panthenol, and multiple hyaluronic-acid moisturizers hydrate the skin and help it stay supple.',
            ],
          },
          {
            step: '03',
            name: 'SKIN BALANCING',
            paras: [
              'Niacinamide와 다양한 피부 컨디셔닝 성분을 조합하여 피부가 보다 균형 있고 매끄럽게 관리될 수 있도록 설계했습니다.',
            ],
            parasEn: [
              'Niacinamide and a blend of skin-conditioning ingredients are combined to help skin feel more balanced and smooth.',
            ],
          },
          {
            step: '04',
            name: 'SOOTHING SUPPORT',
            paras: [
              'Panthenol, Allantoin, Dipotassium Glycyrrhizate 등의 피부 컨디셔닝 성분이 건조하거나 외부 환경에 노출된 피부를 편안하게 관리하는 데 도움을 줍니다.',
            ],
            parasEn: [
              'Skin conditioners such as panthenol, allantoin, and dipotassium glycyrrhizate help comfort skin exposed to dryness and environmental stress.',
            ],
          },
          {
            step: '05',
            name: 'LIGHTWEIGHT LAYERING',
            paras: [
              '무겁고 끈적이는 사용감을 최소화한 가볍고 산뜻한 수분 베이스 텍스처로 아침과 저녁 모두 부담 없이 사용할 수 있습니다.',
            ],
            parasEn: [
              'A light, refreshing water-based texture with minimal heaviness or stickiness — comfortable for both morning and evening routines.',
            ],
          },
        ],
      },
      {
        type: 'text',
        eyebrow: 'TEXTURE',
        title: 'Lightweight · Fresh · Hydrating',
        paras: [
          '수분감 있게 부드럽게 퍼지고 피부에 빠르게 밀착되는 산뜻한 앰플 텍스처입니다.',
          '끈적임에 대한 부담을 줄여 단독으로 사용하거나 크림 또는 메이크업 전 단계에도 자연스럽게 레이어링할 수 있습니다.',
        ],
        parasEn: [
          'A fresh ampoule texture that spreads smoothly with a hydrating feel and settles quickly into the skin.',
          'With little to no stickiness, it works on its own or layers naturally under cream or makeup.',
        ],
      },
      {
        type: 'text',
        eyebrow: 'HOW TO USE',
        paras: [
          '세안 후 피부결을 정돈한 뒤 적당량을 취해 얼굴 전체에 부드럽게 펴 바르고 가볍게 두드려 흡수시켜 줍니다.',
          'COREX BIOACTIVE BALANCING CREAM과 함께 사용할 경우 Repair Ampoule → Balancing Cream 순서로 사용하는 것을 권장합니다.',
        ],
        parasEn: [
          'After cleansing and prepping the skin, apply an appropriate amount over the face and pat gently to absorb.',
          'When used with COREX BIOACTIVE BALANCING CREAM, we recommend applying in the order Repair Ampoule → Balancing Cream.',
        ],
        link: {
          to: '/shopHome/product/c2',
          label: 'BALANCING CREAM 함께 보기 →',
          labelEn: 'View the Balancing Cream →',
        },
      },
      {
        type: 'spec',
        title: 'PRODUCT INFORMATION',
        image: '/image/products/앰플껍데기.png',
        rows: [
          { label: '제품명', labelEn: 'Product Name', value: '코렉스 바이오액티브 리페어 앰플', valueEn: 'COREX Bioactive Repair Ampoule' },
          { label: '영문명', labelEn: 'English Name', value: 'COREX Bioactive Repair Ampoule' },
          { label: '제품 유형', labelEn: 'Product Type', value: '페이셜 앰플', valueEn: 'Facial ampoule' },
          { label: '용량', labelEn: 'Volume', value: '30 mL / 1.01 fl. oz.' },
          { label: '주요 콘셉트', labelEn: 'Key Concept', value: '피부 활력 · 보습 · 컨디셔닝 케어', valueEn: 'Revitalizing · moisture · conditioning care' },
          { label: '주요 Botanical Source', labelEn: 'Key Botanical Source', value: 'Panax Ginseng' },
          { label: '사용 부위', labelEn: 'Application Area', value: '얼굴', valueEn: 'Face' },
          { label: '제조국', labelEn: 'Country of Origin', value: 'Republic of Korea' },
          { label: '화장품책임판매업자', labelEn: 'Responsible Distributor', value: '주식회사 코렉스 (COREX Co., Ltd.)', valueEn: 'COREX Co., Ltd.' },
          { label: '화장품제조업자', labelEn: 'Manufacturer', value: '라온하제', valueEn: 'Raonhaje' },
          { label: '사용기한', labelEn: 'Shelf Life', value: '제조일로부터 36개월 이내 / 제조번호 및 사용기한 별도 표기', valueEn: 'Within 36 months of manufacture / batch number and expiry marked separately' },
        ],
      },
    ],
  },
  c2: {
    sections: [
      {
        type: 'hero',
        kicker: '02',
        title: 'COREX BIOACTIVE BALANCING CREAM',
        subtitle: '코렉스 바이오액티브 밸런싱 크림',
        subtitleEn: 'COREX Bioactive Balancing Cream',
        tags: 'Centella Asiatica · Panthenol · Ceramide NP',
        badge: 'BARRIER RECOVERY',
        volume: '50 mL / 1.69 fl. oz.',
        image: '/image/products/크림.png',
      },
      {
        type: 'band',
        eyebrow: '제품 한 줄 소개',
        eyebrowEn: 'AT A GLANCE',
        lead: '병풀 유래 성분과 판테놀·세라마이드 NP를 중심으로 피부에 수분을 공급하고 건강한 피부 장벽과 편안한 피부 밸런스를 유지하도록 설계한 데일리 보습 크림',
        leadEn: 'A daily moisturizing cream built around centella-derived components, panthenol, and ceramide NP — designed to hydrate skin and help maintain a healthy barrier and comfortable balance.',
      },
      {
        type: 'band',
        eyebrow: 'PRODUCT CONCEPT',
        title: '병풀의 Centelloside Profile에서 시작하는 Barrier Recovery',
        titleEn: 'Barrier Care, Starting from the Centelloside Profile of Centella',
        paras: [
          '병풀(Centella asiatica)은 피부 컨디셔닝 소재로 오랫동안 활용되어 온 식물이며, 특히 병풀에 존재하는 Pentacyclic Triterpenoid 계열 성분은 병풀의 대표적인 Bioactive Profile을 구성합니다.',
          '대표적인 병풀 Marker Components로는 Asiaticoside, Madecassoside, Asiatic Acid, Madecassic Acid 등이 알려져 있습니다.',
          'COREX BIOACTIVE BALANCING CREAM은 병풀 유래 성분을 중심으로 Panthenol과 Ceramide NP를 조화롭게 적용하여 외부 환경과 반복적인 건조함으로 민감해지기 쉬운 피부에 충분한 수분을 공급하고 건강한 피부 장벽을 유지하도록 설계했습니다.',
          '풍부한 보습감을 전달하면서도 지나치게 무겁거나 답답하지 않은 텍스처가 피부에 부드럽게 밀착되어 스킨케어 마지막 단계에서 수분감을 편안하게 유지하도록 도와줍니다.',
        ],
        parasEn: [
          'Centella asiatica has long been used as a skin-conditioning botanical; its pentacyclic triterpenoid constituents form the plant’s signature bioactive profile.',
          'Its best-known marker components include asiaticoside, madecassoside, asiatic acid, and madecassic acid.',
          'COREX BIOACTIVE BALANCING CREAM pairs centella-derived components with panthenol and ceramide NP, designed to deliver ample hydration to skin prone to sensitivity from environmental stress and repeated dryness, and to help maintain a healthy skin barrier.',
          'Its texture delivers rich moisture without feeling heavy or suffocating, settling softly onto the skin to comfortably seal in hydration at the final step of a routine.',
        ],
      },
      {
        type: 'band',
        eyebrow: 'CENTELLA BIOACTIVE PROFILE',
        title: 'Centellosides & Triterpenoids',
        paras: [
          '병풀의 대표적인 Bioactive Components는 Pentacyclic Triterpenoid 계열이며, 크게 Glycoside 형태와 Aglycone 형태의 성분으로 나누어 이해할 수 있습니다.',
        ],
        parasEn: [
          'Centella’s signature bioactive components belong to the pentacyclic triterpenoid family, broadly understood in two forms: glycosides and aglycones.',
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Centella Marker Components',
        items: [
          {
            name: 'Asiaticoside',
            paras: [
              '병풀의 대표적인 Triterpene Glycoside 중 하나입니다.',
              'Centella asiatica 원료의 특성과 품질을 평가하는 주요 Marker Compound로 활용되며, 병풀 기반 피부 컨디셔닝 원료 연구에서 중요하게 다뤄집니다.',
            ],
            parasEn: [
              'One of centella’s representative triterpene glycosides.',
              'Used as a key marker compound for evaluating the character and quality of Centella asiatica materials, and an important subject in centella-based skin-conditioning research.',
            ],
          },
          {
            name: 'Madecassoside',
            paras: [
              '병풀에서 발견되는 대표적인 Triterpene Glycoside입니다.',
              '병풀의 Bioactive Profile을 대표하는 주요 성분 중 하나로, 진정 및 피부 컨디셔닝을 목적으로 하는 화장품 소재 연구에서 널리 활용됩니다.',
            ],
            parasEn: [
              'A representative triterpene glycoside found in centella.',
              'One of the components that defines centella’s bioactive profile, widely studied for soothing and skin-conditioning cosmetic applications.',
            ],
          },
          {
            name: 'Asiatic Acid',
            paras: [
              'Asiaticoside 계열과 연관된 Aglycone 형태의 Pentacyclic Triterpene으로 병풀 Bioactive Profile을 구성하는 주요 지표성분 중 하나입니다.',
            ],
            parasEn: [
              'An aglycone pentacyclic triterpene related to the asiaticoside family — one of the key marker components of centella’s bioactive profile.',
            ],
          },
          {
            name: 'Madecassic Acid',
            paras: [
              'Madecassoside 계열과 연관된 Aglycone 형태의 Pentacyclic Triterpene으로 병풀 소재의 성분 특성을 평가할 때 활용되는 주요 지표성분입니다.',
            ],
            parasEn: [
              'An aglycone pentacyclic triterpene related to the madecassoside family, used as a key marker when evaluating the component profile of centella materials.',
            ],
          },
        ],
      },
      {
        type: 'flow',
        eyebrow: 'CENTELLA COMPONENT MAP',
        steps: [
          { name: 'Centella asiatica' },
          { name: 'Triterpene Glycosides', desc: 'Asiaticoside · Madecassoside' },
          { name: 'Aglycone Triterpenes', desc: 'Asiatic Acid · Madecassic Acid' },
          { name: 'Skin Conditioning Application', desc: 'Soothing · Moisture · Barrier Support · Skin Balance' },
        ],
        note: '이러한 Centelloside–Triterpenoid Profile은 단순한 "병풀 함유"라는 설명을 넘어 병풀 원료 내부의 성분 구조를 이해하는 핵심적인 Bioactive Framework입니다.',
        noteEn: 'This centelloside–triterpenoid profile is the core bioactive framework for understanding what is actually inside a centella material — beyond a simple "contains centella" claim.',
        fineprint: '※ 개별 Centelloside 및 Triterpenoid 성분의 실제 함량은 적용 원료의 규격, 산지, 추출공정 및 분석 결과에 따라 달라질 수 있습니다.',
        fineprintEn: '* The actual content of individual centelloside and triterpenoid components may vary depending on the specification, origin, extraction process, and analytical results of the material used.',
      },
      {
        type: 'cards',
        eyebrow: 'FORMULATION HIGHLIGHTS',
        items: [
          {
            step: '01',
            name: 'Centella Asiatica Derived Components',
            paras: [
              '병풀 유래 성분은 다양한 Triterpenoid 계열 성분과 식물성 성분을 포함하는 Botanical Active Source입니다.',
              '외부 환경과 건조함으로 민감하게 느껴지는 피부를 편안하게 관리하고 건강한 피부 컨디션을 유지하도록 도와줍니다.',
            ],
            parasEn: [
              'Centella-derived components form a botanical active source containing triterpenoids and other plant constituents.',
              'They help comfort skin that feels sensitive from dryness and environmental stress, supporting a healthy skin condition.',
            ],
          },
          {
            step: '02',
            name: 'Panthenol',
            paras: [
              'Pro-Vitamin B5 계열의 대표적인 보습·피부 컨디셔닝 성분입니다.',
              '피부에 수분을 공급하여 건조함을 줄이고 피부가 편안하고 촉촉한 상태를 유지하도록 도와줍니다.',
            ],
            parasEn: [
              'A well-known moisturizing and skin-conditioning ingredient of the pro-vitamin B5 family.',
              'Hydrates the skin to reduce dryness, helping it stay comfortable and supple.',
            ],
          },
          {
            step: '03',
            name: 'Ceramide NP',
            paras: [
              '피부 각질층을 구성하는 지질 성분과 유사한 특성을 가진 Ceramide 계열의 피부 컨디셔닝 성분입니다.',
              '건조함으로 인해 수분을 잃기 쉬운 피부를 관리하고 건강한 피부 장벽 유지에 도움을 줍니다.',
            ],
            parasEn: [
              'A ceramide-family skin conditioner with properties similar to the lipids of the skin’s outer layer.',
              'Helps care for skin prone to moisture loss and supports a healthy skin barrier.',
            ],
          },
        ],
      },
      {
        type: 'stack',
        eyebrow: 'BARRIER ACTIVE SYSTEM',
        items: [
          {
            name: 'CENTELLA BIOACTIVE PROFILE',
            desc: 'Asiaticoside · Madecassoside · Asiatic Acid · Madecassic Acid',
          },
          { name: 'PANTHENOL', desc: 'Moisture & Comfort' },
          { name: 'CERAMIDE NP', desc: 'Barrier Support' },
        ],
        result: 'SOOTHE · BALANCE · PROTECT',
      },
      {
        type: 'cards',
        eyebrow: 'KEY BENEFITS',
        items: [
          {
            step: '01',
            name: 'BARRIER SUPPORT',
            paras: [
              'Ceramide NP와 피부 컨디셔닝 성분을 적용하여 건조함으로 약해지기 쉬운 피부를 건강하게 관리하고 피부 장벽 유지에 도움을 줍니다.',
            ],
            parasEn: [
              'Ceramide NP and skin conditioners help care for skin weakened by dryness and support the skin barrier.',
            ],
          },
          {
            step: '02',
            name: 'SOOTHING CARE',
            paras: [
              '병풀 유래 성분을 중심으로 외부 환경과 건조함으로 민감하게 느껴지는 피부를 편안하게 관리하도록 설계했습니다.',
            ],
            parasEn: [
              'Built around centella-derived components to comfort skin that feels sensitive from dryness and environmental stress.',
            ],
          },
          {
            step: '03',
            name: 'LONG-LASTING HYDRATION',
            paras: [
              '피부에 풍부한 보습감을 제공하여 스킨케어 후에도 촉촉한 피부 상태를 유지하도록 도와줍니다.',
            ],
            parasEn: [
              'Delivers rich moisture, helping skin stay supple long after the routine ends.',
            ],
          },
          {
            step: '04',
            name: 'MOISTURE BALANCE',
            paras: [
              'Panthenol을 비롯한 보습·컨디셔닝 성분이 건조함으로 흐트러지기 쉬운 피부의 수분 밸런스를 관리합니다.',
            ],
            parasEn: [
              'Panthenol and other moisturizing, conditioning ingredients help manage the hydration balance of dryness-prone skin.',
            ],
          },
          {
            step: '05',
            name: 'COMFORTABLE FINISH',
            paras: [
              '쫀쫀한 보습감은 유지하면서 지나치게 무겁거나 답답하지 않은 텍스처로 데일리 사용에 적합합니다.',
            ],
            parasEn: [
              'A bouncy, moisturizing feel without heaviness — comfortable enough for daily use.',
            ],
          },
        ],
      },
      {
        type: 'text',
        eyebrow: 'TEXTURE',
        title: 'Rich · Comfortable · Moisturizing',
        paras: [
          '피부에 부드럽게 밀착되는 쫀쫀하고 편안한 크림 텍스처입니다.',
          '충분한 보습감을 전달하면서도 피부 위에 지나치게 무거운 잔여감을 남기지 않도록 설계되어 데일리 크림은 물론 건조한 계절의 집중 보습 케어에도 적합합니다.',
        ],
        parasEn: [
          'A bouncy yet comfortable cream texture that settles softly onto the skin.',
          'It delivers ample moisture without leaving a heavy residue — suited to daily use as well as intensive hydration care in dry seasons.',
        ],
      },
      {
        type: 'text',
        eyebrow: 'HOW TO USE',
        paras: [
          '스킨케어 마지막 단계에서 적당량을 취해 얼굴 전체에 고르게 펴 바르고 부드럽게 흡수시켜 줍니다.',
          '특히 건조함이 느껴지는 부위에는 소량을 한 번 더 덧발라 사용할 수 있습니다.',
        ],
        parasEn: [
          'At the final step of your skincare routine, apply an appropriate amount evenly over the face and let it absorb gently.',
          'A small extra layer can be applied to areas that feel especially dry.',
        ],
      },
      {
        type: 'spec',
        title: 'PRODUCT INFORMATION',
        image: '/image/products/크림껍데기.png',
        rows: [
          { label: '제품명', labelEn: 'Product Name', value: '코렉스 바이오액티브 밸런싱 크림', valueEn: 'COREX Bioactive Balancing Cream' },
          { label: '영문명', labelEn: 'English Name', value: 'COREX Bioactive Balancing Cream' },
          { label: '제품 유형', labelEn: 'Product Type', value: '페이셜 보습 크림', valueEn: 'Facial moisturizing cream' },
          { label: '용량', labelEn: 'Volume', value: '50 mL / 1.69 fl. oz.' },
          { label: '주요 콘셉트', labelEn: 'Key Concept', value: '피부 진정 · 장벽 · 보습 케어', valueEn: 'Soothing · barrier · moisture care' },
          { label: '주요 Botanical Source', labelEn: 'Key Botanical Source', value: 'Centella asiatica' },
          { label: '사용 부위', labelEn: 'Application Area', value: '얼굴', valueEn: 'Face' },
          { label: '제조국', labelEn: 'Country of Origin', value: 'Republic of Korea' },
          { label: '화장품책임판매업자', labelEn: 'Responsible Distributor', value: '주식회사 코렉스 (COREX Co., Ltd.)', valueEn: 'COREX Co., Ltd.' },
          { label: '화장품제조업자', labelEn: 'Manufacturer', value: '라온하제', valueEn: 'Raonhaje' },
          { label: '사용기한', labelEn: 'Shelf Life', value: '제조일로부터 36개월 이내 / 제조번호 및 사용기한 별도 표기', valueEn: 'Within 36 months of manufacture / batch number and expiry marked separately' },
        ],
      },
      {
        type: 'cards',
        eyebrow: 'COREX BIOACTIVE DUAL ROUTINE',
        title: '두 단계로 완성하는 Bioactive Routine',
        titleEn: 'A Bioactive Routine in Two Steps',
        items: [
          {
            step: 'STEP 01',
            name: 'BIOACTIVE REPAIR AMPOULE',
            meta: 'Panax Ginseng · Saponins · Ginsenosides',
            paras: [
              'Revitalize · Hydrate · Balance — 피부에 수분과 피부 컨디셔닝 성분을 공급하여 생기 있고 촉촉한 피부 바탕을 만들어 줍니다.',
            ],
            parasEn: [
              'Revitalize · Hydrate · Balance — delivers moisture and skin-conditioning components to build a fresh, hydrated base.',
            ],
          },
          {
            step: 'STEP 02',
            name: 'BIOACTIVE BALANCING CREAM',
            meta: 'Centella asiatica · Centellosides · Ceramide NP',
            paras: [
              'Soothe · Balance · Protect — 병풀 유래 성분과 Panthenol, Ceramide NP를 통해 피부에 충분한 보습감을 제공하고 편안한 피부 밸런스를 유지하도록 도와줍니다.',
            ],
            parasEn: [
              'Soothe · Balance · Protect — centella-derived components with panthenol and ceramide NP deliver lasting moisture and help maintain a comfortable skin balance.',
            ],
          },
        ],
        link: {
          to: '/shopHome/product/c1',
          label: 'STEP 01 리페어 앰플 보러 가기 →',
          labelEn: 'View the Repair Ampoule (Step 01) →',
        },
      },
      {
        type: 'band',
        title: 'REVITALIZE → BALANCE → PROTECT',
        paras: [
          '수분과 생기를 채우는 BIOACTIVE REPAIR AMPOULE.',
          '그리고 피부의 보습과 편안한 밸런스를 완성하는 BIOACTIVE BALANCING CREAM.',
          '두 단계의 Bioactive Routine을 통해 피부에 필요한 수분과 컨디셔닝 성분을 단계적으로 공급합니다.',
        ],
        parasEn: [
          'BIOACTIVE REPAIR AMPOULE fills the skin with moisture and vitality.',
          'BIOACTIVE BALANCING CREAM completes the routine with hydration and comfortable balance.',
          'Together, the two-step bioactive routine supplies the moisture and conditioning components skin needs, stage by stage.',
        ],
      },
      {
        type: 'flow',
        eyebrow: 'COREX DIFFERENCE',
        title: 'BEYOND BOTANICALS. INTO BIOACTIVES.',
        paras: [
          '화장품에서 식물의 이름만 이야기하는 것은 충분하지 않습니다.',
          'COREX BIOACTIVE는 다음의 관점에서 식물 원료를 바라봅니다.',
        ],
        parasEn: [
          'In cosmetics, naming the plant is not enough.',
          'COREX BIOACTIVE looks at botanical materials through this lens:',
        ],
        steps: [
          { name: 'Plant' },
          { name: 'Botanical Extract' },
          { name: 'Bioactive Fraction' },
          { name: 'Marker Components' },
          { name: 'Skin Application' },
        ],
      },
      {
        type: 'band',
        paras: ['식물의 이름을 넘어, 그 식물이 가진 Bioactive Profile까지.'],
        parasEn: ['Beyond the plant’s name — into its bioactive profile.'],
        flowLine: 'FROM BOTANICALS TO BIOACTIVES.',
      },
    ],
  },
};
