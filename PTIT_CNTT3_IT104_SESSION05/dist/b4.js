"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    // Phương thức in thông tin (để truy cập cả private và protected)
    displayInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }
}
// Tạo thực thể
const car = new Vehicle(1, "Toyota Vios", 2022, "Toyota");
// Gọi phương thức để in thông tin
car.displayInfo();
// Thử thay đổi thuộc tính
car.name = "Honda Civic"; // OK - public
// car.year = 2023; //  Lỗi - protected
// car.company = "Honda"; //  Lỗi - private
// car.id = 2; //  Lỗi - readonly
console.log("\nSau khi đổi tên:");
car.displayInfo();
//# sourceMappingURL=b4.js.map