class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}

// Tạo thực thể từ lớp Employee
const employee: Employee = new Employee("Nguyễn Văn A", "Tech Corp", "0123456789");

// Gọi phương thức printInfo để in thông tin
employee.printInfo();