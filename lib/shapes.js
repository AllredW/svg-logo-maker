// shape property database: circle, triangle, square
class Shape {
  constructor(text) {
    this.text = text;
  }
  render() {
    return `<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg">

${this.text}

</svg>`;
  }
  generateText(textColor, textBody) {
    // Loop over children and convert any children that aren't strings to an
    // html string by calling its render method.
this.text =`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textBody}</text>`;
}}

module.exports = Shape;

// subclass: Triangle
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// subclass: Circle
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <circle cx="150" cy="100" r="80" fill="green" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>

// subclass: Square
{/* <rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/> */}
