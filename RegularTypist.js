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
var Typist_1 = require("./Typist");
var RegularTypist = /** @class */ (function (_super) {
    __extends(RegularTypist, _super);
    function RegularTypist(n, c, sp) {
        return _super.call(this, n, c, sp) || this;
    }
    RegularTypist.prototype.getDetails = function () {
        console.log("Name: " + this.name);
        console.log("Code " + this.code);
        console.log("Speed: " + this.speed + " words per minute");
    };
    return RegularTypist;
}(Typist_1.Typist));
var rtypist = new RegularTypist("Shivani", 1913, 55);
rtypist.getDetails();
