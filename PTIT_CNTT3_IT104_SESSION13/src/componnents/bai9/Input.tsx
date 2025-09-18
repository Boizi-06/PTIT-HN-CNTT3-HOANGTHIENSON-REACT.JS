import React, { Component } from "react";

type State = {
  value: string;
};

export default class Input extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Component Input</h2>
        <input
          type="text"
          placeholder="Nhập dữ liệu..."
          onChange={this.handleChange} // sự kiện onChange
        />

        <div style={{ marginTop: "20px" }}>
          {this.state.value === "" ? (
            <p><b>Trước khi nhập dữ liệu:</b> Chưa có gì</p>
          ) : (
            <p><b>Sau khi nhập dữ liệu:</b> {this.state.value}</p>
          )}
        </div>
      </div>
    );
  }
}
