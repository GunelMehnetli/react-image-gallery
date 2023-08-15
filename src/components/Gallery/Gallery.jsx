import React from "react";
import { useState } from "react";
import "./Gallery.css";
import images from "../../images";

function Gallery() {
  const [selectedImg, setselectedImg] = useState(images[0]);
  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} className="selected" />
      </div>
      <div className="imgContainer">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Selected"
            className="selected"
            onClick={() => setselectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
