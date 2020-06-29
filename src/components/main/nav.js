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
        <nav id="nav" className="col-md-3 px-5 py-4 fixed-top bg-white">
            <img id="author" className="img-fluid p-lg-4" src={require('../../img/protraitshot.jpeg')} alt="Jonthan Gene Protrait Shot" />
            <div className="py-3">
                <div className="text-center">
                    <h2 className="font-weight-bolder no-xspace pb-1">JONATHAN GENE</h2>
                    <p className="text-secondary">Media Content Creator</p>
                    <div className="border-bottom"></div>
                </div>
                <div className="py-3 text-secondary text-center d-flex justify-content-around px-md-3">
                    <i class="fa fa-instagram fa-2x px-1"></i>
                    <i class="fa fa-file-text-o fa-2x px-1"></i>
                    <i class="fa fa-envelope-o fa-2x px-1"></i>
                </div>
            </div>
        </nav>
    )
}

export default NavBar