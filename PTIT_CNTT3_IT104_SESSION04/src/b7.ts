function processInput(input: string | number | boolean): void {
  if (typeof input === "string") {
    // Trường hợp chuỗi toàn số (dùng regex)
    if (/^\d+$/.test(input)) {
      const numberValue = Number(input);
      console.log(numberValue ** 2); // bình phương
    } else {
      // Đếm số ký tự chữ cái (loại bỏ số và ký tự đặc biệt)
      const letters = input.match(/[a-zA-Z]/g);
      const count = letters ? letters.length : 0;
      console.log(`${count} ký tự chữ cái`);
    }

  } else if (typeof input === "number") {
    if (isPrime(input)) {
      console.log("Là số nguyên tố");
    } else {
      console.log("Không phải số nguyên tố");
    }

  } else if (typeof input === "boolean") {
    if (input) {
      console.log("Giá trị là true - tiến hành xử lý");
    } else {
      console.log("Giá trị là false - dừng xử lý");
    }
  }
}

// ✅ Hàm kiểm tra số nguyên tố
function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 🧪 Test các trường hợp
processInput("123");       // Output: 15129
processInput("abc123!");   // Output: 3 ký tự chữ cái
processInput(7);           // Output: Là số nguyên tố
processInput(10);          // Output: Không phải số nguyên tố
processInput(true);        // Output: Giá trị là true - tiến hành xử lý
processInput(false);       // Output: Giá trị là false - dừng xử lý
