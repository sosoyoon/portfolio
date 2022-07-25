// $(function(){
//     $(window).scroll(function(){
//         curScroll = $(this).scrollTop();
//         if(curScroll >= lastScroll){
//             $('.menu_area').css({"position": "fixed", "top":"0", "left":"0"}).stop().slideDown();
//         }else{
//             $('.menu_area').css('display', 'none').stop().slideUp();
//         }
//         lastScroll = curScroll;
//     })
// })



var swiper = new Swiper(".sc_banner.swiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

var swiper = new Swiper(".group01.swiper", {
slidesPerView: 4.5,
spaceBetween: 30,
freeMode: true,
scrollbar: {
    el: ".swiper-scrollbar",
    },
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper(".group03.swiper", {
slidesPerView: 6,
spaceBetween: 30,
freeMode: true,
scrollbar: {
    el: ".swiper-scrollbar",
    },
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper(".group04.swiper", {
slidesPerView: 3,
spaceBetween: 10,
freeMode: true,
scrollbar: {
    el: ".swiper-scrollbar",
    },
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper(".group06.swiper", {
slidesPerView: 6.2,
spaceBetween: 12,
freeMode: true,
scrollbar: {
    el: ".swiper-scrollbar",
    },
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper(".group07.swiper", {
    slidesPerView: 3.7,
    spaceBetween: 4,
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

$(function(){
    $('.edit_img a').click(function(e){
        e.preventDefault();

        target = $(this).data('target');

        $(this).addClass('active').siblings().removeClass('active');
        $(target).addClass('active').siblings().removeClass('active');
    })
    let lastScroll = 0;

    $(window).scroll(function(){
        curScroll = $(this).scrollTop();
        target = $('.menu_area').offset().top;
        if(curScroll > lastScroll){
            $('.menu_area').addClass('show').removeClass('hide')
            $('.container').css('padding-top', '65px')
        }else if(curScroll == lastScroll){
            $('.menu_area').removeClass('show').removeClass('hide')
            $('.container').css('padding-top', '0')
        }
        else{
            $('.menu_area').addClass('hide').removeClass('show')
        }
    })
})