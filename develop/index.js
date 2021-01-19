const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const util = require('util');
const questions = require('./utils/questions');
const api = require('./utils/api');
const writeToFile = require('./utils/writeToFile');
const generateMarkdown = require('./utils/generateMarkdown');

// function writeToFile(fileName, data) {
// 	fs.writeFile(fileName, data, (err) => {
// 		if (err) {
// 			throw err;
// 		}
// 	});
// }

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
					who: d.who,
					what: d.what,
					why: d.why,
					install: d.install,
					usage: d.usage,
					license: d.license,
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
