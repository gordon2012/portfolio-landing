$(function(){

    // Smooth scrolling
    var DURATION = 300;

    $('a[href^="#"]').click(function(event){
        var target = $($(this).attr('href'));

        if(target.length){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, DURATION);
        }
    });
});
