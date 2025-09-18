"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract class
class Animal {
    constructor(name) {
        this.name = name;
    }
    // Method thông thường
    getName() {
        return this.name;
    }
}
// Lớp Dog kế thừa Animal
class Dog extends Animal {
    makeSound() {
        console.log("Gâu gâu!");
    }
}
// Lớp Cat kế thừa Animal
class Cat extends Animal {
    makeSound() {
        console.log("Meo meo!");
    }
}
const dog = new Dog("Chó Husky");
console.log(dog.getName()); // Method thường -> dùng được luôn
dog.makeSound(); // Abstract method -> phải cài đặt ở lớp con
const cat = new Cat("Mèo Anh");
console.log(cat.getName());
cat.makeSound();
//# sourceMappingURL=b3.js.map