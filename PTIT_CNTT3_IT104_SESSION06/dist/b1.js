"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract class Shape
class Shape {
    constructor(name) {
        this.name = name;
    }
    // Lấy tên của hình
    getName() {
        return this.name;
    }
}
// Lớp Rectangle kế thừa Shape
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name); // Gọi constructor của Shape
        this.width = width;
        this.height = height;
    }
    // Override phương thức getSize
    getSize() {
        console.log(`Chiều rộng: ${this.width}, Chiều cao: ${this.height}`);
    }
}
const rect = new Rectangle("Hình chữ nhật", 10.5, 5.2);
console.log("Tên hình:", rect.getName());
rect.getSize();
//# sourceMappingURL=b1.js.map