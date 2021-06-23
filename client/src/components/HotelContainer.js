import React, { Component } from 'react';
import HotelCard from './HotelCard';
import { Link } from 'react-router-dom';
import Cart from './Cart';


export default class HotelContainer extends Component {
  render() {
    return (
      <div>
        This is the Hotel
        <br></br>

        hello
        <br></br>

        {/* <Link to="/cart"  >Go To Cart</Link> */}

        {this.props.hotels.map(hotel => <HotelCard key={hotel.id} hotels={hotel} addToCart={this.props.addToCart} />)}
        {/* <HotelCard /> */}
      </div>
    );
  }
}