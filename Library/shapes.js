class Shape {
    constructor() {
        this.color = '';
        this.textColor ='';
    }

    setColor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    render() {
      // <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  class Square extends Shape {
    render() {
      return `<rect points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }

  
  module.exports = { Circle, Triangle, Square };