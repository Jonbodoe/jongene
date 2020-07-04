import React from 'react';
import {
    Link
} from "react-router-dom";

const NavBar = () => {
    return (
        <nav id="nav" className="col-md-2 px-3 py-2 fixed-top bg-white">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="p-3">
                <div className="">
                    <h2 className="font-weight-bolder no-xspace padding-top"><Link className="text-dark" to="/">JONATHAN GENE</Link></h2>
                    <div className="border-bottom border-danger pt-2"></div>
                    {/* <div className="border-bottom px-5"></div> */}
                </div>
                <div className="py-2">
                    <Link className="nav-link text-dark" to="/">Photos</Link>
                    <Link className="nav-link text-dark" to="/video">Videos</Link>
                    <Link className="nav-link text-dark" to="/about">About</Link>
                </div>
                <div className="py-sm-2 text-secondary text-center d-flex">
                    <a className="text-danger" target="_blank" rel="noopener noreferrer" href="//instagram.com/lostshots"><i className="fa fa-instagram fa-2x px-2"></i></a>
                    <a className="text-danger" target="_blank" rel="noopener noreferrer" href="mailto:jonathangene@gmail.com"><i className="fa fa-envelope-o fa-2x px-2"></i></a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar