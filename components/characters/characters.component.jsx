import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperGL from 'dist/swiper-gl.esm.js';
import styles from './characters.module.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Mousewheel, Pagination ,EffectFade, Autoplay,} from 'swiper/modules';

const Characters = () => {
    
  return (
    <div className={styles.charWrapper}>
      <Swiper
        direction={'vertical'}
      speed={1500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        effect="gl"
        onBeforeInit={(swiper) => (swiper.params.gl.shader = 'squares')}
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
        modules={[Mousewheel,EffectFade,Pagination,SwiperGL,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img class="swiper-gl-image"  src='/assets/0.jpg'/>
        </SwiperSlide>
        <SwiperSlide> <img class="swiper-gl-image" src='/assets/1.jpg'/></SwiperSlide>
        <SwiperSlide> <img class="swiper-gl-image" src='/assets/2.jpg'/></SwiperSlide>
        <SwiperSlide> <img class="swiper-gl-image" src='/assets/3.jpg'/></SwiperSlide>
        <SwiperSlide> <img class="swiper-gl-image" src='/assets/4.jpg'/></SwiperSlide>
        <SwiperSlide> <img class="swiper-gl-image" src='/assets/5.jpg'/></SwiperSlide>
      </Swiper>
      {/* <Swiper
  modules={[SwiperGL]}
  effect="gl"
  onBeforeInit={(swiper) => (swiper.params.gl.shader = 'morph-x')}
>
<SwiperSlide> <img class="swiper-gl-image" src='/assets/4.jpg'/></SwiperSlide>
        <SwiperSlide> <img class="swiper-gl-image" src='/assets/5.jpg'/></SwiperSlide>
</Swiper> */}
    </div>
  );
}

export default Characters
