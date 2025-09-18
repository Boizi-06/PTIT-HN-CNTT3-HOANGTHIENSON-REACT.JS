class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfor() {
        console.log(`ID sinh viên: ${this.id}, Tên sinh viên: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(subject, name) {
        super(name);
        this.subject = subject;
    }
    displayInfor() {
        console.log(`Tên giáo viên: ${this.name}, Môn dạy: ${this.subject}`);
    }
}
const student = new Student(1, 'Boizi');
const teacher = new Teacher('React.js', 'Trần Minh Cường');
student.displayInfor();
teacher.displayInfor();
export {};
//# sourceMappingURL=b4.js.map