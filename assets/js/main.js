(function ($) {    
    "use strict"

  $(document).ready(function(){

    // testimonial slider
    $('.testimonial-slider').slick({
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // gallery popup
    $('.hover-state a').magnificPopup({
      type: 'image',
      gallery:{
        enabled: true
      }
      // other options
    });

    // blog slider
    $('.blog-slider').slick({
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })

  })

  $(window).on('load', function () {

      // preloader
      var preLoder = $("#preloader");
      preLoder.fadeOut(0);

  });

})(jQuery);