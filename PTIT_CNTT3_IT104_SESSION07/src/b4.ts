abstract class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    public abstract displayInfor(): void;
}

class Student extends Person {
    public id: number; // mã sinh viên
    constructor(id: number, name: string) {
        super(name);
        this.id = id;
    }
    public displayInfor(): void {
        console.log(`ID sinh viên: ${this.id}, Tên sinh viên: ${this.name}`);
    }
}

class Teacher extends Person {
    public subject: string; // tên môn học
    constructor(subject: string, name: string) {
        super(name);
        this.subject = subject;
    }
    public displayInfor(): void {
        console.log(`Tên giáo viên: ${this.name}, Môn dạy: ${this.subject}`);
    }
}

const student = new Student(1, 'Boizi');
const teacher = new Teacher('React.js', 'Trần Minh Cường');

student.displayInfor();
teacher.displayInfor();
