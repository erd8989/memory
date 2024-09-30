import React from 'react'
import Project from '../Project'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Content = () => {
  return (
    <div className='content-slide'>
       <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Project/>
      </SwiperSlide>

      <SwiperSlide>
        <Project/>
      </SwiperSlide>

      <SwiperSlide>
        <Project/>
      </SwiperSlide>

      <SwiperSlide>
        <Project/>
      </SwiperSlide>
     
      
    </Swiper>

    </div>
  )
}

export default Content