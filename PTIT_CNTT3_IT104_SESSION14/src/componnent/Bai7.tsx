import { Component, createRef} from "react";
import type { ChangeEvent, FormEvent } from "react";
type StateType = {
  studentName: string;
  email: string;
  password: string;
  address: string;
};

export default class RegisterForm extends Component<object, StateType> {
  private nameInputRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);
    this.state = {
      studentName: "",
      email: "",
      password: "",
      address: "",
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

    const { studentName, email, password, address } = this.state;

    // Validate
    if (!studentName || !email || !password) {
      alert("Tên sinh viên, Email và Mật khẩu không được để trống");
      return;
    }

    // Lấy danh sách user từ localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check email trùng
    const isEmailExist = users.some((user: any) => user.email === email);
    if (isEmailExist) {
      alert("Email đã tồn tại");
      return;
    }

    // Tạo user mới
    const newUser = { studentName, email, password, address };

    // Lưu vào localStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Reset form
    this.setState({
      studentName: "",
      email: "",
      password: "",
      address: "",
    });

    // Thông báo
    alert("Đăng ký tài khoản thành công");

    // Focus lại input "Tên sinh viên"
    if (this.nameInputRef.current) {
      this.nameInputRef.current.focus();
    }
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="studentName"
              placeholder="Tên sinh viên"
              value={this.state.studentName}
              onChange={this.handleChange}
              ref={this.nameInputRef}
            />
          </div>
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
          <div>
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    );
  }
}
