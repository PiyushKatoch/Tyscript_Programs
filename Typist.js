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
exports.Typist = void 0;
var Staff_1 = require("./Staff");
var Typist = /** @class */ (function (_super) {
    __extends(Typist, _super);
    function Typist(n, c, sp) {
        var _this = _super.call(this, n, c) || this;
        _this.speed = sp;
        return _this;
    }
    Typist.prototype.getDetails = function () {
        console.log("Name: " + this.name);
        console.log("Code: " + this.code);
        console.log("Speed: " + this.speed + " words per minute");
    };
    return Typist;
}(Staff_1.Staff));
exports.Typist = Typist;
var typist = new Typist("Radha", 1011, 49);
typist.getDetails();
