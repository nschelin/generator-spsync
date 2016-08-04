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
	},
	writing: function() {
		var projectName = this.config.get('projectName');
		this.fs.copyTpl(
			this.templatePath('_script.js'),
			this.destinationPath('src/Style Library/' + projectName + '/js/' + this.name + '.js'), 
			{
			});
	}
});