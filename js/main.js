jQuery(document).ready(function($) {
  // obecne
  var bodyWidth = window.innerWidth;

  // události při resize okna
  $(window).on('resize', function() {
    // osetreni, zda se velikost zmenila
    if (bodyWidth !== window.innerWidth) {
      // nastavíme novou šířku
      bodyWidth = window.innerWidth;
      // zresetuj menu
      resetMenu();
    }
  });

  // události při načtení stránky
  $(window).on('load', function() {});

  // události při scroolování
  $(window).on('scroll', function() {
    // rolovací menu
    rollMenu();
  });

  // mobilní menu
  function switchMenu() {
    // označíme zda je menu zavřeno či nikoliv
    if ($('.nav__switcher').hasClass('is-open')) {
      $('.nav__switcher').removeClass('is-open');
    } else {
      $('.nav__switcher').addClass('is-open');
    }

    // otevřeme produktové menu
    if ($('.nav').hasClass('is-open')) {
      $('.nav').removeClass('is-open');
    } else {
      $('.nav').addClass('is-open');
    }
  }
  // při změně rozlišení resetujeme menu
  function resetMenu() {
    $('.nav__switcher, .nav').removeClass('is-open');
  }
  // spouštěč
  $('.nav__switcher').on('click', function() {
    switchMenu();
  });

  // rolovací menu
  function rollMenu() {
    if ($(this).scrollTop() > 1) {
      $('.header').addClass('header--fixed');
    } else {
      $('.header').removeClass('header--fixed');
    }
  }
});
