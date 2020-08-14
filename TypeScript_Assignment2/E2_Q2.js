"use strict";
exports.__esModule = true;
var staff = /** @class */ (function () {
    function staff(n, c) {
        this.n = n;
        this.c = c;
    }
    staff.prototype.display = function () {
        console.log("Staff 's name : " + this.n);
        console.log("Staff 's code : " + this.c);
    };
    return staff;
}());
var objst = new staff("Raghav Mittal", 346327);
objst.display();
var Module_1_1 = require("./Module_1");
var objte = new Module_1_1.teacher("Data Science", "Oxford publication");
var objty = new Module_1_1.typist("Fast - 50 word/minute");
var objof = new Module_1_1.officer("Rank-2 officer");
objte.display();
objty.display();
objof.display();
