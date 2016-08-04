'use strict';
var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);
		this.argument('name', { type: String, required: true });

	},
	prompting: function() {
		var yeo = this;
		return this.prompt({
			type: 'checkbox',
			name: 'jsLibs',
			message: 'Include the following libraries?',
			choices: [{
				name: 'jQuery',
				value: 'jQUery',
				checked: true
			},
			{
				name: 'bootstrap 3',
				value: 'bootstrap 3',
				checked: true
			},
			{
				name: 'lodash',
				value: 'lodash',
				checked: true
			}, 
			{
				name: 'moment.js',
				value: 'moment.js',
				checked: false
			},
			{
				name: 'validator',
				value: 'validator',
				checked: false
			}]
		}).then(function(answers) {
			yeo.jQuery = _.includes(answers.jsLibs, 'jQuery');
			yeo.bootstrap = _.includes(answers.jsLibs, 'bootstrap 3');
			yeo.lodash = _.includes(answers.jsLibs, 'lodash');
			yeo.momentjs = _.includes(answers.jsLibs, 'moment.js');
			yeo.validator = _.includes(answers.jsLibs, 'validator');
		});
	},
	writing: function() {
		var projectName = this.config.get('projectName');
		this.fs.copyTpl(
			this.templatePath('_index.html'),
			this.destinationPath('src/Style Library/' + projectName + '/html/' + this.name + '.html'), 
			{
				title: this.name
			});
	}
});