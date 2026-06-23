import { wikiData } from "../Datas/WikiData.js";

const wikiContainer = document.getElementById("Cards");
const searchInput = document.getElementById('search-input');
const categoryButtons = document.querySelectorAll('.category-btn');

const filterState = {
    searchQuery: '',
    currentCategory: 'All'
};

// 데이터를 받아 화면에 렌더링하는 함수
function renderWikiList(dataArray) {
    if (dataArray.length === 0) {
        wikiContainer.innerHTML = '<p style="color:#999; text-align:center; padding:20px;">검색 결과가 없습니다.</p>';
        return;
    }

    const htmlTemplate = dataArray.map(item => {
        const tagsHtml = item.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
        return `
        <a href='${Vars.ProjectMeta.link}/Detail/Detail.html?id=w${item.id}'>
            <article class="wiki-card" data-id="${item.id}">
                <div class="card-header">
                    <span class="emoji">${item.emoji}</span>
                    <span class="category">${item.category}</span>
                </div>
                <h3>${item.title}</h3>
                <p class="desc">${item.desc}</p>
                <div class="tags-group">
                    ${tagsHtml}
                </div>
            </article>
        </a>
        `;
    }).join('');

    wikiContainer.innerHTML = htmlTemplate;
}

function updateFilteredResults() {
    const { searchQuery, currentCategory } = filterState;

    const filteredData = wikiData.filter(item => {
        // 2-1. 카테고리 필터링
        const matchesCategory = (currentCategory === 'All' || item.category === currentCategory);

        // 2-2. 검색어 필터링 (소문자 변환하여 대소문자 구분 없이 검색 가능하게)
        const query = searchQuery.toLowerCase().trim();
        
        // 제목, 본문, 태그 배열, 키워드 배열 전체에서 검색어 포함 여부 확인
        const matchesSearch = 
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query)) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(query));

        return matchesCategory && matchesSearch;
    });

    // 걸러진 데이터만 다시 화면에 그리기
    renderWikiList(filteredData);
}

function setupEventListeners() {
    // 검색창 입력 이벤트 ('input'은 글자가 바뀔 때마다 실시간 실행됨)
    searchInput.addEventListener('input', (e) => {
        filterState.searchQuery = e.target.value;
        updateFilteredResults();
    });

    // 카테고리 탭 클릭 이벤트
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
        // 이전 active 클래스 제거하고 클릭된 버튼에 부여
        categoryButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        // 상태 업데이트 및 결과 갱신
        filterState.currentCategory = e.target.dataset.category;
        updateFilteredResults();
        });
    });
}

function init() {
  renderWikiList(wikiData);
  setupEventListeners();
}

window.addEventListener('load', () => {
    init();
})
