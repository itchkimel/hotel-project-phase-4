import React, { Component } from 'react';
import CartCard from './CartCard'

class Cart extends Component {
    render() {
        console.log(this.props.resvItems)
        return (
            <div>
                <h3>Your bookings:</h3>
                {/* <h5>{this.props.resvItems.room.hotel.name}</h5> */}
                {/* <h5>{this.props.guestRes.startDate._d}</h5>
                <h5>{this.props.guestRes.endDate._d}</h5>
                <h5>{this.props.guestRes.room.price}</h5> */}

                {this.props.resvItems.map(resv => <CartCard resvItems={resv} />)}
                <button onClick={this.props.handleResvPost}>Checkout</button>
            </div>
        );
    }
}

export default Cart;