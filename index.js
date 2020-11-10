const inquirer = require("inquirer");
const fs = require("fs");
// const axios = require("axios");
const generate = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
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
            { name: "MIT", value: '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)' },
            { name: "Creative Commons", value : `[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)`},
            { name: "GPLv3" value: '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)' },
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
// function writeToFile(fileName, data) {
//     fs.writeFile("README.txt", process.argv[2], function(err) {

//         if (err) {
//           return console.log(err);
//         }

//         console.log("Success!");

//       });
// }

inquirer
    .prompt(questions)
    .then(function (data) {


        // .then(function(data) {
        //     const queryURL = `https://api.github.com/users/${data.username}`;

        // axios.get(queryURL).then(function(res) {

        // })
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
