document.addEventListener("DOMContentLoaded", function () {
  // tabs
  let tabsBtns = document.querySelectorAll('.tabs__btn');

  tabsBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      let id = this.getAttribute('data-tab');
      let content = document.querySelector('.tabs__wrapper[data-tab="' + id + '"]');

      this.closest('.tabs__box').querySelector('.tabs__btn.active').classList.remove('active');
      this.classList.add('active');

      this.closest('.tabs').querySelector('.tabs__wrapper.active').classList.remove('active');
      content.classList.add('active');
    });
  });

  // slider
  const swiper = new Swiper('.slider', {
    loop: true,
    speed: 400,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },
      520: {
        slidesPerView: 2,
      },
      720: {
        slidesPerView: 2.5,
      },
      920: {
        slidesPerView: 3.5,
      },
      1120: {
        slidesPerView: 4.5,
      },
      1366: {
        spaceBetween: 40,
        slidesPerView: 5,
        centeredSlides: false,
      },
    },
  });

  // fullscreen
  function fullscreenMode() {
    let slider = document.querySelector('.slider');
    if (window.innerHeight == screen.height) {
      slider.classList.add('fullscreen');
    } else {
      if (slider.classList.contains('fullscreen')) {
        slider.classList.remove('fullscreen');
      }
    }
  };

  fullscreenMode();
  window.addEventListener('resize', fullscreenMode);

  // Gallery
  lightGallery(document.querySelector('.slider__wrapper'), {
    speed: 500,
    mobileSettings: {
      controls: true,
    },
  });

  let flag = true;
  let galleryDescription = document.querySelector('.lg-sub-html');

  function showDetailText() {
    if (window.innerWidth <= 991) {
      if (flag == true) {
        this.classList.add('active');
        document.querySelector('.lg-components').insertAdjacentHTML('afterend', '<span class="slider__hide"></span>');
        flag = false;

        let btn = document.querySelector('.slider__hide');
        btn.addEventListener('click', function () {
          galleryDescription.classList.remove('active');
          this.remove();
          flag = true;
        });
      };
    } else {
      galleryDescription.classList.remove('active');
      let btn = document.querySelector('.slider__hide');
      if (btn) {
        btn.remove();
      };
      flag = true;
    };
  };

  galleryDescription.addEventListener('click', showDetailText);
  window.addEventListener('resize', showDetailText);
});