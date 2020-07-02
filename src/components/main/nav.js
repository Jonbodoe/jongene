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
        <nav id="nav" className="col-md-2 px-3 py-2 fixed-top bg-white">
            <div className="p-3">
                <div className="text-center">
                    <h2 className="font-weight-bolder no-xspace pb-1 padding-top">JONATHAN GENE</h2>
                    <p className="text-secondary">Media Content Creator</p>
                    {/* <div className="border-bottom px-5"></div> */}
                </div>
                <div className="py-sm-3 text-secondary text-center d-flex justify-content-around px-sm-3">
                    <a className="text-danger" target="_blank" href="instagram.com"><i className="fa fa-instagram fa-2x px-1"></i></a>
                    <a className="text-danger" target="_blank" href="#"><i className="fa fa-file-text-o fa-2x px-1"></i></a>
                    <a className="text-danger" target="_blank" href="mailto:"><i className="fa fa-envelope-o fa-2x px-1"></i></a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar