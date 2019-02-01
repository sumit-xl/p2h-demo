// Welcome to our main file!
// we are using Webpack and ES6
// feel free to use imports and exports
// as well as ES6 code

// Try to make your whole code work via exporting
// a single function to get Hot Module Replacement
// just like app.init()
// from the good ol'days

(function( $, window, document, undefined ) {

	'use strict';

	$(
		function() {

			$( '.header__menu-toggle' ).on( 'click', function( event ) {
				event.preventDefault();
				$( 'body' ).toggleClass( 'is-active' );
			} );

			$( window ).scroll( function() {
				if ( $( this ).scrollTop() > 53 ) {
					$( '.header' ).addClass('sticky');
				} else {
					$( '.header' ).removeClass('sticky');
				}
			} );

		}
	);

})( jQuery, window, document );
