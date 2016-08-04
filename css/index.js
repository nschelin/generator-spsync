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
			this.templatePath('_style.css'),
			this.destinationPath('src/Style Library/' + projectName + '/css/' + this.name + '.css'), 
			{
			});
	}
});