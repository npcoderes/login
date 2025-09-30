import React, { memo } from "react";
import { Carousel } from "antd";
import img1 from "../assets/image.webp";
import img2 from "../assets/image2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
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
    <Carousel autoplay={{dotDuration:true}} {...config} autoplaySpeed={5000} style={{ width: 'clamp(400px,1200px,980px' }}  className="my-carousel">
       {items}
    </Carousel>
  );
});

export default CarouselSection;
