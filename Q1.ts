class Q1 {
    num: number;
    count: number;
    sum: number;
    temp: number;
    large: number;
    i: number;
    rev : number;

    constructor(n: number) {
        this.num = n;
    }

    digitcount() {
        this.count = 0;
        this.i = this.num;
        
        do{
            this.i =Math.abs(this.i/ 10);
            this.count++;   
        } while (this.i > 1)
        console.log("Number of Digits: " + this.count);
    }

    numsum() {
        this.sum = 0;
        this.temp = 0;
        this.i = this.num;
        
        while (this.i > 0){
            this.temp = this.i % 10;
            this.i = Math.floor(this.i / 10);
            this.sum = this.sum + this.temp;
            
        } 
        console.log("Sum of Digits: " + Math.abs(this.sum));
    }

    largest() {
        this.large = 0;
        this.temp = 0;
        this.i = this.num;
        do {
            this.temp = this.i % 10;
            if (this.temp > this.large) {
                this.large = this.temp;
            }
            this.i = Math.floor(this.i / 10);
        } while (this.i > 0)
        console.log("Largest digit: " + this.large);
    }

    pallindrom() {
        this.rev=0
        this.i = this.num;
        while (this.i > 0){
            this.temp = this.i % 10;
            this.rev=this.rev+ (this.temp)*(10**(this.count-1))
            this.i = Math.floor(this.i / 10);
            this.count = this.count - 1;
        } 

        if ((this.num - this.rev) == 0) {
            console.log(this.rev+" is a Pallindrom Number");
        } else {
            console.log(this.rev + " is not a Pallindrom Number");
        }



    }
}
let obj1_1= new Q1(12321)
obj1_1.digitcount();
obj1_1.numsum();
obj1_1.largest();
obj1_1.pallindrom();
let obj1_2 = new Q1(12134)
obj1_2.digitcount();
obj1_2.numsum();
obj1_2.largest();
obj1_2.pallindrom();