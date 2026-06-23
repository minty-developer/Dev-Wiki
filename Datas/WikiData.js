export const wikiData = [
    {
        "id": 1,
        "title": "GCC 설치",                       // 제목
        "desc": "gcc를 설치하는 방법",               // 미리보기 텍스트
        // 실제 텍스트
        "text": `
        <small><strong>주의! 이 문서는 Window 11 기준입니다.</strong></small><br>
        오늘은 GCC를 직접 깔아 볼겁니다.<br>
        <br>
        <strong>여기서 잠깐! GCC를 왜 깔아야 하나요?</strong><br>
        사실 요즘은 GCC 깔기가 필수는 아닙니다.<br>
        왜냐하면 요즘 프로그램들은 기본적으로 GCC를 대리고 다니기 때문이죠.<br>
        하지만, GCC를 깔면 무려 <strong>Command Prompt</strong>에서 GCC를 쓸 수 있게 됩니다.<br>
        그러면 C언어를 컴퓨터 어디서든 컴파일 할 수 있게 되는 거죠.<br>
        그러면 서론은 여기까지로 하고, 바로 설치를 해 보도록 하겠습니다.<br>
        <br>
        1. 일단 다음 링크로 들어가 줍니다.<br>
        <a href='https://sourceforge.net/projects/mingw/'>https://sourceforge.net/projects/mingw/</a><br>
        2. 그러면 아마 다음 화면이 뜰겁니다.<br>
        <img src='../Datas/Assets/image/GCC_install/1.png'>
        3. 중간에서 왼쪽에 초록색 버튼을 눌러준 뒤, <strong>5초 정도를 기다려 줍니다.</strong>
        <img src='../Datas/Assets/image/GCC_install/2.png'>
        4. 그 다음, 설치 파일을 실행해 줍니다.
        <img src='../Datas/Assets/image/GCC_install/3.png'>
        5. 그러면 다음 화면이 뜹니다.
        <img src='../Datas/Assets/image/GCC_install/4.png'>
        6. 여기서 설치하고 싶은 패키지를 선택 합니다.<br>
        (저는 gcc와 g++을 모두 쓸 것이기 때문에 모두 선택해 줄겁니다. 여러분은 필요한 것을 설치해 주세요.)
        <img src='../Datas/Assets/image/GCC_install/5.png'>
        7. 그다음 'Mark for Installation'을 눌러서 체크를 해 줍니다.<br>
        (설치 하고 싶은 것이 더 남았다면 6번으로 돌아갑니다.)<br>
        <img src='../Datas/Assets/image/GCC_install/6.png'>
        8. 그 다음 왼쪽 위 메뉴에서 'Installation' -> 'Apply Changes'를 눌러서 설치해 줍니다.
        <img src='../Datas/Assets/image/GCC_install/7.png'>
        9. 그 다음 다시 Apply를 눌러 줍니다.
        <img src='../Datas/Assets/image/GCC_install/8.png'>
        10. 설치 패키지 개수에 따라 다르겠지만 저는 4분에서 5분 정도 걸린 것 같네요.<br>
        11. 이제 Close를 눌러 줍니다.<br>
        12. 이제 GCC 설치가 끝났습니다!!<br>
        <br>
        <small><em><strong>주의! MinGW는 GCC 설정을 따로 해주셔야 합니다.</strong></em></small><br>
        <a href='/Detail/Detail.html?id=1'>GCC 설정으로 넘어가기</a>
        <br>
        <br>
        `,
        "emoji": "⚙️",                                      // 카드에 표시될 대표 이모지
        "category": "C/C++",                                 // 대분류 카테고리
        "tags": ["C", "C++", "GCC", "컴파일러", "환경변수"],    // 태그 섹션과 연동할 태그 배열
        "keywords": ["gcc", "지씨씨", "컴파일러", "Compiler"],  // 검색어 확장용 키워드
        "createdAt": "2026-06-08",                            // 작성일 (정렬용)
        "updatedAt": "2026-06-08"                             // 수정일
    },
    {
        "id": 1,
        "title": "GCC 연결",
        "desc": "gcc를 터미널에 연결하는 방법",
        "text": `
        <small><strong>주의! 이 문서는 Window 11 기준입니다.</strong></small><br>
        MinGW로 GCC를 깔면 환경변수 설정이 복잡하고,<br>
        그렇다고 MSYS2 UCRT 64를 쓰기엔 호환성이 걱정되시나요?<br>
        지금 MinGW 환경변수 설정법, 한 번에 깔끔하게 알려 드리겠습니다!<br>
        <a href="/Detail/Detail.html?id=1">GCC 설치</a><br>
        <br>
        그러면 바로 가봅시다.<br>
        <br>
        1. 일단 Window 검색창에 다음을 타자해 봅시다. <code-block>시스템 환경 변수 편집</code-block>
        <img src='../Datas/Assets/image/GCC_set/1.png'>
        2. 그 다음 첫 번째에 나오는 것을 누르면 다음 창이 열리게 됩니다.
        <img src='../Datas/Assets/image/GCC_set/2.png'>
        3. 그 다음 아래 보이는 '환경 변수(N)...'을 눌러 줍니다.
        <img src='../Datas/Assets/image/GCC_set/3.png'>
        여기까지 하셨으면 다 오신 겁니다.<br>
        4. 이제 '시스템 변수(S)' 안에 있는 값들 중, 변수가 Path인 것을 찾아 줍니다.
        <img src='../Datas/Assets/image/GCC_set/4.png'>
        5. 이제 이 창은 잠시 치워 주고, 아래 경로로 들어갑니다.<br>
        (만약 gcc.exe가 다른 파일에 있다면 그 파일이 있는 폴더의 경로로 들어가 줍니다.)
        <code-block>C:\\MinGW\\bin</code-block>
        <img src='../Datas/Assets/image/GCC_set/5.png'>
        6-1. 이 폴더 안에 'gcc.exe'가 있다면 이제 폴더주소를 복사하거나 위 경로를 복사해 줍니다.<br>
        6-2. 만약 이 폴더 안에 없다면, 'gcc.exe'가 있는 폴더로 가서 그 폴더의 주소를 복사해 주세요.  (예: C\\GCC\\MinGW\\bin)<br>
        7. 이제 다시 아까 치워뒀던 창을 열어주고요.
        8. '편집(I)...'을 누릅니다.
        9. 그 다음 '새로 만들기(N)...'를 누릅니다.
        <img src='../Datas/Assets/image/GCC_set/6.png'>
        10. 마지막으로, 아까 복사한 경로를 넣어 주시고.
        <img src='../Datas/Assets/image/GCC_set/7.png'>
        11. '확인' -> '확인' -> '확인'을 눌러서 창을 모두 꺼주시면 완성입니다!!<br>
        <br>
        자 그러면 확인 해 볼게요.<br>
        <br>
        1. Window 검색창에 다음을 타자해 봅시다.
        <code-block>cmd</code-block>
        <img src='../Datas/Assets/image/GCC_set/8.png'>
        2. 그러고 첫 번째에 나오는 것을 누르면 다음 창이 열리게 됩니다.
        <img src='../Datas/Assets/image/GCC_set/9.png'>
        3. 그 다음에 다음의 명령어를 타자해 줍니다.
        <code-block>gcc --version</code-block>
        4. Enter키를 눌러서 다음 화면이 나오면 성공!!
        <img src='../Datas/Assets/image/GCC_set/10.png'>
        <br>
        지금까지 GCC 설정법을 알아 봤고요, 혹시 모르는 게 생기시면 <a href='/Help/Help.html#Discord'>여기</a>로 알려 주세요!<br>
        <br>
        <br>
        `,
        "emoji": "⚙️",
        "category": "C/C++",
        "tags": ["C", "C++", "GCC", "컴파일러", "환경변수"],
        "keywords": ["gcc", "지씨씨", "컴파일러", "Compiler"],
        "createdAt": "2026-06-23",
        "updatedAt": "2026-06-23"
    }
];