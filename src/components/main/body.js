import React from 'react';
// import SplitColumn from '../elements/splitColumn'

const BodyContainer = (props) => {
    return(
    <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
          </div>
          {props.children}
        </div>
      </div>
    )
}
export default BodyContainer