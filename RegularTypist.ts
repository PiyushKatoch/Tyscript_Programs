import {Typist} from "./Typist"

class RegularTypist extends Typist{

    constructor(n:string,c:number,sp:number){
        super(n,c,sp);
    }

    getDetails():void{
        console.log("Name: "+this.name);
        console.log("Code "+this.code);
        console.log("Speed: "+this.speed+" words per minute");
    }
}

let rtypist=new RegularTypist("Shivani",1913,55);
rtypist.getDetails();