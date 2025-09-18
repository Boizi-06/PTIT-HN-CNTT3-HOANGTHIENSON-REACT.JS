// Abstract class Shape
abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Lấy tên của hình
    public getName(): string {
        return this.name;
    }

    // Phương thức abstract để lấy kích cỡ
    public abstract getSize(): void;
}

// Lớp Rectangle kế thừa Shape
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name); // Gọi constructor của Shape
        this.width = width;
        this.height = height;
    }

    // Override phương thức getSize
    public getSize(): void {
        console.log(`Chiều rộng: ${this.width}, Chiều cao: ${this.height}`);
    }
}

const rect = new Rectangle("Hình chữ nhật", 10.5, 5.2);
console.log("Tên hình:", rect.getName());
rect.getSize();
