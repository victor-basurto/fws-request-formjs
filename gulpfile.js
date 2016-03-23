/**
 * Required Modules
 */
var gulp = require( 'gulp' ),
	uglify = require( 'gulp-uglify' );

/**
 * Scripts Task
 */
gulp.task( 'scripts', function() {
	gulp.src( '.app/js/**/*.js' )
			.pipe( uglify() )
			.pipe( gulp.dest( '.app/js' ) );
});

/**
 * Default Task
 */
gulp.task( 'default', [ 'scripts' ] );