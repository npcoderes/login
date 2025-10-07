import React, { memo } from "react";
import { Carousel } from "antd";
import img1 from "../assets/1-Login-1.svg";
import img2 from "../assets/1-Login-2.svg";
import img3 from "../assets/1-Login-3.svg";
import img4 from "../assets/1-Login-4.svg";
import img5 from "../assets/1-Login-5.svg";
import "./CarouselSection.less";
import { useMemo } from "react";

const CarouselSection = memo(() => {
  const backgroundImages = [img1, img2, img3, img4, img5];

  const config = useMemo(
    () => ({
      disableOnInteraction: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      dotDuration: 0.5,
    }),
    []
  );
  const items = useMemo(() => {
    return backgroundImages.map((image, index) => (
      <div key={index} className="img-container">
        <img
          src={image}
          alt={`Slide ${index + 1}`}
          loading="lazy"
          className="carousel-image"

        />
      </div>
    ));
  }, [backgroundImages]);


  return (
    <Carousel autoplay={{dotDuration:true}} {...config} autoplaySpeed={5000} style={{ width: 'clamp(650px,1150px,1150px)' }}  className="my-carousel">
       {items}
    </Carousel>
  );
});

export default CarouselSection;
