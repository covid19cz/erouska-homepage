$(document).ready(function() {
  // -------------------------------------
  // Sticky menu
  // -------------------------------------

  var stickyTop = $('.js-sticky').offset().top;

  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    if (stickyTop < windowTop) {
      $('.js-sticky').addClass('fixed');
    } else {
      $('.js-sticky').removeClass('fixed');
    }
  });

  // -------------------------------------
  // ScrollTo
  // -------------------------------------

  $('.js-scrollto').click(function() {
    var thisHref = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(thisHref).offset().top
      },
      800
    );

    return false;
  });
});

//# sourceMappingURL=scripts.js.map
