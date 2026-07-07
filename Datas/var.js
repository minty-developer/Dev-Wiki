/*
1. ⚙️ 프로젝트 메타데이터 (Project Metadata)
앱의 기본적인 정보나 버전 등 시스템 전체에서 공유하는 핵심 정보들이야. 지금 작성해 둔 Last_Version이 여기에 속해.

버전 정보, 앱 이름, 제작자 등
*/
const Dev = true;

export const ProjectMeta = Object.freeze({
    Last_Version: "v26.1.0.0",
    Title: "Dev-Wiki",
    Author: "Minty",
    link: Dev? "http://localhost:5500": "https://minty-developer.github.io/Dev-Wiki"
});

/*
2. 📝 UI 및 텍스트 상수 (UI & Text Constants)
알림창 메시지, 에러 메시지, 또는 화면에 고정적으로 출력되는 텍스트들을 모아두는 곳이야. 텍스트를 한 곳에서 관리하면 나중에 문구를 일괄 수정하거나 다국어를 지원할 때 아주 편해.

검색결과가 없을 때의 안내 문구, 기본 플레이스홀더, 버튼 텍스트 등
*/
export const UI_Constant = Object.freeze({
    // 
});

export const Text_Constant = Object.freeze({
    // 
});

/*
3. 🗂️ 초기 데이터 및 분류 기준 (Initial Data & Categories)
index.html에 있는 Projects, Sets 버튼이나 하단 태그 섹션(Sec_Tag)에 들어갈 기본 분류 값들을 배열로 관리하는 영역이야.

기본 태그 목록, 카테고리 종류 등
*/
export const Initial_Data = Object.freeze({
    A: ""
});

export const Categories = Object.freeze({
    A: ""
});

/*
4. 🛠️ 환경 및 동작 설정 (Environment & Behavior)
현재 상태가 개발 모드인지 운영 모드인지 구분하거나, 검색 결과를 한 번에 몇 개씩 보여줄지 같은 앱의 동작 방식을 결정하는 변수들이야.

디버그 모드 ON/OFF 플래그, 페이징 시 한 화면에 보여줄 아이템 최대 개수 등
*/
export const Environment = Object.freeze({
    Dev: true
});

export const Behavior = Object.freeze({
    A: ""
});