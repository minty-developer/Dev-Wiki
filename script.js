//Made With Gemini

import * as Data from './Datas/WikiData.js';
import * as Def from './Default/Default.js';
import * as Vars from './Datas/var.js';

const searchInput = document.getElementById("Inp_Search");
const searchBtn = document.getElementById("Btn_Search");
const resultSec = document.getElementById("Sec_Result");

// 검색 실행 함수
function renderSearchResult() {
    const keyword = searchInput.value.trim().toLowerCase();
    if (keyword.length === 0) {
        resultSec.innerHTML = `<p style="padding: 20px;">검색어가 입력되지 않았습니다.</p>`;
        return;
    }

    // 1. 데이터 필터링
    const filteredData = Data.wikiData.filter(item =>
        item.title.toLowerCase().includes(keyword)
    );

    // 2. 화면 초기화
    resultSec.innerHTML = "";

    // 3. 결과 렌더링
    if (filteredData.length === 0) {
        resultSec.innerHTML = `<p style="padding: 20px;">'${keyword}'에 대한 검색 결과가 없습니다.</p>`;
        return;
    }

    filteredData.forEach(item => {
        const card = document.createElement("div");
        // CSS에서 .result-card { border: 1px solid #ccc; margin: 10px; padding: 15px; } 등으로 꾸며주면 됨
        card.className = "result-card";
        card.id = `Div_Card_${item.id}`;
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        resultSec.appendChild(card);
    });
}

// 검색 버튼 클릭 이벤트 연결
searchBtn.addEventListener('click', renderSearchResult);

// 검색창에서 엔터(Enter) 키를 눌렀을 때 검색 실행하기
searchInput.addEventListener('keydown', (event) => {
    // 눌린 키가 'Enter'인지 확인
    if (event.key === 'Enter') {
        // 기본 동작 방지 (선택 사항: input 안에서 엔터 칠 때 폼 제출로 인한 새로고침 방지용)
        event.preventDefault();

        // 아까 만든 검색 실행 함수 호출
        renderSearchResult();
    }
});

// [--- 카드 클릭 시 WikiData에서 id로 데이터 매칭하기 ---]
Def.S_R.addEventListener('click', ({ target }) => {
    // 1. 클릭된 요소에서 가장 가까운 .result-card 클래스를 가진 부모 태그를 찾습니다.
    const card = target.closest(".result-card");

    // 2. 만약 카드 내부가 올바르게 클릭되었다면
    if (card) {
        // card.id 예시: "Div_Card_1" -> 여기서 "Div_Card_"를 지우고 숫자(ID)만 추출합니다.
        const wikiId = parseInt(card.id.replace("Div_Card_", ""), 10);

        // 3. WikiData.js의 데이터 배열에서 id가 일치하는 객체를 검색합니다.
        const clickedData = Data.wikiData.find(item => item.id === wikiId);

        // 4. 데이터를 성공적으로 찾았을 때의 처리
        if (clickedData) {
            console.log("찾은 위키 데이터:", clickedData);

            // 💡 [선택 1] 상세 페이지(Detail)로 이동하면서 ID를 전달하고 싶을 때 (Query String 사용)
            location.href = `${Vars.ProjectMeta.link}/Detail/Detail.html?id=${clickedData.id}`;

            // 💡 [선택 2] 다른 화면에서 쓰도록 로컬 스토리지에 임시 저장하고 싶을 때
            // localStorage.setItem("selectedWiki", JSON.stringify(clickedData));
        }
    }
});