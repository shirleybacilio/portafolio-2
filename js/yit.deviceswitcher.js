jQuery(document).ready(function($){

    var href = $(location).attr('href');
    var theme = $('#banner').data('theme');

    function fixHeight () {
        var headerHeight = ( jQuery('body').width() < 480 ) ? 0 : 70;
        jQuery("#iframe").attr("height", ( ( jQuery(window).height()) - headerHeight ) + 'px');
    }

    jQuery(window).resize(fixHeight);

    fixHeight();

    $( '#resolution-switcher .devices-list li a').on( 'click', function(e){

        e.preventDefault();
        var t = $(this);
        var device = t.data('device');

        //Select the new device
        $( '#resolution-switcher .devices-list' ).find( 'i.fa.active').removeClass('active');
        t.find('i.fa').addClass('active');

        $('#iframelive').add('body').attr( 'class', device );
    } );




    $('#themeswitcher > a').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();

		$(this).add('#themeswitcher').toggleClass('active').toggleClass('deactive');
		$('#themes').toggle();
	});

	$('html').on('click',function() {
	    if( $('#themes').is(':visible') ) {
	    	$('#themes').hide();
	    	$('#themes').removeClass('opened')
            $('#themeswitcher > a').add('#themeswitcher').toggleClass('active').toggleClass('deactive');
	    }
 	});

	$('#themes a').each(function(){
		$(this).poshytip({
			content: '<img src="' + $(this).data('screenshot') + '" alt="Theme Screenshot" />',
			className: 'tip-twitter',
			followCursor: true,
			slide: false,
			showTimeout: 1,
			fade: true,
			offsetX: 50,
			offsetY: 0
		});
	});

	$( '#cooming_soon_link' ).on( 'click', function(e){
		e.preventDefault();
		e.stopPropagation();
	} )

});
