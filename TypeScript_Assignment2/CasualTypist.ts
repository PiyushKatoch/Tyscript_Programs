import { Typist } from "./Typist"

class CasualTypist extends Typist{

    daily_wages:number;

    constructor(n:string,c:number,sp:number,dw:number){
        super(n,c,sp);
        this.daily_wages=dw;
    }

    getDetails():void{
        console.log("Name: "+this.name);
        console.log("Code "+this.code);
        console.log("Speed: "+this.speed+" words per minute");
        console.log("Daily Wages: Rs."+this.daily_wages);
    }
}

let ctypist=new CasualTypist("Rani",1923,50,1000)
ctypist.getDetails();