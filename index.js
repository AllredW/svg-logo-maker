// Link relevant modules and scripts: inquirer, shapes.js,
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const {Shape, Triangle, Circle, Square} = require("./lib/shapes.js");

// inquirer prompt package: logo text, text color, logo shape, logo color
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
  .then((answers) => {
    console.log(answers);

    // Pass inquirer answers to generate the correct shape
    let shapeData;
    switch (answers.shape) {
      case "Circle":
      console.log(answers.color);
        newShape = new Circle(answers.color);
        console.log(newShape);
        break;

      case "Square":
        newShape = new Square(answers.color);
        break;

      default:
        console.log(answers.color);
        newShape = new Triangle(answers.color);
        break;
    }

    //   generate new Logo with answer parameters
    // const newLogo = new Logo(`${shape}`,`${color}`, `${text}`, `${textColor}`,);
    const svg = new Shape();
    
// generate shape, text, and write to SVG file
    svg.generateShape(newShape);
    svg.generateText(answers.textColor, answers.text);

    return writeFile("./examples/Logo.svg", svg.render());
  });