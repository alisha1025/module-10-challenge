import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer'; // Importing using ES Module syntax
import { Circle, Triangle, Square } from './lib/shapes.js'; 

function generateSVG(text, textColor, shape, shapeColor) {
  let shapeElement;

  switch (shape) {
    case 'circle':
      shapeElement = new Circle(shapeColor).render();
      break;
    case 'triangle':
      shapeElement = new Triangle(shapeColor).render();
      break;
    case 'square':
      shapeElement = new Square(shapeColor).render();
      break;
    default:
      throw new Error('Invalid shape');
  }

  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement}
      <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}

async function run() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: input => input.length <= 3 ? true : 'Text must be up to three characters long'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (name or hex code):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (name or hex code):'
    }
  ]);

  const { text, textColor, shape, shapeColor } = answers;
  const svgContent = generateSVG(text, textColor, shape, shapeColor);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

run().catch(error => {
  console.error('Error:', error.message);
});
