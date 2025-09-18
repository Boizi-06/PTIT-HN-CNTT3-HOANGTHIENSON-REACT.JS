import React, { Component } from "react";

type State = {
  name: string;
  email: string;
  age: string;
  error: string;
  submittedData: { name: string; email: string; age: string } | null;
};

class UserForm extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      error: "",
      submittedData: null,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as unknown as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, age } = this.state;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", submittedData: null });
      return;
    }
    if (Number(age) < 0) {
      this.setState({ error: "Tuổi không được âm", submittedData: null });
      return;
    }

    this.setState({
      error: "",
      submittedData: { name, email, age },
    });
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
      error: "",
      submittedData: null,
    });
  };

  render() {
    const { name, email, age, error, submittedData } = this.state;

    return (
      <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", background: "#f9f9f9" }}>
        <h2>📋 Nhập thông tin người dùng</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ tên"
            value={name}
            onChange={this.handleChange}
            style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }}
          />
          <input
            type="number"
            name="age"
            placeholder="Tuổi"
            value={age}
            onChange={this.handleChange}
            style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }}
          />
          <button type="submit" style={{ marginRight: "10px", padding: "8px 16px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}>
            Gửi
          </button>
          <button type="button" onClick={this.handleReset} style={{ padding: "8px 16px", background: "gray", color: "white", border: "none", borderRadius: "5px" }}>
            Xóa tất cả
          </button>
        </form>

        {error && <p style={{ color: "red", marginTop: "10px" }}>⚠ {error}</p>}

        {submittedData && (
          <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #4caf50", background: "#e8f5e9", borderRadius: "5px" }}>
            <h3>✅ Thông tin đã nhập:</h3>
            <p>Họ tên: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Tuổi: {submittedData.age}</p>
          </div>
        )}
      </div>
    );
  }
}

export default UserForm;
