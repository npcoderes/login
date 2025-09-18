import React, { memo } from "react";
import { Carousel } from "antd";
import img1 from "../assets/image.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import "./CarouselSection.css";
import { useMemo } from "react";

const CarouselSection = memo(() => {
  const backgroundImages = useMemo(() => [img1, img2, img3, img4, img5], []);

  const config = useMemo(
    () => ({
      delay: 3000,
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
    <Carousel autoplay={true} autoplaySpeed={5000} style={{ width: 'clamp(300px, 50vw, 930px)' }}>
       {items}
    </Carousel>
  );
});

export default CarouselSection;
