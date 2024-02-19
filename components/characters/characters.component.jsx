import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './characters.module.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


// import required modules
import { Mousewheel, Pagination ,EffectFade,} from 'swiper/modules';

const Characters = () => {
    
  return (
    <div className={styles.charWrapper}>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        effect={'fade'}
        spaceBetween={0}
        touchReleaseOnEdges={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel,EffectFade,Pagination]}
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
    </div>
  );
}

export default Characters
