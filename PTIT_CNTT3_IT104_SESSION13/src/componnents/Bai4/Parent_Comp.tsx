import { Component } from 'react'
import Children_Comp from './Children_Comp';

// Định nghĩa kiểu cho state
type fullName = {
  stdName: string;
};

export default class Parent_Comp extends Component<object, fullName> {
  constructor(props: object) {
    super(props);
    // Khởi tạo state cho cha
    this.state = {
      stdName: "Hoang Thien Son"
    };
  }

  render() {
    return (
      <div>
        <h2>Parent_Comp</h2>
        {/* Hiển thị dữ liệu trong cha */}
        <p>Họ tên bên cha: {this.state.stdName}</p>

        {/* Truyền dữ liệu state từ cha xuống con qua props */}
        <Children_Comp name={this.state.stdName} />
      </div>
    );
  }
}
