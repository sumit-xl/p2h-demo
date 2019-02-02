// Here we are importing the whole app
// read more about modules here:
// http://wesbos.com/javascript-modules/

jQuery( document ).ready( function( $ ) {

	$( '.header__menu-toggle' ).on( 'click', function( event ) {
		event.preventDefault();
		$( 'body' ).toggleClass( 'is-active' );
		$( '.header nav' ).slideToggle( 'fast' );
	} );

	$( window ).scroll( function() {
		if ( $( this ).scrollTop() > 53 ) {
			$( '.header' ).addClass( 'sticky' );
		} else {
			$( '.header' ).removeClass( 'sticky' );
		}
	} );


	$( '.js-toggle-language' ).on( 'click', function( event ) {
		event.preventDefault();
		$( '.footer__language' ).toggleClass( 'is-active' );
		$( '.footer__language ul' ).slideToggle('fast');
	} );

	$( '.footer__language ul li a' ).on( 'click', function() {
		event.preventDefault();
		$( '.footer__language ul' ).slideUp('fast');
	} );

} );
