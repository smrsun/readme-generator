// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./readme-generator/utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },{
    type: 'input',
    message: 'Please write a short description of your project.',
    name: 'decription',
  },{
    type: 'list',
    message: 'What type of license, if any, should your project have?',
    name: 'license',
    choices: ["MIT", "GNU", "Apache", "Mozilla", "BSD", "none"]
  },{
    type: 'input',
    message: 'What is your Github username?',
    name: 'userName',
  },{
    type: 'input',
    message: 'What is your Github email address?',
    name: 'emailAddress',
  },{
    type: 'input',
    message: 'What command should be run to install dependencies',
    name: 'command',
  },{
    type: 'input',
    message: 'What command should run for testing?',
    name: 'tests',
  },{
    type: 'input',
    message: 'What does the user need to know to about using the repo?',
    name: 'usage',
  },{
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contribution',
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
  const writeToFile = (data) => { 
    fs.writeToFile('questions', data, (err) => {
      err ? console.error(err) : console.log('File created!')
    })
  }


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions);
}

// Function call to initialize app
init();
