import React from "react";
import "./imagetext.css";

const ImageText = ({imk,hd,par}) => {
  return (
    <><div className="fk">
      <div className="image_t">
        <img
          src={imk}
          className="pic"
        />
      </div>
      <div className="box">
        <a href="#" className="heading  hoverh">{hd}</a>
        <p className="paragraph">
         {par}
        </p>
        </div>
      </div>
    </>
  );
};

export default ImageText;
