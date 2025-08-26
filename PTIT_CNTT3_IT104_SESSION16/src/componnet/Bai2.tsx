import  { Component } from "react";

type State = {
  isLoggedIn: boolean;
};

export default class LoginStatus extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false, // mặc định là chưa đăng nhập
    };
  }

  // Hàm toggle login/logout
  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#f0f8ff",
          width: "400px",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        {/* Nội dung điều kiện */}
        <h3 style={{ color: this.state.isLoggedIn ? "green" : "red" }}>
          {this.state.isLoggedIn ? "✅ Xin chào, User!" : "🔒 Vui lòng đăng nhập để tiếp tục."}
        </h3>

        {/* Nút toggle */}
        <button
          onClick={this.toggleLogin}
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
          {this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
