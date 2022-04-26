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
});