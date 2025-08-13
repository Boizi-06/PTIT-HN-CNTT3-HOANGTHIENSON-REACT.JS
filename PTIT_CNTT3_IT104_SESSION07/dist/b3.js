// Lớp abstract Animal
class Animal {
    constructor(name) {
        this.name = name;
    }
    // Phương thức in tên
    printName() {
        console.log(`Tên: ${this.name}`);
    }
}
// Lớp Cat kế thừa từ Animal
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
// Lớp Dog kế thừa từ Animal
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
// --- Chạy thử ---
const myCat = new Cat("Mèo Mun");
const myDog = new Dog("Cún Vàng");
myCat.printName(); // In tên
myCat.makeNoise(); // Tiếng kêu
myDog.printName();
myDog.makeNoise();
export {};
//# sourceMappingURL=b3.js.map