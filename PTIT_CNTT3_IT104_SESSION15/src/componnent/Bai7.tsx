import  { Component } from "react";

type ClockState = {
  time: Date;
};

export default class Clock extends Component<object, ClockState> {
   private timerID?: ReturnType<typeof setInterval>; 

  constructor(props: object) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  // Khi component được mount -> tạo interval
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  // Khi component bị unmount -> clear interval
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h3>
          Thời gian hiện tại:{" "}
          {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
        </h3>
      </div>
    );
  }
}
