import { Staff } from "./Staff"

class Teacher extends Staff{

    subject:string;
    publication:string;

    constructor(n:string,c:number,sub:string,pub:string){
        super(n,c);
        this.subject=sub;
        this.publication=pub;
    }

    getDetails():void{
        console.log("Name: "+this.name);
        console.log("Code "+this.code);
        console.log("Subject: "+this.subject);
        console.log("Publication: "+this.publication);
    }
}

let teacher=new Teacher("Kuldeep",1911,"Maths","Xamidea");
teacher.getDetails();