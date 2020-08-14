import { student } from './Q2';
class CSStudent extends student {
    specialization: string;

    constructor(n: string, rn: string,spec:string) {
        super(n, rn);
        this.specialization = spec;
    }
    displayDetails() {
        console.log("Name: " + this.name);
        console.log("Roll Number: " + this.rollNumber);
        console.log("Specialization: " + this.specialization);
    }

} 
let obj7 = new CSStudent("Piyush Katoch", "BT17GCS076", "Data Science");
obj7.displayDetails();