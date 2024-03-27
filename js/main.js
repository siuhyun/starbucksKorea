'use strict'

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
    // _.throttle(함수, 시간(ms)) => 스크롤이벤트할때, 스크롤 수를 제한하는 로데시 라이브러리
    console.log(scrollY);
    if(window.scrollY > 500) {
        //배지 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션); => 애니메이션
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
        // 버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        })
    }else {
        //배지보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
        // 버튼숨기기!
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
},300));

toTopEl.addEventListener('click', function () {
    //위치를 최상단으로 이동
    gsap.to(window, .7, {
        scrollTo: 0
    })
});

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});
new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: {
        delay : 5000
    },
    loop: true,
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
        nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    }
});
new Swiper('.awards .swiper', {
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev', // 이전 버튼
        nextEl: '.awards .swiper-next', // 다음 버튼
    },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion =!isHidePromotion //true
    if(isHidePromotion) {
        //숨김처리
        promotionEl.classList.add('hide');
    } else {
        //나타나기
        promotionEl.classList.remove('hide');
    }
});
//범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {  
    //`.toFixed()`를 통해 반환된 '문자 데이터'를, 
    //`parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floathingObject(selector, delay, size) {
    // gsap.to(요소,시간,옵션);
    gsap.to(
        selector, //선택자 
        random(1.5, 2.5), //애니메이션 동작 시간
        { //옵션
            y: size, //y축으로 얼마만큼 움직이며 애니메이션 처리 할 것인지
            repeat: -1, //무한반복
            yoyo: true,
            ease: "power1.inOut",
            delay: random(0, delay)
        }
    );
}
floathingObject('.floating1',1, 15);
floathingObject('.floating2',.5, 15);
floathingObject('.floating3',1.5, 20);

// 자바스크립트 라이브러리
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    //감시하려는 정보들, 
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook:.8 // 화면의 80% 지점에서 보여짐 여부 감시 판단
        })
        .setClassToggle(spyEl,'show') // 요소가 화면에 보이면 show
        .addTo(new ScrollMagic.Controller()); // 내부에 동작할 수 있도록
});

