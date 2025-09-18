import { Component } from "react";

type StateType = {
  slogan: string;
};

export default class Slogan extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      slogan: "Học code để đi làm"
    };
  }

  // Hàm đổi state
  changeSlogan = () => {
    this.setState({
      slogan: "Học code sẽ thành công. Cố lên!!"
    });
  };

  render() {
    return (
      <div>
        <h1>Slogan: "{this.state.slogan}"</h1>
        <button onClick={this.changeSlogan}>Change state</button>
      </div>
    );
  }
}
