import React from 'react';
import Fade from 'react-reveal/Fade';
import MobileNav from '../components/main/mobileNav';

const Contact = () => {
    return <>
        <MobileNav />
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
                            <p className="py-3">
                                Hello, my name is Jonathan Gene and I am a young professional born from Philadelphia. I’ve graduated from Temple University with a degree
                                in Film and Media Arts as well as 5 years of working experience with photography/videography and photo editing.
                            </p>
                            <p className="">Email: JonathanGene@gmail.com</p>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    </>
}

export default Contact