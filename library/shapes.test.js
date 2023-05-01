// import shapes
const {Circle, Square, Triangle} = require("../lib/shapes");

//testing that a blue circle renders the right way
describe("Circle", () => {
    it("should render a circle", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual("<circle cx='50%' cy='50%' r='100' width='100%' height='100%' fill='blue' />");
    });
});

// test that a green square is rendered correctly
describe("Square", () => {
    it("should render a square", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual("<rect width='66.67%' height='100%' x='16.67%' y='0' fill='green' />");
    });
});

// test that a black triangle is rendered correctly
describe("Triangle", () => {
    it("should render a black triangle", () => {
        const shape = new Triangle();
        shape.setColor("black");
        expect(shape.render()).toEqual("<polygon points='150 0 25 200 275 200' height='100%' width='100%' fill='black' />");
    });
});