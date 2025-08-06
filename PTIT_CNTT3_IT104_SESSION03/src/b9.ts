function parseToNumber(value: string): number | null {
  const num = parseFloat(value);
  return isNaN(num) ? null : num;
}

// Các hàm toán học cơ bản
function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide(a: number, b: number): number | string {
  if (b === 0) return "Không thể chia cho 0";
  return a / b;
}
function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}
function sqrt(base: number, root: number): number {
  if (root === 0) return NaN;
  return Math.pow(base, 1 / root);
}
function factorial(n: number): number | string {
  if (n < 0) return "Không có giai thừa âm";
  if (!Number.isInteger(n)) return "Chỉ tính giai thừa số nguyên";
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

// Hàm xử lý thao tác
function handleOperation(op: string): void {
  const input1 = (document.getElementById("input1") as HTMLInputElement).value;
  const input2 = (document.getElementById("input2") as HTMLInputElement).value;
  const num1 = parseToNumber(input1);
  const num2 = parseToNumber(input2);
  const resultDiv = document.getElementById("result");

  if (!resultDiv) return;

  let result: number | string | null = null;

  switch (op) {
    case "+":
      if (num1 !== null && num2 !== null) result = add(num1, num2);
      break;
    case "-":
      if (num1 !== null && num2 !== null) result = subtract(num1, num2);
      break;
    case "*":
      if (num1 !== null && num2 !== null) result = multiply(num1, num2);
      break;
    case "/":
      if (num1 !== null && num2 !== null) result = divide(num1, num2);
      break;
    case "^":
      if (num1 !== null && num2 !== null) result = power(num1, num2);
      break;
    case "√":
      if (num1 !== null && num2 !== null) result = sqrt(num1, num2);
      break;
    case "!":
      if (num1 !== null) result = factorial(num1);
      break;
  }

  if (result === null) {
    resultDiv.innerText = "Vui lòng nhập số hợp lệ!";
  } else {
    resultDiv.innerText = `Kết quả: ${result}`;
  }
}
