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
			name: 'siteUrl',
			message: 'Enter the site\'s URL',
		},
		{
			type: 'input',
			name: 'realm',
			message: 'Enter the Realm (optional)',
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

			yeo.clientId = answers.clientId;
			yeo.clientSecret = answers.clientSecret;
			yeo.siteUrl = answers.siteUrl;
			yeo.realm = answers.realm;

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
			var src = this.destinationRoot() + "/src";
			
			// master page
			var _catalogs = src + "/_catalogs";
			var masterpage = _catalogs + "/masterpage";

			// style library
			var styleLibrary = src + "/Style Library"
			var html = styleLibrary + "/html";
			var css = styleLibrary + "/css";
			var js = styleLibrary + "/js";
			var img = styleLibrary + "/img";

			// create folders
			fs.mkdirSync(src);

			// master page
			fs.mkdirSync(_catalogs);
			fs.mkdirSync(masterpage);

			// style library
			fs.mkdirSync(styleLibrary);
			fs.mkdirSync(html);
			fs.mkdirSync(css);
			fs.mkdirSync(js);
			fs.mkdirSync(img);
		},
		gulpfile: function() {
			this.fs.copyTpl(
				this.templatePath('_gulpfile.js'),
				this.destinationPath('gulpfile.js'),
				{
					clientId: this.clientId,
					clientSecret: this.clientSecret,
					siteUrl: this.siteUrl,
					realm: this.realm
				}
			);

			this.copy('gitignore', '.gitignore');
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

