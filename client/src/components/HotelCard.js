import React, { Component } from 'react';
import RoomCard from './RoomCard'

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
                <img alt="hotel" src={this.props.hotels.image}></img>
                <h3>Rating: {this.props.hotels.rating} ⭐️'s</h3>
                <button onClick={this.handleRooms}>Book A Room!</button>
                {this.state.roomsForm ? this.props.hotels.rooms.map(room => 
                <RoomCard key={room.id} rooms={room} />) : null} 
                {/* <RoomCard /> */}
            </div>
        );
    }
}

export default HotelCard;