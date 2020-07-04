import React from 'react';

const ImageComponent = (props) => 
    <div>
        <img className="img-fluid py-lg-5 px-3 py-3" src={props.info.src} key={props.info.index} alt={props.info.alt} dataset-index={props.info.index}/>
    </div>
    
export default ImageComponent;