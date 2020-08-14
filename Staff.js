"use strict";
exports.__esModule = true;
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(n, c) {
        this.name = n;
        this.code = c;
    }
    Staff.prototype.getDetails = function () {
        console.log("Name: " + this.name);
        console.log("Code: " + this.code);
    };
    return Staff;
}());
exports.Staff = Staff;
// let staff=new Staff("Rakesh",1910);
// staff.getDetails();
