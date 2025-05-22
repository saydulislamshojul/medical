$(document).ready(function(){
  $('.testimonial-items').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
})