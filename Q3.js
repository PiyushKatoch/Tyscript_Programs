var circle = /** @class */ (function () {
    function circle(r, c) {
        this.rad = r;
        this.color = c;
    }
    circle.prototype.getRadius = function () {
        console.log("Radius of Circle " + this.rad);
    };
    circle.prototype.getArea = function () {
        console.log("Area of Circle " + (2 * (22 / 7) * (Math.pow(this.rad, 2))));
    };
    return circle;
}());
var obj3 = new circle(2, "red");
obj3.getRadius();
obj3.getArea();
