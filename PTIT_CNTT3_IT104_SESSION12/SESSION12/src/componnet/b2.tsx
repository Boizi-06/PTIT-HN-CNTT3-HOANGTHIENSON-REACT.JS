

export default function Calculation() {
  // Định nghĩa các hàm tính toán
  const add = (a: number, b: number): number => a + b;
  const subtract = (a: number, b: number): number => a - b;
  const multiply = (a: number, b: number): number => a * b;
  const divide = (a: number, b: number): number => a / b;

  // Khai báo giá trị mặc định
  const x = 10;
  const y = 10;

  return (
    <div>
      <h2>Danh sách kết quả</h2>
      <ul>
        <li>
          {x} + {y} = {add(x, y)}
        </li>
        <li>
          {x} - {y} = {subtract(x, y)}
        </li>
        <li>
          {x} * {y} = {multiply(x, y)}
        </li>
        <li>
          {x} / {y} = {divide(x, y)}
        </li>
      </ul>
    </div>
  );
}
