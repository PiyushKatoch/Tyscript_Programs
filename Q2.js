"use strict";
exports.__esModule = true;
exports.student = void 0;
var student = /** @class */ (function () {
    function student(n, rn) {
        this.name = n;
        this.rollNumber = rn;
    }
    student.prototype.displayDetails = function () {
        console.log("Name: " + this.name);
        console.log("Roll Number: " + this.rollNumber);
    };
    return student;
}());
exports.student = student;
var obj2 = new student("Piyush Katoch", "BT17GCS076");
//obj2.displayDetails();
