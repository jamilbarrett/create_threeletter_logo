

class Shape {
  constructor() {
    this.color = '';
    this.textColor = '';
  }

  setColor(color) {
    this.color = color
  }
  setTextColor(color) {
    this.textColor = color
  }
}

class Circle extends Shape {
  render() {
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
    return `<rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:${this.color}" />`;
  }
}


module.exports = { Circle, Triangle, Square };