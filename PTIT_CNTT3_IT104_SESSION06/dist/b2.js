"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract class Job
class Job {
    constructor(type) {
        this.type = type;
    }
    // In ra loại công việc
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
// Lớp FulltimeJob kế thừa Job
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    // Lương mặc định 10.000.000
    calculateSalary() {
        return 10000000;
    }
}
// Lớp ParttimeJob kế thừa Job
class ParttimeJob extends Job {
    constructor(workingHour) {
        super("Parttime");
        this.workingHour = workingHour;
    }
    // Lương = 30.000 * số giờ làm
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
// Demo
const fulltime = new FulltimeJob();
const parttime = new ParttimeJob(80); // Ví dụ làm 80 giờ
//# sourceMappingURL=b2.js.map