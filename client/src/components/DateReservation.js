import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { ModalBody } from 'react-bootstrap';
import BookingsSummary from './BookingsSummary';


class DateReservation extends Component {

    state = {
        startDate: "",
        endDate: "",
        // guest: "",
        // room: "",
        // resMade: false
    }

    example = () => {
        console.log(this.state.startDate._d)
    }

    handleSubmit = (e) => {
       e.preventDefault()
       
    //    this.setState({guest: 1})
    //    this.setState({room: this.props.rooms})
    //    this.setState({resMade: true})
        
    let guestReservation = {
            startDate: this.state.startDate._d,
            endDate: this.state.endDate._d,
            guestId: 1,
            room: this.props.rooms
        }

        this.props.addToCart(guestReservation)
        alert("Reservation Added To Cart!")
        this.setState({startDate:"", endDate:""})

    }



    render() {

        // console.log(this.state.startDate._d)
        // console.log(this.state.endDate._d)
        // console.log(this.props.rooms)
        // console.log(this.state.room)
        // console.log(this.state.startDate._d, this.state.endDate._d, this.state.guest, this.state.room)

        return (
            <div className="room-reservation">
                <form onSubmit={this.handleSubmit} className="res-date">
                    <h4>Select Dates For Your Stay</h4>
                <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />
                <input 
                type="submit" 
                name="submit" 
                value="Reserve Room" 
                className="submit"
                />
                </form>
                <br></br>
                {/* <button onClick={this.example}>see the start date</button> */}

                {/* {this.state.resMade ? <BookingsSummary guestRes={this.state} /> : null } */}

            </div>
        );
    }
}

export default DateReservation;