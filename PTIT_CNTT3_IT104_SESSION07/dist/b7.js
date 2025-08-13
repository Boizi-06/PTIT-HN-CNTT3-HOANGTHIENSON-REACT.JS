// Lớp Account
class Account {
    constructor(accountNumber, balance = 0, status = "active") {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    // Nạp tiền
    deposit(amount) {
        if (amount > 0 && this.status === "active") {
            this.balance += amount;
            this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
            console.log(`Nạp ${amount} thành công. Số dư hiện tại: ${this.balance}`);
        }
        else {
            console.log("Không thể nạp tiền.");
        }
    }
    // Rút tiền (mặc định, cho phép rút nếu đủ số dư)
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance && this.status === "active") {
            this.balance -= amount;
            this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
            console.log(`Rút ${amount} thành công. Số dư hiện tại: ${this.balance}`);
        }
        else {
            console.log("Rút tiền không hợp lệ.");
        }
    }
    // Xem lịch sử giao dịch
    showHistory() {
        console.log(`\nLịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach((entry) => console.log(entry));
    }
}
// Lớp SavingAccount kế thừa Account
class SavingAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    // Ghi đè withdraw() - chỉ rút được tối đa bằng số dư hiện tại (về 0)
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance && this.status === "active") {
            this.balance -= amount;
            this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
            console.log(`Rút ${amount} thành công. Số dư hiện tại: ${this.balance}`);
        }
        else if (amount > this.balance) {
            console.log("Không thể rút vượt quá số dư.");
        }
        else {
            console.log("Rút tiền không hợp lệ.");
        }
    }
}
// --- Chạy thử ---
const savingAcc = new SavingAccount("123456789", 1000, 0.05);
savingAcc.deposit(500);
savingAcc.withdraw(300);
savingAcc.withdraw(1500); // Thử rút quá số dư
savingAcc.withdraw(1200); // Rút hết về 0
savingAcc.showHistory();
export {};
//# sourceMappingURL=b7.js.map