import React, { Component } from "react";
import type { ChangeEvent } from "react";
type Tiendo ={
    tiendo:string
}
export default class Bai4 extends Component<object,Tiendo> {
    constructor(props:object) {
        super(props);
        this.state ={
            tiendo:''
        }
    }
    handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({tiendo:e.target.value})
    }
    handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(`tien do : ${this.state.tiendo} %`)
    }
  render() {
    return (
      <div>
        <form action="">
            <p>tien do hoan thanh : {this.state.tiendo} % </p>
            <input type="range" onChange={this.handleInputChange} value={this.state.tiendo}/>
            <button onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
    )
  }
}
