import { CurrentAccount } from './Current';
class Account2 extends CurrentAccount
 {
    nam: string;
    Acc_no: string;
    Acc_type: string;
    amt: number;
    dep: number;
    wit: number;

    constructor(n: string, an: string, at: string, a: number,d:number,w:number) {
        super(a,d,w,at)
        this.nam = n;
        this.Acc_no = an;
        this.amt = a;
        this.dep = d;
        this.wit = w;
        this.Acc_type = at;
        console.log("Name :" + this.nam);
        console.log("Account NUmber :" + this.Acc_no);
        console.log("Account Type :" + this.Acc_type);
        Account2.get_balance(this.amt);
    }
   
    static get_balance(f: number) {
        console.log("Balance is =" + f)
    }
}

let obj21 = new Account2("Piyush Katoch", "32137843076", "Current",50000,5000,45000)
obj21.deposit();
obj21.withdrawl();

let obj22 = new Account2("Piyush Katoch", "32137843076", "Savings", 50000, 5000, 45000)
obj22.deposit();
obj22.withdrawl();
