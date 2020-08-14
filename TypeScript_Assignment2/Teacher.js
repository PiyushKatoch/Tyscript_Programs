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
var Staff_1 = require("./Staff");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(n, c, sub, pub) {
        var _this = _super.call(this, n, c) || this;
        _this.subject = sub;
        _this.publication = pub;
        return _this;
    }
    Teacher.prototype.getDetails = function () {
        console.log("Name: " + this.name);
        console.log("Code " + this.code);
        console.log("Subject: " + this.subject);
        console.log("Publication: " + this.publication);
    };
    return Teacher;
}(Staff_1.Staff));
var teacher = new Teacher("Kuldeep", 1911, "Maths", "Xamidea");
teacher.getDetails();
