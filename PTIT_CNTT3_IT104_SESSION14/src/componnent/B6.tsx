import  { Component } from "react";
import type { ChangeEvent, FormEvent } from "react";

type StateType = {
  gender: string;
};

export default class GenderForm extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      gender: "" // chưa chọn gì
    };
  }

  // Xử lý khi chọn giới tính
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  // Xử lý khi submit form
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Giới tính đã chọn:", this.state.gender);
    alert(`Giới tính: ${this.state.gender}`);
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <form onSubmit={this.handleSubmit}>
          <h3>Giới tính:</h3>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
