
var swiper = new Swiper(".sc_banner .swiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".banner-pagination",
        type: "custom",
        renderCustom:function(swiper, current, total){
            return `<span class="curr">${current}</span>/${total}`

        }
      },
    navigation: {
        nextEl: ".sc_banner .swiper-button-next",
        prevEl: ".sc_banner .swiper-button-prev",
      },
  });

var swiper = new Swiper(".content.swiper", {
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
var swiper = new Swiper(".group01.swiper", {
slidesPerView: 6,
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

var swiper = new Swiper(".swiper.group02", {
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

var swiper = new Swiper(".goods_area.swiper", {
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

var swiper = new Swiper(".group03.swiper", {
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
    $('.tab_box a').click(function(e){
        e.preventDefault();

        target = $(this).data('target')

        $(this).addClass('active').siblings().removeClass('active')
        $(target).addClass('active').siblings().removeClass('active')
    })

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
            $('.container').css('padding-top', '60px')
        }else if(curScroll == lastScroll){
            $('.menu_area').removeClass('show').removeClass('hide')
            $('.container').css('padding-top', '0')
        }
        else{
            $('.menu_area').addClass('hide').removeClass('show')
        }
    })
    $('.menu_list , .category_box, .category_title > .link_category, .category_list').mouseenter(function(){ 
        $('.category_box').show()
    });
    $('.menu_list, .category_box, .category_title > .link_category, .category_list').mouseleave(function(){ 
        $('.category_box').hide()
    });
    $('.category_title').mouseenter(function(){ 
        $(this).children('.category_list').addClass('active')
    });
    $('.category_title').mouseleave(function(){ 
        $(this).children('.category_list').removeClass('active')
    });
    
})