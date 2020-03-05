const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const util = require('util');
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
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
];

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			throw err;
		}
	});
}

function init() {
	inquirer
		.prompt(questions)
		.then((d) => {
			api.getUser(d.userName).then(function(res) {
				const data = {
					userName: d.userName,
					name: res.data.name,
					email: res.data.html_url,
					image: res.data.avatar_url,
					title: d.title,
					description: d.description,
					install: d.install,
					usage: d.usage,
					contributing: d.contributing,
					test: d.test
				};

				const md = generateMarkdown(data);
				return writeToFile('README.md', md);
			});
		})
		.then(() => {
			console.log('Successfully wrote file');
		})
		.catch((err) => console.log(err));
}

init();
