export class teacher {
    s: string;
    p: string;
    constructor(sub: string, pub: string) {
    this.s = sub;
    this.p = pub;
    }
    display() {
        console.log("Teacher 's subject : " + this.s)
        console.log("Teacher 's publication : " + this.p)
    }

}
export class typist {
    speed: string;
    constructor(sp: string, ) {
        this.speed = sp;
    }
    display() {
        console.log("Typist 's speed : " + this.speed);
    }
}
import { regular, casual } from './Module_2'
let objre = new regular();
let objca = new casual("Yes", "20000");
objre.display();
objca.display();

export class officer {
    g: string;
    constructor(gr: string, ) {
        this.g = gr;
    }
    display() {
        console.log("Officer 's garde : " + this.g)
    }

}

