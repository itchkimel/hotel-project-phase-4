import React, { Component } from 'react';
import HotelCard from './HotelCard';

export default class HotelContainer extends Component {
  render() {
    return (
      <div>
        This is the Hotel Container
        <HotelCard />
      </div>
    );
  }
}