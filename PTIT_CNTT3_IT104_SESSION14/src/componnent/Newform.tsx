import React, { Component } from 'react'

type User = {
  email: string,
  pass: string
}

type isState = {
  user: User
}

export default class Form extends Component<object, isState> {
  constructor(props: object) {
    super(props);
    this.state = {
      user: {
        email: '',
        pass: ''
      }
    }
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("z Người dùng vừa nhập:", this.state.user);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Form login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label><br />
          <input
            type="text"
            name="email"  
            value={this.state.user.email}
            onChange={this.handleChange}
          /><br />

          <label>Pass</label><br />
          <input
            type="password"
            name="pass"
            value={this.state.user.pass}
            onChange={this.handleChange}
          /><br />

          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
