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
var Officer = /** @class */ (function (_super) {
    __extends(Officer, _super);
    function Officer(n, c, g) {
        var _this = _super.call(this, n, c) || this;
        _this.grade = g;
        return _this;
    }
    Officer.prototype.getDetails = function () {
        console.log("Name: " + this.name);
        console.log("Code " + this.code);
        console.log("Grade: " + this.grade);
    };
    return Officer;
}(Staff_1.Staff));
var officer = new Officer("Ram", 1934, "Rank-1 Officer");
officer.getDetails();
