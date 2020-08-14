class MyRightTriangle {
    s1: number;
    s2: number;
    s3: number;
    res: number;
    

    constructor(side1: number, side2: number, side3: number) {
        this.s1 = side1;
        this.s2 = side2;
        this.s3 = side3;
        this.res = MyRightTriangle.area(this.s1, this.s2, this.s3)
        if (this.res != 0) {
            console.log("Area of the right triangle with sides: " + this.s1 + "," + this.s2 + ",and" + this.s3 + " is " + this.res);
        } else {
            console.log("This is not a Right Triangle");

        }
    }
    

    public static isRightAngle(s1: number, s2: number, s3: number) {
        if ((s1 ** 2) == ((s2 ** 2) + (s3 ** 2))) {
            return true;
        }
        else {
            return false;
        }
       
    }

    public static area(s1: number, s2: number, s3: number) {
        var h = 0, p = 0, b = 0;
        if (s1 > s2 && s1 > s3) {
            h = s1;
            p = s2;
            b = s3;
        }
        else if (s2 > s1 && s2 > s3) {
            h = s2;
            p = s1;
            b = s3;
        }
        else if (s3 > s2 && s3 > s1) {
            h = s3;
            p = s1;
            b = s2;
        }
        else { return 0; }

        var check = MyRightTriangle.isRightAngle(h, p, b);
        if (check) {
            return(0.5*p*b)
        }
        else {
            return 0;

        }
    }
}

let obj4_1 = new MyRightTriangle(3,4,5)
let obj4_2 = new MyRightTriangle(3,4,3)
