"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Lớp Vehicle implements ChangeSpeed
class Vehicle {
    constructor() {
        this.speed = 0; // Mặc định ban đầu là 0 km/h
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`🚗 Tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0)
            this.speed = 0; // Không cho tốc độ âm
        console.log(`🚗 Giảm tốc ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log("🚗 Dừng xe. Tốc độ hiện tại: 0 km/h");
    }
}
const myCar = new Vehicle();
myCar.speedUp(50); // Tăng tốc
myCar.slowDown(20); // Giảm tốc
myCar.speedUp(30); // Tăng tốc tiếp
myCar.stop(); // Dừng xe
//# sourceMappingURL=b5.js.map