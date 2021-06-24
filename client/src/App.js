import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HotelContainer from "./components/HotelContainer";
import NavBar from "./components/NavBar";
import AccountLogin from "./components/AccountLogin";
import Reservations from "./components/Reservations";
import Cart from "./components/Cart";
import Signup from "./components/Signup";

export default class App extends Component {

  state = {
    hotels: [],
    currentUser: "",
    resvItems: [],
    userResv: []

  }


  componentDidMount() {
    fetch('http://127.0.0.1:3000/hotels')
    .then(res => res.json())
    .then(hotelsArr => this.setState({hotels: hotelsArr}))
    console.log("mounted")
  }

  handleLogin = currentUser => {
    // set current user (then redirect to home page)
    this.setState({ currentUser }, () => {
      // this is where we will redirect
      // this.props.history.push('/home')
    })
  }

  addToCart = (resvObj) => {
    this.setState({resvItems: [...this.state.resvItems, resvObj]})
  }

  loggedIn = (user) => {
    // debugger
    this.setState({
      currentUser: user
    })
  }

  handleResvPost = () => {
    this.state.resvItems.map(resvItem => {
    let newResv = {
        date_start: resvItem.startDate,
        date_end: resvItem.endDate,
        room_id: resvItem.room.id,
        guest_id: 1
    }

    fetch("http://localhost:3000/reservations", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(newResv)
    })
    .then(res => res.json())
    .then(res => this.setState({
      userResv: [...this.state.userResv, res],
      resvItems: []
    })
    )
  
    })}
  
  render (){    

    // console.log(this.state.resvItems)

    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/login">
            <AccountLogin loggedIn={this.loggedIn} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/cart">
            <Cart resvItems={this.state.resvItems} hotels={this.state.hotels} handleResvPost={this.handleResvPost} />
          </Route>
          <Route exact path="/reservations">
            <Reservations currentUser={this.state.currentUser} hotels={this.state.hotels} />
          </Route>
          <Route exact path="/hotels">
            <HotelContainer hotels={this.state.hotels} addToCart={this.addToCart} />
          </Route>
          
        </Switch>
      </Router>
    )
  }
}
