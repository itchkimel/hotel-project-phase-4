import React, { Component } from 'react';
import HotelCard from './HotelCard';
import { Link } from 'react-router-dom';
import Cart from './Cart';


export default class HotelContainer extends Component {
  render() {
    return (
      <div>
        {this.props.hotels.map(hotel => <HotelCard key={hotel.id} hotels={hotel} addToCart={this.props.addToCart} />)}
        {/* <HotelCard /> */}
      </div>
    );
  }
}