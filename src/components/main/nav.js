import React from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";
// import Contact from '../../pages/contact'


const NavBar = () => {
    
    return (
        <nav id="nav" className="col-sm-2 p-4 shadow-sm fixed-top">
            <div>
                <h1 className="font-weight-bolder no-xspace pb-3">JONATHAN<br />GENE</h1>
                <p className="text-secondary">Media Content Creator</p>
                <div className="border-bottom"></div>
            </div>
            <ul className="navbar-nav mr-auto py-4">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Overview<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/photos">Photos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>

            {/* <div>
                <i class="fa fa-linkedin" style={{ fontSize: "25px" }}></i>
                <i class="fa fa-instagram" style={{ fontSize: "25px" }}></i>
            </div> */}
        </nav>
    )
}

export default NavBar