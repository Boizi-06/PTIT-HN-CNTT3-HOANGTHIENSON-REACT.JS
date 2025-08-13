class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        if (this.speed > 0) {
            this.speed -= 5;
            console.log(`${this.name} đã giảm tốc. Tốc độ hiện tại: ${this.speed} km/h`);
        }
        else {
            console.log(`${this.name} đang đứng yên.`);
        }
    }
    speedUp() {
        this.speed += 5;
        console.log(`${this.name} đã tăng tốc. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại của ${this.name}: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
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
export {};
//# sourceMappingURL=b2.js.map