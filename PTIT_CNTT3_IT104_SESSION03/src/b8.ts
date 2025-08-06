// Hàm kiểm tra và chuyển đổi string sang number
function parseToNumber(value: number | string): number | null {
  const num = typeof value === "string" ? parseFloat(value) : value;
  return isNaN(num) ? null : num;
}

// Hàm cộng
function add(a: number | string, b: number | string): number | null {
  const numA = parseToNumber(a);
  const numB = parseToNumber(b);
  if (numA === null || numB === null) {
    console.log("Giá trị không hợp lệ");
    return null;
  }
  return numA + numB;
}

// Hàm trừ
function subtract(a: number | string, b: number | string): number | null {
  const numA = parseToNumber(a);
  const numB = parseToNumber(b);
  if (numA === null || numB === null) {
    console.log("Giá trị không hợp lệ");
    return null;
  }
  return numA - numB;
}

// Hàm nhân
function multiply(a: number | string, b: number | string): number | null {
  const numA = parseToNumber(a);
  const numB = parseToNumber(b);
  if (numA === null || numB === null) {
    console.log("Giá trị không hợp lệ");
    return null;
  }
  return numA * numB;
}

// Hàm chia
function divide(a: number | string, b: number | string): number | null {
  const numA = parseToNumber(a);
  const numB = parseToNumber(b);
  if (numA === null || numB === null || numB === 0) {
    console.log("Giá trị không hợp lệ hoặc chia cho 0");
    return null;
  }
  return numA / numB;
}


console.log("Cộng:", add("5", 3));            // 8
console.log("Trừ:", subtract("10", "4"));     // 6
console.log("Nhân:", multiply(2, "5"));       // 10
console.log("Chia:", divide("20", "4"));      // 5
console.log("Chia lỗi:", divide("abc", 2));   // Giá trị không hợp lệ
