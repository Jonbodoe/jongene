import React, { useState, useEffect, useContext } from 'react';
import Images from '../data/ImageData';
import Fade from 'react-reveal/Fade';
import ImageComponent from '../components/secondary/imageComponent';



const Overview = () => {
    const [lightBoxState, setLightBox] = useState({
        index: null,
        lightBoxOpen: false
    })
    const leftImages = [];
    const rightImages = [];


    Images.map((img) => {
        if (img.column === "LEFT") {
            return leftImages.push(img)
        } else if (img.column === "RIGHT") {
            return rightImages.push(img)
        }
    })
    // splitImages(images)
    return (
        <>
            <div id="gallery" className="container py-2">
                <div id="menu-mobile">
                    <div className="d-flex justify-content-center py-3 bg-white fixed-top">
                        <div className="d-flex">
                            <img id="author" className="img-fluid p-lg-4 p-1" src={require('../img/protraitshot.jpeg')} alt="Jonthan Gene Protrait Shot" />
                            <div className="px-5">
                                <h2 className="font-weight-bolder no-xspace pb-1">JONATHAN GENE</h2>
                                <p className="text-secondary">Media Content Creator</p>
                                <div className="border-bottom"></div>
                                <div className="py-sm-3 pt-3 text-secondary text-center d-flex justify-content-around px-sm-3">
                                    <a className="text-danger" target="_blank" href="instagram.com"><i className="fa fa-instagram fa-2x px-1"></i></a>
                                    <a className="text-danger" target="_blank" href="#"><i className="fa fa-file-text-o fa-2x px-1"></i></a>
                                    <a className="text-danger" target="_blank" href="mailto:"><i className="fa fa-envelope-o fa-2x px-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div id="filler" className="col-sm-2 w-100">
                    </div>
                    <div className="col-lg-5 no-gutter d-flex justify-content-center">
                        {/* <Fade bottom> */}
                        <div className="flex-column">
                            <Fade bottom>
                                {
                                    leftImages.map((img) =>
                                        <ImageComponent info={img} />
                                    )
                                }
                            </Fade>
                        </div>
                        {/* </Fade> */}
                    </div>

                    <div className="col-lg-5 no-gutter d-flex justify-content-center">

                        <div className="flex-column">
                            <Fade bottom>
                                {
                                    rightImages.map((img) =>
                                        // <Fade bottom>
                                        <ImageComponent info={img} />
                                    )
                                }
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <footer className="py-5 text-secondary text-center">
                            Jonathan Gene Photography © 2020
                        </footer>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Overview