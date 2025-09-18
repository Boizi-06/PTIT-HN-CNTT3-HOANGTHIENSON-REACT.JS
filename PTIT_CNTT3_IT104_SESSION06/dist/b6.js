"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Lớp Student
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
// Mảng chứa tất cả học sinh
let allStudents = [];
// Lớp Classroom
class Classroom {
    constructor() {
        this.students = [];
    }
    // In danh sách học sinh
    showStudents() {
        if (this.students.length === 0) {
            console.log("Lớp hiện chưa có học sinh.");
            return;
        }
        console.log("Danh sách học sinh:");
        this.students.forEach(s => {
            console.log(` - ID: ${s.getId()}, Tên: ${s.getName()}`);
        });
    }
    // Thêm học sinh vào lớp
    addStudent(student) {
        this.students.push(student);
    }
    // Lọc học sinh theo id
    filterStudent(id) {
        return this.students.filter(s => s.getId() === id);
    }
    // Thêm học sinh từ allStudents vào lớp, đồng thời xóa khỏi allStudents
    addStudentInClass(id) {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const student = allStudents[index];
            this.addStudent(student);
            allStudents.splice(index, 1); // Xóa khỏi allStudents
        }
        else {
            console.log(`Không tìm thấy học sinh có ID ${id} trong danh sách tất cả học sinh.`);
        }
    }
}
// --- Tạo 6 học sinh ---
allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Bình"));
allStudents.push(new Student(3, "Cường"));
allStudents.push(new Student(4, "Dũng"));
allStudents.push(new Student(5, "Hà"));
allStudents.push(new Student(6, "Lan"));
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log(" Lớp A:");
classA.showStudents();
console.log("\n Lớp B:");
classB.showStudents();
console.log("\n Danh sách tất cả học sinh còn lại:");
console.log(allStudents);
//# sourceMappingURL=b6.js.map