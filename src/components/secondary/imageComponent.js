import React from 'react';

const ImageComponent = (props) => 
    <div>
        <img className="img-fluid my-3" src={props.info.src} key={props.info.index} alt={props.info.alt}/>
    </div>

    
export default ImageComponent;