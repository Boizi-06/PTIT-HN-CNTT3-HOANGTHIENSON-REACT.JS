class Employee {
    public name: string;        // public
    protected company: string;  // protected
    private phone: string;      // private

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    // Getter cho phone
    public getPhone(): string {
        return this.phone;
    }

    // Setter cho phone
    public setPhone(phone: string): void {
        this.phone = phone;
    }

    // Phương thức in thông tin
    public printInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}

// Lớp con Manager
class Manager extends Employee {
    private teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone); // Gọi constructor lớp cha
        this.teamSize = teamSize;
    }

    // Ghi đè printInfo()
    public override printInfo(): void {
        super.printInfo(); // Gọi phương thức lớp cha
        console.log(`Team Size: ${this.teamSize}`);
    }
}

// Chạy thử
const m = new Manager("Nguyễn Văn A", "FPT", "0123456789", 5);
m.printInfo();
