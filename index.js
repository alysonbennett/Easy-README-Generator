// variables
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the program?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a license",
        default: "MIT",
        choices: [
            { name: "MIT", value: '[MIT](https://choosealicense.com/licenses/mit/)' },
            { name: "GPLv2", value: '[GPLv2](https://choosealicense.com/licenses/gpl-2.0/)' },
            { name: "Creative Commons-0", value: '[Creative Commons Public Domain](https://choosealicense.com/licenses/gpl-2.0/)'},
            "None"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to this repo?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?"
    },
];

// function to write README file
inquirer
    .prompt(questions)
    .then(function (data) {

        console.log(data)

        fs.writeFile("README.md", generate(data), function (err) {
            if (err) {
                throw err;
            };

            console.log("Success! Your new README file was created.")
        });

    });

// function to initialize program
function init() {
}

// function call to initialize program
init();
