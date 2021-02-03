const fs = require('fs');

const writeFile = (fileContent) => {
	return new Promise((resolve, reject) => {
		fs.writeFile('README.md', fileContent, (err) => {});
	});
};

// function writeToFile(fileName, data) {
// 	fs.writeFile(fileName, data, (err) => {
// 		if (err) {
// 			throw err;
// 		}
// 	});
// }

module.exports = writeToFile;
