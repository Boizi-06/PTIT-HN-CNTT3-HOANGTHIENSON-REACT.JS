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
    setName(newName) {
        this.name = newName;
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
    // Thêm học sinh từ allStudents vào lớp
    addStudentInClass(id) {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const student = allStudents[index];
            this.addStudent(student);
            allStudents.splice(index, 1);
        }
        else {
            console.log(`Không tìm thấy học sinh có ID ${id} trong danh sách tất cả học sinh.`);
        }
    }
    // Xóa học sinh ra khỏi lớp và thêm lại vào allStudents
    removeStudent(id) {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const removedStudent = this.students[index];
            allStudents.push(removedStudent); // Thêm lại vào allStudents
            this.students.splice(index, 1); // Xóa khỏi lớp
            console.log(`Đã xóa học sinh ID ${id} khỏi lớp.`);
        }
        else {
            console.log(`Không tìm thấy học sinh ID ${id} trong lớp.`);
        }
    }
    // Sửa thông tin học sinh trong lớp
    editStudent(id, newName) {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật tên học sinh ID ${id} thành "${newName}".`);
        }
        else {
            console.log(`Không tìm thấy học sinh ID ${id} để sửa.`);
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
// --- Tạo 2 lớp học ---
const classA = new Classroom();
const classB = new Classroom();
// Mỗi lớp thêm 3 học sinh từ allStudents
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
// --- Kiểm tra trước khi thay đổi ---
console.log(" Lớp A ban đầu:");
classA.showStudents();
// --- Sử dụng removeStudent ---
classA.removeStudent(2); // Xóa học sinh ID 2 khỏi lớp A
// --- Sử dụng editStudent ---
classA.editStudent(3, "Cường Updated");
// --- Kiểm tra sau khi thay đổi ---
console.log("\n Lớp A sau khi thay đổi:");
classA.showStudents();
console.log("\n Danh sách tất cả học sinh còn lại:");
allStudents.forEach(s => console.log(`ID: ${s.getId()}, Tên: ${s.getName()}`));
//# sourceMappingURL=b7.js.map