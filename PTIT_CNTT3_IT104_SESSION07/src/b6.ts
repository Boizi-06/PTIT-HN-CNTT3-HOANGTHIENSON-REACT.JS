// Lớp Account
class Account {
    public id: string;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: string, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }

    // Phương thức đăng nhập (cơ bản)
    public login(inputPassword: string): void {
        if (inputPassword === this.password) {
            this.isLogin = true;
            console.log(`Đăng nhập thành công! Xin chào ${this.userName}`);
        } else {
            console.log("Sai mật khẩu!");
        }
    }

    // Phương thức đăng xuất
    public logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}

// Lớp userAcc kế thừa Account
class userAcc extends Account {
    public status: "active" | "banned";

    constructor(
        id: string,
        userName: string,
        password: string,
        role: string,
        status: "active" | "banned"
    ) {
        super(id, userName, password, role);
        this.status = status;
    }

    // Ghi đè login()
    public override login(inputPassword: string): void {
        if (this.status === "active") {
            super.login(inputPassword);
        } else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}

// Lớp adminAcc kế thừa Account
class adminAcc extends Account {
    constructor(id: string, userName: string, password: string) {
        super(id, userName, password, "admin");
    }

    // Ban người dùng
    public banUser(user: userAcc): void {
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
