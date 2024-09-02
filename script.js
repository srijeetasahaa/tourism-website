//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;
let timeAutoNext = 4000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// swiper slider code

var TrandingSlider = new Swiper('.card-section-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 6.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
          updateBackgroundImage(this.realIndex);
        },
        init: function () {
          updateBackgroundImage(this.realIndex); // Initial load
        }
      }
  });

function updateBackgroundImage(index) {
    const allSlides = document.querySelectorAll('.swiper-slide');
    const activeSlide = allSlides[index];
  
    if (activeSlide) {
      const activeImageSrc = activeSlide.querySelector('img').src;
  
      // Update the background image of the main section
      document.querySelector('.card-main-section').style.backgroundImage = `url(${activeImageSrc})`;
      document.querySelector('.card-main-section').style.backgroundSize = 'cover';
      document.querySelector('.card-main-section').style.backgroundPosition = 'center';
    }
  }
//   for smooth scroll


document.getElementById('home').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// reponsive nagivation

const toggleBtn = document.querySelector ('.toggle-nav');
const dropDownMenu = document.querySelector ('.dropdown-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    
}