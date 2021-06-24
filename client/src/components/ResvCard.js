import React, { Component } from 'react';

class ResvCard extends Component {


    render() {
        console.log(this.props.resv)
        console.log(this.props.hotels)
        const beef = this.props.hotels.filter(hotel => hotel.rooms.find(room => room.id === this.props.resv.room_id))
        const beef1 = beef[0].rooms.filter(room => room.id == this.props.resv.room_id)

        console.log(beef[0])
        console.log(beef1)
        return (
            <div className="user-resv">
                <h5>Hotel: {beef[0].name}</h5>
                <h5>Room: {beef1[0].room_type}</h5>
                <img alt='room_image' src={beef1[0].image}/>
                 {/* <h5>{this.props.resv.startDate}</h5>
                <h5>{this.props.resv.endDate}</h5>
                <h5>Price Per Night: ${this.props.resv.room.price}</h5>
                <br></br> */}
            </div>
        );
    }
}

export default ResvCard;