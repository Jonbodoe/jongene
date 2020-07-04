import React from 'react';
import Fade from 'react-reveal/Fade';
import MobileNav from '../components/main/mobileNav';

const About = () => {
    return <>
    <MobileNav/>
        <div className="container">
            <div className="row">
                <Fade bottom>
                    <div className="col-lg-2">
                        <div id="filler"></div>
                    </div>
                    <div id="profile-img" className="col-lg-6">
                    </div>
                    <div className="col-lg-4 p-3 d-flex align-self-center p-lg-4">
                        <div className="p-4">
                            <h2 className="py-2">About</h2>
                            <div className="border-bottom border-secondary pt-2"></div>
                            <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    </>
}

export default About