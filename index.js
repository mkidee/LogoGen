const fs = 'fs';
const inquirer = 'inquirer';
const {Circle, Square, Triangle} = require("./library/shapes");

const shapeChoice = ['Circle', 'Square', 'Triangle'];

const questions = [
    {
        type: "input",
        name: "characters",
        message: "Choose up to 3 characters for your logo:"
    },
    {
        type: "input",
        name: "characterColor",
        message: "What color would you like your characters to be:"
    },
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like your logo to be?",
        choices: shapeChoice
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your logo to be:"
    }
];