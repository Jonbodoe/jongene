import React from 'react';
import {
    Link
  } from "react-router-dom";

const NavBar = () => {
    return (
        <nav id="nav" className="col-md-2 px-3 py-2 fixed-top bg-white">
            <div className="p-3">
                <div className="">
                    <h2 className="font-weight-bolder no-xspace pb-1 padding-top">JONATHAN GENE</h2>
                    <div className="border-bottom border-danger pt-2"></div>
                    {/* <div className="border-bottom px-5"></div> */}
                </div>
                <div className="py-2">
                    <Link className="nav-link text-dark" to="/">Home</Link>
                    <Link className="nav-link text-dark" to="/video">Video</Link>
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