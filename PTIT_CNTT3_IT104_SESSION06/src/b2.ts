// Abstract class Job
abstract class Job {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    // In ra loại công việc
    public printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    // Phương thức abstract để tính lương
    public abstract calculateSalary(): number;
}

// Lớp FulltimeJob kế thừa Job
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }

    // Lương mặc định 10.000.000
    public calculateSalary(): number {
        return 10000000;
    }
}

// Lớp ParttimeJob kế thừa Job
class ParttimeJob extends Job {
    private workingHour: number;

    constructor(workingHour: number) {
        super("Parttime");
        this.workingHour = workingHour;
    }

    // Lương = 30.000 * số giờ làm
    public calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

// Demo
const fulltime = new FulltimeJob();
const parttime = new ParttimeJob(80); // Ví dụ làm 80 giờ
