import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import Card from './Card';

export default function Carrousel() {
  return (
    <div className='carrousel-box-center'>
        <h3>Productos destacados:</h3>
        <div className='carrousel-box'>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className='mySwiper'
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480:{
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768:{
                        slidesPerView:3,
                        spaceBetween: 15,
                    },
                    1024:{
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    1280:{
                        slidesPerView: 5,
                        spaceBetween: 30
                    }

                }}  
            >
                <SwiperSlide className='carrousel-card-center'>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide className='carrousel-card-center'>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide className='carrousel-card-center'>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide className='carrousel-card-center'>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide className='carrousel-card-center'>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide className='carrousel-card-center'>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide className='carrousel-card-center'>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide className='carrousel-card-center'>
                    <Card/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
