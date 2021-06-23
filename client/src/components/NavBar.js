import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';


class NavBar extends Component {
    render() {
        return (
            <div>
                
                <Link to="/cart"  >Go To Cart</Link>
                
                
            </div>
        );
    }
}

export default NavBar;