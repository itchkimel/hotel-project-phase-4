import React, { Component } from "react";
import './App.css';
import HotelContainer from "./components/HotelContainer";
import NavBar from "./components/NavBar";
import AccountLogin from "./components/AccountLogin";
import Reservations from "./components/Reservations";

export default class App extends Component {

  state = {
    hotels: []
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3000/hotels')
    .then(res => res.json())
    .then(hotelsArr => this.setState({hotels: hotelsArr}))
  }
  
  render (){    

    console.log(this.state.hotels)

    return (
      <div>
        <NavBar />
        <AccountLogin />
        <Reservations />
        Fullstack Hotels under construction...
        <HotelContainer hotels={this.state.hotels} />
      </div>
    )
  }
}
