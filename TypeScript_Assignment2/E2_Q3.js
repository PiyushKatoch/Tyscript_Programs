"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
var person = /** @class */ (function () {
    function person() {
    }
    Object.defineProperty(person.prototype, "get_name", {
        get: function () {
            return this.n;
        },
        set: function (name) {
            this.n = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(person.prototype, "get_address", {
        get: function () {
            return this.add;
        },
        set: function (a) {
            this.add = a;
        },
        enumerable: false,
        configurable: true
    });
    person.prototype.tostring = function () {
        var y = 'Name : ' + this.n + '; Address  : ' + this.add;
        return (y);
    };
    return person;
}());
exports.person = person;
