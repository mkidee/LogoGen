// parent class of shape will pass a color type that all shapes would have in common
class Shape {
    constructor(){
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

//each individual class will return with its desired shape, and taking in an inputed color.
class Circle extends Shape {
    render() {
        return "<circle cx='50%' cy='50%' r='100' width='100%' height='100%' fill='" + this.color + "' />;";
    }
}

class Square extends Shape {
    render() {
        return "<rect width='66.67%' height='100%' x='16.67%' y='0' fill='" + this.color + "' />";
    }
}

class Triangle extends Shape {
    render() {
        return "<polygon points='150 0 25 200 275 200' height='100%' width='100%' fill='" + this.color + "' />";
    }
}

// exporting back to index
module.exports = {Circle, Square, Triangle};