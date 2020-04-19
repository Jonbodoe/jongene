import React from 'react';
import images from './../imageList'

const splitImages = () => {
    this.leftColumn = ['sdf']
    this.rightColumn = ['dfgdfg']
    // images.map((image)=> {
    //     image.id % 0 ? leftColumn.unshift(image) : rightColumn.unshift(image)
    // })
}

const Overview = () => {
    console.log(splitImages.leftColumn)
    // splitImages(images)
    return (
        <>
        <div className="col-sm-5 no-gutter bg-light d-flex justify-content-center">
            <div>
                <img className="img-fluid py-3" src={require('./../img/wcag.jpg')} alt="image" />
                <img className="img-fluid py-3" src={require('./../img/wcag.jpg')} alt="image" />
                <img className="img-fluid py-3" src={require('./../img/wcag.jpg')} alt="image" />
            </div>
        </div>
        <div className="col-sm-5 no-gutter bg-light d-flex justify-content-center">
            <div>
                <img className="img-fluid py-3" src={require('./../img/wcag.jpg')} alt="image" />
                <img className="img-fluid py-3" src={require('./../img/wcag.jpg')} alt="image" />
                <img className="img-fluid py-3" src={require('./../img/wcag.jpg')} alt="image" />
            </div>
        </div>
        </>
    )
}
export default Overview