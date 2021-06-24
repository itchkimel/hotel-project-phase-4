import React, { Component } from 'react';
import HotelCard from './HotelCard';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'


export default class HotelContainer extends Component {
  render() {
    return (
      <div>
        <Container>
        <Row lg={4} className="justify-content-md-center">
        {this.props.hotels.map(hotel => <HotelCard key={hotel.id} hotels={hotel} addToCart={this.props.addToCart} />)}
        {/* <HotelCard /> */}
        </Row>
        </Container>
      </div>
    );
  }
}