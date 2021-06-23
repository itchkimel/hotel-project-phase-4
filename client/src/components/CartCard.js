import React, { Component } from 'react';

class CartCard extends Component {

    handleSubmit = () => {

    const newResv = {
        date_start: this.props.resvItems.startDate,
        date_end: this.props.resvItems.endDate,
        room_id: this.props.resvItems.room.id,
        guest_id: 1
    }

    fetch("http://localhost:3000/reservations", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(newResv)
    })
    .then(res => res.json())
    .then(console.log)

    }



    render() {
        console.log(this.props.resvItems.startDate)
        
        return (
            <div className="cart">
                 <h5>Hotel: {this.props.resvItems.room.hotel.name}</h5>
                 <h5>Room: {this.props.resvItems.room.room_type}</h5>
                 {/* <img alt='room_image' src={this.props.resvItems.room.image}></img> */}
                <h5>{this.props.resvItems.startDate}</h5>
                <h5>{this.props.resvItems.endDate}</h5>
                <h5>Price Per Night: ${this.props.resvItems.room.price}</h5>
                <br></br>
                <button onClick={this.handleSubmit}>Checkout</button>

            </div>
        );
    }
}

export default CartCard;