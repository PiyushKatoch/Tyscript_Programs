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
//run "tsc -t es5 StaffQ3.ts" to compile
//node StaffQ3.js
var E2_Q3_1 = require("./E2_Q3");
var staffQ3 = /** @class */ (function (_super) {
    __extends(staffQ3, _super);
    function staffQ3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(staffQ3.prototype, "get_pay", {
        get: function () {
            return this.pay;
        },
        set: function (p) {
            this.pay = p;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(staffQ3.prototype, "get_school", {
        get: function () {
            return this.school;
        },
        set: function (s) {
            this.school = s;
        },
        enumerable: false,
        configurable: true
    });
    staffQ3.prototype.toString = function () {
        return (' School : ' + this.school + '; Pay :  ' + this.pay);
    };
    return staffQ3;
}(E2_Q3_1.person));
var Staff_Q3 = new staffQ3();
Staff_Q3.get_name = "Anuj Bakshi";
Staff_Q3.get_address = "Solan , Himachal Pradesh";
Staff_Q3.get_school = "St.Lukes sen.sen. School";
Staff_Q3.get_pay = 40000;
console.log(Staff_Q3.tostring());
console.log(Staff_Q3.toString());
