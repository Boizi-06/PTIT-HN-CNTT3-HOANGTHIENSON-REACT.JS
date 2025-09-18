import  { Component } from "react";

type StateType = {
  company: string;
};

export default class CompanyInfo extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      company: "Rikkei Academy"
    };
  }

  // Hàm đổi state
  changeState = () => {
    this.setState({
      company: "RikkeiSoft"
    });
  };

  render() {
    return (
      <div>
        <h1>Company: {this.state.company}</h1>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}
