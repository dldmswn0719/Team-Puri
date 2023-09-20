import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Content1Swiper() {
    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >

                <p className='absolute z-10 text-white text-[64px] left-[50%] translate-x-[-50%] bottom-[117px] '><span>새로운 시작</span>을 위한 작은 발자국<br/>그 순간, <span>우리의 이야기</span>가 시작됩니다.</p>
                <SwiperSlide><img src="./../../Images/Main/slide1.png" alt="slide1" /></SwiperSlide>
                <SwiperSlide><img src="./../../Images/Main/slide2.png" alt="slide2" /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Content1Swiper