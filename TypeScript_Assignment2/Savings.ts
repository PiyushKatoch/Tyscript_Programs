export class SavingsAccount {
    amt: number
    dep: number
    wit: number
    type: string

    constructor(a: number, d: number, w: number, t: string) {
        this.amt = a;
        this.dep = d;
        this.wit = w;
        this.type = t;
    }
    static deposit(a:number,d:number) {
        //P = the principal investment amount(the initial deposit or loan amount)(here taken amt+ deposit
        //r = the annual interest rate(decimal)(5%)
        //n = the number of times that interest is compounded per unit t(12)
        //t = the time the money is invested or borrowed for(3 years)
        console.log("Balance after a deposit of " + d + " and applied interest " + ((a + d) * ((1 + (0.05 / 12)) ** 36)))
        console.log("Cheque Book  not available");
    }
    static withdrawl(a: number, d: number,w:number) {
        console.log("Balance after a withdrawal of" + w + " is " + (((a + d) * ((1 + (0.05 / 12)) ** 36)) - w));
        console.log("");
    }
}