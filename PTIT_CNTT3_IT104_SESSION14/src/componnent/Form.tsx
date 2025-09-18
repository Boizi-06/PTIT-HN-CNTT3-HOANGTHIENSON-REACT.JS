import React, { Component } from 'react'
type isState ={
    email : string,
    pass:string,
}

export default class form extends Component<object,isState> {
    constructor (props:object) {
        super(props);
        this.state = {
            email:'',
            pass: ''
        }

    }
    handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("nguoi dung vua nhap",this.state);
        
    }
    handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log("gia tri ngoi dung nhap",e.target.value);
        this.setState({email:e.target.value});
    }
    handleChangePass = (e:React.ChangeEvent<HTMLInputElement>) => {
         console.log("gia tri ngoi dung nhap",e.target.value);
        this.setState({pass:e.target.value});
    }
  render() {
    return (
      <div>
        <h1>Form login</h1>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">Email</label><br />
            <input type="text" onChange={this.handleChangeEmail} /><br />
            <label htmlFor="" >Pass</label><br />
            <input type="password" onChange={this.handleChangePass}/><br />
            <button>login</button>
        </form>
      </div>
    )
  }
}
