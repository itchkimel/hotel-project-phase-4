import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HotelContainer from "./components/HotelContainer";
import NavBar from "./components/NavBar";
import AccountLogin from "./components/AccountLogin";
import Reservations from "./components/Reservations";

export default class App extends Component {

  state = {
    hotels: [],
    currentUser: ""
  }


  componentDidMount() {
    fetch('http://127.0.0.1:3000/hotels')
    .then(res => res.json())
    .then(hotelsArr => this.setState({hotels: hotelsArr}))
  }

  handleLogin = currentUser => {
    // set current user (then redirect to home page)
    this.setState({ currentUser }, () => {
      // this is where we will redirect
      // this.props.history.push('/home')
    })
  }
  
  render (){    

    // console.log(this.state.hotels)

    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/login">
            <AccountLogin />
          </Route>
          <Route exact path="/reservations">
            <Reservations />
          </Route>
          <Route exact path="/hotels">
            <HotelContainer hotels={this.state.hotels} />
          </Route>
        </Switch>
      </Router>
    )
  }
}


