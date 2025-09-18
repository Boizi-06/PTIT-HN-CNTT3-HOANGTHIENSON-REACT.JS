"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}
// Tạo thực thể từ lớp Employee
const employee = new Employee("Nguyễn Văn A", "Tech Corp", "0123456789");
// Gọi phương thức printInfo để in thông tin
employee.printInfo();
//# sourceMappingURL=b3.js.map