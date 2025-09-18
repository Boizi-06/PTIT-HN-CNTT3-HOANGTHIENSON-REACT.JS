"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
// Khai báo mảng để chứa các sinh viên
const students = [];
// Tạo các thực thể sinh viên và thêm vào mảng
students.push(new Student(1, 20, "student1@example.com"));
students.push(new Student(2, 22, "student2@example.com"));
students.push(new Student(3, 19, "student3@example.com"));
// Duyệt mảng và in thông tin các sinh viên
console.log("Danh sách sinh viên:");
students.forEach((student, index) => {
    console.log(`Sinh viên ${index + 1}:`);
    console.log(`ID: ${student.id}`);
    console.log(`Tuổi: ${student.age}`);
    console.log(`Email: ${student.email}`);
    console.log("---");
});
//# sourceMappingURL=b2.js.map