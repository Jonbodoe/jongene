import React from 'react';
import Images from '../../data/ImageData';


const LightBox = (props) => {
    // console.log(props.info.index)
    // let currentIndex = props.info.index
    // let currentImage = Images.filter((image)=> currentIndex === image.index)
    // const getImage = (index) => {
    //     if (currentIndex === Math.sign(index)) {
    //         console.log(index, 'pos')
    //     } else {
    //         console.log(index, 'nope')
    //     }
    //     currentIndex = index 
    //     console.log(currentIndex)
    // }
    // console.log(currentImage[0].src, currentIndex)

    // console.log(Images)
    return (
        <div id="lightbox" className="d-flex align-self-center bg-white p-4">
            <div className="row">
                <div className="col-sm-2 d-flex align-self-center justify-content-center">
                {/* <button className="btn btn-white" onClick={()=> getImage(props.info.index + 1)}>
                    <i className="fa fa-chevron-left"></i>
                </button> */}
                </div>
                <div className="col-sm-8 px-4">
                    <div>
                        <button className="btn btn-white" onClick={() => props.handler({
                            index: props.info.index,
                            lightBoxOpen: !props.info.lightBoxOpen
                        })}>
                            <i className="fa fa-times"></i> Collapse
                        </button>
                        <img className="img-fluid" src={require('../../img/k-and-a.jpg')} alt="" />
                    </div>
                </div>
                <div className="col-sm-2 d-flex align-self-center justify-content-center">
                    {/* <button className="btn btn-white" onClick={()=> getImage(props.info.index - 1)}>
                        <i className="fa fa-chevron-right"></i>
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default LightBox