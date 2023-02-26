import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav style={{ backgroundColor: 'black', }}>
                    <div className="nav-wrappers" style={{ textAlign: 'center' }}>
                        <ul id="nav-mobile" className="hide-on-med-and-down" >
                            <li style={{ ':hover': { color: 'green' } }}>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/form">Form</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;