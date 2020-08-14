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
var CasualTypist = /** @class */ (function (_super) {
    __extends(CasualTypist, _super);
    function CasualTypist(n, c, sp, dw) {
        var _this = _super.call(this, n, c, sp) || this;
        _this.daily_wages = dw;
        return _this;
    }
    CasualTypist.prototype.getDetails = function () {
        console.log("Name: " + this.name);
        console.log("Code " + this.code);
        console.log("Speed: " + this.speed + " words per minute");
        console.log("Daily Wages: Rs." + this.daily_wages);
    };
    return CasualTypist;
}(Typist_1.Typist));
var ctypist = new CasualTypist("Rani", 1923, 50, 1000);
ctypist.getDetails();
