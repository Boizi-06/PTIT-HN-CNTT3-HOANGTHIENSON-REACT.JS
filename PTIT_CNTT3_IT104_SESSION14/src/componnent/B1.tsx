



import  { Component } from 'react';

type StateType = {
  userName: string;
};

export default class Exersice01 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    // Khởi tạo state
    this.state = {
      userName: "Hoàng Thiên Sơn"  // đặt tên bản thân bạn
    };
  }

  // Vòng đời thích hợp để khởi tạo dữ liệu ban đầu là constructor
  // Hoặc có thể dùng componentDidMount khi cần gọi API lấy dữ liệu

  render() {
    return (
      <div>
        <h1>Xin chào, tôi là {this.state.userName}</h1>
      </div>
    );
  }
}
