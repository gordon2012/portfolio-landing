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


    // Work Popup
    //
    $('.work-item').click(function(){
        var $this = $(this);
        console.log($this.data('work'));

        $('.work-popup-' + $this.data('work')).show();

        $('.work-thumb').hide();
    });

    $('.work-popup-return').click(function(){
        $('.work-thumb').show();

        $('.work-popup').hide();
    });


    // Social Links
    $('.contact-item-border').click(function(){
        window.open($(this).find('a').attr('href'), '_blank');
    });

});
