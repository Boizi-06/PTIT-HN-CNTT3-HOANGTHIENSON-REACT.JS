import  { Component } from "react";
import type { ChangeEvent, FormEvent } from "react";


type StateType = {
  email: string;
  password: string;
};

export default class LoginForm extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  // Xử lý thay đổi input
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<StateType, keyof StateType>);
  };

  // Xử lý submit form
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = this.state;

    // Validate
    if (!email || !password) {
      alert("Email và Mật khẩu không được để trống");
      return;
    }

    // Lấy danh sách users từ localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Kiểm tra đăng nhập
    const isValidUser = users.some(
      (user: any) => user.email === email && user.password === password
    );

    if (isValidUser) {
      alert("Đăng nhập thành công");
    } else {
      alert("Đăng nhập thất bại");
    }
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>Đăng nhập tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    );
  }
}
