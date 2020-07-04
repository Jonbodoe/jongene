import React from 'react';
import {
    Link
} from "react-router-dom";

const MobileNav = () => {
    return (
        <div id="menu-mobile">
            <div className="d-flex justify-content-center py-2 bg-white fixed-top">
                <div className="d-flex">
                    <div className="px-5">
                        <h2 className="font-weight-bolder no-xspace pb-1"><Link className="text-dark" to="/">JONATHAN GENE</Link></h2>
                        <div className="border-bottom border-danger"></div>
                        <div className="py-3 d-flex justify-content-around">
                            <Link className="text-dark" to="/">Photos</Link>
                            <Link className="text-dark" to="/video">Videos</Link>
                            <Link className="text-dark" to="/contact">About</Link>
                        </div>
                        <div className="py-sm-2 text-secondary text-center d-flex justify-content-around px-sm-3">
                            <a className="text-danger" target="_blank" rel="noopener noreferrer" href="instagram.com/lostshots"><i className="fa fa-instagram fa-2x px-1"></i></a>
                            <a className="text-danger" target="_blank" rel="noopener noreferrer" href="mailto:jonathangene@gmail.com"><i className="fa fa-envelope-o fa-2x px-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MobileNav