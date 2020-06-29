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
            <div className="container py-2">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-2 w-100">
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
                <footer className="py-5 text-secondary text-center">
                    Jonathan Gene Photography © 2020
                </footer>
            </div>

        </>
    )
}
export default Overview