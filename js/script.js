var main = function () {
  "use strict";

  $("#slider").height( $(window).height());

  $('a[href^="http://"]').attr('target', '_blank')
	$('a[href^="https://"]').attr('target', '_blank')

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

  $('.responsive-menu-icoon').click(function(e) {
    $(this).toggleClass('active');
    $('.menu ul').toggleClass('active');

    e.preventDefault();
  });

  $('#knop-lindsey').click(function(e) {
    $('#interview-lindsey').toggleClass('onzichtbaar');
    $('#interview-ilse').addClass('onzichtbaar');

    e.preventDefault();
  });

  $('#knop-ilse').click(function(e) {
    $('#interview-ilse').toggleClass('onzichtbaar');
    $('#interview-lindsey').addClass('onzichtbaar');

    e.preventDefault();
  });

  $('.terug').click(function(e) {
    $('#interview-ilse').addClass('onzichtbaar');
    $('#interview-lindsey').addClass('onzichtbaar');

    e.preventDefault();
  });

  $('#knop-bestellen').click(function(e) {
    $('#bestellen').toggleClass('onzichtbaar');

    e.preventDefault();
  });

  /*$('.slider-quote-bags').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800
  });*/
}

$('document').ready(main);
