import React, { useEffect, useState } from "react";
import "./customSlider.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const images = [
  {
    imgURL:
      "https://m.media-amazon.com/images/I/61jBLw5Bq9L._AC_UY327_FMwebp_QL65_.jpg",
    imgAlt: "img-1",
  },
  {
    imgURL:
      "https://m.media-amazon.com/images/I/71YjdCMBmQL._AC_UY327_FMwebp_QL65_.jpg",
    imgAlt: "img-2",
  },
  {
    imgURL:
      "https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY327_FMwebp_QL65_.jpg",
    imgAlt: "img-3",
  },
  {
    imgURL:
      "https://m.media-amazon.com/images/I/81beaZVtFML._AC_UY327_FMwebp_QL65_.jpg",
    imgAlt: "img-4",
  },
];

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 3000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= images.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return images.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="custom__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      <div className="image_with_controls">
        <MdArrowBackIosNew onClick={slidePrev} size={32} className="prev_icon"/>
        <img src={images[activeIndex].imgURL} alt="" />
        <MdArrowForwardIos  onClick={slideNext} size={32} className="next_icon"/>
      </div>
      <div className="custom__slider_indicator">
        {images.map((i, index) => (
          <div
            className={`dot ${activeIndex === index ? "active" : ""}`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
