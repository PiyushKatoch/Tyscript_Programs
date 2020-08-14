//run "tsc -t es5 StaffQ3.ts" to compile
//node StaffQ3.js
import { person } from './E2_Q3';
class staffQ3 extends person {
    private pay: number;
    private school: string;

    get get_pay(): number {
        return this.pay;
    }

    get get_school(): string {
        return this.school;
    }

    set get_pay(p: number) {
        this.pay = p;
    }

    set get_school(s: string) {
        this.school = s;
    }

    toString(): string {
        return (' School : ' + this.school + '; Pay :  ' + this.pay)
    }
}

let Staff_Q3 = new staffQ3();
Staff_Q3.get_name = "Anuj Bakshi"
Staff_Q3.get_address = "Solan , Himachal Pradesh"
Staff_Q3.get_school = "St.Lukes sen.sen. School"
Staff_Q3.get_pay = 40000
console.log(Staff_Q3.tostring())
console.log(Staff_Q3.toString())
