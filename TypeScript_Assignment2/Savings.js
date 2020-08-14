"use strict";
exports.__esModule = true;
exports.SavingsAccount = void 0;
var SavingsAccount = /** @class */ (function () {
    function SavingsAccount(a, d, w, t) {
        this.amt = a;
        this.dep = d;
        this.wit = w;
        this.type = t;
    }
    SavingsAccount.deposit = function (a, d) {
        //P = the principal investment amount(the initial deposit or loan amount)(here taken amt+ deposit
        //r = the annual interest rate(decimal)(5%)
        //n = the number of times that interest is compounded per unit t(12)
        //t = the time the money is invested or borrowed for(3 years)
        console.log("Balance after a deposit of " + d + " and applied interest " + ((a + d) * (Math.pow((1 + (0.05 / 12)), 36))));
        console.log("Cheque Book  not available");
    };
    SavingsAccount.withdrawl = function (a, d, w) {
        console.log("Balance after a withdrawal of" + w + " is " + (((a + d) * (Math.pow((1 + (0.05 / 12)), 36))) - w));
        console.log("");
    };
    return SavingsAccount;
}());
exports.SavingsAccount = SavingsAccount;
