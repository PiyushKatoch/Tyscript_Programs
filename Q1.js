var Q1 = /** @class */ (function () {
    function Q1(n) {
        this.num = n;
    }
    Q1.prototype.digitcount = function () {
        this.count = 0;
        this.i = this.num;
        do {
            this.i = Math.abs(this.i / 10);
            this.count++;
        } while (this.i > 1);
        console.log("Number of Digits: " + this.count);
    };
    Q1.prototype.numsum = function () {
        this.sum = 0;
        this.temp = 0;
        this.i = this.num;
        while (this.i > 0) {
            this.temp = this.i % 10;
            this.i = Math.floor(this.i / 10);
            this.sum = this.sum + this.temp;
        }
        console.log("Sum of Digits: " + Math.abs(this.sum));
    };
    Q1.prototype.largest = function () {
        this.large = 0;
        this.temp = 0;
        this.i = this.num;
        do {
            this.temp = this.i % 10;
            if (this.temp > this.large) {
                this.large = this.temp;
            }
            this.i = Math.floor(this.i / 10);
        } while (this.i > 0);
        console.log("Largest digit: " + this.large);
    };
    Q1.prototype.pallindrom = function () {
        this.rev = 0;
        this.i = this.num;
        while (this.i > 0) {
            this.temp = this.i % 10;
            this.rev = this.rev + (this.temp) * (Math.pow(10, (this.count - 1)));
            this.i = Math.floor(this.i / 10);
            this.count = this.count - 1;
        }
        if ((this.num - this.rev) == 0) {
            console.log(this.rev + " is a Pallindrom Number");
        }
        else {
            console.log(this.rev + " is not a Pallindrom Number");
        }
    };
    return Q1;
}());
var obj1_1 = new Q1(12321);
obj1_1.digitcount();
obj1_1.numsum();
obj1_1.largest();
obj1_1.pallindrom();
var obj1_2 = new Q1(12134);
obj1_2.digitcount();
obj1_2.numsum();
obj1_2.largest();
obj1_2.pallindrom();
