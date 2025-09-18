class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    public slowDown(): void {
        if (this.speed > 0) {
            this.speed -= 5;
            console.log(`${this.name} đã giảm tốc. Tốc độ hiện tại: ${this.speed} km/h`);
        } else {
            console.log(`${this.name} đang đứng yên.`);
        }
    }

    public speedUp(): void {
        this.speed += 5;
        console.log(`${this.name} đã tăng tốc. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    public showSpeed(): void {
        console.log(`Tốc độ hiện tại của ${this.name}: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    public showInfo(): void {
        console.log(`Tên xe: ${this.name}`);
        console.log(`Mã định danh: ${this.id}`);
        console.log(`Tốc độ: ${this.speed} km/h`);
        console.log(`Số bánh răng: ${this.gear}`);
    }
}

// --- Chạy thử ---
const myBike = new Bicycle("Xe đạp thể thao", 10, "B001", 18);

// Thay đổi tốc độ
myBike.speedUp();
myBike.speedUp();
myBike.slowDown();
myBike.showSpeed();

// In thông tin xe
myBike.showInfo();
