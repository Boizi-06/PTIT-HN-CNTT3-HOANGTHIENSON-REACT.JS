import React, { useEffect } from "react";
import { getAllProduct } from "../api/productApi";

export default function ProductList() {
  useEffect(() => {
    // gọi API khi component mount
    getAllProduct().then(products => {
      console.log("Danh sách sản phẩm:", products);
    });
  }, []);

  return <h2>Danh sách sản phẩm (xem console)</h2>;
}
