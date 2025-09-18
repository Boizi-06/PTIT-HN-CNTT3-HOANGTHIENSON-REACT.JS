

// Lớp abstract Animal
abstract class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Phương thức abstract - lớp con phải cài đặt lại
    abstract makeNoise(): void;

    // Phương thức in tên
    public printName(): void {
        console.log(`Tên: ${this.name}`);
    }
}

// Lớp Cat kế thừa từ Animal
class Cat extends Animal {
    public makeNoise(): void {
        console.log("meo meo");
    }
}

// Lớp Dog kế thừa từ Animal
class Dog extends Animal {
    public makeNoise(): void {
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
