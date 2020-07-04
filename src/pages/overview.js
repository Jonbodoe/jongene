import React, { useState } from 'react';
import Images from '../data/ImageData';
import Fade from 'react-reveal/Fade';
import ImageComponent from '../components/secondary/imageComponent';
import LightBox from '../components/main/lightbox';



const Overview = () => {
    const [lightBoxState, setLightBox] = useState({
        index: null,
        lightBoxOpen: false
    })
    const leftImages = [];
    const rightImages = [];

    const openLightBox = i => {
        setLightBox({
            index: i,
            lightBoxOpen: !lightBoxState.lightBoxOpen ? !lightBoxState.lightBoxOpen : lightBoxState.lightBoxOpen
        })
    }
    Images.map((img) => {
        if (img.column === "LEFT") {
            return leftImages.push(img)
        } else if (img.column === "RIGHT") {
            return rightImages.push(img)
        }
    })

    // console.log(lightBoxState)
    // splitImages(images)
    return (
        <>
            {
                lightBoxState.lightBoxOpen ? <LightBox handler={setLightBox} info={lightBoxState} /> : <></>
            }
            <div id="gallery" className={`container-fluid py-2x`}>
                <div id="menu-mobile">
                    <div className="d-flex justify-content-center py-2 bg-white fixed-top">
                        <div className="d-flex">
                            <div className="px-5">
                                <h2 className="font-weight-bolder no-xspace pb-1">JONATHAN GENE</h2>
                                <div className="border-bottom"></div>
                                <div className="py-sm-2 pt-2 text-secondary text-center d-flex justify-content-around px-sm-3">
                                    <a className="text-danger" target="_blank" href="instagram.com/lostshots"><i className="fa fa-instagram fa-2x px-1"></i></a>
                                    <a className="text-danger" target="_blank" href="mailto:jonathangene@gmail.com"><i className="fa fa-envelope-o fa-2x px-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content" className={`row d-flex justify-content-center ${lightBoxState.lightBoxOpen ? 'no-scroll' : ''}`}>
                    <div id="filler" className="col-lg-2">
                    </div>
                    <div className="col-lg-5 px-lg-4 d-flex justify-content-center">
                        <div className="flex-column image-column pl-lg-4">
                            <Fade bottom>
                                {
                                    leftImages.map((img) =>
                                        <button onClick={() => openLightBox(img.index)} className="btn no-gutter">
                                            <ImageComponent info={img} />
                                        </button>
                                    )
                                }
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-5 px-lg-4 d-flex justify-content-center">
                        <div className="flex-column image-column pr-lg-4">
                            <Fade bottom>
                                {
                                    rightImages.map((img) =>
                                        <button onClick={() => openLightBox(img.index)} className="btn no-gutter">
                                            <ImageComponent info={img} />
                                        </button>
                                    )
                                }
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-1">
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