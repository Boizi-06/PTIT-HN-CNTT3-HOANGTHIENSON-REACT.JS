// Khai báo biến với kiểu dữ liệu cụ thể
let num1: number = 20;
let num2: number = 5;
let num3: number; // Biến dùng để lưu kết quả

let num4: string = "10";
let num5: boolean = true;

// Thực hiện các phép toán giữa num1 và num2
num3 = num1 + num2;
console.log("Cộng:", num3); // 25

num3 = num1 - num2;
console.log("Trừ:", num3); // 15

num3 = num1 * num2;
console.log("Nhân:", num3); // 100

num3 = num1 / num2;
console.log("Chia:", num3); // 4

// Thực hiện phép cộng giữa chuỗi và boolean
let result = num4 + num5;
console.log("num4 + num5 =", result); // "10true"
