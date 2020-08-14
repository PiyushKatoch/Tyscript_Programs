"use strict";
exports.__esModule = true;
exports.officer = exports.typist = exports.teacher = void 0;
var teacher = /** @class */ (function () {
    function teacher(sub, pub) {
        this.s = sub;
        this.p = pub;
    }
    teacher.prototype.display = function () {
        console.log("Teacher 's subject : " + this.s);
        console.log("Teacher 's publication : " + this.p);
    };
    return teacher;
}());
exports.teacher = teacher;
var typist = /** @class */ (function () {
    function typist(sp) {
        this.speed = sp;
    }
    typist.prototype.display = function () {
        console.log("Typist 's speed : " + this.speed);
    };
    return typist;
}());
exports.typist = typist;
var Module_2_1 = require("./Module_2");
var objre = new Module_2_1.regular();
var objca = new Module_2_1.casual("Yes", "20000");
objre.display();
objca.display();
var officer = /** @class */ (function () {
    function officer(gr) {
        this.g = gr;
    }
    officer.prototype.display = function () {
        console.log("Officer 's garde : " + this.g);
    };
    return officer;
}());
exports.officer = officer;
