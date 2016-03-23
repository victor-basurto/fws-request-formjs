var gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' );

gulp.task( 'sass', function() {
	gulp.src( './style/*.scss' )
		.pipe( sass() )
		.pipe( gulp.dest( './styles' ) );
});

gulp.task( 'watch', function() {
	gulp.watch( './style/*.scss', [ 'sass' ] );
});

gulp.task( 'default', [ 'sass', 'watch' ] );