class staff {
    n: string;
    c: number;
    constructor(n: string, c: number) {
        this.n = n;
        this.c = c;
    }
    display() {
        console.log("Staff 's name : " + this.n)
        console.log("Staff 's code : " + this.c)
    }

}

let objst = new staff("Raghav Mittal", 346327);
objst.display();

import { teacher, typist, officer } from './Module_1'

let objte = new teacher("Data Science", "Oxford publication");
let objty = new typist("Fast - 50 word/minute");
let objof = new officer("Rank-2 officer");

objte.display();
objty.display();
objof.display();