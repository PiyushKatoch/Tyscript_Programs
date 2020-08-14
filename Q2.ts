export class student {
    name: string;
    rollNumber: string;

    constructor(n: string, rn: string) {
        this.name = n;
        this.rollNumber = rn;
    }

    displayDetails() {
        console.log("Name: " + this.name);
        console.log("Roll Number: " + this.rollNumber);
    }
}
//let obj2 = new student("Piyush Katoch", "BT17GCS076")
//obj2.displayDetails();