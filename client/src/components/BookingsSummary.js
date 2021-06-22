import React, { Component } from 'react';

class BookingsSummary extends Component {
    render() {
        console.log(this.props.resvItems)
        return (
            <div>
                <h3>Your bookings:</h3>
                {/* <h5>{this.props.guestRes.room.room_type}</h5>
                <h5>{this.props.guestRes.startDate._d}</h5>
                <h5>{this.props.guestRes.endDate._d}</h5>
                <h5>{this.props.guestRes.room.price}</h5> */}

            </div>
        );
    }
}

export default BookingsSummary;