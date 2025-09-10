import { useParams } from "react-router-dom"
const data= [
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

export default function ProductsDetail() {
    const abc = useParams();
    const rs = data.filter((i:any)=>i.id==abc.id)

  return (
    <div>ProductsDetail
        <h1>trang chi tiet san pham</h1>
        <h2>ten san pham : {rs .name}</h2>
    </div>
  )
}
