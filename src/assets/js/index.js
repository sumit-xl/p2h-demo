// Here we are importing the whole app
// read more about modules here:
// http://wesbos.com/javascript-modules/

jQuery( document ).ready( function( $ ) {

	$( '.header__menu-toggle' ).on( 'click', function( event ) {
		event.preventDefault();
		$( '.header__menu-toggle' ).toggleClass( 'is-active' );
		$( '.header nav' ).slideToggle( 'fast' );
	} );

	$( window ).scroll( function() {
		if ( $( this ).scrollTop() > 53 ) {
			$( '.header' ).addClass( 'sticky' );
		} else {
			$( '.header' ).removeClass( 'sticky' );
		}
	} );

	$(document).on('click', function(event){
		var $trigger = $('.header');
		if($trigger !== event.target && !$trigger.has(event.target).length){
			$('.header nav').slideUp('fast');
			$( '.header__menu-toggle' ).removeClass( 'is-active' );
		}
	});

	$( '.js-toggle-language' ).on( 'click', function( event ) {
		event.preventDefault();
		$( '.footer__language' ).toggleClass( 'is-active' );
		$( '.footer__language ul' ).slideToggle( 'fast' );
	} );

	$(document).on('click', function(event){
		var $trigger = $('.footer__language');
		if($trigger !== event.target && !$trigger.has(event.target).length){
			$('.footer__language ul').slideUp('fast');
			$( '.footer__language' ).removeClass( 'is-active' );
		}
	});

	$( '.footer__language ul li a' ).on( 'click', function() {
		event.preventDefault();
		$( '.footer__language ul' ).slideUp( 'fast' );
	} );

	$('.js-slider').slick({
		infinite: false,
		dots: true,
		rows: 0
	});

} );
