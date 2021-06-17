import React, { Component } from 'react';
import RoomCard from './RoomCard'

class HotelCard extends Component {
    render() {
        return (
            <div>
                This is the hotel card
                <RoomCard />
            </div>
        );
    }
}

export default HotelCard;