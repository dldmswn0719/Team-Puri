import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Content3Review() {
    return (
        <div className='content3bg lg:pt-52 lg:pb-52 relative' id='review'>
            <div className='md:w-[768px] lg:w-[1200px] m-auto pb-10'>
                <ul className='md:flex md:justify-between lg:flex lg:justify-between text-center'>
                    <li>
                        <p className='tracking-tight lg:text-5xl lg:mb-[43px]
                        md:text-3xl md:mb-7 text-2xl mb-4'><span className='font-bold'>입양후기</span>를 만나보세요.</p>
                        <p className='md:text-xl lg:text-2xl tracking-tight'>입양<span className='font-bold'>ON</span> 펫숍<span className='font-bold'>OFF</span><br />동물을 사고 팔지 않는 사회를 만드는 데에 동참해주세요.</p>
                    </li>
                    <li>
                        <button className='bg-[#E75A56] text-white font-bold cursor-pointer duration-500 hover:bg-[#db3b36] rounded-full
                        
                        w-60 h-10 mt-5
                        md:w-80 md:h-16 md:text-xl
                        lg:w-[440px] lg:h-[80px] lg:text-2xl lg:mt-[93px] '><NavLink to='/review_page' className='text-white'>더 많은 후기 만나러 가기</NavLink></button>
                    </li>
                </ul>
            </div>

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className='md:w-[768px] lg:w-[1200px] m-auto mb-20'
                >

                <SwiperSlide><img src="./../../Images/Main/r1.png" alt="slide1" /></SwiperSlide>
                <SwiperSlide><img src="./../../Images/Main/r2.png" alt="slide2" /></SwiperSlide>
                <SwiperSlide><img src="./../../Images/Main/r3.png" alt="slide3" /></SwiperSlide>
                <SwiperSlide><img src="./../../Images/Main/r4.png" alt="slide4" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Content3Review