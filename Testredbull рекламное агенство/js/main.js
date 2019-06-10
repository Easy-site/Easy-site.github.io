$(document).ready(function(){
      
  // $('.slider').bxSlider();

  $('.bxslider').bxSlider({

    mode: 'horizontal',
    slideWidth: 400,
    minSlides: 2,
    maxSlides: 2,
    moveSlides: 2,
    slideMargin: 10,
    auto: true,
    autoControls: true,
    pause:4000,
    stopAutoOnClick: true

  });

$('.bxslider-carusel').bxSlider({
    mode: 'horizontal',
    minSlides: 6,
    maxSlides: 6,
    moveSlides: 6,
    speed: 6000,
    slideWidth: 800,
    ticker: true,
    tickerHover: true

});

 });

