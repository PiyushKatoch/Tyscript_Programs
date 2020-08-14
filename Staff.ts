export class Staff{

    name:string;
    code:number;

    constructor(n:string,c:number){
        this.name=n;
        this.code=c;
    }

    getDetails():void{
        console.log("Name: "+this.name);
        console.log("Code: "+this.code);
    }
}

// let staff=new Staff("Rakesh",1910);
// staff.getDetails();