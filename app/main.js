// From DevTips (ArielSafari)
//
// https://youtu.be/X43pKWTRO64?t=5m43s

$(document).ready(function() {
  //console.log('ready');
  smoothScroll(1000);
});


function smoothScroll(duration) {
  $('a[href^="#"]').click(function(event) {
    var target = $($(this).attr('href'));
    
    if(target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}
