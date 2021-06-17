import React, { Component } from "react";
import './App.css';
import HotelContainer from "./components/HotelContainer";
import NavBar from "./components/NavBar";
import AccountLogin from "./components/AccountLogin";
import Reservations from "./components/Reservations";

export default class App extends Component {
  
  render (){    
    return (
      <div>
        <NavBar />
        <AccountLogin />
        <Reservations />
        Fullstack Hotels under construction...
        <HotelContainer />
      </div>
    )
  }
}


