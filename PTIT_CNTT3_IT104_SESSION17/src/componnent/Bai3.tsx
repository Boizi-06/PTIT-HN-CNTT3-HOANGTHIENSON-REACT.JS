import { useState } from "react";

export default function ChangeColor() {
  // 1) Tạo state lưu màu chữ, mặc định là "black"
  const [color, setColor] = useState("black");

  // 2) Hàm xử lý đổi màu
  const handleChangeColor = () => {
    // Nếu đang black thì chuyển sang red, ngược lại thì về black
    setColor((prev) => (prev === "black" ? "red" : "black"));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h2 style={{ color: color }}>Tiêu đề văn bản</h2>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}