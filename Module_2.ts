export class regular {
    constructor() {    
    }
    display() {
         console.log("In Regular display")  
    }

}
export class casual {
    d: string;
    w: string;
    constructor(daily: string, wages: string) {
        this.d = daily;
        this.w = wages;
    }
    display() {
        console.log("Daily : " + this.d);
        console.log("Wages : " + this.w);
    }
}