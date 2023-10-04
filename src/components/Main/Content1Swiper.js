import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';

function Content1Swiper() {

    // const theme = useSelector(state => state.dark);

    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                // autoplay={{
                //     delay: 6000,
                //     disableOnInteraction: false,
                // }}
                navigation={{clickable: true}}
                pagination={{clickable: true}}
                modules={[Autoplay, Navigation, Pagination]}

                onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                id='swiper'
                >

                <p className='absolute z-10 text-white left-[50%] translate-x-[-50%] tracking-tight text-center bottom-10 w-full text-2xl
                lg:bottom-[117px] lg:text-6xl
                md:text-4xl'><span className='font-bold'>새로운 시작</span>을 위한 작은 발자국<br/>그 순간, <span className='font-bold'>우리의 이야기</span>가 시작됩니다.</p>
                {
                    Array(4).fill().map((_, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={`./../../Images/Main/slide${i + 1}.png`} alt={`slide${i + 1}`} className='lg:block md:block hidden' />
                                <img src={`./../../Images/Main/slide${i + 1}-mobile.png`} alt={`slide${i + 1}mobile`} className='lg:hidden md:hidden block' />
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
        </>
    )
}

export default Content1Swiper