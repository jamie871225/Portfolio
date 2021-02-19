$(document).ready(function(event){
    const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    speed:1800,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 3000,
    },
    });
    $(".dropdown").click(function(event){
        event.preventDefault();
        $(this).siblings().slideToggle(600);
        $(this).parent().siblings().find(".dropdown-close").slideUp(0);
    });
    $(".top a").click(function(event){
        event.preventDefault();
        $("html body").animate({
            scrollTop:0
        },700)
    });
});