const questions = [
	{
		type: 'input',
		name: 'userName',
		message: 'What is your Github username? (Required)',
		validate: (userNameInput) => {
			if (userNameInput) {
				return true;
			} else {
				console.log('Please enter your name!');
				return false;
			}
		}
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
		type: 'input',
		name: 'who',
		message: 'Please write the "who" part of the user story.'
	},
	{
		type: 'input',
		name: 'what',
		message: 'Please write the "what" part of the user story.'
	},
	{
		type: 'input',
		name: 'why',
		message: 'Please write the "why" part of the user story.'
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

module.exports = questions;
