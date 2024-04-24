# [starbucksKorea](https://siuhyun.github.io/starbucksKorea/)
![Mac Studio_starbusksKorea](https://github.com/siuhyun/starbucksKorea/assets/149446617/ebb2aaca-7f75-4efa-8aa9-8b75380799db)

## 🖥️ Summary
**StarbucksKorea를 클론 코딩한 웹사이트**입니다. 로그인 기능, 최상단 스크롤 버튼, 프로모션 영역 토글 기능, 자동 슬라이드 기능, 그리고 YouTube IFrame Player API를 생성하여 동영상 재생의 재생과 음소거 설정 후 재생되도록 하였습니다.

또한, 웹 페이지의 메타 태그의 스타일시트를 정의하는 것을 공부하여 웹 페이지가 소셜미디어에 공유될때 사용되는 메타 데이터를 정의했습니다.


## 🕰️ 개발 기간
* 24.02.22 - 24.03.22


##  📌 주요 기능

1. **스크롤 이벤트 처리**: 
    - 배지 숨기기/보이기: 페이지 스크롤이 일정 위치를 넘어서면 배지를 숨기고, 그렇지 않으면 보이게 구현했습니다.
    - 최상단으로 스크롤 버튼 보이기/숨기기: 페이지 스크롤이 일정 위치를 넘어서면 최상단으로 스크롤하는 버튼을 보이게 하고, 그렇지 않으면 숨겼습니다.
2. **자동 슬라이드 기능**: 
    - 공지사항 슬라이드: 공지사항이 위아래로 슬라이드하여 사용자에게 알림을 제공합니다.
    - 프로모션 슬라이드: 프로모션 콘텐츠가 좌우로 슬라이드되어 다양한 콘텐츠를 소개합니다.
    - 수상 내역 슬라이드: 수상 내역이 좌우로 슬라이드되어 사용자에게 보여집니다.
3. **하위 메뉴와 검색 기능**: 
    - 하위 메뉴: 로그인, 내 스타벅스, 고객 서비스 및 아이디어, 매장 찾기 등의 메뉴를 제공합니다.
    - 검색 기능: 사용자가 키워드를 입력하여 검색할 수 있는 기능을 제공합니다.
4. **부드러운 요소 애니메이션**: 
    - 요소의 나타남/사라짐: 페이지 스크롤이 일정 위치에 도달하면 요소를 부드럽게 나타나거나 사라지게 합니다.
    - 요소의 이동: 스크롤이나 버튼 클릭 등의 이벤트에 반응하여 요소를 부드럽게 이동시킵니다.


## 🤔 Background

이 웹사이트는 로그인 화면 구현을 학습하고, YouTube API 활용 및 페이지 스크롤에 따른 동작 구현을 연습하기 위해 제작되었습니다. 'scroll-spy'라는 javascript 라이브러리를 사용하여 화면에 보이는 여부를 판단하고 화면의 80% 지점에서 요소를 제어하였습니다.

사용자에게 동적인 화면을 제공하기 위해 Gsap 라이브러리를 사용하여 애니메이션을 처리하였습니다.

YouTube IFrame Player API를 비동기적으로 로드하였고, API 코드가 다운로드된 후에 **`<iframe>`** 요소와 YouTube 플레이어를 생성하여 지정된 영상이 재생되도록 설정하였습니다.

## 🔨 Technology Stack(s)

1. **JavaScript**:
    - 스크롤 이벤트 제어, DOM 요소 조작을 통해 HTML 요소를 선택하고 수정했습니다.
    - Gsap, Scroll-spy, Swiper, 로데시 라이브러리를 활용하여 애니메이션 효과, 화면 스크롤 제어 , 슬라이드 기능을 추가했습니다.
2. **HTML:**
    - 웹 페이지의 구조 정의와 로그인 페이지 생성 및 전환을 위해 사용했습니다.
3. **CSS:**
    - 웹 페이지의 디자인과 스타일링을 위해 레이아웃과 폰트, 이미지 크기 및 간격을 조정했습니다.
4. **Deployment:**
    - 코드의 버전관리와 배포로 git이 사용되었습니다.


