"use strict";
exports.__esModule = true;
exports.casual = exports.regular = void 0;
var regular = /** @class */ (function () {
    function regular() {
    }
    regular.prototype.display = function () {
        console.log("In Regular display");
    };
    return regular;
}());
exports.regular = regular;
var casual = /** @class */ (function () {
    function casual(daily, wages) {
        this.d = daily;
        this.w = wages;
    }
    casual.prototype.display = function () {
        console.log("Daily : " + this.d);
        console.log("Wages : " + this.w);
    };
    return casual;
}());
exports.casual = casual;
