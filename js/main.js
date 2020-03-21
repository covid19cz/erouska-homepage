// -------------------------------------
// Sticky menu
// -------------------------------------

var $sticky = document.querySelector('.sticky');
var stickyTop = $sticky.offsetTop;

console.log(stickyTop);
console.log('aaaa');

/*
    $(window).scroll(function() {
      var windowTop = $(window).scrollTop();
      if (stickyTop < windowTop) {
        $('.sticky').css('position', 'fixed');
      } else {
        $('.sticky').css('position', 'relative');
      }
    });
    */
