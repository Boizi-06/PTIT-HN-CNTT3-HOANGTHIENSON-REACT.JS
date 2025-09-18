import { Component } from "react";
import type { ChangeEvent, FormEvent } from "react";


type StateType = {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
};

export default class ProductForm extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      productCode: "",
      productName: "",
      price: 0,
      quantity: 1,
    };
  }

  // Hàm xử lý khi thay đổi input
  handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    });
  };

  // Hàm xử lý khi submit form
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(this.state); // In ra object product
  };

  render() {
    return (
      <div style={{ width: "300px", margin: "20px auto" }}>
        <h2>Thêm mới sản phẩm</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Mã sản phẩm</label>
            <input
              type="text"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Tên sản phẩm</label>
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Giá</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Số lượng</label>
            <select
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            >
              {[1, 5, 10, 20].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Đăng ký</button>
        </form>
      </div>
    );
  }
}
