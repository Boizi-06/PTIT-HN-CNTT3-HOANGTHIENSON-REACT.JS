

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  product: Product;
};

export default function Children_Comp({ product }: Props) {
  return (
    <div>
      <h3>Dữ liệu trong component con</h3>
      <p>Id: {product.id}</p>
      <p>Product name: {product.name}</p>
      <p>Price: {product.price.toLocaleString()} đ</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
}
