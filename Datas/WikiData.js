import * as Vars from './Var.js';

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
        왜냐하면 요즘 프로그램들은 기본적으로 GCC를 데리고 다니기 때문이죠.<br>
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
    },
    {
        "id": 3,
        "title": "GCC 사용 방법",
        "desc": "gcc를 터미널에서 사용하는 방법",
        "text": `
        <small><strong>주의! 이 문서는 Window 11 기준입니다.</strong></small><br>
        <small><strong>또한 이 문서에 나오는 gcc 옵션들은 gcc 4.8부터 정상 인식하며,<br>-std=c++17은 gcc 7, -std=c++20은 gcc 10버전부터 지원됩니다.</strong></small><br><br>
        GCC을 활성화 했으면 써야겠죠?<br>
        이번엔 GCC 쓰는 방법을 간단하게 알아봅시다.<br>
        <br>
        우선 목차는 다음과 같습니다.<br>
        <ol>
            <a href='#--version'><li>--version</li></a>
            <a href='#-o'><li>-o</li></a>
            <a href='#-v'><li>-v</li></a>
            <a href='#-E'><li>-E</li></a>
            <a href='#-s'><li>-s</li></a>
            <a href='#-c'><li>-c</li></a>
            <a href='#-Wall'><li>-Wall</li></a>
            <a href='#-Wextra'><li>-Wextra</li></a>
            <a href='#-Werror'><li>-Werror</li></a>
            <a href='#-w'><li>-w</li></a>
            <a href='#-O0'><li>-O0</li></a>
            <a href='#-O1'><li>-O1</li></a>
            <a href='#-O2'><li>-O2</li></a>
            <a href='#-O3'><li>-O3</li></a>
            <a href='#-Os'><li>-Os</li></a>
            <a href='#-Ofast'><li>-Ofast</li></a>
            <a href='#-g'><li>-g</li></a>
            <a href='#-pg'><li>-pg</li></a>
            <a href='#-l'><li>-l</li></a>
            <a href='#-L'><li>-L</li></a>
            <a href='#-I'><li>-I</li></a>
            <a href='#-static'><li>-static</li></a>
            <a href='#-std'><li>-std</li></a>
            <a href='#-D'><li>-D</li></a>
            <a href='#-fPIC'><li>-fPIC</li></a>
            <a href='#-m64'><li>-m64</li></a>
            <a href='#-m32'><li>-m32</li></a>
        </ol>
        <br>
        그럼 바로 가보도록 하죠.
        <br>
        <h2 id='--version'>--version</h2>
        이 옵션은 <a href='${Vars.ProjectMeta.link}/Detail/Detail.html?id=w2'>GCC 설정</a>을 보고 오셨다면 익숙하실 텐데요, 다음과 같이 씁니다.
        <code-block>gcc --version</code-block>
        GCC의 현재 버전을 보여주고, 이걸 이용해서 GCC가 정상 작동한다는 것을 알 수 있죠.<br>
        <br>
        <h2 id='-o'>-o</h2>
        이 옵션은 컴파일의 결과물의 이름을 지어주는 옵션입니다.
        <code-block>gcc main.c -o Game.exe</code-block>
        만약 이 옵션을 지정하지 않으면 'a.확장자'로 나오게 됩니다.<br>
        <br>
        <h2 id='-v'>-v</h2>
        이 옵션은 컴파일 내용을 상세하게 출력합니다. (GCC의 버전도 확인할 수 있습니다.)
        <code-block>gcc -v main.c</code-block>
        <br>
        <h2 id='-E'>-E</h2>
        이 옵션은 컴파일의 정도를 제어하는데, 전처리기까지만 컴파일합니다.
        <code-block>gcc -E main.c</code-block>
        이 경우, 결과물의 확장자는 '.i'가 됩니다.<br>
        <br>
        <h2 id='-s'>-s</h2>
        이 옵션 또한 컴파일의 정도를 제어하는데, 컴파일까지만 컴파일합니다.
        <code-block>gcc -s main.c</code-block>
        이 경우, 결과물의 확장자는 '.s'가 됩니다.<br>
        <br>
        <h2 id='-c'>-c</h2>
        이 옵션도 컴파일의 정도를 제어하는데, 어셈블까지만 컴파일 합니다.
        <code-block>gcc -c main.c</code-block>
        이 경우, 결과물의 확장자는 '.o'가 됩니다.<br>
        또한, 이 옵션을 붙이면 링크를 하지 않습니다.<br>
        <br>
        <h2 id='-Wall'>-Wall</h2>
        이 옵션은 컴파일 중 경고를 찾으면 띄울 수 있게 하는데, 이 옵션을 넣고 컴파일 하는 것을 강력 추천합니다.
        <code-block>gcc -Wall main.c</code-block>
        이 옵션이 있으면 에러가 안 나는 프로그래밍의 오류를 쉽게 잡을 수 있습니다.<br>
        <br>
        <h2 id='-Wextra'>-Wextra</h2>
        이 옵션은 컴파일 중 경고를 찾으면 띄울 수 있게 하는데, 이 옵션은 -Wall보다 더 세세하게 보여줍니다.
        <code-block>gcc -Wextra main.c</code-block>
        이 옵션은 보통 복잡한 프로그래밍을 할 때 가끔 켜긴 하지만 보통 -Wall로 대부분 잡히는 편입니다.<br>
        <br>
        <h2 id='-Werror'>-Werror</h2>
        모든 경고를 에러로 취급하며, 경고가 하나라도 있으면 컴파일이 중단됩니다.
        <code-block>gcc -Werror main.c</code-block>
        매우 복잡한 코드나, 중요한 코드에서 쓰는 경우가 가끔 있습니다.<br>
        <br>
        <h2 id='-w'>-w</h2>
        모든 경고를 표시하며, 매우 복잡한 프로그램을 짤 때 사용하지만 매우 많은 경고가 뜨기 때문에 경고의 요점을 찾기 힘들 수도 있습니다.
        <code-block>gcc -w main.c</code-block>
        <br>
        <h2 id='-O0'>-O0</h2>
        이 옵션은 컴파일의 최적화를 제어하며, 아무 최적화도 하지 않습니다. (-O_ 옵션을 빼면 기본값으로 적용됩니다.)
        <code-block>gcc -O0 main.c</code-block>
        <br>
        <h2 id='-O1'>-O1</h2>
        이 옵션 또한 컴파일의 최적화를 제어하며, 컴파일 속도를 크게 떨어트리지 않는 선에서 최적화를 시행합니다.
        <code-block>gcc -O1 main.c</code-block>
        <br>
        <h2 id='-O2'>-O2</h2>
        이 옵션도 컴파일의 최적화를 제어하며, 코드 크기를 늘리지 않는 선에서 거의 모든 최적화를 시행합니다.
        <code-block>gcc -O2 main.c</code-block>
        보통 배포용으로 많이 쓰입니다.<br>
        <br>
        <h2 id='-O3'>-O3</h2>
        이 옵션도 컴파일의 최적화를 제어하며, 가장 강력한 최적화를 시행합니다.
        <code-block>gcc -O3 main.c</code-block>
        이 경우, 루프 전개를 사용하여 속도를 극대화 하지만, 파일 용량이 커질 수 있습니다.<br>
        <br>
        <h2 id='-Os'>-Os</h2>
        이 옵션도 컴파일의 최적화를 제어하며, 파일 크기를 최소화하며 최적화를 시행합니다.
        <code-block>gcc -Os main.c</code-block>
        보통 임베디드 환경에서 주로 쓰입니다.<br>
        <br>
        <h2 id='-Ofast'>-Ofast</h2>
        이 옵션도 컴파일의 최적화를 제어하며, -Os의 표준에 위배되는 빠른 연산(부동소수점의 수학 연산 등)까지 최적화 합니다.
        <code-block>gcc -Ofast main.c</code-block>
        <br>
        <h2 id='-g'>-g</h2>
        이 옵션은 디버깅 정보를 제어하며, 디버깅 정보를 포함해서 컴파일 합니다.
        <code-block>gcc -g main.c</code-block>
        이 경우, 에러가 난 소스코드의 위치를 볼 수 있습니다.<br>
        <br>
        <h2 id='-pg'>-pg</h2>
        이 옵션도 디버깅 정보를 제어하며, 프로파일링 도구인 gprof를 위한 정보를 포함합니다.
        <code-block>gcc -pg main.c</code-block>
        이 경우, 어느 함수가 가장 시간을 많이 쓰는지 알아볼 수 있습니다.<br>
        <br>
        <h2 id='-l'>-l&lt;library&gt;</h2>
        이 옵션은 라이브러리 및 링크를 제어하는 옵션입니다.<br>
        링크할 라이브러리를 지정할 때 쓰이며, 사용방법은 아래와 같습니다.<br>
        예) libmath.a를 링크하려는 경우
        <code-block>gcc main.c -lmath</code-block>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^~~~~</p>
        이름에서 lib과 확장자를 뺀 나머지를 입력합니다.<br>
        <br>
        <h2 id='-L'>-L&lt;dir&gt;</h2>
        이 옵션도 라이브러리 및 링크를 제어하는 옵션이며 라이브러리를 찾을 디렉토리 경로를 추가 합니다.
        <code-block>gcc main.c -L./libs</code-block>
        <br>
        <h2 id='-I'>-I&lt;dir&gt;</h2>
        이 옵션도 라이브러리 및 링크를 제어하는 옵션이며, 헤더 파일을 찾을 포함 디렉토리 경로를 추가합니다.
        <code-block>gcc -I./heads</code-block>
        <br>
        <h2 id='-static'>-static</h2>
        이 옵션 또한 라이브러리 및 링크를 제어하는 옵션이며,<br>
        공유 라이브러리가 아닌 정적 라이브러리를 강제로 결합하여 독립적인 실행파일을 만듭니다.<br>
        <code-block>gcc main.c -static</code-block>
        <br>
        <h2 id='-std'>-std=</h2>
        이 옵션은 언어 표준을 제어하는 옵션으로, 특정 C/C++ 표준 문법을 따르도록 강제합니다.
        <code-block>gcc main.c -std=c99</code-block>
        - C99 표준으로 컴파일
        <code-block>gcc main.c -std=c11</code-block>
        - C11 표준으로 컴파일
        <code-block>gcc main.c -std=gnu11</code-block>
        - GNU 확장 기능이 포함된 C11 표준으로 컴파일<br>
        (C++의 경우 -std=c++14와 같은 형태로 입력 가능)
        <br>
        <h2 id='-D'>-D&lt;macro&gt;</h2>
        소스 코드 내에 매크로를 외부에서 정의합니다.<br>
        (#define과 같은 효과)
        <code-block>gcc main.c -DDEBUG</code-block>
        위로 인해 #ifdef 구문이 활성화 될 수 있습니다.<br>
        <br>
        <h2 id='-fPIC'>-fPIC</h2>
        주로 리눅스에서 공유 라이브러리를 만들 때 사용하는 위치 독립코드 생성 옵션입니다.
        <code-block>gcc -fPIC main.c</code-block>
        <br>
        <h2 id='-m64'>-m64</h2>
        64비트 호환 코드로 컴파일합니다.
        <code-block>gcc -m64 main.c</code-block>
        <br>
        <h2 id='-m32'>-m32</h2>
        32비트 호환 코드로 컴파일 합니다.
        <code-block>gcc -m32 main.c</code-block>
        <br>
        <br>
        지금까지 gcc를 사용할 때 알아두면 좋은 옵션들을 알아봤습니다.
        이외에도 gcc는 수없이 많은 옵션들을 가지고 있으니 궁금하시다면 아래 명령어를 CommandPrompt에 입력해 보세요
        <code-block>gcc --help=common</code-block>
        <code-block>gcc --help=optimizers</code-block>
        <code-block>gcc --help=warnings</code-block>
        <br>
        그러면 여기까지입니다.<br>
        감사합니다.<br>
        <br>
        <br>
        `,
        "emoji": "⚙️",
        "category": "C/C++",
        "tags": ["C", "C++", "GCC", "컴파일러", "환경변수"],
        "keywords": ["gcc", "지씨씨", "컴파일러", "Compiler"],
        "createdAt": "2026-06-24",
        "updatedAt": "2026-06-24"
    },
];