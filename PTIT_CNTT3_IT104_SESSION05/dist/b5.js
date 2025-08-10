"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Getter cho width
    getWidth() {
        return this.width;
    }
    // Setter cho width
    setWidth(width) {
        if (width > 0) {
            this.width = width;
        }
        else {
            console.log("Chiều rộng phải lớn hơn 0!");
        }
    }
    // Getter cho height
    getHeight() {
        return this.height;
    }
    // Setter cho height
    setHeight(height) {
        if (height > 0) {
            this.height = height;
        }
        else {
            console.log("Chiều dài phải lớn hơn 0!");
        }
    }
    // Tính diện tích
    getArea() {
        return this.width * this.height;
    }
    // Tính chu vi
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
// sử dụng lớp
const rect = new Rectangle(5, 10);
console.log("Chiều rộng:", rect.getWidth());
console.log("Chiều dài:", rect.getHeight());
console.log("Chu vi:", rect.getPerimeter());
console.log("Diện tích:", rect.getArea());
// Cập nhật lại kích thước
rect.setWidth(8);
rect.setHeight(15);
console.log("\nSau khi cập nhật:");
console.log("Chiều rộng:", rect.getWidth());
console.log("Chiều dài:", rect.getHeight());
console.log("Chu vi:", rect.getPerimeter());
console.log("Diện tích:", rect.getArea());
//# sourceMappingURL=b5.js.map