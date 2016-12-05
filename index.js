var chalk = require('chalk');
var clear = require('clear');
var CLI = require('clui');
var figlet = require('figlet');
var inquirer = require('inquirer');
var Preferences = require('preferences');
var Spinner = CLI.Spinner;
var GithubAPI = require('github');
var _ = require('lodash');
var git = require('simple-git')();
var touch = require('touch');
var fs = require('fs');

var files = require('./lib/files')

console.log(
  chalk.yellow(
    figlet.textSync('Autolab', { horizontalLayout: 'full' })
  )
);

// if (files.directoryExists('.git')) {
//   console.log(chalk.red('Already a git repository!'));
//   process.exit();
// }

function getGithubCredentials(callback) {
	var questions = [
	{
		name: 'username',
		type: 'input',
		message: 'Enter your Github username or email address:',
		validate: function(value) {
			if (value.length) {
				return true;
			}
			else {
				return 'Please enter your Github username or e-mail address';
			}
		}
	},
	{
		name: 'password',
		type: 'password',
		message: 'Enter your password:',
		validate: function(value) {
			if (value.length) {
				return true;
			}
			else {
				return 'Please enter your password';
			}
		}
	}
	];

	inquirer.prompt(questions).then(callback);
}

getGithubCredentials(function(){
	console.log(arguments);
});