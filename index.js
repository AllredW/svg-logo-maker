// TODO: Link relevant modules and scripts: inquirer, shapes.js,
const inquirer = require("inquirer");
const {writeFile} = require("fs/promises");
const Shape = require("./lib/shapes.js");

// TODO inquirer prompt package: logo text, text color, logo shape, logo color
inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message:
        "What shape would you like to use for your logo? Scroll with the arrow keys, and press Space to select a shape.",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "color",
      message:
        "What color would you like your logo to be? Enter a keyword, or use a hex code number.",
    },
    {
      type: "input",
      name: "text",
      message:
        "What text would you like to appear on your logo? Maximum of 3 characters.",
    },

    {
      type: "input",
      name: "textColor",
      message:
        "What color would you like your logo text to be? Enter a keyword, or use a hex code number.",
    },
  ])
  // TODO: check that text has a max of 3 characters

  // TODO: generate logo by passing in inquirer data
  .then((answers) => {
    console.log(answers);
    // Pass inquirer answers to generateMarkdown
    //     let shapeData;
    // switch (answers.shape) {
    //   case "circle":
    //   // shapeData =  new Circle;
    //     break;

    //     case "square":
    //     // shapeData =  new Square;
    //     break;

    //   default:
    //   // shapeData =  new Triangle;
    //     break;
    // }
    // checks that text length is less than 4 characters
    if (answers.text.length > 3) {
      throw new Error("Text must be no more than 3 characters long.");
    }
    //   generate new Logo with answer parameters
    // const newLogo = new Logo(`${shape}`,`${color}`, `${text}`, `${textColor}`,);
    const svg = new Shape
    svg.generateText(answers.textColor, answers.text);
    return writeFile("./examples/Logo.svg", svg.render())
  });
