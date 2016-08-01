'use strict';
var generators = require('yeoman-generator');
var fs = require('fs');

module.exports = generators.Base.extend({
	constructor: function(){
		generators.Base.apply(this, arguments);
	},
	initializing: function(){

	},
	prompting: function() {

	},
	configuring: function() {

	},
	default: function() {

	},
	writing: {
		folders: function() {
			var styleLibrary = this.destinationRoot() + "/Style Library"
			var css = styleLibrary + "/css";
			var js = styleLibrary + "/js";
			var img = styleLibrary + "/img";
			fs.mkdirSync(styleLibrary);
			fs.mkdirSync(css);
			fs.mkdirSync(js);
			fs.mkdirSync(img);
		},
		gulpfile: function() {

		},
		packageJSON: function() {

		},
		git: function() {

		},
		bower: function() {

		}
	},
	conflicts: function() {

	},
	install: function() {

	},
	end: function() {

	}
});

