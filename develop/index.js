const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = inquirer
	.prompt([
		{
			type: 'input',
			name: 'userName',
			message: 'What is your Github username?'
		},
		{
			type: 'input',
			name: 'title',
			message: "What is your project's name?"
		},
		{
			type: 'input',
			name: 'description',
			message: 'Please write a short description of the project.'
		},
		{
			type: 'list',
			name: 'license',
			message: 'What kind of license should your project have?',
			choices: [ 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None' ]
		},
		{
			type: 'input',
			name: 'install',
			message: 'What command should be run to install dependencies?',
			default: 'npm i'
		},
		{
			type: 'input',
			name: 'test',
			message: 'What command should be run to run tests?',
			default: 'npm test'
		},
		{
			type: 'input',
			name: 'usage',
			message: 'What does the user need to know about using the repo?'
		},
		{
			type: 'input',
			name: 'contributing',
			message: 'What does the user need to know about contributing to the repo?'
		}
	])
	.then((data) => {
		const md = generateMarkdown(data);
		return writeToFile('README.md', md);
	});

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			throw err;
		}

		console.log('Successfully wrote file');
	});
}

function init() {}

init();
