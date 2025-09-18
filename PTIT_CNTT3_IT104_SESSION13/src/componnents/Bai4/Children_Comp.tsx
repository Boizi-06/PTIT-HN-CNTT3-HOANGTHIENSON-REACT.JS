import { Component } from "react";

// Định nghĩa kiểu cho props của Component con
type std = {
  name: string;
};

export default class Children_Comp extends Component<std> {
  render() {
    return (
      <div>
        <h3>Children_Comp</h3>
       
        <p>Tên nhận từ cha: {this.props.name}</p>
      </div>
    );
  }
}
