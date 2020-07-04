import React from 'react';
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-router-dom';

const Video = () => {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-10 py-4">
                    <Fade bottom>
                        <div className="py-5">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" title="Kindred The Family Soul - 'Welcome To My World'" src="https://www.youtube.com/embed/pXBb2xmA19Q" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="py-5">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" title="Just Frenchie - Philly" src="https://www.youtube.com/embed/xfHX_-IoPk4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </>
}

export default Video