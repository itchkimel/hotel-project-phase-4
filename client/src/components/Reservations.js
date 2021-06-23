import React, { Component } from 'react';
import ResvCard from './ResvCard';

class Reservations extends Component {


    render() {
        console.log(this.props)
        return (
            <div>
               {this.props.currentUser.reservations.map(resv => <ResvCard currentUser={this.props.currentUser} resv={resv}/>)}
            </div>
        );
    }
}

export default Reservations;