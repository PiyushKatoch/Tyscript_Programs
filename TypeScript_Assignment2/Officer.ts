import { Staff } from "./Staff"

class Officer extends Staff{

    grade:string;

    constructor(n:string,c:number,g:string){
        super(n,c);
        this.grade=g;
    }

    getDetails():void{
        console.log("Name: "+this.name);
        console.log("Code "+this.code);
        console.log("Grade: "+this.grade);
    }
}

let officer=new Officer("Ram",1934,"Rank-1 Officer");
officer.getDetails();