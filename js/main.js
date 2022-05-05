const bannerSwiper = new Swiper('.banner__slider', {
    slidesPerView: 1,
    spaceBetween: 35,
    speed: 800,
    navigation: {
        prevEl: '.banner__slider-arrow-prev',
        nextEl: '.banner__slider-arrow-next',
    },

    pagination: {
        el: '.banner__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
    },

    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true
    // },
});


const projectsrSwiper = new Swiper('.projects__slider', {
    // slidesPerView: 2.5,
    slidesPerView: "auto",
    centeredSlides: true,
    // centeredSlides: true,
    loop: true,
    speed: 800,
    navigation: {
        prevEl: '.projects__slider-arrow-prev',
        nextEl: '.projects__slider-arrow-next',
    },

    pagination: {
        el: '.projects__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
    },

    breakpoints: {

        769: {
            centeredSlides: false,
        }
    }
});



const proccesSwiper = new Swiper('.process__slider', {
    slidesPerView: 1,
    // slidesPerView: "auto",
    // centeredSlides: true,
    loop: true,
    speed: 800,
    navigation: {
        prevEl: '.process__slider-arrow-prev',
        nextEl: '.process__slider-arrow-next',
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true
    },

    // effect: "creative",
    // creativeEffect: {
    //   prev: {
    //     shadow: true,
    //     translate: [0, 0, -400],
    //   },
    //   next: {
    //     translate: ["100%", 0, 0],
    //   },
    // },

    pagination: {
        el: '.process__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
    },
});


const reviewsSwiper = new Swiper('.reviews__slider', {
    // slidesPerView: 2,
    slidesPerView: "auto",
    // centeredSlides: true,
    // loop: true,
    speed: 800,
    navigation: {
        prevEl: '.reviews__slider-arrow-prev',
        nextEl: '.reviews__slider-arrow-next',
    },

    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true
    // },

    pagination: {
        el: '.reviews__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
    },
});


const lineSwiper = new Swiper('.partners-line__slider', {
    slidesPerView: "auto",
    loop: true,
    speed: 800,
    // centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});



const awardsSwiper = new Swiper('.awards__slider', {
    slidesPerView: 1,
    speed: 800,
    navigation: {
        prevEl: '.awards__slider-arrow-prev',
        nextEl: '.awards__slider-arrow-next',
    },

    pagination: {
        el: '.awards__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
    },
});



const projectsSwiper = new Swiper('.banner-project__slider', {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    speed: 800,

    navigation: {
        prevEl: '.banner-project__slider-arrow-prev',
        nextEl: '.banner-project__slider-arrow-next',
    },

    pagination: {
        el: '.banner-project__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
    },
});
