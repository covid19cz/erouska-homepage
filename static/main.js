$(document).ready(function () {
    // -------------------------------------
    // Rozbalovani FAQ
    // -------------------------------------

    $(document).on('click', '.faq__q', function () {
        var $thisParent = $(this).closest('.faq__item');
        var $thisAnswer = $thisParent.find('.faq__a');
        $thisAnswer.slideToggle();
    });
});
