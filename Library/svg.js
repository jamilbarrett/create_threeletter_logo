class SVG {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${this.shapeElement}
    
    ${this.textElement}
    </svg>`

    }

    setShape(shape) {
        this.shapeElement = shape.render()
    }
    
    setText(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}>${text}</text>`

    }
}



module.exports = SVG





let svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shapeString}

${textString}
</svg>` 

let shapeString = `<circle cx="150" cy="100" r="80" fill=${color} />`

let textString = `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${textcolor}>${text}</text>`






`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect x="90" y="40" width="120" height="120" fill="turquoise" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="#444">SVG</text>

</svg>`