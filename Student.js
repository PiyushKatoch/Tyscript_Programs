"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//run "tsc -t es5 Student.ts" to compile
//node Student.js
var E2_Q3_1 = require("./E2_Q3");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Student.prototype, "get_Year", {
        get: function () {
            return this.year;
        },
        set: function (y) {
            this.year = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "get_fee", {
        get: function () {
            return this.fee;
        },
        set: function (f) {
            this.fee = f;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "get_program", {
        get: function () {
            return this.prog;
        },
        set: function (p) {
            this.prog = p;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.toString = function () {
        return (' Year : ' + this.year + '; Program :  ' + this.prog + '; Fee :  ' + this.fee);
    };
    return Student;
}(E2_Q3_1.person));
var Student_Q3 = new Student();
Student_Q3.get_name = "Piyush Katoch";
Student_Q3.get_address = "Solan , Himachal Pradesh";
Student_Q3.get_Year = 2021;
Student_Q3.get_fee = 100000;
Student_Q3.get_program = "CSE";
console.log(Student_Q3.tostring());
console.log(Student_Q3.toString());
