'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);
		this.argument('name', { type: String, required: true });

	},
	prompting: function() {
		.then(function(answers) {
			
		});
	},
	writing: {
		files: function() {
			var projectName = this.config.get('projectName');
			this.fs.copyTpl(
				this.templatePath('_index.html'),
				this.destinationPath('src/Style Library/' + projectName + '/html/' + this.name + '.html'), 
				{
					title: this.name
				});
		}
	}
});