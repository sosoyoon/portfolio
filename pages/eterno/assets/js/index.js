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

$('[data-fade]').each(function(i,e){
  gsap.from(e, 0.6,{
      scrollTrigger:{
        trigger:e,
        start:"top 80%", 
        end:"bottom top", 
      },
    
      opacity: 0,
      y:100,
    })
})

$('[data-scale]').each(function(i,e){ 
  gsap.from(e, 0.8,{
      scrollTrigger:{
        trigger:e,
        start:"top 80%", 
        end:"bottom top", 
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
