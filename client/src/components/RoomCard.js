import React, { Component } from 'react';
import DateReservation from './DateReservation'

class RoomCard extends Component {
    render() {
        console.log(this.props.rooms)
        return (
            <div className="rooms">
                <h4>{this.props.rooms.room_type}</h4>
                <img alt="room" src={this.props.rooms.image}></img>
                <h4>Price: ${this.props.rooms.price} - Per Night</h4>
                <DateReservation />
            </div>
        );
    }
}

export default RoomCard;