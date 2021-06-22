import React, { Component } from 'react';
import { Form, Button, Col } from "react-bootstrap";


class AccountLogin extends Component {
    state = {
        username: "",
        password: "",
        age: ""
      }
    
      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
    
      handleSubmit = e => {
        e.preventDefault()
        // TODO: make a fetch request to sign up the current user
        fetch("http://localhost:3000/guests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state)
        })
          .then(r => r.json())
          // then set that user in state in our App component
          .then(console.log)
        //   .then(data => {
        //     const { guest, token } = data
    
        //     this.props.handleLogin(guest)
        //     // also save the id to localStorage
        //     localStorage.token = token
        //   })
      }
    
      render() {
        const { username, password, age } = this.state
    
        return (
          <form onSubmit={this.handleSubmit}>
            <h1>Signup</h1>
    
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

            <label>Age</label>
            <input
              type="age"
              name="age"
            //   autoComplete="age"
              value={age}
              onChange={this.handleChange}
            />
    
            <input type="submit" value="Signup" />
          </form>
        )
      }
}

export default AccountLogin;