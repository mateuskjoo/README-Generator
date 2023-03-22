function renderLicenseBadge(license) {
  if (license === "None") return "";
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license === "None") return "";
  return `\n* [License](#license)\n`;
}

function renderLicenseSection(license) {
  if (license === "None") return "";
  return `## License\nThis project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents 
* [Installation]
* [Usage]${renderLicenseLink(data.license)}
* [Contributing]
* [Tests]
* [Questions]

## Installation
To install necessary dependencies, run the following command:
${data.installation}

## Usage
${data.usage}${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:
${data.test}

## Questions
If you have any questions, please contact me directly at ${data.email} or ${
    data.github
  }.
`;
}

module.exports = generateMarkdown;
