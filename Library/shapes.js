const color = require('color')


class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color
  }
  setTextColor(color) {
    this.setTextColor = color
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="50" y="20" rx="20" ry="20" width="150" height="150"
      style="fill${this.color}/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}


module.exports = { Circle, Triangle, Square };