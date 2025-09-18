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

    // Phương thức đăng nhập (sẽ được override)
    public login(inputPassword: string): void {
        if (inputPassword === this.password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công!");
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

// Lớp con userAcc
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

// --- Chạy thử ---
const user1 = new userAcc("U001", "Sơn", "123456", "user", "active");
const user2 = new userAcc("U002", "Huy", "abcdef", "user", "banned");

console.log("\n--- Thử đăng nhập user1 ---");
user1.login("123456"); // Đúng mật khẩu
user1.logout();

console.log("\n--- Thử đăng nhập user2 ---");
user2.login("abcdef"); // Bị khóa
user2.logout();
