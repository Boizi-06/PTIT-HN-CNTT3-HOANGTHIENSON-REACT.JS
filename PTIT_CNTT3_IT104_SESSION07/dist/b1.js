class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    // Getter cho phone
    getPhone() {
        return this.phone;
    }
    // Setter cho phone
    setPhone(phone) {
        this.phone = phone;
    }
    // Phương thức in thông tin
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
// Lớp con Manager
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone); // Gọi constructor lớp cha
        this.teamSize = teamSize;
    }
    // Ghi đè printInfo()
    printInfo() {
        super.printInfo(); // Gọi phương thức lớp cha
        console.log(`Team Size: ${this.teamSize}`);
    }
}
// Chạy thử
const m = new Manager("Nguyễn Văn A", "FPT", "0123456789", 5);
m.printInfo();
export {};
//# sourceMappingURL=b1.js.map