var main = function () {
  "use strict";

  /*$("#home").height( $(window).height());*/
  /*$("#witvlak").height( $(window).height());*/

  $( 'a[href^="http://"]').attr('target', '_blank' )
	$( 'a[href^="https://"]').attr('target', '_blank' )

	$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $('.menubalk').addClass('scroll');
    } else {
      $('.menubalk').removeClass('scroll');
    }
  });

  $(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
  });

  jQuery('.responsive-menu-icoon').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.menu ul').toggleClass('active');

    e.preventDefault();
  });
}

$('document').ready(main);
