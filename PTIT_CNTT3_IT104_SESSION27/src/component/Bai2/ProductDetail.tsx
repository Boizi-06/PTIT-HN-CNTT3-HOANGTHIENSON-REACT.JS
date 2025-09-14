import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./Data";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2>Sản phẩm không tồn tại.</h2>;
  }

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <h3>{product.name}</h3>
      <p>Giá: {product.price.toLocaleString()} VND</p>
      <p>
        {product.description} Đây là mô tả chi tiết dài hơn cho sản phẩm{" "}
        {product.name}.
      </p>
      <Link to="/products">Quay lại danh sách sản phẩm</Link>
    </div>
  );
};

export default ProductDetail;
