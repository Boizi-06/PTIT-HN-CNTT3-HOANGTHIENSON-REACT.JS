import { Component } from 'react';

import type { ChangeEvent } from "react"; 


interface State {
  email: string;
}

export default class Bai1 extends Component<object, State> {
  state = {
    email: '',
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Ngăn gửi biểu mẫu làm tải lại trang
    console.log('Email:', this.state.email); // Lấy email từ state
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleClick}>Gửi</button>
        </form>
      </div>
    );
  }
}