// // 글자
// visualTl = gsap.timeline({
//     defaults:{
//         duration:0.5,
//     }
// })
// visualTl.addLabel('label1')
// // .from('.sc_visual .sc_title' ,{y:100, opacity:0, duration: 1.5}, 'label1+=0.5')
// // .from('.sc_visual .sc_sub' ,{y:100, opacity:0, duration: 1.5}, 'label1+=0.7')
// .from('.sc_visual .inner01 .text_box .sc_desc' ,{y:100, opacity:0, duration: 1.5}, 'label1+=0.9')
//   .from('.m2_box' ,{y:100, opacity:0, duration: 1.5}, 'label1+=1.1')
//   .from('.price_box' ,{y:100, opacity:0, duration: 1.5}, 'label1+=1.3')
  
  
$(function(){
// arrow
$('.button_box').mouseenter(function(){
    $(this).find('.arrow .first').animate({
        left: "100%",
        top: "0"
    })
    $(this).find('.arrow .second').animate({
        left: "50%",
        bottom: "50%",
    })
    $(this).find('.arrow').css({'border' : 'none', 'background' : '#F4FD6B'});
})
    
// // 검색버튼
//     $('.btn_search').click(function(e){
//         e.preventDefault();
//         gsap.to(".link_main img, .nav_area .nav_item a", {
//             opacity: 0, 
//             x: -100, 
//             display: 0,
//             duration: 0.3
//           });
//         $('.search_box, .curtain').addClass('active');
//     })
//     $('.close').click(function(e){
//         e.preventDefault();
//         gsap.to(".link_main img, .nav_area .nav_item a", {
//             opacity: 0.8, 
//             x: 0, 
//             display: 0,
//             duration: 0.3
//           });
//         $('.search_box, .curtain').removeClass('active');
//     })


// // 장바구니
// $('.cart_area').click(function(e){
//     e.preventDefault();
//     if($('.cart_box').css('display') == 'none'){
//         $('.cart_box, .tri').addClass('active');
//     }else{
//         $('.cart_box, .tri').removeClass('active');
//     }
// })
// // $('.container').click(function(e){
// //     if( !$('.cart_box, .tri').has(e.target).length ) $('.cart_box, .tri').hide();
// // });

// // 헤더고정
//       let lastScroll = 0;
//       $(window).scroll(function(){
//         curScroll = $(this).scrollTop();
//         target = $('.header_center').offset().top;
//         if(curScroll > lastScroll){
//             $('.header_center').addClass('show').removeClass('hide')
//         }else if(curScroll == lastScroll){
//             $('.header_center').removeClass('show').removeClass('hide')
//         }
//         else{
//             $('.header_center').addClass('hide').removeClass('show')
//         }
//     })
    
// // 그래프
//     const firstBar = gsap.timeline({})
//     firstBar.addLabel('a')
//     .from('#m1_tab1 .bar_m2',{width:'0%'},'a')
//     .from('#m1_tab1 .bar_m1',{width:'0%'},'a')
//     ScrollTrigger.create({
//         trigger:".inner02",
//         start:"0 45%",
//         end:"bottom 0",
//         // markers:true,
//         animation:firstBar
//     })
//     const secBar = gsap.timeline({})
//     secBar.addLabel('a')
//     .from('#intel_tab1 .bar_m2',{width:'0%'},'a')
//     .from('#intel_tab1 .bar_m1',{width:'0%'},'a')
//     ScrollTrigger.create({
//         trigger:".graph_box",
//         start:"top 2%",
//         end:"bottom 0",
//         // markers:true,
//         animation:secBar
//     })
    
//     $('.btn_graph').click(function(e){
//         e.preventDefault();
//         let event = $(this).data('target')
        
//         $(this).addClass('active').siblings().removeClass('active');
//         $(event).addClass('active').siblings().removeClass('active');
       
        
//         m2 = $(event).find('.bar_m2');
//         m1 = $(event).find('.bar_m1');
//         gsap.from(m2,{width:'0%'})
//         gsap.from(m1,{width:'0%'})
//     })

// // 보안
//     textAni = gsap.timeline({
//         scrollTrigger:{
//             trigger:".secu",
//             start:"top 40%",
//             end:"bottom 100%",
//             duration: 5,
//             // markers:true,
//             scrub:1,
//         }
//     })
//     textAni.addLabel('a')
//     .to('.flex_bottom .flex_70 .dot',{ display:'none', stagger:3 },'a')
//     .to('.flex_bottom .flex_70 .text',{ display:'block', stagger:3 },'a+=0.5')

// // 이미지 페이드
//     $('[data-fade]').each(function(i,e){ 
//         gsap.from(e, 1.2,{
//             scrollTrigger:{
//               trigger:e,
//               start:"top 90%", 
//               end:"bottom top", 
//             },
//             opacity: 0.2,
//             y:0,
//             // markers:true,
//           })
//       })
    
// // 색상 선택
//     $('.color_box button').click(function(e){
//         e.preventDefault();
        
//         $(this).parent().addClass('active').siblings().removeClass('active');
//     })
    
// // 배터리 글자 차오르는 효과
//     $(window).scroll(function(){
//         curScroll = $(this).scrollTop();
//         target = $('.macOS .desc').offset().top;
//         if(curScroll >= target){
//             $('.battery .flex_30 .sub').addClass('active')
//         }
//     })

// // 조명 배경 전환
//     $(window).scroll(function(){
//         curScroll = $(this).scrollTop();
//         target = $('.display_area .caption').offset().top;
//         if(curScroll >= target){
//             $('.true_tone').css('background', 'url(https://www.apple.com/v/macbook-pro-13/m/images/overview/truetone_warm_bg__gjhxib60wtua_large_2x.jpg').css({'background-size': '100%', 'background-repeat':'no-repeat', 'background-position':'bottom','background-color': '#151516'})
//         }
//     })

})
