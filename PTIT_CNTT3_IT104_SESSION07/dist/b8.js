// Lớp Account (cơ bản)
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
    // Rút tiền
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
// Lớp CheckingAccount kế thừa Account
class CheckingAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    // Ghi đè withdraw() - cho phép rút quá số dư tới hạn mức overdraft
    withdraw(amount) {
        if (amount > 0 && this.status === "active") {
            if (this.balance - amount >= -this.overdraftLimit) {
                this.balance -= amount;
                this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
                console.log(`Rút ${amount} thành công. Số dư hiện tại: ${this.balance}`);
            }
            else {
                console.log(`Vượt quá hạn mức thấu chi ${this.overdraftLimit}!`);
            }
        }
        else {
            console.log("Rút tiền không hợp lệ.");
        }
    }
}
// --- Chạy thử ---
const checkAcc = new CheckingAccount("987654321", 500, 300); // Có 500, cho phép âm tới -300
checkAcc.deposit(200); // Nạp 200 → 700
checkAcc.withdraw(800); // Rút 800 → còn -100 (trong hạn mức)
checkAcc.withdraw(300); // Rút 300 → còn -400 (vượt hạn mức → bị chặn)
checkAcc.showHistory();
export {};
//# sourceMappingURL=b8.js.map