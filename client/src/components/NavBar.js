import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';


class NavBar extends Component {
    render() {
        return (
            <div className='links'>
             
                                  
                <Link to="/cart" ><i class="fas fa-shopping-cart"></i> Cart</Link>
                <br></br>
                <Link to="/hotels" ><i class="fa fa-home icon-home lnr lnr-home ion-ios-home-outline"></i> Hotels</Link>
                <br></br>
                <Link to="/signup" ><i class="fa fa-user icon-user lnr lnr-user ion-ios-contact-outline"></i> Signup</Link>  
                <br></br>
                <Link to="/login" ><i class="fa fa-user icon-user lnr lnr-user ion-ios-contact-outline"></i> Login</Link>  
                <br></br>
                <Link to="/reservations" > <i class="fa fa-calendar-alt icon-calendar lnr lnr-calendar-full ion-ios-calendar-outline"></i> Reservations</Link>           
                 <br></br>
                 
               
            </div>
        );
    }
}

export default NavBar;

