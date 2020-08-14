import { Staff } from "./Staff"

export class Typist extends Staff{

    speed:number;

    constructor(n:string,c:number,sp:number){
        super(n,c);
        this.speed=sp;
    }

    getDetails(){
        console.log("Name: "+this.name);
        console.log("Code: "+this.code);
        console.log("Speed: "+this.speed+" words per minute");
    }
}

 let typist=new Typist("Radha",1011,49);
  typist.getDetails();