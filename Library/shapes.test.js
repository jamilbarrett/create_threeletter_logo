const { Circle, Triangle, Square } = require('./shapes')

describe('Circle', () => {
    test("Render shape with selected color", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');

    })

})


describe('Triangle', () => {
    test("Render shape with selected color", () => {
        const shape = new Triangle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="yellow" />');

    })

})


describe('Square', () => {
    test("Render shape with selected color", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:green" />');

    })

})