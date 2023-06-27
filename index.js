const inquirer = require('inquirer');
const fs = require('fs');


class shape {
  constructor(cirlce, square, triangle) {
    this.circle

  }
}






const userInput = [
  {
    name: 'three',
    message: 'Please enter up to 3 characters'
  },
  {
    name: 'text color',
    message: 'Please select the color of your text'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select the desired shape',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    name: 'shape color',
    message: 'Please select the color of your chosen shape'
  }
];

inquirer.prompt(userInput)
  .then((answers) => {
    fs.writeFile('./logo.svg', JSON.stringify(answers), 'utf8', (err) => {
      if (err) throw err;
      console.log('Logo.SVG file has been created successfully.');
    });
  })