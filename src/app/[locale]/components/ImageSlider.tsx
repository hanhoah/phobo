"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="border-black border-2">
        <div>
          <Image
            src="/images/Home_003.jpg"
            alt="tools"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80%" }} // optional
          />{" "}
        </div>
        <div>
          <Image
            src="/images/Home_003.jpg"
            alt="tools"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80%" }} // optional
          />{" "}
        </div>
      </Slider>
    </div>
  );
}
