
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Swiperr = () => {
  return (
    <>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.kfcpakistan.com/images/65d4ad90-8cb9-11ef-ac1f-b1915cbd0455-Web-banner-1675x600_desktop_image-2024-10-17185537.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfcpakistan.com/images/a9fd6850-8d58-11ef-8691-e5253fef787b-Web-banner-1675x600_desktop_image-2024-10-18135542.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfcpakistan.com/images/65d4ad90-8cb9-11ef-9e75-8f6e06e6040c-Web-banner-1675x600_desktop_image-2024-10-17185537.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfcpakistan.com/images/a9fd6850-8d58-11ef-8691-e5253fef787b-Web-banner-1675x600_desktop_image-2024-10-18135542.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Swiperr
