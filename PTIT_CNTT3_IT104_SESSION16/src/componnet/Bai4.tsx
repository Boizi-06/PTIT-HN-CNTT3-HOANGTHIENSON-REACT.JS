import  { Component } from "react";

type State = {
  count: number;
};

export default class ClickCounter extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0, // giá trị khởi đầu
    };
  }

  // Hàm tăng count
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#f8f9fa",
          width: "300px",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Số lần click: {this.state.count}</h2>
        <button
          onClick={this.handleClick}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
