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
var Current_1 = require("./Current");
var Account2 = /** @class */ (function (_super) {
    __extends(Account2, _super);
    function Account2(n, an, at, a, d, w) {
        var _this = _super.call(this, a, d, w, at) || this;
        _this.nam = n;
        _this.Acc_no = an;
        _this.amt = a;
        _this.dep = d;
        _this.wit = w;
        _this.Acc_type = at;
        console.log("Name :" + _this.nam);
        console.log("Account NUmber :" + _this.Acc_no);
        console.log("Account Type :" + _this.Acc_type);
        Account2.get_balance(_this.amt);
        return _this;
    }
    Account2.get_balance = function (f) {
        console.log("Balance is =" + f);
    };
    return Account2;
}(Current_1.CurrentAccount));
var obj21 = new Account2("Piyush Katoch", "32137843076", "Current", 50000, 5000, 45000);
obj21.deposit();
obj21.withdrawl();
var obj22 = new Account2("Piyush Katoch", "32137843076", "Savings", 50000, 5000, 45000);
obj22.deposit();
obj22.withdrawl();
