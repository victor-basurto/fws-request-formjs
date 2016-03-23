var express = require( 'express' ),
	bodyParser = require( 'body-parser' ),
	sassMiddleware = require( 'node-sass-middleware' ),
	path = require( 'path' ),
	port = 3000,
	app = express();

// set public directory
app.use( express.static( __dirname + '/app' ) );
app.use( bodyParser.json() );

// sass middleware
app.use( sassMiddleware({ 
	src: __dirname + '/app/stylesheets',
	dest: __dirname + '/app',
	debug: true,
	outputStyle: 'compressed',
	prefix: '/prefix'
}));
app.use( express.static( path.join( __dirname, 'app' ) ) );

// display route
app.get( '/', function( req, res ) {
	res.render( 'index' );
});

// set port
app.listen( port, function() {
	console.log( 'app running on port: ' + port );
});