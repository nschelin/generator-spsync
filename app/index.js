'use strict';
var generators = require('yeoman-generator');
var fs = require('fs');
var validator = require('validator');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({
	constructor: function(){
		generators.Base.apply(this, arguments);
	},
	initializing: function(){

	},
	prompting: function() {
		var yeo = this;
		yeo.log(yosay(chalk.red('SPSync:') + '\nSync Files to ' + chalk.blue('SharePoint') + ' using Gulp and the ' + chalk.blue('SharePoint') + ' App Model'));
		var done = this.async();
		yeo.prompt([
		{
			type: 'input',
			name: 'clientId',
			message: 'Enter the Client Id',
		},
		{
			type: 'input',
			name: 'clientSecret',
			message: 'Enter the Client Secret',
		},
		{
			type: 'input',
			name: 'realm',
			message: 'Enter the Realm',
		},
		{
			type: 'input',
			name: 'siteUrl',
			message: 'Enter the site\'s URL',
		}
		]).then(function(answers) {

			if(!validator.isUUID(answers.clientId))	{
				yeo.env.error('Client Id is not a valid GUID');				
			}

			if(!validator.isUUID(answers.clientSecret))	{
				yeo.env.error('Client Secret is not a valid GUID');				
			}

			if(!validator.isURL(answers.siteUrl))	{
				yeo.env.error('Site Url is not a valid Url');				
			}			
			// finished prompting
			done();
		});
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

