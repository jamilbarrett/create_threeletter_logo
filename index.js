const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./Library/shapes.js')
const color = require('color')

console.log('red')

// Prompt user for input
const userInput = [
  {
    name: 'text',
    message: 'Please enter 3 characters',
    validate: (input) => {
      if (input.length > 3 || input.length < 3) {
        return 'Please enter 3 characters';
      } else {
        return true
      }
    }
  },
  {
    name: 'textColor',
    message: 'Please select the color of your text',
    choices: (answers) => {
      const colors = color(answers).map((color) => color.name)
      return colors
    }
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select the desired shape',
    choices: ['circle', 'square', 'triangle']
  },
  {
    name: 'shapeColor',
    message: 'Please select the color of your chosen shape',
    choices: (answers) => {
      const colors = color(answers).map((color) => color.name)
      return colors
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
    const { text, textColor, shape, shapeColor } = answers;
    const svgMarkup = `${text}, ${textColor}, ${shape}, ${shapeColor}`
    console.log('user answers', answers)
    fs.writeFile('./logo.svg', svgMarkup, 'utf8', (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  })