$(document).ready(function() {
  // -------------------------------------
  // Sticky menu
  // -------------------------------------

  var stickyStart = parseInt($('.js-sticky').offset().top);
  var stickyHeight = parseInt($('.js-sticky').css('height'));

  var stickyStop =
    parseInt($('.js-sticky-stop').offset().top) -
    parseInt($('.js-sticky-stop').css('marginTop')) -
    stickyHeight;

  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();

    if (windowTop > stickyStart) {
      $('.js-sticky').addClass('fixed');
    } else {
      $('.js-sticky').removeClass('fixed');
    }

    if (windowTop >= stickyStop) {
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

  // -------------------------------------
  // Rozbalovani FAQ
  // -------------------------------------

  $('.faq__q').click(function() {
    var $thisParent = $(this).closest('.faq__item');
    var $thisAnswer = $thisParent.find('.faq__a');
    $thisAnswer.toggle();
    console.log('click');
  });
});

//# sourceMappingURL=scripts.js.map
