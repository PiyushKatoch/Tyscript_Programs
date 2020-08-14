class Vector {
    vector: number[]

    constructor(n : number[]) {
        this.vector = n;
        Vector.print(this.vector)
    }


    static print(vec: number[]) {
        for (var i = 0; i < vec.length; i++) {
            console.log(vec[i]);
        }
    }

    Scaler_multiplication(sn: number) {
        console.log("Vector after multipling it by scaler "+sn)
        for (var i = 0; i < this.vector.length; i++) {
            this.vector[i] = this.vector[i] * sn;
        }
        Vector.print(this.vector)
    }


    modify(val: number, new_val: number) {
        var temp = val;
        var flag = 0;
        for (var i = 0; i < this.vector.length; i++) {
            if (this.vector[i] == val) {
                this.vector[i] = new_val;
                flag = 1;
            }
        }
            if (flag=1) {
                console.log("Vector value " + temp + " modified to " + new_val);
            } else {
                console.log("This value doesn't exists in the vector")
            }
        
    }

    special_display() {
        var st="("
        for (var i = 0; i < this.vector.length; i++) {
            if (i != this.vector.length - 1) {
                st = st + String(this.vector[i]) + ",";
            } else {
                st = st + String(this.vector[i]);
            }
        }
        st = st + ")";
        console.log(st);
    }

   

}
let obj6 = new Vector([2, 3, 4, 6, 32, 434, 23, 2, 323])
obj6.modify(4, 300);
obj6.Scaler_multiplication(2);
obj6.special_display();