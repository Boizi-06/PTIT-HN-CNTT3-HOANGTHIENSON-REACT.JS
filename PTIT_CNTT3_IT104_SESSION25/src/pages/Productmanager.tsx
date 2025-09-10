import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: string;
};

const data: Product[] = [
  {
    id: 1,
    name: "iphone15",
    price: "111"
  },
  {
    id: 2,
    name: "iphone16",
    price: "222"
  },
  {
    id: 3,
    name: "iphone17",
    price: "333"
  }
];

export default function ProductManager() {
  const [product, setProduct] = useState<Product[]>(data);
  const navigate123 = useNavigate();
    const handleClick =(id:number)=> {
        console.log(id);
        
        
        navigate123("/admin/product/${id}");
    }
  return (
    <div>
      <h1>Trang quản lí sản phẩm</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Xem chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={()=>handleClick(item.id)}>Xem chi tiết</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
