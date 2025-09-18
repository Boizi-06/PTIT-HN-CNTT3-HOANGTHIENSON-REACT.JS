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

    // Thêm học sinh từ allStudents vào lớp, đồng thời xóa khỏi allStudents
    public addStudentInClass(id: number): void {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const student = allStudents[index];
            this.addStudent(student);
            allStudents.splice(index, 1); // Xóa khỏi allStudents
        } else {
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
