import { useParams } from "react-router-dom";

const data = [
  { id: 1, name: "iphone15", price: "111" },
  { id: 2, name: "iphone16", price: "222" },
  { id: 3, name: "iphone17", price: "333" }
];

export default function ProductsDetail() {
  const { id } = useParams(); 
  const rs = data.find((i) => i.id === Number(id)); 

  return (
    <div>
      <h1>Trang chi tiết sản phẩm</h1>
      {rs ? (
        <>
          <h2>Tên sản phẩm: {rs.name}</h2>
          <p>Giá: {rs.price}</p>
        </>
      ) : (
        <p>Không tìm thấy sản phẩm</p>
      )}
    </div>
  );
}
