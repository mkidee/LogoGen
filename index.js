// we need to include fs and inquirer as they are dependencies, as well we must include our shapes.js page for reference
const fs = 'fs';
const inquirer = 'inquirer';
const {Circle, Square, Triangle} = require("./library/shapes");

// choices for the logo selection
const shapeChoice = ['Circle', 'Square', 'Triangle'];

//these questions will be asked in order to create the users logo
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

// to create the actual SVG now with the specifications
function writeSVG(data) {
    const logoSource = './createdlogo/logo.svg';
    let baseSVG = "";
    baseSVG = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>`;
}