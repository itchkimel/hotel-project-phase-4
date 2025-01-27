import React, { Component } from "react";

class AccountLogin extends Component {
  state = {
    username: "",
    password: "",
    age: 23,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: make a fetch request to sign up the current user
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      // then set that user in state in our App component
      .then((res) => {
        if (res.error) {
          alert(res.error);
          window.location.href = "http://localhost:4000/signup";
        } else {
          this.props.loggedIn(res);
          alert("Welcome Back");
          this.setState({ username: "", password: "" });
          this.props.routerProps.history.push("/hotels");
        }
      });
  };

  render() {
    const { username, password, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <label>Username</label>
        <input
          type="text"
          name="username"
          autoComplete="off"
          value={username}
          onChange={this.handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={this.handleChange}
        />

        <input class="btn btn-primary mr-1" type="submit" value="Login" />
      </form>
    );
  }
}

export default AccountLogin;
