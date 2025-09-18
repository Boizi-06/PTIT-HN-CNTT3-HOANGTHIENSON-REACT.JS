// Lớp Account
class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    // Phương thức đăng nhập (cơ bản)
    login(inputPassword) {
        if (inputPassword === this.password) {
            this.isLogin = true;
            console.log(`Đăng nhập thành công! Xin chào ${this.userName}`);
        }
        else {
            console.log("Sai mật khẩu!");
        }
    }
    // Phương thức đăng xuất
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}
// Lớp userAcc kế thừa Account
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    // Ghi đè login()
    login(inputPassword) {
        if (this.status === "active") {
            super.login(inputPassword);
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
// Lớp adminAcc kế thừa Account
class adminAcc extends Account {
    constructor(id, userName, password) {
        super(id, userName, password, "admin");
    }
    // Ban người dùng
    banUser(user) {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị khóa tài khoản`);
    }
}
// --- Chạy thử ---
const user1 = new userAcc("U001", "Sơn", "123456", "user", "active");
const admin1 = new adminAcc("A001", "Admin", "admin123");
console.log("\n--- User thử đăng nhập ---");
user1.login("123456"); // Active → đăng nhập OK
console.log("\n--- Admin ban user ---");
admin1.banUser(user1);
console.log("\n--- User thử đăng nhập lại sau khi bị ban ---");
user1.login("123456"); // Banned → không đăng nhập được
export {};
//# sourceMappingURL=b6.js.map