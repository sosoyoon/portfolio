// 글자
visualTl = gsap.timeline({
    defaults:{
        duration:0.5,
    }
})
visualTl.addLabel('label1')
.from('.sc_visual .sc_title' ,{y:100, opacity:0, duration: 1.5}, 'label1+=0.5')
.from('.sc_visual .sc_sub' ,{y:100, opacity:0, duration: 1.5}, 'label1+=0.7')
.from('.sc_visual .inner01 .text_box .sc_desc' ,{y:100, opacity:0, duration: 1.5}, 'label1+=0.9')
  .from('.m2_box' ,{y:100, opacity:0, duration: 1.5}, 'label1+=1.1')
  .from('.price_box' ,{y:100, opacity:0, duration: 1.5}, 'label1+=1.3')
  
  
$(function(){
// 모바일메뉴
$('.m_menu').click(function(e){
    e.preventDefault();
    if(
        $('.menu_list').css('display') == 'none')
        {
        $('.menu_list').stop().slideDown().css('display', 'block');
        $('.dimmed').addClass('active').css('opacity', '1');
        $('body').css('overflow', 'hidden')
        $('.m_header_top .cart_area').css('display', 'none')
    }
    else{
        $('.dimmed').removeClass('active')
        $('body').css('overflow', 'unset')
        $('.m_header_top .cart_area').css('display', 'block')
        $('.menu_list').stop().slideUp().css('display', 'none')
    }
})

    
// 검색버튼
    $('.btn_search').click(function(e){
        e.preventDefault();
        gsap.to(".link_main img, .nav_area .nav_item a", {
            opacity: 0, 
            x: -100, 
            display: 0,
            duration: 0.3
          });
    })
    $('.close').click(function(e){
        e.preventDefault();
        gsap.to(".link_main img, .nav_area .nav_item a", {
            opacity: 0.8, 
            x: 0, 
            display: 0,
            duration: 0.3
          });
    })


// 장바구니
$('.cart_area').click(function(e){
    e.preventDefault();
    if($('.cart_box').css('display') == 'none'){
        $('.cart_box, .tri').addClass('active');
        $('.dimmed').addClass('active');
    }else{
        $('.cart_box, .tri').removeClass('active');
        $('.dimmed').removeClass('active');
    }
})


// 모바일개요
$('.m_arrow').click(function(e){
    e.preventDefault();
    if($('.m_wrap').css('display') == 'none'){
        $(this).children('.arrow_box').addClass('active');
        $('.m_wrap').css('display', 'block').stop().slideDown()
    }else{
        $('.m_wrap').css('display', 'none').stop().slideUp()
        $(this).children('.arrow_box').removeClass('active');
    }
})

// 모바일메뉴bg
$('.dimmed').click(function(e){
    e.preventDefault();
        $(this).removeClass('active')
        $('.cart_box').removeClass('active')
        $('.menu_list').stop().slideUp().css('display', 'none')
        $('.m_header_top .cart_area').css('display', 'block')
        $('.m_header_top .cart_area').css('display', 'block')
})

// 헤더고정
      let lastScroll = 0;
      $(window).scroll(function(){
        curScroll = $(this).scrollTop();
        target = $('.header_center').offset().top;
        if(curScroll > lastScroll){
            $('.header_center').addClass('show').removeClass('hide')
        }else if(curScroll == lastScroll){
            $('.header_center').removeClass('show').removeClass('hide')
        }
        else{
            $('.header_center').addClass('hide').removeClass('show')
        }
    })
    
// 그래프
    const firstBar = gsap.timeline({})
    firstBar.addLabel('a')
    .from('#m1_tab1 .bar_m2',{width:'0%'},'a')
    .from('#m1_tab1 .bar_m1',{width:'0%'},'a')
    ScrollTrigger.create({
        trigger:".inner02",
        start:"0 45%",
        end:"bottom 0",
        // markers:true,
        animation:firstBar
    })
    const secBar = gsap.timeline({})
    secBar.addLabel('a')
    .from('#intel_tab1 .bar_m2',{width:'0%'},'a')
    .from('#intel_tab1 .bar_m1',{width:'0%'},'a')
    ScrollTrigger.create({
        trigger:".graph_box",
        start:"top 2%",
        end:"bottom 0",
        // markers:true,
        animation:secBar
    })
    
    $('.btn_graph').click(function(e){
        e.preventDefault();
        let event = $(this).data('target')
        
        $(this).addClass('active').siblings().removeClass('active');
        $(event).addClass('active').siblings().removeClass('active');
       
        
        m2 = $(event).find('.bar_m2');
        m1 = $(event).find('.bar_m1');
        gsap.from(m2,{width:'0%'})
        gsap.from(m1,{width:'0%'})
    })

// 보안
    textAni = gsap.timeline({
        scrollTrigger:{
            trigger:".secu",
            start:"top 40%",
            end:"bottom 100%",
            duration: 5,
            // markers:true,
            scrub:1,
        }
    })
    textAni.addLabel('a')
    .to('.flex_bottom .secu .dot',{ display:'none', stagger:3 },'a')
    .to('.flex_bottom .secu .text',{ display:'block', stagger:3 },'a+=0.5')

// 이미지 페이드
    $('[data-fade]').each(function(i,e){ 
        gsap.from(e, 1.2,{
            scrollTrigger:{
              trigger:e,
              start:"top 90%", 
              end:"bottom top", 
            },
            opacity: 0.2,
            y:0,
            // markers:true,
          })
      })
    
// 색상 선택
    $('.color_box button').click(function(e){
        e.preventDefault();
        
        $(this).parent().addClass('active').siblings().removeClass('active');
    })
    
// 배터리 글자 차오르는 효과
    $(window).scroll(function(){
        curScroll = $(this).scrollTop();
        target = $('.macOS .desc').offset().top;
        if(curScroll >= target){
            $('.battery .flex_30 .sub').addClass('active')
        }
    })

// 조명 배경 전환
    $(window).scroll(function(){
        curScroll = $(this).scrollTop();
        target = $('.display_area .caption').offset().top;
        if(curScroll >= target){
            $('.true_tone').css('background', 'url(https://www.apple.com/v/macbook-pro-13/m/images/overview/truetone_warm_bg__gjhxib60wtua_large_2x.jpg').css({'background-size': '100%', 'background-repeat':'no-repeat', 'background-position':'bottom','background-color': '#151516'})
        }
    })

// footer 메뉴
    $('.footer_wrap').click(function(e){
        e.preventDefault();
        if(
            $(this).children('.footer_item').css('display') == 'none')
            {
            $(this).children('.footer_item').stop().slideDown().css('display', 'block');
            $(this).children('.footer_menu').addClass('active').css('color', '#FFF');
        }
        else{
            $(this).children('.footer_menu').removeClass('active').css('color', '#86868b')
            $(this).children('.footer_item').stop().slideUp().css('display', 'none')
        }
    })
})
