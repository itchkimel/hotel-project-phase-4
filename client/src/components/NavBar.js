import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';


class NavBar extends Component {
    render() {
        return (
            <div>
                
                <Link to="/cart" >Cart</Link>
                <br></br>
                <Link to="/hotels" >Hotels</Link>
                <br></br>
                <Link to="/signup" >Signup</Link>  
                <br></br>
                <Link to="/login" >Login</Link>  
                <br></br>
                <Link to="/reservations" >Reservation</Link>           
                
            </div>
        );
    }
}

export default NavBar;