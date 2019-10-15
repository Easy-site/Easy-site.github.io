$(function() {
  // Owl Carousel
  var photo = $(".owl-photo");
  var reviews = $(".owl-reviews"); 

  photo.owlCarousel({
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    items: 4,
    margin: 10,
    loop: true,
    mergeFit: true,
    nav: true
  });

  reviews.owlCarousel({
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    items: 1,
    margin: 10,
    loop: true,
    nav: true
  });

});

