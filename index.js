// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "what is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "what is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "write a short description of your project.",
  },
  {
    type: "list",
    name: "license",
    message: "what type of license does your project use?",
    choices: ["MIT", "Apache-2.0", "GPL-3.0", "BSD-3", "none"],
  },
  {
    type: "input",
    name: "installation",
    message: "what command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "what command should be used to test the application?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "what does the user need to know about using this repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "what does the user need to know about contributing to this repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("generating your README");
    writeToFile("READMEgen.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
