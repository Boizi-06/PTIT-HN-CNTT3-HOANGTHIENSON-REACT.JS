import React, { Component } from 'react';

type State = {
  count: number;
};

export default class Counter extends Component<object, State> {
  private timerId?: NodeJS.Timeout; // định nghĩa kiểu timer

  constructor(props: object) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Khi component được render lần đầu
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1) % 11   // tăng count, khi tới 10 thì quay về 0
      }));
    }, 1000);
  }

  // Khi component bị huỷ
  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div>
        <h2>Bộ đếm: {this.state.count}</h2>
      </div>
    );
  }
}
