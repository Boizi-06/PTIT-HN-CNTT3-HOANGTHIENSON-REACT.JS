"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
// Tạo hai đối tượng từ lớp Vehicle
const vehicle1 = new Vehicle("Civic", 2020, "Honda");
const vehicle2 = new Vehicle("Model 3", 2022, "Tesla");
// In thông tin của cả hai đối tượng
console.log("Vehicle 1:");
console.log(`Tên: ${vehicle1.name}`);
console.log(`Năm sản xuất: ${vehicle1.year}`);
console.log(`Hãng xe: ${vehicle1.company}`);
console.log("\nVehicle 2:");
console.log(`Tên: ${vehicle2.name}`);
console.log(`Năm sản xuất: ${vehicle2.year}`);
console.log(`Hãng xe: ${vehicle2.company}`);
//# sourceMappingURL=b1.js.map