// Discover Daejeon - Data File (한국어 기본 설정)
// 다국어 텍스트, 관광명소, 성심당 & 맛집 가이드, 교통안내, 축제, 일정 데이터

const MULTI_LANG_STRINGS = {
  ko: {
    siteTitle: "디스커버 대전",
    siteTagline: "대한민국 과학, 자연, 맛의 수도 대전",
    navHome: "홈",
    navAttractions: "관광명소",
    navBakeryFood: "성심당 & 맛집",
    navItinerary: "AI 일정 플래너",
    navEvents: "축제 & 행사",
    navTransport: "교통 & 필수정보",
    navWishlist: "보관함",
    heroTitle: "미래를 경험하고 전통을 맛보는 도시, 대전",
    heroSubtitle: "세계적인 과학공원, 힐링 온천, 메타세쿼이아 숲, 그리고 대한민국 최고의 성심당 빵집을 서울에서 50분 만에 만나보세요.",
    quickPlanBtn: "맞춤 여행 일정 만들기",
    exploreSpotsBtn: "대표 관광지 둘러보기",
    searchPlaceholder: "관광지, 성심당, 온천, KAIST 검색...",
    filterAll: "전체 카테고리",
    filterScience: "과학 & 첨단기술",
    filterNature: "자연 & 힐링온천",
    filterGourmet: "미식 & 성심당",
    filterCulture: "문화 & 역사",
    filterShopping: "쇼핑 & 야경",
    spotDetailsBtn: "상세보기",
    sungsimdangTitle: "성심당 빵지순례 가이드",
    sungsimdangSubtitle: "1956년 대전에서 시작된 미슐랭 가이드 등재 대표 빵집! 대전 여행 필수 코스",
    mustEatTitle: "대전 대표 5대 미식",
    plannerTitle: "AI 맞춤 여행 플래너",
    plannerSubtitle: "여행 기간, 취향, 스타일에 딱 맞는 최적의 대전 일정을 생성해 드립니다.",
    currencyConverterTitle: "실시간 환율 계산기",
    weatherTitle: "대전 현재 날씨",
    transportTitle: "대전 오시는 길 & 대중교통",
    festivalsTitle: "대전 대표 축제 & 이벤트",
    wishlistEmpty: "저장된 관광지가 없습니다. 원하는 관광지의 하트 버튼을 눌러 추가해보세요!",
    exportItineraryBtn: "일정 인쇄 / PDF 저장",
    listenKoreanBtn: "🔊 한국어 발음 듣기",
    directionMapBtn: "🗺️ 지도로 보기",
    addToWishlist: "❤️ 즐겨찾기 추가",
    removeFromWishlist: "💔 즐겨찾기 해제",
    daysUnit: "일",
    nightUnit: "박"
  },
  en: {
    siteTitle: "Discover Daejeon",
    siteTagline: "Korea's Capital of Science, Nature & Culinary Delights",
    navHome: "Home",
    navAttractions: "Attractions",
    navBakeryFood: "Bakery & Food",
    navItinerary: "AI Trip Planner",
    navEvents: "Events & Festivals",
    navTransport: "Travel Essentials",
    navWishlist: "Saved Spots",
    heroTitle: "Experience the Future & Taste the Tradition in Daejeon",
    heroSubtitle: "Explore world-class science parks, healing hot springs, metasequoia forests, and the legendary Sung Sim Dang bakery—just 50 minutes from Seoul.",
    quickPlanBtn: "Build My Trip Plan",
    exploreSpotsBtn: "Explore Top Attractions",
    searchPlaceholder: "Search spots, bakeries, hot springs, KAIST...",
    filterAll: "All Categories",
    filterScience: "Science & High-Tech",
    filterNature: "Nature & Spa",
    filterGourmet: "Culinary & Bakery",
    filterCulture: "Culture & Heritage",
    filterShopping: "Shopping & Nightlife",
    spotDetailsBtn: "View Details",
    sungsimdangTitle: "Sung Sim Dang Bakery Pilgrimage",
    sungsimdangSubtitle: "The Michelin-guided legendary bakery born in Daejeon in 1956. A must-visit culinary destination!",
    mustEatTitle: "Top 5 Iconic Daejeon Dishes",
    plannerTitle: "Custom AI Trip Planner",
    plannerSubtitle: "Generate your tailored itinerary based on duration, interests, and travel style.",
    currencyConverterTitle: "KRW Currency Converter",
    weatherTitle: "Daejeon Live Weather",
    transportTitle: "Getting to & Around Daejeon",
    festivalsTitle: "Events & Annual Festivals",
    wishlistEmpty: "Your saved spots list is currently empty.",
    exportItineraryBtn: "Export / Print Itinerary",
    listenKoreanBtn: "🔊 Listen to Korean Name",
    directionMapBtn: "🗺️ Open Map",
    addToWishlist: "❤️ Save to Favorites",
    removeFromWishlist: "💔 Remove from Favorites",
    daysUnit: "Day",
    nightUnit: "Night"
  },
  ja: {
    siteTitle: "ディスカバー大田",
    siteTagline: "韓国の科学・自然・グルメの首都 大田",
    navHome: "ホーム",
    navAttractions: "観光名所",
    navBakeryFood: "聖心堂＆グルメ",
    navItinerary: "AI旅プランナー",
    navEvents: "フェスティバル",
    navTransport: "交通＆旅行ガイド",
    navWishlist: "お気に入り",
    heroTitle: "未来を体感し、伝統を味わう都市・大田",
    heroSubtitle: "ソウルからKTXでわずか50分！世界的な科学パーク、癒やしの温泉、メタセコイアの森、伝説のパン屋「聖心堂」へ。",
    quickPlanBtn: "旅プランを作成",
    exploreSpotsBtn: "おすすめスポット",
    searchPlaceholder: "スポット、温泉、聖心堂、KAISTなどを検索...",
    filterAll: "すべてのカテゴリ",
    filterScience: "科学・ハイテク",
    filterNature: "自然・温泉",
    filterGourmet: "グルメ・パン屋",
    filterCulture: "文化・歴史",
    filterShopping: "ショッピング・夜景",
    spotDetailsBtn: "詳細を見る",
    sungsimdangTitle: "聖心堂パン屋巡礼ガイド",
    sungsimdangSubtitle: "1956年創業、ミシュランガイドにも掲載された大田のシンボル！",
    mustEatTitle: "大田の5大ご当地グルメ",
    plannerTitle: "AIカスタム旅プランナー",
    plannerSubtitle: "旅行日数や好みに合わせた最適な大田観光コースを自動生成します。",
    currencyConverterTitle: "為替レート計算機",
    weatherTitle: "大田のリアルタイム天気",
    transportTitle: "アクセス＆市内交通",
    festivalsTitle: "イベント＆祭り情報",
    wishlistEmpty: "お気に入りがありません。",
    exportItineraryBtn: "日程を印刷 / PDF保存",
    listenKoreanBtn: "🔊 韓国語の発音を聞く",
    directionMapBtn: "🗺️ 地図で開く",
    addToWishlist: "❤️ お気に入りに追加",
    removeFromWishlist: "💔 お気に入り解除",
    daysUnit: "日",
    nightUnit: "泊"
  },
  zh: {
    siteTitle: "探索大田",
    siteTagline: "韩国科技、自然与美食之都",
    navHome: "首页",
    navAttractions: "旅游景点",
    navBakeryFood: "圣心堂与美食",
    navItinerary: "AI行程规划",
    navEvents: "庆典活动",
    navTransport: "交通指南",
    navWishlist: "收藏夹",
    heroTitle: "体验未来 细品传统 — 大田广域市",
    heroSubtitle: "距离首尔仅50分钟KTX车程！探访顶尖科技园区、温泉水疗、水杉森林与传奇圣心堂面包店。",
    quickPlanBtn: "定制我的行程",
    exploreSpotsBtn: "浏览热门景点",
    searchPlaceholder: "搜索景点、圣心堂、温泉、KAIST...",
    filterAll: "全部分类",
    filterScience: "科技与前沿",
    filterNature: "自然与温泉",
    filterGourmet: "美食与烘焙",
    filterCulture: "文化与历史",
    filterShopping: "购物与夜生活",
    spotDetailsBtn: "查看详情",
    sungsimdangTitle: "圣心堂面包巡礼指南",
    sungsimdangSubtitle: "1956年创办、入选米其林指南的大田标志性面包店！",
    mustEatTitle: "大田必吃5大美食",
    plannerTitle: "AI智能行程规划器",
    plannerSubtitle: "根据您的旅行天数与喜好，智能生成最佳大田游览路线。",
    currencyConverterTitle: "实时汇率换算",
    weatherTitle: "大田实时天气",
    transportTitle: "交通与到达指南",
    festivalsTitle: "节庆与年度活动",
    wishlistEmpty: "暂无收藏景点。",
    exportItineraryBtn: "导出/打印行程",
    listenKoreanBtn: "🔊 发音(韩语)",
    directionMapBtn: "🗺️ 打开地图",
    addToWishlist: "❤️ 添加收藏",
    removeFromWishlist: "💔 取消收藏",
    daysUnit: "天",
    nightUnit: "晚"
  }
};

const ATTRACTION_SPOTS = [
  {
    id: "expo-science-park",
    category: "science",
    rating: 4.8,
    reviewsCount: 1420,
    title: "엑스포과학공원 & 한빛탑",
    titleEn: "Expo Science Park & Hanbit Tower",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "대전 과학도시의 상징! 한빛탑 전망대, 음악분수 쇼, 야간 미디어파사드 공연을 즐길 수 있는 공간.",
    desc: "1993년 대전세계박람회(EXPO) 개최지를 기념해 조성된 미적·미래형 과학공원입니다. 한빛탑 2층 전망대 카페에서는 대전 도심 전경을 360도 조망할 수 있으며, 밤에는 신나는 음악과 함께 화려한 한빛탑 음악분수쇼가 펼쳐집니다.",
    address: "대전광역시 유성구 대덕대로 481 (도룡동)",
    hours: "09:30 - 22:00 (한빛탑 및 음악분수 운영 21:30까지, 월요일 휴무)",
    fee: "공원 무료입장 / 한빛탑 전망대 성인 ₩2,500",
    transit: "시내버스 606, 121, 705번 탑승 후 엑스포과학공원 하차 / 정부청사역(1호선)에서 택시 10분.",
    tags: ["대전랜드마크", "음악분수", "야경명소", "과학공원", "가족여행"],
    mapQuery: "대전 엑스포과학공원"
  },
  {
    id: "national-science-museum",
    category: "science",
    rating: 4.9,
    reviewsCount: 2180,
    title: "국립중앙과학관",
    titleKo: "국립중앙과학관",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "대한민국 대표 과학관! AI, 우주탐사, 자연사, 천문우주관을 체험할 수 있는 첨단 과학 공간.",
    desc: "한국의 과학기술 발전사와 자연사, 첨단 우주공학, 로봇 기술을 체험하는 종합 과학 박물관입니다. 국내 최고 수준의 플라네타리움(천체투영관), 창의나래관, 미래기술관 등 다양한 체험형 전시가 마련되어 있습니다.",
    address: "대전광역시 유성구 대덕대로 481",
    hours: "09:30 - 17:30 (매주 월요일, 1월 1일 휴관)",
    fee: "과학기술관 무료 / 천체투영관 및 창의나래관 ₩2,000",
    transit: "대전 도시철도 1호선 정부청사역 3번 출구 -> 시내버스 604번 환승.",
    tags: ["박물관", "체험형STEM", "천체투영관", "우주로봇"],
    mapQuery: "국립중앙과학관 대전"
  },
  {
    id: "kaist-campus",
    category: "science",
    rating: 4.7,
    reviewsCount: 890,
    title: "KAIST (한국과학기술원) 캠퍼스 & 오리호수",
    titleKo: "KAIST 본원",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "한국의 MIT! 과학 인재들이 모인 캠퍼스, 유명한 오리호수와 산책로, 벚꽃 명소.",
    desc: "대한민국 최고의 이공계 연구중심 대학인 KAIST 본원 캠퍼스입니다. 일반 방문객에게 개방되어 있어 유명한 오리호수 산책로, 최첨단 연구동, 봄철 만개하는 벚꽃 길을 따라 산책을 즐기기 좋습니다.",
    address: "대전광역시 유성구 대학로 291",
    hours: "연중무휴 개방 (캠퍼스 산책 자유)",
    fee: "무료",
    transit: "도시철도 1호선 월평역 3번 출구 -> 도보 15분 또는 택시 5분.",
    tags: ["대학교", "혁신기술", "캠퍼스산책", "벚꽃명소"],
    mapQuery: "KAIST 본원"
  },
  {
    id: "jangtaesan-forest",
    category: "nature",
    rating: 4.9,
    reviewsCount: 3100,
    title: "장태산 자연휴양림",
    titleKo: "장태산 자연휴양림",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "30m 높이의 우거진 메타세쿼이아 숲길, 스카이웨이 출렁다리, 힐링 산림욕장.",
    desc: "6,300여 그루의 메타세쿼이아 나무가 빽빽하게 장관을 이루는 대전 대표 힐링 휴양림입니다. 숲 위를 걷는 스카이워크(Skyway)와 출렁다리를 지나 스카이타워 전망대에 오르면 붉게 물드는 황홀한 숲 뷰를 감상할 수 있습니다.",
    address: "대전광역시 서구 장안로 461 (장안동)",
    hours: "09:00 - 18:00 (스카이워크 17:00 마감)",
    fee: "입장료 무료 / 주차비 무료",
    transit: "대전역 또는 서부버스터미널에서 20번 시내버스 탑승 -> 장태산휴양림 종점 하차 (약 50분 소요).",
    tags: ["산림욕", "출렁다리", "스카이워크", "단풍명소", "힐링산책"],
    mapQuery: "장태산 자연휴양림"
  },
  {
    id: "yuseong-hot-springs",
    category: "nature",
    rating: 4.8,
    reviewsCount: 1950,
    title: "유성온천 야외 족욕체험장 & 온천공원",
    titleKo: "유성온천 족욕체험장",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "지하 200m 41°C 천연 알칼리성 온천수에 발을 담그는 족욕 체험 공간 (무료 운영).",
    desc: "조선 시대 태조와 정종도 다녀간 역사 깊은 유성 천연 온천입니다. 누구나 무료로 이용할 수 있는 야외 족욕장에 발을 담그며 여행의 피로를 풀 수 있으며, 온천로 정원길을 따라 아름다운 이팝나무 꽃을 즐길 수 있습니다.",
    address: "대전광역시 유성구 봉명동 574 (유성 온천공원)",
    hours: "07:00 - 22:00 (연중무휴)",
    fee: "무료 (야외 공공 족욕장)",
    transit: "도시철도 1호선 유성온천역 7번 출구 -> 온천로 방향 도보 5분.",
    tags: ["천연온천", "힐링족욕", "무료체험", "온천스파"],
    mapQuery: "유성온천 족욕체험장"
  },
  {
    id: "gyeryongsan-national-park",
    category: "nature",
    rating: 4.7,
    reviewsCount: 1120,
    title: "계룡산 국립공원 & 동학사 / 갑사",
    titleKo: "계룡산 국립공원",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "닭 벼슬을 쓴 룡의 형상을 닮은 국립공원, 오랜 역사를 품은 동학사와 갑사 사찰 코스.",
    desc: "충남 명산이자 국립공원으로 대전 시민들의 사랑을 받는 등산 명소입니다. 계곡물이 흐르는 동학사 산책길부터 삼불봉 정상 코스까지 계절마다 산수유, 벚꽃, 단풍, 설경이 장관을 이룹니다.",
    address: "충청남도 공주시 반포면 동학사1로 462 (대전 연계)",
    hours: "05:00 - 18:00",
    fee: "국립공원 입장료 무료",
    transit: "대전역 또는 유성온천역에서 107번 시내버스 탑승 -> 동학사 종점 하차.",
    tags: ["국립공원", "사찰탐방", "등산코스", "계곡산책"],
    mapQuery: "동학사 계룡산"
  },
  {
    id: "sung-sim-dang-main",
    category: "gourmet",
    rating: 4.9,
    reviewsCount: 9800,
    title: "성심당 본점 (은행동)",
    titleKo: "성심당 본점",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "대한민국 대표 빵집! 튀김소보로, 판타롱부추빵, 명란바게트, 케익부티크가 위치한 빵지순례 성지.",
    desc: "1956년 대전역 앞 찐빵집으로 시작해 미슐랭 가이드 한국편에 등재된 명실상부 대한민국 최고의 베이커리입니다. 바삭한 튀김소보로, 향긋한 부추빵, 명란바게트와 계절 생과일 케이크(망고시루, 귤시루 등)를 만나보세요.",
    address: "대전광역시 중구 대종로480번길 15 (은행동)",
    hours: "08:00 - 22:00 (매일)",
    fee: "빵류 ₩1,500 - ₩4,500 / 케이크 ₩25,000 - ₩45,000",
    transit: "도시철도 1호선 중앙로역 2번 출구 -> 으능정이 거리 방향 도보 3분.",
    tags: ["미슐랭가이드", "빵지순례", "튀김소보로", "대전필수코스"],
    mapQuery: "성심당 본점"
  },
  {
    id: "daejeon-sky-road",
    category: "shopping",
    rating: 4.6,
    reviewsCount: 1650,
    title: "으능정이 문화의거리 & 스카이로드",
    titleKo: "으능정이 스카이로드",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "길이 214m, 높이 20m에 달하는 초대형 LED 캐노피 아케이드 미디어 아트 쇼.",
    desc: "대전 은행동의 핫플레이스 패션 문화의 거리입니다. 성심당 본점 바로 앞에 위치하며, 매일 밤 대형 LED 천장 스크린에서 화려한 미디어아트 쇼, 뮤직비디오, 영상물이 펼쳐집니다.",
    address: "대전광역시 중구 중앙로 145 일대 (은행동)",
    hours: "거리 상시 개방 / 스카이로드 LED 쇼 18:00 - 22:00",
    fee: "무료",
    transit: "도시철도 1호선 중앙로역 1번 또는 2번 출구.",
    tags: ["LED미디어아트", "쇼핑거리", "야경명소", "K패션"],
    mapQuery: "대전 스카이로드"
  },
  {
    id: "daejeon-art-center",
    category: "culture",
    rating: 4.7,
    reviewsCount: 750,
    title: "대전예술의전당 & 대전시립미술관",
    titleKo: "대전예술의전당",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "오케스트라 공연, 뮤지컬, 현대미술 전시가 열리는 대전 최고의 문화예술 공간.",
    desc: "둔산대로 문화단지 내 위치한 문화 예술의 중심지입니다. 클래식 음악회, 오페라, 연극 공연 및 시립미술관의 현대 미술 전시, 조각공원 산책을 즐기기 좋습니다.",
    address: "대전광역시 서구 둔산대로 135 (만년동)",
    hours: "10:00 - 19:00 (월요일 휴관)",
    fee: "미술관 관람료 ₩500 - ₩1,000 / 공연별 금액 다름",
    transit: "도시철도 1호선 정부청사역 3번 출구 -> 시내버스 605번 환승 또는 도보 15분.",
    tags: ["현대미술", "공연예술", "미술관", "조각공원"],
    mapQuery: "대전예술의전당"
  },
  {
    id: "o-world-theme-park",
    category: "nature",
    rating: 4.8,
    reviewsCount: 2400,
    title: "대전 오월드 & 나이트 유니버스",
    titleKo: "대전 오월드",
    image: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "놀이기구, 아프리카 사파리 동물원, 플라워랜드, 디지털 야간 미디어파사드 동산.",
    desc: "조이랜드(놀이기구), 쥬랜드(사파리 동물원), 플라워랜드(대형 꽃정원), 그리고 밤이 되면 환상적인 홀로그램과 미디어아트가 펼쳐지는 '나이트 유니버스'까지 남녀노소가 즐기는 테마파크입니다.",
    address: "대전광역시 중구 사정공원로 70 (사정동)",
    hours: "10:00 - 22:00 (나이트 유니버스 18:00 개장)",
    fee: "입장권 ₩17,000 / 자유이용권 ₩34,000 (성인 기준)",
    transit: "시내버스 115번 또는 311번 탑승 후 오월드 종점 하차.",
    tags: ["테마파크", "사파리동물원", "미디어아트", "가족나들이"],
    mapQuery: "대전 오월드"
  },
  {
    id: "shinsegae-art-science",
    category: "shopping",
    rating: 4.9,
    reviewsCount: 3800,
    title: "대전 신세계 Art & Science & 엑스포타워",
    titleKo: "대전 신세계 Art & Science",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "중부권 최대 복합 쇼핑몰, 엑스포타워 38층 파노라마 전망대, 디지털 아쿠아리움.",
    desc: "193m 높이의 엑스포타워 전망대(디아트 스페이스 193), 수중 미디어아트 공연이 열리는 대전 엑스포 아쿠아리움, 메가박스 영화관, 스포츠몬스터, 럭셔리 쇼핑 브랜드가 총집합한 복합 문화 공간입니다.",
    address: "대전광역시 유성구 엑스포로 1 (도룡동)",
    hours: "10:30 - 20:00 (식당가 21:30까지)",
    fee: "백화점 무료입장 / 아쿠아리움 ₩29,000",
    transit: "엑스포과학공원 바로 옆 위치 / 시내버스 121, 618, 705번.",
    tags: ["복합쇼핑몰", "아쿠아리움", "전망대카페", "럭셔리쇼핑"],
    mapQuery: "대전 신세계 Art & Science"
  },
  {
    id: "ppuri-park",
    category: "culture",
    rating: 4.7,
    reviewsCount: 920,
    title: "뿌리공원 & 족보박물관",
    titleKo: "뿌리공원",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "자신의 뿌리와 성씨 조형물을 만나는 세계 유일의 효 테마공원, 유등천 오리배 체험.",
    desc: "유등천 변 절벽과 산자락에 조성된 세계 유일의 성씨 테마 공원입니다. 244개 성씨 조형물, 한국족보박물관, 아름다운 야간 조명 출렁다리, 강변 오리배 오락을 즐길 수 있습니다.",
    address: "대전광역시 중구 뿌리공원로 250 (침산동)",
    hours: "06:00 - 22:00 (연중무휴)",
    fee: "무료 입장",
    transit: "시내버스 312번 또는 313번 탑승 후 뿌리공원 종점 하차.",
    tags: ["성씨테마", "출렁다리", "오리배", "강변산책"],
    mapQuery: "대전 뿌리공원"
  }
];

const SUNGSIMDANG_GUIDE = {
  history: "1956년 대전역 앞 작은 찐빵집으로 출발한 성심당은 오직 대전에서만 매장을 운영하는 지역 상생 대표 베이커리입니다. '모든 이가 다 좋게 여기는 일을 하십시오'라는 경영 이념 아래 뛰어난 품질과 넉넉한 인심을 자랑합니다.",
  signatureBreads: [
    {
      name: "튀김소보로",
      price: "₩1,700",
      desc: "1980년 탄생한 대전 최고의 명물! 바삭한 소보로 빵 안에 달콤한 팥앙금이 가득 찬 시그니처 빵.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
      badge: "인기 No.1"
    },
    {
      name: "판타롱부추빵",
      price: "₩2,000",
      desc: "향긋한 생부추, 담백한 계란, 고소한 고기 소가 어우러진 담백하고 만두 같은 식감의 특색 빵.",
      image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80",
      badge: "담백 대표작"
    },
    {
      name: "명란바게트",
      price: "₩3,800",
      desc: "바삭한 바게트 속에 짭조름한 짭짤 고소 명란마요 소스가 가득 들어간 감칠맛 폭발 바게트.",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80",
      badge: "감칠맛 추천"
    },
    {
      name: "망고시루 케이크",
      price: "₩43,000",
      desc: "성심당 케익부티크의 오픈런 신화! 생망고 3개 이상과 생크림이 묵직하게 올라간 계절 한정 케이크.",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80",
      badge: "SNS 대란작"
    }
  ],
  branches: [
    {
      name: "은행동 본점",
      address: "대전광역시 중구 대종로480번길 15",
      tip: "가장 많은 빵 종류와 바로 옆 성심당 케익부티크, 옛맛솜씨 매장을 함께 방문할 수 있는 본점!"
    },
    {
      name: "대전역점",
      address: "대전역 2층 대합실",
      tip: "KTX 열차 탑승 전 튀김소보로 세트 상자를 빠르게 구매하기 가장 편리한 매장."
    },
    {
      name: "DCC점 (대전컨벤션센터)",
      address: "대전 유성구 엑스포로 107",
      tip: "엑스포과학공원 근처 위치. 넓은 브런치 카페 좌석과 쾌적한 야외 테라스를 갖춘 매장."
    },
    {
      name: "롯데백화점 대전점",
      address: "대전 서구 계룡로 598 1층",
      tip: "성심당 시그니처 샌드위치 랩 및 전용 한정 메뉴를 맛볼 수 있는 프리미엄 매장."
    }
  ]
};

const DAEJEON_FOOD_TOP5 = [
  {
    name: "대전 칼국수 (얼큰이 & 바지락 & 들깨)",
    desc: "대전은 전국 최고 면 요리의 도시! 바지락의 시원한 국물이나 붉고 얼큰한 쑥갓 칼국수, 들깨 칼국수를 겉절이 김치와 함께 즐겨보세요.",
    bestSpot: "오복칼국수 / 공주칼국수 / 복수분식",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "매콤한 두부두루치기",
    desc: "두툼한 두부를 매콤 칼칼한 양념에 자작하게 졸여낸 대전 고유의 향토 요리. 칼국수 사리를 넣어 비벼 먹으면 더욱 별미입니다.",
    bestSpot: "광천식당 (백종원 3대천왕 출연) / 진로집",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "진한 태평소국밥 & 소머리국밥",
    desc: "24시간 푹 끓여낸 맑고 깊은 한우 고기국밥과 쫄깃한 소머리수육, 육사시미를 가성비 높게 즐길 수 있는 대전 전설의 소국밥.",
    bestSpot: "태평소국밥 (유성 본점 및 봉명점)",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "대전 숯불 돼지갈비",
    desc: "달콤 짭조름한 특제 양념에 재워 숯불 향이 그윽하게 배어난 양념 돼지갈비와 냉면 조합.",
    bestSpot: "대전역 맛집 거리 & 둔산동 갈비 전문점",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "대전 수제맥주 & 공주 밤막걸리",
    desc: "대전 과학도시 콘셉트의 수제맥주(한빛 라거, 카이스트 에일 등)와 달콤 고소한 지역 밤막걸리.",
    bestSpot: "랜치펍 도룡점 / 유성 수제맥주 거리",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80"
  }
];

const PRESET_ITINERARIES = [
  {
    id: "1day-express",
    title: "1일 알차게: 과학공원 & 성심당 당일치기 코스",
    duration: "1일 (당일치기)",
    target: "서울/전국 출발 당일치기 여행객",
    schedule: [
      { time: "오전 09:30", title: "대전역 KTX 도착", desc: "서울역에서 KTX 타고 50분 만에 대전역 도착." },
      { time: "오전 10:15", title: "엑스포과학공원 & 한빛탑", desc: "대전 과학도시 상징 한빛탑 전망대 관람." },
      { time: "오후 12:30", title: "대전 얼큰이 칼국수 & 두부두루치기 점심", desc: "광천식당 또는 공주칼국수에서 대전 대표 얼큰 손칼국수 맛보기." },
      { time: "오후 02:30", title: "국립중앙과학관 또는 신세계 Art & Science", desc: "첨단 과학 전시 체험 및 전망대 카페 휴식." },
      { time: "오후 05:30", title: "성심당 본점 & 케익부티크 빵지순례", desc: "튀김소보로 및 부추빵 선물상자 구매." },
      { time: "오후 07:00", title: "으능정이 스카이로드 LED 관람 후 KTX 귀가", desc: "스카이로드 미디어아트 관람 후 대전역 이동." }
    ]
  },
  {
    id: "2day-healing",
    title: "2일 힐링: 메타세쿼이아 숲 & 유성 온천 코스",
    duration: "1박 2일",
    target: "커플, 가족 단위 힐링 여행객",
    schedule: [
      { time: "1일차 10:00", title: "장태산 자연휴양림 숲길 산책", desc: "메타세쿼이아 스카이워크 및 출렁다리 산책." },
      { time: "1일차 13:00", title: "태평소국밥 점심 식사", desc: "진한 소국밥과 육사시미 맛보기." },
      { time: "1일차 15:30", title: "유성온천 야외 족욕체험 & 온천 스파", desc: "41도 천연 온천 족욕장에서 여행 피로 풀기." },
      { time: "1일차 19:00", title: "신세계 엑스포타워 야경 관람 & 저녁", desc: "대전 야경 감상 및 저녁 식사." },
      { time: "2일차 10:00", title: "KAIST 캠퍼스 & 오리호수 산책", desc: "학술문화관 및 호수 산책." },
      { time: "2일차 13:00", title: "성심당 본점 빵지순례 & 귀가", desc: "은행동 성심당 본점 빵 구매 및 쇼핑." }
    ]
  },
  {
    id: "3day-grand",
    title: "3일 대전 완전정복 코스",
    duration: "2박 3일",
    target: "대전 구석구석 정복하고 싶은 미식가 & 관광객",
    schedule: [
      { time: "1일차", title: "첨단 미래도시 대전", desc: "엑스포과학공원, 국립중앙과학관, 신세계 아쿠아리움, 한빛탑 음악분수." },
      { time: "2일차", title: "자연과 테마파크 힐링", desc: "장태산 메타세쿼이아 숲, 유성온천 족욕, 오월드 나이트 유니버스." },
      { time: "3일차", title: "역사와 문화 & 빵지순례", desc: "뿌리공원 강변산책, 대전예술의전당, 성심당 빵쇼핑 후 귀가." }
    ]
  }
];

const TRAVEL_ESSENTIALS = {
  transportFromSeoul: [
    { mode: "KTX 고속열차", duration: "50분 소요", price: "약 ₩23,700", note: "서울역/용산역에서 15~20분 간격 운행. 대전역 도착." },
    { mode: "SRT 고속열차", duration: "45분 소요", price: "약 ₩20,100", note: "수서역(강남)에서 출발. 대전역 또는 서대전역 도착." },
    { mode: "인천공항 리무진 버스", duration: "2시간 10분", price: "약 ₩25,000", note: "인천공항 T1, T2에서 대전 정부청사까지 직통 운행." }
  ],
  localTransit: {
    subway: "대전 도시철도 1호선이 동서로 대전역 ↔ 중앙로(은행동) ↔ 정부청사 ↔ 유성온천역을 직선으로 빠르게 연결합니다.",
    tashuBike: "대전시 공공자전거 '타슈(Tashu)'는 앱 설치 후 최초 60분 무료 이용 가능합니다.",
    tMoneyCard: "전국 공용 교통카드(T-Money, 캐시비 등)로 버스와 지하철 환승 할인이 적용됩니다."
  },
  emergencyContacts: [
    { title: "한국관광공사 종합안내 (24시간)", number: "1330", note: "한국어, 영어, 일어, 중국어 다국어 안내" },
    { title: "경찰청 긴급신고", number: "112", note: "통역 서비스 제공" },
    { title: "소방 & 응급환자 구조", number: "119", note: "구급차 출동 요청" },
    { title: "대전 종합관광안내소", number: "042-120", note: "대전역 1층 위치" }
  ]
};

const FESTIVALS_LIST = [
  {
    title: "대전 0시 축제 (Daejeon Zero O'Clock Festival)",
    date: "매년 8월 (여름 대표 축제)",
    location: "중앙로 차없는거리 (대전역~옛 도청 구간)",
    desc: "대전 최대 규모의 여름 야간 축제! 대전역 일대 차없는 거리에서 한여름 밤의 K-POP 콘서트, 레트로 퍼레이드, 야시장, 드론 라이트 쇼가 낭만적으로 펼쳐집니다.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "대전 국제 와인 엑스포",
    date: "매년 10월 (가을)",
    location: "대전컨벤션센터(DCC) & 한빛탑 광장",
    desc: "아시아 최대 규모의 국제 와인 축제! 전 세계 30개국 프리미엄 와인을 시음하고 와인 페어링 푸드를 맛볼 수 있는 미식 축제.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "대전 사이언스 페스티벌",
    date: "매년 10월 (가을)",
    location: "엑스포과학공원 & 대덕연구개발특구",
    desc: "대한민국 과학 수도 대전에서 펼쳐지는 첨단 AI, 드론 경주, 로봇 체험, 우주 로켓 체험 등 대형 과학 대축제.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "유성온천 문화축제",
    date: "매년 5월 (봄)",
    location: "유성 온천로 및 온천공원",
    desc: "천연 온천수를 즐기는 물총 대전, 온천수 족욕 음악회, 이팝나무 벚꽃 길 야간 조명 축제.",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80"
  }
];
