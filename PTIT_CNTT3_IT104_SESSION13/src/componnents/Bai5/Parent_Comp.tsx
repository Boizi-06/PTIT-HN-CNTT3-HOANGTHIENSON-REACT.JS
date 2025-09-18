import { Component } from "react";
import Children_Comp from "./Children_Comp";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type State = {
  product: Product;
};

export default class Parent_Comp extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: "Bưởi ba roi",
        price: 12000,
        quantity: 6,
      },
    };
  }

  render() {
    return (
      <div>
        <h2>Dữ liệu trong component cha</h2>
        <p>Id: {this.state.product.id}</p>
        <p>Product name: {this.state.product.name}</p>
        <p>Price: {this.state.product.price.toLocaleString()} đ</p>
        <p>Quantity: {this.state.product.quantity}</p>

        <hr />
        {/* Truyền dữ liệu xuống children */}
        <Children_Comp product={this.state.product} />
      </div>
    );
  }
}
