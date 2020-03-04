function generateMarkdown(data) {
	return `
# ${data.title}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`

${data.install}

\`\`\`

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests 

To run tests, run the following command:

\`\`\`

${data.test}

\`\`\`

## Questions


If you have any questions about the repo, open an issue or contact [${data.userName}](${data.email}) directly at null.

`;
}

module.exports = generateMarkdown;
