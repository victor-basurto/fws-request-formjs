define([
	'jquery',
	'underscore',
	'backbone',
	'router'
], function( $, _, Backbone, Router ) {
	'use strict';

	var initialize = function() {
		// initialize router
		console.log('working perfectly ... this line is executed from app.js');
	}

	return {
		initialize: initialize
	}
	
});