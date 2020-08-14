var Vector = /** @class */ (function () {
    function Vector(n) {
        this.vector = n;
        Vector.print(this.vector);
    }
    Vector.print = function (vec) {
        for (var i = 0; i < vec.length; i++) {
            console.log(vec[i]);
        }
    };
    Vector.prototype.Scaler_multiplication = function (sn) {
        console.log("Vector after multipling it by scaler " + sn);
        for (var i = 0; i < this.vector.length; i++) {
            this.vector[i] = this.vector[i] * sn;
        }
        Vector.print(this.vector);
    };
    Vector.prototype.modify = function (val, new_val) {
        var temp = val;
        var flag = 0;
        for (var i = 0; i < this.vector.length; i++) {
            if (this.vector[i] == val) {
                this.vector[i] = new_val;
                flag = 1;
            }
        }
        if (flag = 1) {
            console.log("Vector value " + temp + " modified to " + new_val);
        }
        else {
            console.log("This value doesn't exists in the vector");
        }
    };
    Vector.prototype.special_display = function () {
        var st = "(";
        for (var i = 0; i < this.vector.length; i++) {
            if (i != this.vector.length - 1) {
                st = st + String(this.vector[i]) + ",";
            }
            else {
                st = st + String(this.vector[i]);
            }
        }
        st = st + ")";
        console.log(st);
    };
    return Vector;
}());
var obj6 = new Vector([2, 3, 4, 6, 32, 434, 23, 2, 323]);
obj6.modify(4, 300);
obj6.Scaler_multiplication(2);
obj6.special_display();
//# sourceMappingURL=Q6.js.map