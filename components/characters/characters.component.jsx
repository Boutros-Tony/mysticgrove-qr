import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


// import required modules
import { Mousewheel, Pagination ,EffectFade,} from 'swiper/modules';

const Characters = () => {
    
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        effect={'fade'}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel,EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src='/assets/0.jpg'/>
        </SwiperSlide>
        <SwiperSlide> <img src='/assets/1.jpg'/></SwiperSlide>
        <SwiperSlide> <img src='/assets/2.jpg'/></SwiperSlide>
        <SwiperSlide> <img src='/assets/3.jpg'/></SwiperSlide>
        <SwiperSlide> <img src='/assets/4.jpg'/></SwiperSlide>
        <SwiperSlide> <img src='/assets/5.jpg'/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Characters
