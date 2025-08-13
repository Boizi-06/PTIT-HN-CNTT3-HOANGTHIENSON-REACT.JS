class Account {
    constructor(initialBalance) {
        this.history = [];
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Số tiền nạp phải > 0");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải > 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Không đủ tiền trong tài khoản!");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
    }
    getHistory() {
        console.log("📜 Lịch sử giao dịch:");
        this.history.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}
class CheckingAccount extends Account {
    constructor(initialBalance, overdraftLimit) {
        super(initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải > 0");
            return;
        }
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Vượt quá hạn mức thấu chi!");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
    }
}
// --- Demo ---
const myAcc = new CheckingAccount(1000, 500);
myAcc.deposit(300);
myAcc.withdraw(500);
myAcc.withdraw(1200); // rút quá số dư nhưng trong hạn mức thấu chi
myAcc.withdraw(700); // vượt quá hạn mức thấu chi => báo lỗi
myAcc.getHistory();
export {};
//# sourceMappingURL=b9.js.map