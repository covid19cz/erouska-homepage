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
});
