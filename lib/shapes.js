// shape property database: circle, triangle, square
class Shape {
  constructor(text, shape, color) {
    this.text = text;
    this.shape = shape;
    this.color = color;
  }
  render() {
    // "triangle" shape is positioned roughly 50px higher than the "square" or "circle", when generated. This code adjusts the positioning, so that all shapes are centered in the generated field.

    let translationX = 0; // Center horizontally
    let translationY = -50; // Center vertically

    if (this.shape.includes("polygon")) { // Triangle
      translationY = 0;
    } else { 
      translationY = -50;
    }

// Generate image: white 300x200 field, with selected shape, text, and relevant colors based on input
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="background-color: white;">
        <rect x="0" y="0" width="300" height="200" fill="white" />
        <g transform="translate(${translationX}, ${translationY})">
          ${this.shape}
          ${this.text}
        </g>
      </svg>
    `;
  }

  // generate and position text, to display over the generated shape
   generateText(textColor, textBody) {

     // checks that text length is less than 4 characters
     if (answers.text.length > 3) {
      const errorMessage = "Text must be no more than 3 characters long."
       console.log(errorMessage);
     }

    // Calculate the position to center the text
    const textX = 150; 
    const textY = 150; 

    this.text = `<text x="${textX}" y="${textY}" font-size="60" text-anchor="middle" fill="${textColor}">${textBody}</text>`; // Adjust the font size as needed
  }

  generateShape(shapeType) {
    this.shape = shapeType.render();
  }
  createColor(shapeColor) {
    this.shapeColor = shapeColor
  }
}

// sub-classes for Shape, defines Triangle, Circle, and Square options
class Triangle extends Shape {
    constructor(color){
      super("Triangle", "<polygon points='150, 18 244, 182 56, 182'", color);
    }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill=${this.color} />`;
  }
}

class Circle extends Shape {
  constructor(color){
    super("Circle", `<circle cx="150" cy="150" r="75"`, color);
  }
  render() {
    return `<circle cx="150" cy="150" r="75" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color){
    super("Square", `<rect x="75" y="75" width="150" height="150"`, color);
  }
  render() {
    return `<rect x="75" y="75" width="150" height="150" fill="${this.color}" />`;
  }
}

module.exports = {Shape, Triangle, Circle, Square};