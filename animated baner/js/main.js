
$('.button').mouseover(function(){
    $('.arrow_img').css({ "left" : "155px"});
});

$('.button').mouseleave(function(){
    $('.arrow_img').css({ "left" : "145px"});
});

$(document).ready(function(){
    $('.pump').animate({ left: '323px'});
    $('.phone').delay(1000).animate({ left: '223px'});
});

