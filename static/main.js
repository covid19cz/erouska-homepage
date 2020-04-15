$(document).ready(function () {
    // -------------------------------------
    // Sticky menu
    // -------------------------------------

    if ($('.js-sticky').length) {
        var stickyStart = parseInt($('.js-sticky').offset().top);

        $(window).scroll(function () {
            var windowTop = $(window).scrollTop();

            if (windowTop > stickyStart) {
                $('.js-sticky').addClass('fixed');
            } else {
                $('.js-sticky').removeClass('fixed');
            }
        });
    }

    // -------------------------------------
    // Rozbalovani FAQ
    // -------------------------------------

    $('.faq__q').click(function () {
        var $thisParent = $(this).closest('.faq__item');
        var $thisAnswer = $thisParent.find('.faq__a');
        $thisAnswer.slideToggle();
    });
});
