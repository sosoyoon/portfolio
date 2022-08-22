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
    .to('.flex_bottom .flex_70 .dot',{ display:'none', stagger:3 },'a')
    .to('.flex_bottom .flex_70 .text',{ display:'block', stagger:3 },'a+=0.5')

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
    
      $('.color_box button').click(function(e){
        e.preventDefault();
        
        $(this).parent().addClass('active').siblings().removeClass('active');
    })
    

    $(window).scroll(function(){
        curScroll = $(this).scrollTop();
        target = $('.macOS .desc').offset().top;
        if(curScroll >= target){
            $('.battery .flex_30 .sub').addClass('active')
        }
    })

    $(window).scroll(function(){
        curScroll = $(this).scrollTop();
        target = $('.display_area .caption').offset().top;
        if(curScroll >= target){
            $('.true_tone').css('background', 'url(https://www.apple.com/v/macbook-pro-13/m/images/overview/truetone_warm_bg__gjhxib60wtua_large_2x.jpg').css('background-size', '100%')
        }
    })

})
