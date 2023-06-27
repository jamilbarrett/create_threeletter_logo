const inquirer = require('inquirer');
const fs = require('fs');


class Shape {
  constructor(cirlce, square, triangle) {
    this.circle = cirlce
    this.square = square
    this.triangle = triangle
  }
}


// Prompt user for input
const userInput = [
  {
    name: 'three',
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
    name: 'text color',
    message: 'Please select the color of your text'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select the desired shape',
    choices: ['cirlce', 'square', 'triangle']
  },
  {
    name: 'shape color',
    message: 'Please select the color of your chosen shape'
  }
];
// writes user input to svg file
inquirer.prompt(userInput)
  .then((answers) => {
    fs.writeFile('./logo.svg', JSON.stringify(answers), 'utf8', (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  })