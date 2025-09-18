import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function App() {
  // 1) Tạo state product với giá trị khởi tạo
  const [product] = useState<Product>({
    id: 1,
    name: "Coca cola",
    price: 1000,
    quantity: 10,
  });

  // 2) Truy cập state và hiển thị ra giao diện
  return (
    <div style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h2>Thông tin sản phẩm</h2>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price} $</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
}