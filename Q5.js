var Account = /** @class */ (function () {
    function Account(n, an, ia, ad, at, fa) {
        this.nam = n;
        this.Acc_no = an;
        this.ini_amt = ia;
        this.Address = ad;
        this.fin_amt = fa;
        this.Acc_type = at;
        console.log("Name :" + this.nam);
        console.log("Account NUmber :" + this.Acc_no);
        console.log("Account Type :" + this.Acc_type);
        console.log("Address :" + this.Address);
        console.log("INitial Balance :" + this.ini_amt);
        if (this.ini_amt > this.fin_amt) {
            Account.Withdraw(this.ini_amt, this.fin_amt);
        }
        else if (this.ini_amt < this.fin_amt) {
            Account.Deposit(this.ini_amt, this.fin_amt);
        }
        else {
            Account.get_balance(this.fin_amt);
        }
    }
    Account.Withdraw = function (i, f) {
        console.log("Money Withdrawn =" + (i - f));
        Account.get_balance(f);
    };
    Account.Deposit = function (i, f) {
        console.log("Money Deposited =" + (f - i));
        Account.get_balance(f);
    };
    Account.get_balance = function (f) {
        console.log("Balance is =" + f);
    };
    return Account;
}());
var obj5 = new Account("Piyush Katoch", "32137843076", 2000000, "Solan, Himachal Pradesh", "Savings", 5000000);
