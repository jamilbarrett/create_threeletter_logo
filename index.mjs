// importing required modules
import inquirer from 'inquirer'
import fs from 'fs'
import { Circle, Triangle, Square } from './Library/shapes.js'


// Prompt user for input
const userInput = [
  {
    name: 'text',
    message: 'Please enter 3 characters',
    validate: (input) => (input.length !== 3) ? 'Please enter 3 characters' : true
  },
  {
    name: 'textColor',
    message: 'Please select the color of your text',
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
  }
];

// writes user input to svg file
inquirer.prompt(userInput)
  // get user answers
  // text, text color, shape, shape color

  // user selects, shape, then user selects color
  .then((answersObj) => {
    const { text, textColor, shape, shapeColor } = answersObj;
    let selectedShape 

    if (shape === 'circle') {
      selectedShape = new Circle()
    } else if (shape === 'square') {
      selectedShape = new Square()
    } else if (shape === 'triangle') {
      selectedShape = new Triangle()
    }

    selectedShape.setColor(shapeColor)
    selectedShape.setTextColor(textColor)
    selectedShape.text = text

    const svgMarkup = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${selectedShape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `

    // Creates Markup file based on user input from above
    fs.writeFile('./logo.svg', svgMarkup, 'utf8', (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  })