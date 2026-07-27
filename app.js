// Discover Daejeon - Main Application Logic (한국어 기본 설정)

let currentLanguage = 'ko';
let activeCategory = 'all';
let searchKeyword = '';
let savedWishlist = JSON.parse(localStorage.getItem('daejeon_wishlist') || '[]');

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
  initThemeToggle();
  renderAttractions();
  renderSungsimdangSection();
  renderMustEatSection();
  renderFestivalsSection();
  renderEssentialsSection();
  initPlannerDefaults();
  initCurrencyConverter();
  initWeatherWidget();
  updateWishlistCount();
});

// Multi-Language Translation
function setLanguage(lang) {
  if (!MULTI_LANG_STRINGS[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  
  // Translate static data-i18n attributes
  const i18nElements = document.querySelectorAll('[data-i18n]');
  i18nElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (MULTI_LANG_STRINGS[lang][key]) {
      el.textContent = MULTI_LANG_STRINGS[lang][key];
    }
  });

  // Translate placeholders
  const searchInput = document.getElementById('search-input');
  if (searchInput && MULTI_LANG_STRINGS[lang].searchPlaceholder) {
    searchInput.placeholder = MULTI_LANG_STRINGS[lang].searchPlaceholder;
  }

  // Re-render dynamic sections
  renderAttractions();
  renderSungsimdangSection();
  renderMustEatSection();
}

function initLanguageSelector() {
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
  }
}

// Theme Toggle
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      themeBtn.innerHTML = isLight ? '🌙 다크 모드' : '☀️ 라이트 모드';
    });
  }
}

// Category & Search Filters
function filterCategory(category, btnElement) {
  activeCategory = category;
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderAttractions();
}

function handleSearchInput(value) {
  searchKeyword = value.toLowerCase().trim();
  renderAttractions();
}

// Render Attraction Spot Cards
function renderAttractions() {
  const container = document.getElementById('attractions-grid');
  if (!container) return;

  const filteredSpots = ATTRACTION_SPOTS.filter(spot => {
    const matchesCategory = (activeCategory === 'all') || (spot.category === activeCategory);
    const matchesSearch = !searchKeyword || 
      spot.title.toLowerCase().includes(searchKeyword) ||
      (spot.titleEn && spot.titleEn.toLowerCase().includes(searchKeyword)) ||
      (spot.titleKo && spot.titleKo.toLowerCase().includes(searchKeyword)) ||
      spot.desc.toLowerCase().includes(searchKeyword) ||
      spot.tags.some(tag => tag.toLowerCase().includes(searchKeyword));
    return matchesCategory && matchesSearch;
  });

  if (filteredSpots.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <i class="fas fa-search-location" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent-cyan);"></i>
        <h3>검색 결과가 없습니다</h3>
        <p>"과학", "성심당", "온천", "KAIST", "장태산" 등으로 검색해보세요.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredSpots.map(spot => {
    const isSaved = savedWishlist.includes(spot.id);
    const categoryName = MULTI_LANG_STRINGS[currentLanguage][`filter${capitalize(spot.category)}`] || spot.category;
    
    return `
      <div class="spot-card">
        <div class="card-image-wrap">
          <img src="${spot.image}" alt="${spot.title}" loading="lazy" />
          <span class="category-badge">${categoryName}</span>
          <button class="favorite-toggle-btn ${isSaved ? 'saved' : ''}" onclick="toggleWishlist('${spot.id}')" title="보관함에 추가">
            <i class="${isSaved ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>
        <div class="card-content">
          <div class="card-header-meta">
            <span class="rating-badge"><i class="fas fa-star"></i> ${spot.rating} (${spot.reviewsCount})</span>
          </div>
          <h3 class="spot-card-title">${spot.title}</h3>
          <div class="spot-card-title-ko">${spot.titleEn || spot.titleKo || ''}</div>
          <p class="spot-card-desc">${spot.shortDesc}</p>
          <div class="spot-card-tags">
            ${spot.tags.map(t => `<span class="tag-chip">#${t}</span>`).join('')}
          </div>
          <div class="card-footer">
            <button class="btn-card-action" onclick="openSpotModal('${spot.id}')">
              ${MULTI_LANG_STRINGS[currentLanguage].spotDetailsBtn || '상세보기'} <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Modal Detail Popup with Korean Speech Synthesis
function openSpotModal(spotId) {
  const spot = ATTRACTION_SPOTS.find(s => s.id === spotId);
  if (!spot) return;

  const modalBackdrop = document.getElementById('spot-modal');
  const modalContent = document.getElementById('modal-card-body');
  if (!modalBackdrop || !modalContent) return;

  const isSaved = savedWishlist.includes(spot.id);

  modalContent.innerHTML = `
    <img src="${spot.image}" alt="${spot.title}" style="width:100%; height:260px; object-fit:cover; border-radius: var(--radius-md); margin-bottom:1.5rem;" />
    
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
      <div>
        <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:0.3rem;">${spot.title}</h2>
        <div style="color:var(--accent-cyan); font-weight:600; font-size:1.1rem; display:flex; align-items:center; gap:10px;">
          <span>${spot.titleKo || spot.title}</span>
          <button onclick="speakKorean('${spot.titleKo || spot.title}')" style="background:rgba(0,240,255,0.15); border:1px solid rgba(0,240,255,0.4); color:var(--accent-cyan); padding:0.25rem 0.7rem; border-radius:var(--radius-pill); font-size:0.8rem; cursor:pointer;" title="한국어 발음 듣기">
            🔊 ${MULTI_LANG_STRINGS[currentLanguage].listenKoreanBtn || '🔊 한국어 발음 듣기'}
          </button>
        </div>
      </div>
      <button class="favorite-toggle-btn ${isSaved ? 'saved' : ''}" onclick="toggleWishlist('${spot.id}'); openSpotModal('${spot.id}');" style="position:static;">
        <i class="${isSaved ? 'fas' : 'far'} fa-heart"></i>
      </button>
    </div>

    <p style="color:var(--text-muted); font-size:1rem; margin-bottom:1.5rem; line-height:1.7;">${spot.desc}</p>

    <div style="background:rgba(255,255,255,0.05); border:1px solid var(--border-glass); border-radius:var(--radius-md); padding:1.2rem; margin-bottom:1.5rem; display:flex; flex-direction:column; gap:0.8rem; font-size:0.92rem;">
      <div><strong>📍 주소:</strong> <span style="color:var(--accent-cyan);">${spot.address}</span></div>
      <div><strong>⏰ 운영 시간:</strong> ${spot.hours}</div>
      <div><strong>🎟️ 입장료/이용료:</strong> ${spot.fee}</div>
      <div><strong>🚌 대중교통 이용 안내:</strong> ${spot.transit}</div>
    </div>

    <div style="display:flex; gap:1rem; flex-wrap:wrap;">
      <a href="https://map.kakao.com/?q=${encodeURIComponent(spot.address)}" target="_blank" class="btn-primary" style="flex:1; justify-content:center; font-size:0.95rem;">
        🗺️ 카카오맵 길찾기
      </a>
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapQuery)}" target="_blank" class="btn-secondary" style="flex:1; justify-content:center; font-size:0.95rem;">
        🌐 구글 지도 보기
      </a>
    </div>
  `;

  modalBackdrop.classList.add('active');
}

function closeModal() {
  const modalBackdrop = document.getElementById('spot-modal');
  if (modalBackdrop) modalBackdrop.classList.remove('active');
}

// Audio Speech Synthesis for Korean Pronunciation
function speakKorean(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  } else {
    alert(`한국어 명칭: ${text}`);
  }
}

// Wishlist Manager
function toggleWishlist(spotId) {
  const index = savedWishlist.indexOf(spotId);
  if (index > -1) {
    savedWishlist.splice(index, 1);
  } else {
    savedWishlist.push(spotId);
  }
  localStorage.setItem('daejeon_wishlist', JSON.stringify(savedWishlist));
  updateWishlistCount();
  renderAttractions();
}

function updateWishlistCount() {
  const badge = document.getElementById('wishlist-badge');
  if (badge) {
    badge.textContent = savedWishlist.length;
  }
}

function openWishlistModal() {
  const modalBackdrop = document.getElementById('spot-modal');
  const modalContent = document.getElementById('modal-card-body');
  if (!modalBackdrop || !modalContent) return;

  const savedSpots = ATTRACTION_SPOTS.filter(s => savedWishlist.includes(s.id));

  if (savedSpots.length === 0) {
    modalContent.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem;">
        <i class="far fa-heart" style="font-size:3.5rem; color:var(--accent-rose); margin-bottom:1rem;"></i>
        <h2>보관함이 비어있습니다</h2>
        <p style="color:var(--text-muted); margin-top:0.5rem;">원하는 관광지의 하트 버튼을 눌러 보관함에 추가해보세요!</p>
      </div>
    `;
  } else {
    modalContent.innerHTML = `
      <h2 style="margin-bottom:1.5rem;">❤️ 내가 저장한 대전 여행지 (${savedSpots.length})</h2>
      <div style="display:flex; flex-direction:column; gap:1rem;">
        ${savedSpots.map(spot => `
          <div style="display:flex; gap:1rem; align-items:center; background:rgba(255,255,255,0.05); border:1px solid var(--border-glass); padding:0.8rem; border-radius:var(--radius-md);">
            <img src="${spot.image}" style="width:70px; height:70px; object-fit:cover; border-radius:var(--radius-sm);" />
            <div style="flex-grow:1;">
              <h4 style="font-size:1.05rem; font-weight:700;">${spot.title}</h4>
              <div style="font-size:0.85rem; color:var(--accent-cyan);">${spot.address}</div>
            </div>
            <button onclick="openSpotModal('${spot.id}')" style="background:var(--primary-blue); color:#fff; border:none; padding:0.4rem 0.8rem; border-radius:var(--radius-pill); cursor:pointer;">상세보기</button>
            <button onclick="toggleWishlist('${spot.id}'); openWishlistModal();" style="background:rgba(255,46,147,0.2); color:var(--accent-rose); border:1px solid var(--accent-rose); padding:0.4rem 0.8rem; border-radius:var(--radius-pill); cursor:pointer;">삭제</button>
          </div>
        `).join('')}
      </div>
    `;
  }

  modalBackdrop.classList.add('active');
}

// Render Sung Sim Dang & Foodie Sections
function renderSungsimdangSection() {
  const container = document.getElementById('sungsim-signature-grid');
  if (!container) return;

  container.innerHTML = SUNGSIMDANG_GUIDE.signatureBreads.map(bread => `
    <div class="bread-card">
      <img src="${bread.image}" alt="${bread.name}" class="bread-img" />
      <div class="bread-header">
        <span class="bread-name">${bread.name}</span>
        <span class="bread-price">${bread.price}</span>
      </div>
      <p class="bread-desc">${bread.desc}</p>
    </div>
  `).join('');
}

function renderMustEatSection() {
  const container = document.getElementById('must-eat-grid');
  if (!container) return;

  container.innerHTML = DAEJEON_FOOD_TOP5.map((food, i) => `
    <div class="spot-card">
      <div class="card-image-wrap" style="height:180px;">
        <img src="${food.image}" alt="${food.name}" />
        <span class="category-badge" style="background:var(--accent-orange); color:#fff;">추천 #${i+1} 요리</span>
      </div>
      <div class="card-content">
        <h3 class="spot-card-title">${food.name}</h3>
        <p class="spot-card-desc">${food.desc}</p>
        <div style="font-size:0.85rem; color:var(--accent-gold); font-weight:600; margin-top:0.5rem;">
          📍 대표 맛집: ${food.bestSpot}
        </div>
      </div>
    </div>
  `).join('');
}

// AI Trip Planner Logic
function initPlannerDefaults() {
  generateCustomItinerary();
}

function generateCustomItinerary() {
  const duration = document.getElementById('plan-duration')?.value || '1';
  const style = document.getElementById('plan-style')?.value || 'balanced';
  const displayArea = document.getElementById('itinerary-result-display');
  if (!displayArea) return;

  let chosenPreset;
  if (duration === '1') chosenPreset = PRESET_ITINERARIES[0];
  else if (duration === '2') chosenPreset = PRESET_ITINERARIES[1];
  else chosenPreset = PRESET_ITINERARIES[2];

  displayArea.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
      <div>
        <h3 style="font-size:1.5rem; font-weight:800;">${chosenPreset.title}</h3>
        <p style="color:var(--text-muted); font-size:0.9rem;">추천 대상: ${chosenPreset.target} | 일정한 테마: ${getStyleLabel(style)}</p>
      </div>
      <button onclick="window.print()" class="btn-secondary" style="font-size:0.88rem; padding:0.5rem 1rem;">
        🖨️ ${MULTI_LANG_STRINGS[currentLanguage].exportItineraryBtn || '일정 인쇄 / PDF 저장'}
      </button>
    </div>

    <div class="itinerary-timeline">
      ${chosenPreset.schedule.map(item => `
        <div class="timeline-item">
          <div class="timeline-time">${item.time}</div>
          <div class="timeline-title">${item.title}</div>
          <div class="timeline-desc">${item.desc}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function getStyleLabel(style) {
  if (style === 'science') return '과학 & 첨단기술';
  if (style === 'nature') return '자연 힐링 & 온천';
  if (style === 'gourmet') return '성심당 & 대전 빵지순례';
  return '균형잡힌 추천 코스';
}

// Currency FX Converter Simulator
function initCurrencyConverter() {
  const krwInput = document.getElementById('fx-krw-input');
  if (!krwInput) return;

  krwInput.addEventListener('input', updateFxValues);
  updateFxValues();
}

function updateFxValues() {
  const krwVal = parseFloat(document.getElementById('fx-krw-input')?.value || '10000');
  
  const usd = (krwVal * 0.00072).toFixed(2);
  const eur = (krwVal * 0.00067).toFixed(2);
  const jpy = (krwVal * 0.11).toFixed(0);
  const cny = (krwVal * 0.0052).toFixed(2);

  const resUSD = document.getElementById('fx-res-usd');
  const resEUR = document.getElementById('fx-res-eur');
  const resJPY = document.getElementById('fx-res-jpy');
  const resCNY = document.getElementById('fx-res-cny');

  if (resUSD) resUSD.textContent = `$${usd} USD`;
  if (resEUR) resEUR.textContent = `€${eur} EUR`;
  if (resJPY) resJPY.textContent = `¥${jpy} JPY`;
  if (resCNY) resCNY.textContent = `¥${cny} CNY`;
}

// Live Weather Simulator
function initWeatherWidget() {
  const weatherTemp = document.getElementById('weather-temp');
  if (weatherTemp) {
    weatherTemp.textContent = '24°C';
  }
}

// Festivals Section
function renderFestivalsSection() {
  const container = document.getElementById('festivals-grid');
  if (!container) return;

  container.innerHTML = FESTIVALS_LIST.map(fest => `
    <div class="spot-card">
      <div class="card-image-wrap">
        <img src="${fest.image}" alt="${fest.title}" />
      </div>
      <div class="card-content">
        <span class="category-badge" style="margin-bottom:0.5rem; display:inline-block; position:static;">${fest.date}</span>
        <h3 class="spot-card-title">${fest.title}</h3>
        <p class="spot-card-desc">${fest.desc}</p>
        <div style="font-size:0.85rem; color:var(--accent-cyan); margin-top:0.5rem;">
          📍 개최 장소: ${fest.location}
        </div>
      </div>
    </div>
  `).join('');
}

// Essentials Transport Section
function renderEssentialsSection() {
  const container = document.getElementById('transport-from-seoul-list');
  if (!container) return;

  container.innerHTML = TRAVEL_ESSENTIALS.transportFromSeoul.map(t => `
    <div style="background:rgba(255,255,255,0.04); border:1px solid var(--border-glass); border-radius:var(--radius-md); padding:1rem 1.2rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
      <div>
        <strong style="font-size:1.05rem; display:block;">${t.mode}</strong>
        <span style="color:var(--text-muted); font-size:0.88rem;">${t.note}</span>
      </div>
      <div style="text-align:right;">
        <span style="color:var(--accent-cyan); font-weight:700; font-size:1.1rem; display:block;">${t.duration}</span>
        <span style="color:var(--accent-gold); font-size:0.9rem;">${t.price}</span>
      </div>
    </div>
  `).join('');
}

// Helper Utilities
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
