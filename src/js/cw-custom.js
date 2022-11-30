var $ = jQuery;

function isOnScreen(elem) {
  // if the element doesn't exist, abort
  if (elem.length == 0) {
    return;
  }
  var $window = jQuery(window);
  var viewport_top = $window.scrollTop();
  var viewport_height = $window.height();
  var viewport_bottom = viewport_top + viewport_height;
  var $elem = jQuery(elem);
  var top = $elem.offset().top;
  var height = $elem.height();
  var bottom = top + height;

  return (
    (top >= viewport_top && top < viewport_bottom) ||
    (bottom > viewport_top && bottom <= viewport_bottom) ||
    (height > viewport_height &&
      top <= viewport_top &&
      bottom >= viewport_bottom)
  );
}

$(document).ready(function () {
  if (
    isOnScreen($(".non-sticky-atc-button").eq(0)) ||
    isOnScreen($(".non-sticky-atc-button").eq(1)) ||
    isOnScreen($(".non-sticky-atc-button").eq(2)) ||
    isOnScreen($(".non-sticky-atc-button").eq(3)) ||
    isOnScreen($("#footer"))
  ) {
    $(".sticky-atc-button").fadeOut(100);
  } else {
    $(".sticky-atc-button").fadeIn(100);
  }

  $(window).on("scroll", function () {
    if (
      isOnScreen($(".non-sticky-atc-button").eq(0)) ||
      isOnScreen($(".non-sticky-atc-button").eq(1)) ||
      isOnScreen($(".non-sticky-atc-button").eq(2)) ||
      isOnScreen($(".non-sticky-atc-button").eq(3)) ||
      isOnScreen($("#footer"))
    ) {
      $(".sticky-atc-button").fadeOut(10);
    } else {
      $(".sticky-atc-button").fadeIn(10);
    }
  });
  /* scroll to target */
  jQuery(".scrollTo").click(function (e) {
    var jump = jQuery(this).attr("href");
    var new_position = jQuery(jump).offset();
    var scroll = 0;
    jQuery("html, body")
      .stop()
      .animate({ scrollTop: new_position.top + scroll }, 800, function () {
        var new_position = jQuery(jump).offset();
        jQuery("html, body")
          .stop()
          .animate({ scrollTop: new_position.top + scroll }, 800);
      });
    e.preventDefault();
  });

  $(".fancybox").fancybox();

  /* Deal In Slider Start */
  if ($(".deal-in-slider").length) {
    $(".deal-in-slider").slick({
      dots: false,
      arrows: false,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      infinite: true,
      lazyLoad: "progressive",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
          },
        },
      ],
    });
  }
  /* deal-in-slider END */

  // Testimonial Slider Start
  if ($(".testimonial-slider").length) {
    $(".testimonial-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      lazyLoad: "progressive",
      prevArrow:
        '<button type="button" class="prev-arrow"><img data-src="./images/cw-left-arrow.png" class="img-fluid lazyload" loading="lazy" alt="" /></button>',
      nextArrow:
        '<button type="button" class="next-arrow"><img data-src="./images/cw-right-arrow.png" class="img-fluid lazyload" loading="lazy" alt="" /></button>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  // Testimonial Slider End

  $(".features__box h4").matchHeight({
    byRow: true,
  });
});
