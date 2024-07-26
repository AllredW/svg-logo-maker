// TODO: Link relevant modules and scripts: inquirer, shapes.js, 
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: create object template for desired logo; properties include shape, color, text
class Logo {
    constructor(shape, color, text, textColor) {
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}
// TODO inquirer prompt package: logo text, text color, logo shape, logo color
inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to use for your logo? Scroll with the arrow keys, and press Space to select a shape.",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "input",
        name: "color",
        message: "What color would you like your logo to be? Enter a keyword, or use a hex code number.",
      },
      {
        type: "input",
        name: "text",
        message: "What text would you like to appear on your logo? Maximum of 3 characters.",
      },

      {
        type: "input",
        name: "color",
        message: "What color would you like your logo text to be? Enter a keyword, or use a hex code number.",
      },
]);
      // TODO: check that text has a max of 3 characters

// TODO: check that color/shape keywords are valid

// TODO: generate logo by passing in inquirer data
.then((answers) => {
    console.log(answers);
    // Pass inquirer answers to generateMarkdown

// checks that text length is less than 4 characters
if (text.length > 3) {
    throw new Error('Text must be no more than 3 characters long.');
  }
    // Regex for only allowing uppercase, lowercase, numbers, dashes, and underscores.
    const pattern = new RegExp('([A-Za-z0-9_-]+$)');
//   checks that both color keywords match a color

//   generate new Logo with answer parameters
    const newLogo = new Logo(`${shape}`,`${color}`, `${text}`, `${textColor}`,);
  });
