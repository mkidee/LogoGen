// we need to include fs and inquirer as they are dependencies, as well we must include our shapes.js page for reference
const fs = require('fs');
const inquirer = require('inquirer');
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

    logoChar = data.characters;
    logoShapeColor = data.shapeColor;
    logoCharColor = data.characterColor;

    let shapeChoice;
    if (data.shape === "Circle") {
        shapeChoice = new Circle();
    }
    else if (data.shape === "Square") {
        shapeChoice = new Square();
    }
    else if (data.shape === "Triangle") {
        shapeChoice = new Triangle();
    }

    shapeChoice.setColor(logoShapeColor);
    baseSVG += shapeChoice.render();
    
    baseSVG += `<text x='150' y='115' text-anchor='middle' font-size='50' fill='${logoCharColor}'>${logoChar}</text>`;
    baseSVG += '</svg>';

    fs.writeFile(logoSource, baseSVG, function(err) {
        err ? console.log(err) : console.log("Done! Logo was successfully created in the 'createdlogo' folder!")
    });
}

    function init() {
        inquirer.prompt(questions).then(data => writeSVG(data));
    }

    init();
