       // Interface changeSpeed
interface ChangeSpeed {
    speedUp(amount: number): void;   // Tăng tốc
    slowDown(amount: number): void;  // Giảm tốc
    stop(): void;                    // Dừng
}

// Lớp Vehicle implements ChangeSpeed
class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor() {
        this.speed = 0; // Mặc định ban đầu là 0 km/h
    }

    public speedUp(amount: number): void {
        this.speed += amount;
        console.log(`🚗 Tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    public slowDown(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0; // Không cho tốc độ âm
        console.log(`🚗 Giảm tốc ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    public stop(): void {
        this.speed = 0;
        console.log("🚗 Dừng xe. Tốc độ hiện tại: 0 km/h");
    }
}

const myCar = new Vehicle();

myCar.speedUp(50);   // Tăng tốc
myCar.slowDown(20);  // Giảm tốc
myCar.speedUp(30);   // Tăng tốc tiếp
myCar.stop();        // Dừng xe
                                                                                           