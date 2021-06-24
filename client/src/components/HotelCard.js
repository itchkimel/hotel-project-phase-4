import React, { Component } from 'react';
import RoomCard from './RoomCard'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'


let ratings5 = "⭐️⭐️⭐️⭐️⭐️"
let ratings4 = "⭐️⭐️⭐️⭐️"
let ratings3 = "⭐️⭐️⭐️"
let ratings2 = "⭐️⭐️"
let ratings1 = "⭐️"

class HotelCard extends Component {

    state = {
        roomsForm: false
    }

    handleRooms = () => {
        this.setState({
            roomsForm: !this.state.roomsForm
        })
    }

   

    render() {
        // console.log(this.props.hotels.rooms)
        return (
            <div className="hotels">
                
                <h2>{this.props.hotels.name}</h2>
                
                <img alt="hotel" src={this.props.hotels.image} />
              
                <h3>Rating: {this.props.hotels.rating} ⭐️'s</h3>
                <button class="btn btn-primary mr-1" onClick={this.handleRooms}>{this.state.roomsForm ? "Close" : "Book A Room!"}</button>
                

                <Container>
                <Row lg={2} className="justify-content-md-center">
                {this.state.roomsForm ? this.props.hotels.rooms.map(room => 
                <RoomCard key={room.id} rooms={room} addToCart={this.props.addToCart} />) : null} 
                </Row>
                </Container>
            </div>
        );
    }
}

export default HotelCard;