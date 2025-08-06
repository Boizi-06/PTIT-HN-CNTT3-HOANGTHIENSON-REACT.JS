// 1. Khai báo biến với kiểu dữ liệu
let username: string = "Sơn";
let age: number = 18;
let job: string = "Sinh viên";

// 2. Định nghĩa hàm có tham số
function printInfo(name: string, age: number, job: string): void {
  console.log("Tên:", name);
  console.log("Tuổi:", age);
  console.log("Nghề nghiệp:", job);
}

// 3. Gọi hàm với 3 biến đã tạo
printInfo(username, age, job);
