import { useParams } from "react-router-dom";

const data = [
  { id: "1", name: "iPhone 15", price: "111" },
  { id: "2", name: "iPhone 16", price: "222" },
  { id: "3", name: "iPhone 17", price: "333" },
];

export default function ProductDetail() {
  const { id } = useParams(); // lấy id từ URL
  const product = data.find((p) => p.id === id);

  if (!product) {
    return <h2>Không tìm thấy sản phẩm với id = {id}</h2>;
  }

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p>ID: {product.id}</p>
      <p>Tên: {product.name}</p>
      <p>Giá: {product.price}</p>
    </div>
  );
}
