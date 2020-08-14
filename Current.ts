import { SavingsAccount } from './Savings';
export class CurrentAccount extends SavingsAccount{
    amt: number
    dep: number
    wit: number
    type : string

    constructor(a: number, d: number, w: number, t: string) {
        super(a,d,w,t)
        this.amt = a;
        this.dep = d;
        this.wit = w;
        this.type = t;
    }
    deposit() {
        if (this.type == "Current") {
            console.log("Balance after a deposit of " + this.dep + " is " + (this.amt + this.dep))
            console.log("Cheque Book facility available");
        } else {
            SavingsAccount.deposit(this.amt,this.dep)
        }
    }
    withdrawl() {
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
            SavingsAccount.withdrawl(this.amt, this.dep, this.wit)
        }
    }

}