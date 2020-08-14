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
exports.__esModule = true;
var Q2_1 = require("./Q2");
var CSStudent = /** @class */ (function (_super) {
    __extends(CSStudent, _super);
    function CSStudent(n, rn, spec) {
        var _this = _super.call(this, n, rn) || this;
        _this.specialization = spec;
        return _this;
    }
    CSStudent.prototype.displayDetails = function () {
        console.log("Name: " + this.name);
        console.log("Roll Number: " + this.rollNumber);
        console.log("Specialization: " + this.specialization);
    };
    return CSStudent;
}(Q2_1.student));
var obj2 = new CSStudent("Piyush Katoch", "BT17GCS076", "Data Science");
obj2.displayDetails();
