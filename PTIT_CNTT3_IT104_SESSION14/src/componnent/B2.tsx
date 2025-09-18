import  { Component } from "react";

export default class Notification extends Component {
  // Khi component được mount lần đầu -> chạy componentDidMount
  componentDidMount(): void {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        <h2>Notification Component</h2>
      </div>
    );
  }
}