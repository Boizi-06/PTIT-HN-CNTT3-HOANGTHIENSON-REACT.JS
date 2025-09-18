
import { useState } from "react";

export default function App() {
  // 1) Tạo state có giá trị khởi tạo là tên của bạn
  const [name] = useState<string>("Hà Huy");

  // 2) Truy cập state và hiển thị ra UI
  return (
    <div style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>Xin chào, {name} </h1>
    </div>
  );
}