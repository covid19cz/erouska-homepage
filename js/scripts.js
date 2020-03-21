$(document).ready(function() {
  // -------------------------------------
  // Sticky menu
  // -------------------------------------

  var stickyTop = $('.js-sticky').offset().top;
  console.log(stickyTop);

  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    console.log(windowTop);
    if (stickyTop < windowTop) {
      $('.js-sticky').addClass('fixed');
    } else {
      $('.js-sticky').removeClass('fixed');
    }
  });

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
