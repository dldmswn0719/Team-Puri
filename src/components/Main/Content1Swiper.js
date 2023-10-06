import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function Content1Swiper() {

    const theme = useSelector(state => state.dark);
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;
    

    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                navigation={{clickable: true}}
                pagination={{clickable: true}}
                modules={[Autoplay, Navigation, Pagination]}

                id='swiper'
                >

                <p className='absolute z-10 text-white left-[50%] translate-x-[-50%] tracking-tight text-center bottom-10 w-full text-2xl
                lg:bottom-[117px] lg:text-6xl
                md:text-4xl'><span className='font-bold'>{messages.cont1swiper1}</span>{messages.cont1swiper2}<br/>{messages.cont1swiper3}<span className='font-bold'>{messages.cont1swiper4}</span>{messages.cont1swiper5}</p>
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