function generateMarkdown(data) {
	return `
# ${data.title} [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<table><tr><td>
<img src="./images/finishedGif.gif" alt="finished gif" style="border-radius:16px" width="838" height="380"/>
</table></tr></td>

## Description 

${data.description}

## User Story

\`\`\`

AS A ${data.who}

I WANT ${data.what}

SO THAT I ${data.why}

\`\`\`

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

<img src="${data.image}" alt="avatar" style="border-radius: 16px" width="60"/>

If you have any questions about the repo, open an issue or contact [${data.name}](${data.email}) directly through GitHub.

`;
}

module.exports = generateMarkdown;
