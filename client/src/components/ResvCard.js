import React, { Component } from 'react';

class ResvCard extends Component {





    render() {
        console.log(this.props.resv)
        console.log(this.props.currentUser)
        return (
            <div className="cart">
                {/* <h5>Hotel: {this.props.currentUser.rooms.map()}</h5> */}
                {/* <h5>Room: {this.props.resv.room.room_type}</h5>
                <img alt='room_image' src={this.props.resv.room.image} />
                <h5>{this.props.resv.startDate}</h5>
                <h5>{this.props.resv.endDate}</h5>
                <h5>Price Per Night: ${this.props.resv.room.price}</h5>
                <br></br> */}
            </div>
        );
    }
}

export default ResvCard;