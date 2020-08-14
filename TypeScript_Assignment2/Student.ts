//run "tsc -t es5 Student.ts" to compile
//node Student.js
import { person } from './E2_Q3';
class Student extends person {
    private year: number;
    private fee: number;
    private prog: string;
    
    get get_Year(): number {
        return this.year;
    }

    get get_fee(): number {
        return this.fee;
    }

    get get_program(): string {
        return this.prog;
    }

    set get_Year(y: number) {
        this.year = y;
    }

    set get_fee(f: number) {
        this.fee = f;
    }

    set get_program(p: string) {
        this.prog = p;
    }

    toString(): string {
         return (' Year : ' + this.year + '; Program :  ' + this.prog + '; Fee :  ' +this.fee)
    }
}

let Student_Q3 = new Student();
Student_Q3.get_name = "Piyush Katoch"
Student_Q3.get_address = "Solan , Himachal Pradesh"
Student_Q3.get_Year = 2021
Student_Q3.get_fee = 100000
Student_Q3.get_program = "CSE"
console.log(Student_Q3.tostring())
console.log(Student_Q3.toString())
