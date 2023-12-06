import React from "react";
import { Slide } from "react-image-gallery";

const CustomSlide = (props) => {
  if (props.video) {
    return (
      <div className="image-gallery-image">
        <video controls>
          <source src={props.video} type="video/mp4" />
        </video>
      </div>
    );
  } else {
    return <Slide {...props} />;
  }
};

export default CustomSlide;