$(document).ready(function() {
  // -------------------------------------
  // Sticky menu
  // -------------------------------------

  if ($('.js-sticky').length) {
    var stickyStart = parseInt($('.js-sticky').offset().top);
    var stickyHeight = parseInt($('.js-sticky').css('height'));

    $(window).scroll(function() {
      var windowTop = $(window).scrollTop();

      if (windowTop > stickyStart) {
        $('.js-sticky').addClass('fixed');
      } else {
        $('.js-sticky').removeClass('fixed');
      }
    });
  }

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

  // -------------------------------------
  // Rozbalovani FAQ
  // -------------------------------------

  $('.faq__q').click(function() {
    var $thisParent = $(this).closest('.faq__item');
    var $thisAnswer = $thisParent.find('.faq__a');
    $thisAnswer.slideToggle();
  });
});

//# sourceMappingURL=scripts.js.map
