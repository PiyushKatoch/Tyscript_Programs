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
exports.CurrentAccount = void 0;
var Savings_1 = require("./Savings");
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(a, d, w, t) {
        var _this = _super.call(this, a, d, w, t) || this;
        _this.amt = a;
        _this.dep = d;
        _this.wit = w;
        _this.type = t;
        return _this;
    }
    CurrentAccount.prototype.deposit = function () {
        if (this.type == "Current") {
            console.log("Balance after a deposit of " + this.dep + " is " + (this.amt + this.dep));
            console.log("Cheque Book facility available");
        }
        else {
            Savings_1.SavingsAccount.deposit(this.amt, this.dep);
        }
    };
    CurrentAccount.prototype.withdrawl = function () {
        if (this.type == "Current") {
            if ((this.amt + this.dep - this.wit) < 20000) {
                console.log("Balance after a withdrawal of " + this.wit + " is " + (this.amt + this.dep - this.wit - 1000));
                console.log("Penalty of 1000 is imposed as the Minimum Balance is not maintained");
            }
            else {
                console.log("Balance after a withdrawal of " + this.wit + " is " + (this.amt + this.dep - this.wit));
                console.log("  ");
            }
        }
        else {
            Savings_1.SavingsAccount.withdrawl(this.amt, this.dep, this.wit);
        }
    };
    return CurrentAccount;
}(Savings_1.SavingsAccount));
exports.CurrentAccount = CurrentAccount;
