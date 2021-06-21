import React, { Component } from 'react';
import RoomCard from './RoomCard'

class HotelCard extends Component {

    state = {
        roomsForm: false
    }

    handleRooms = () => {
        this.setState({
            roomsForm: !this.state.rooms
        })
    }

    render() {
        console.log(this.props.hotels)
        return (
            <div>
                <h2>{this.props.hotels.name}</h2>
                <img alt="hotel" src={this.props.hotels.image}></img>
                <h3>{this.props.hotels.rating}</h3>
                
                <RoomCard />
            </div>
        );
    }
}

export default HotelCard;