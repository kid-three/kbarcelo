import { Box } from '@radix-ui/themes';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Sk8 = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="/mefly.jpeg" alt="sk8" className="swiper-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/shirt.jpg" alt="sk8" className="swiper-image" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/us.jpeg" alt="sk8" className="swiper-image" />
      </SwiperSlide>
      <SwiperSlide>
        <video className="swiper-video" controls>
          <source src="/skateVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sk8;
