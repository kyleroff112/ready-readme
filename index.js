// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a brief description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions for your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you use your project?",
      name: "usage",
    },
    {
      type: "list",
      message: "What license does your project use?",
      name: "license",
      choices: ["MIT", "Apache", "GPL", "None"],
    },
    {
      type: "input",
      message: "What are the contribution guidelines for your project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What are the test instructions for your project?",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ];
  
// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File written successfully.");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
    });
  }

// Function call to initialize app
init();
