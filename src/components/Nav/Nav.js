import React, { Component } from 'react';
// import Series from '../Series/Series';
import { Link } from "react-router-dom";

class Nav extends Component {

    render() {
        return (

            <nav className="navbar navbar-dark bg-white">
                <div className="navbarbrand">Logo papa</div>
                <ul className="nav float-right">

                    <li className="nav-item">
                        <Link to="/" className="nav-link">Series</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;