import { Component } from "react";
import type { ChangeEvent } from "react";
import type { FormEvent } from "react"; 

type State = {
  color: string;
  submittedColor: string;
};

export default class ColorForm extends Component<object, State> {
  state = {
    color: "#000000", // Màu mặc định
    submittedColor: "",
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: e.target.value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submittedColor: this.state.color });
  };

  render() {
    const { color, submittedColor } = this.state;

    return (
      <div>
        <h2>
          Color:{" "}
          {submittedColor || "Chưa chọn màu"}
        </h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Form</h3>
          <p>
            Màu sắc:{" "}
            <span
              style={{
                display: "inline-block",
                width: "20px",
                height: "20px",
                backgroundColor: color,
                border: "1px solid black",
              }}
            ></span>{" "}
            {color}
          </p>
          <label>
            Màu sắc
            <input
              type="color"
              value={color}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>

        {/* Hiển thị khối màu sau khi submit */}
        {submittedColor && (
          <div
            style={{
              marginTop: "10px",
              width: "50px",
              height: "50px",
              backgroundColor: submittedColor,
              border: "1px solid black",
            }}
          ></div>
        )}
      </div>
    );
  }
}