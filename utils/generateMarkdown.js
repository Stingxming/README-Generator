// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  if (license == "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
  }
  if (license == "GPLv3") {
    licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
  }
  if (license == "ISC") {
    licenseLink = `https://opensource.org/licenses/ISC`;
  }
  if (license == "GPL_v2") {
    licenseLink = `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
  }
  if (license == "Apache_2.0") {
    licenseLink = `https://opensource.org/licenses/Apache-2.0`;
  }
  if (!license) {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${
    data.title
  } ![License](https://img.shields.io/badge/license-${data.license.replaceAll(
    " ",
    "%20"
  )}-blue)

`;
}

module.exports = generateMarkdown;
