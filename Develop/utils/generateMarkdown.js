// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const i = ["MIT", "GPLv3", "GPL"]

//function renderLicenseBadge(license){
  //const yourLicense = ''
  //if(license === 'MIT') {
    //yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  //} else if (license === 'GPLv3') {
    //yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
 // } else if (license === 'GPL') {
   // yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  //} 
  //return yourLicense;
//};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// create the about section
function renderLicenseSection(confirmLicense, license) {
  if (!confirmLicense) {
      return "";
  }
  return `
## License
${license }
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.projectTitle}

## Description 

${data.description}


## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Test](#test)
* [Questions](#questions)


## Installation

${data.installation}

## Usage 

${data.usage}
 

## Contributing

${data.contribution}


${ renderLicenseSection(data.confirmLicense, data.license) }


## Test

${data.test}

## Questions
If you have any questions about the repo, please send an email to ${data.email}. You can find more of my work at ${data.github}


`;
}

module.exports = generateMarkdown;
