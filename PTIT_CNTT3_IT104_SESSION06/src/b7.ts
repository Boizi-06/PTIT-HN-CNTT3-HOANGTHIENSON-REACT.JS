// Lớp Student
class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        this.name = newName;
    }
}

// Mảng chứa tất cả học sinh
let allStudents: Student[] = [];

// Lớp Classroom
class Classroom {
    private students: Student[];

    constructor() {
        this.students = [];
    }

    // In danh sách học sinh
    public showStudents(): void {
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
    public addStudent(student: Student): void {
        this.students.push(student);
    }

    // Lọc học sinh theo id
    public filterStudent(id: number): Student[] {
        return this.students.filter(s => s.getId() === id);
    }

    // Thêm học sinh từ allStudents vào lớp
    public addStudentInClass(id: number): void {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const student = allStudents[index];
            this.addStudent(student);
            allStudents.splice(index, 1);
        } else {
            console.log(`Không tìm thấy học sinh có ID ${id} trong danh sách tất cả học sinh.`);
        }
    }

    // Xóa học sinh ra khỏi lớp và thêm lại vào allStudents
    public removeStudent(id: number): void {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const removedStudent = this.students[index];
            allStudents.push(removedStudent); // Thêm lại vào allStudents
            this.students.splice(index, 1); // Xóa khỏi lớp
            console.log(`Đã xóa học sinh ID ${id} khỏi lớp.`);
        } else {
            console.log(`Không tìm thấy học sinh ID ${id} trong lớp.`);
        }
    }

    // Sửa thông tin học sinh trong lớp
    public editStudent(id: number, newName: string): void {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật tên học sinh ID ${id} thành "${newName}".`);
        } else {
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
