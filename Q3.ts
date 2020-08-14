class circle {
    private rad: number;
    private color: string;

    constructor(r: number, c: string) {
        this.rad = r;
        this.color = c;
    }
    getRadius() {
        console.log("Radius of Circle " + this.rad);
    }
    getArea() {
        console.log("Area of Circle " + (2 * (22 / 7) * (this.rad**2)));
    }

}
let obj3 = new circle(2,"red")
obj3.getRadius();
obj3.getArea();
