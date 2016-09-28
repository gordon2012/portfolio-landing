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


    // FitText
    //
    $('header h1').fitText(0.9, {minFontSize: '20px', maxFontSize: '72px'});

});



// FitText
//
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
