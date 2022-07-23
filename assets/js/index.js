var swiper = new Swiper(".sc_architectuur .swiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// gsap.to() 후
// gsap.form() 전
// gsap.fromTo() 전후

// gsap.from('.intro01' ,{x:-100})
// gsap.from('.intro02' ,{x:-100})
// gsap.from('.intro03' ,{y:100})
// gsap.from('.intro04' ,{x:-100})
// gsap.from('.intro05' ,{x:-100})

introTl = gsap.timeline({
  defaults:{
    duration:0.5,
  }
})

introTl.addLabel('label1')
.from('.intro01' ,{x:-100, opacity:0}, 'label1')
.from('.intro02' ,{x:-100, opacity:0}, 'label1+=0.1')
.from('.intro03' ,{y:100, opacity:0}, 'label1+=0.2')
.from('.intro04' ,{x:-100, opacity:0}, 'label1+=0.3')
.from('.intro05' ,{x:-100, opacity:0}, 'label1+=0.4')
.from('.sc_intro .title' ,{scale:0.9, opacity: 0}, 'label1+=0.4')

// $('[data-fade]').length

// gsap.from('.sc_intro .desc_box', 0.6,{

//   scrollTrigger:{
//     trigger:".sc_intro .desc_box",
//     start:"top 80%", //[트리거기준 윈도우기준]
//     end:"bottom top", //[트리거기준 윈도우기준]
//     markers:true,
//   },

//   opacity: 0,
//   y:100,
// })

$('[data-fade]').each(function(i,e){ // i = > 인덱스, e = > 엘리먼트
  gsap.from(e, 0.6,{
      scrollTrigger:{
        trigger:e,
        start:"top 80%", //[트리거기준 윈도우기준]
        end:"bottom top", //[트리거기준 윈도우기준]
      },
    
      opacity: 0,
      y:100,
    })
})

$('[data-scale]').each(function(i,e){ // i = > 인덱스, e = > 엘리먼트
  gsap.from(e, 0.8,{
      scrollTrigger:{
        trigger:e,
        start:"top 80%", //[트리거기준 윈도우기준]
        end:"bottom top", //[트리거기준 윈도우기준]
      },
    
      opacity: 0,
      x: 100,
      y: 0,
      scale: 0.6
    })
})


$('[data-div]').each(function(i,e){ 
  
  position = $(this).data('div');

  left = (position == 'left') ? -10 : 0
  right = (position == 'right') ? 10 : 0
  bottom = (position == 'bottom') ? 5 : 0

  gsap.from(e, 0.6,{
      scrollTrigger:{
        trigger:e,
        start:"top 80%", 
        end:"bottom top", 
      },
    
      opacity: 0,
      xPercent: (left + right),
      yPercent: bottom,
    })
})

$('[data-floor]').each(function(i,e){ 
  gsap.from(e, 0.8,{
      scrollTrigger:{
        trigger:e,
        start:"top 80%", 
        end:"bottom top", 
      },
    
      opacity: 0,
      y: 100,
    })
})
