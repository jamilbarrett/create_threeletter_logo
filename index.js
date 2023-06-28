const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./Library/shapes.js')


// Prompt user for input
const userInput = [
  {
    name: 'text',
    message: 'Please enter 3 characters',
    validate: (input) => {
      if (input.length > 3 || input.length< 3) {
        return 'Please enter 3 characters';
      } else {
        return true
      }
    }
  },
  {
    name: 'textColor',
    message: 'Please select the color of your text'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select the desired shape',
    choices: ['circle', 'square', 'triangle']
  },
  {
    name: 'shapeColor',
    message: 'Please select the color of your chosen shape'
  }
];
// writes user input to svg file
inquirer.prompt(userInput)
// get user answers
// text, text color, shape, shape color

// user selects, shape, then user selects color, afterwards we will call the shape class
// let shape = new Circle

// we can call a method from the class shape to set the color
// shape.setColor(answers.shapeColor)
  .then((answers) => {
    console.log('user answers',answers)
    fs.writeFile('./logo.svg', JSON.stringify(answers, null, 2), 'utf8', (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  })