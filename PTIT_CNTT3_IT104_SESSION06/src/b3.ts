// Abstract class
abstract class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Method thông thường
    public getName(): string {
        return this.name;
    }

    // Abstract method (chưa cài đặt)
    public abstract makeSound(): void;
}

// Lớp Dog kế thừa Animal
class Dog extends Animal {
    public makeSound(): void {
        console.log("Gâu gâu!");
    }
}

// Lớp Cat kế thừa Animal
class Cat extends Animal {
    public makeSound(): void {
        console.log("Meo meo!");
    }
}


const dog = new Dog("Chó Husky");
console.log(dog.getName()); // Method thường -> dùng được luôn
dog.makeSound();            // Abstract method -> phải cài đặt ở lớp con

const cat = new Cat("Mèo Anh");
console.log(cat.getName());
cat.makeSound();
