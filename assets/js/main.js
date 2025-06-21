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

    // accordion
        $('.accordion-header').on('click', function () {
            const $item = $(this).parent();
            const isActive = $item.hasClass('active');
            
            $('.accordion-item').removeClass('active');
            if (!isActive) {
                $item.addClass('active');
            }
        });

        $('.accordion-item').on('click', function () {
          const mIcon = $('.m-icon');
          const sIcon = $('.s-icon');

          mIcon.toggle();
          sIcon.toggle();

        })


  })

  $(window).on('scroll', function () {
        
      // back to top scroll
      var ScrollTop = $('.back-to-top');
      if ($(window).scrollTop() > 1000) {
          ScrollTop.fadeIn(1000);
      } else {
          ScrollTop.fadeOut(1000);
        }

   });

  $(window).on('load', function () {

      // preloader
      var preLoder = $("#preloader");
      preLoder.fadeOut(0);

      // back to top animate
        $(".back-to-top").on('click', function () {
            $("html").animate({
                "scrollTop": "0"
            }, 1000);
        });

  });

})(jQuery);