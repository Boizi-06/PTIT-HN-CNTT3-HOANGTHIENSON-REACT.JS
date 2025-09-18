"use strict";
//  bai tap tong hop
Object.defineProperty(exports, "__esModule", { value: true });
/// b2 tao mot abstract class Animal;
class Animal {
    constructor(name, age, category) {
        this.age = age;
        this.name = name;
        this.category = category;
    }
    sound() {
        return ``;
    }
    getDetal() {
        return ``;
    }
    move() {
        return ``;
    }
    feed() {
        return ``;
    }
}
class Bird extends Animal {
    constructor(name, age, wingSpan) {
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    move() {
        return `phuong thuc di chuyen cua chim la bay`;
    }
}
class manMal extends Animal {
    constructor(name, age, funcolor) {
        super(name, age, funcolor);
        this.name = name;
        this.age = age;
        this.funcolor = funcolor;
    }
    move() {
        return `phuong thuc di chuyen la chay`;
    }
}
class repTital extends Animal {
    constructor(name, age, venomuus) {
        super(name, age, venomuus);
        this.name = name;
        this.age = age;
        this.venomuus = venomuus;
    }
    move() {
        return `phuong thuc di chuyen la bo`;
    }
}
//# sourceMappingURL=bttt.js.map