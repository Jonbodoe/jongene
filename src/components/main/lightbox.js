import React from 'react';
import Images from '../../data/ImageData';


const LightBox = (props) => {
    // console.log(props.info.index, Images.length)
    let currentIndex = props.info.index
    let currentImage = Images.filter((image) => currentIndex === image.index)
    return (
        <div id="lightbox" className="container-fluid d-flex align-self-center bg-white p-4">
            <div className="row w-100 d-flex justify-content-center">
                <div className="col-lg-2 d-flex align-self-center justify-content-center">
                    <div className="arrow-guide">
                        <button className="btn btn-white" disabled={props.info.index === 0 ? true : false} onClick={() => props.handler({
                            index: Images.length > props.info.index && Math.sign(props.info.index) !== 0 ? props.info.index - 1 : props.info.index,
                            lightBoxOpen: props.info.lightBoxOpen
                        })}>
                            <i className={`fa fa-chevron-left ${props.info.index === 0 ? 'text-light' : ''} `}></i>
                        </button>
                    </div>
                </div>
                <div className="col-lg-8 px-4">
                    <div className="d-flex justify-content-center align-self-center">
                        <div>
                            <div>
                                <button className="btn btn-white" onClick={() => props.handler({
                                    index: props.info.index,
                                    lightBoxOpen: !props.info.lightBoxOpen
                                })}>
                                    <i className="fa fa-times"></i> Collapse
                            </button>
                            </div>
                            <img className={currentImage[0].orientation === "LANDSCAPE" ? 'img-fluid' : 'protrait-img'} src={currentImage[0].src} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 d-flex align-self-center justify-content-center">
                    <div className="arrow-guide">
                        <button className="btn btn-white" disabled={props.info.index === Images.length - 1 ? true : false} onClick={() => props.handler({
                            index: Images.length > props.info.index && Math.sign(props.info.index) !== -1 ? props.info.index + 1 : props.info.index,
                            lightBoxOpen: props.info.lightBoxOpen
                        })}>
                            <i className={`fa fa-chevron-right ${props.info.index === Images.length - 1 ? 'text-light' : ''}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LightBox