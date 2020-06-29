import React from 'react';
// import SplitColumn from '../elements/splitColumn'

const BodyContainer = (props) => {
    return(
    <div className="container-fluid">
        <div className="row">
          {props.children}
        </div>
      </div>
    )
}
export default BodyContainer