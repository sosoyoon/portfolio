var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 250,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".btn-nav",
      clickable: true,
    }
  });