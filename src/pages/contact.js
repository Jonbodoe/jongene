import React from 'react';
import Images from '../data/ImageData';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }
  // onLightBox(e) {
  //   console.log(e)
  // }
  render() {
    return (
      <></>
      // <button onClick={()=>onLightBox()}>Hello</button>
      // <div className="container-fluid">
      //   <div className="row">
      //     <div className="col-sm-2">
      //     </div>
      //     <div className="col-sm-5 no-gutter d-flex">
      //       <div>Contact</div>
      //     </div>
      //     <div className="col-sm-5 no-gutter d-flex">
      //       {
      //       //   Images.map((img)=> <>
      //       //     <img src={img.src} alt="yea"/>
      //       // <div>{img.index}</div>
      //       //     </>
      //       //     )
      //       }
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default Contact