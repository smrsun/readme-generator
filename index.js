// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./readme-generator/utils/generateMarkdown.js');

//  array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please write a short description of your project.',
    name: 'description',
  },
  {
    type: 'list',
    message: 'What type of license, if any, should your project have?',
    name: 'license',
    choices: ['MIT', 'GNU', 'Apache', 'Mozilla', 'BSD', 'none'],
  },
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'userName',
  },
  {
    type: 'input',
    message: 'What is your Github email address?',
    name: 'emailAddress',
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies',
    name: 'command',
  },
  {
    type: 'input',
    message: 'What command should run for testing?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What does the user need to know to about using the repo?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contribution',
  },
];

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File created!');
    }
  });
};

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions).then(answers);
  const readmeInfo = generateMarkdown(answers);
  writeToFile('README.md', readmeInfo);
};

// Function call to initialize app
init();
