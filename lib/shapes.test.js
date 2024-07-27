// Confirm that all shapes generate properly when called by inquirer prompts
// const inquirer = require("inquirer");
// const { writeFile } = require("fs/promises");
// // const {Shape, Triangle, Circle, Square} = require("./lib/shapes.js");
// const index = require("index.js")
const generateText = require('./shapes');

describe('Shape', () => {
it('should return an error for text greater than 3 characters long', () => {
  const textColor = "red"
  const textBody = "1234"
  const newText = generateText(textColor, textBody)

  expect(generateText).toThrow(errorMessage);
});
});
