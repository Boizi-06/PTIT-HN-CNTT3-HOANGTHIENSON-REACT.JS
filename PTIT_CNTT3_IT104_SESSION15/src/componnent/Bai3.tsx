import  React, { Component } from 'react'
import type { ChangeEvent } from 'react';
type dob = {
    Dob:string;
}

export default class Bai3 extends Component<object,dob> {
     constructor(props: object) {
    super(props);
    this.state = {    
      Dob:""
    };
  }
  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ Dob: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Ngày sinh:", this.state.Dob);
  };
  render() {
    return (
      <div>
        <form action="">
            <p>ngay sinh:{this.state.Dob}</p>
            <input type="date" onChange={this.handleInputChange} value={this.state.Dob}/>
            <button onClick={this.handleSubmit}>submit</button>
        </form>
    </div>
    )
  }
}
