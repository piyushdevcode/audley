import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="LoginPage">
        <div className="LoginForm">
          <form method="post">
            <h1>Login</h1>
            <input type="text" placeholder="Email ID" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.title = "Login";
  }
}
