import React from "react";
import { Link } from "react-router-dom";
import { products } from "./Data";

const ProductList: React.FC = () => {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <h3>{p.name}</h3>
            <p>Giá: {p.price.toLocaleString()} VND</p>
            <Link to={`/products/${p.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
