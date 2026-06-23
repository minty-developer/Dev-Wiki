import { wikiData } from "../Datas/WikiData.js";
import { ProData } from "../Datas/projectData.js";

let Data = [];
let Jc;

// 1. URL에서 쿼리 스트링(?id=0) 파라미터 가져오기
function getParamId() {
    // 현재 페이지의 URL 주소창 정보를 가져옵니다 (예: http://.../Detail.html?id=1)
    const params = new URLSearchParams(window.location.search);
    
    // 'id'라는 이름의 파라미터 값을 꺼냅니다. (문자열로 반환됨)
    const idString = params.get('id'); 

    Jc = idString[0];
    
    if(idString.startsWith("w")) {
        Data = wikiData;
    } else if (idString.startsWith("p")) {
        Data = ProData;
    } else {
        return null;
    }
    
    // 값이 없거나 숫자가 아니라면 null 반환, 있다면 숫자로 변환
    return idString ? idString : null;
}

// 2. ID에 매칭되는 데이터를 화면에 뿌려주는 함수
function renderDetailView(data) {
    const mainElement = document.querySelector('main');

    // 만약 매칭되는 데이터가 없다면 예외 처리
    if (!data) {
        mainElement.innerHTML = `
            <div class="error-container">
                <h2>문서를 찾을 수 없습니다.</h2>
                <p>올바르지 않은 접근이거나 삭제된 데이터입니다.</p>
            </div>
        `;
        return;
    }

    // 데이터가 있다면 <main> 태그 내부에 상세 내용 생성하기
    // (보내주신 데이터 구조인 item.title, item.text, item.tags 등을 활용)
    const tagsHtml = data.tags.map(tag => `<span class="detail-tag">#${tag}</span>`).join('');

    mainElement.innerHTML = `
        <article class="detail-article">
            <div class="detail-header">
                <span class="detail-emoji">${data.emoji}</span>
                <span class="detail-category">${data.category}</span>
            </div>
            <h1 class="detail-title">${data.title}</h1>
            <div class="detail-meta">
                <span>작성일: ${data.createdAt}</span>
                <span>수정일: ${data.updatedAt}</span>
            </div>
            <hr>
            <div class="detail-content">
                <p>${data.text}</p> 
            </div>
            <div class="detail-tags">
                ${tagsHtml}
            </div>
        </article>
    `;
}

// 코드 블록들을 찾아 복사 기능을 심어주는 함수
function setupCodeBlocks() {
    // 페이지 내의 모든 <code-block> 태그를 수집
    const codeBlocks = document.querySelectorAll('code-block');

    codeBlocks.forEach(block => {
        // 1. 기존에 들어있던 코드 텍스트 양 끝의 불필요한 공백 제거
        const originalCode = block.textContent.trim();
        block.textContent = originalCode; 

        // 2. 동적으로 복사 버튼 생성
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-btn');
        copyButton.textContent = '복사';

        // 3. 버튼 클릭 시 클립보드에 텍스트 복사하는 이벤트 연결
        copyButton.addEventListener('click', async () => {
            try {
                // 현대 브라우저의 클립보드 API 사용
                await navigator.clipboard.writeText(originalCode);
                
                // 복사 성공 시 버튼 시각 효과 주기
                copyButton.textContent = '✓ 완료!';
                copyButton.classList.add('copied');

                // 2초 후에 다시 원래 '복사' 버튼으로 되돌리기
                setTimeout(() => {
                    copyButton.textContent = '복사';
                    copyButton.classList.remove('copied');
                }, 2000);

            } catch (err) {
                console.error('코드 복사 실패:', err);
                alert('복사에 실패했습니다.');
            }
        });

        // 4. <code-block> 내부에 버튼 집어넣기
        block.appendChild(copyButton);
    });
}

// 3. 초기화 함수
function init() {
    const targetId = getParamId();

    if (targetId === null) {
        console.error("URL에 id 파라미터가 누락되었습니다.");
        renderDetailView(null);
        return;
    }

    // wikiData 배열에서 URL의 id와 데이터의 id가 일치하는 녀석을 딱 하나 찾음!
    const targetData = Data.find(item => Jc + item.id === targetId);

    // 찾은 데이터를 가지고 화면 그리기 호출
    renderDetailView(targetData);

    //코드 블록 생성
    setupCodeBlocks();
}

// 문서가 로드되면 실행
window.addEventListener('load', () => {
    init();
    console.log(Jc);
});