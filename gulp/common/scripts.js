const gulp = require( 'gulp' )
const concat = require( 'gulp-concat' )

gulp.task( 'vendor:scripts', () =>
	gulp.src( [
		    'node_modules/jquery/dist/jquery.js',
		    'node_modules/slick-carousel/slick/slick.min.js',
	    ] )
	    .pipe( concat( 'vendors.js' ) )
	    .pipe( gulp.dest( 'dist/assets/js' ) )
)

gulp.task( 'main:scripts', () =>
	gulp.src( 'src/assets/js/**/*.js' )
	    .pipe( concat( 'main.js' ) )
	    .pipe( gulp.dest( 'dist/assets/js' ) )
)

gulp.task( 'scripts', gulp.series( 'vendor:scripts', 'main:scripts' ) );
