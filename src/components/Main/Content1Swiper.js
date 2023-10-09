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

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;
    
    const slogan = [
        {
            "desc1" : `${messages.slogan11}`,
            "desc2" : `${messages.slogan12}`,
            "img" : "./../../Images/Main/slide1"
        },
        {
            "desc1" : `${messages.slogan21}`,
            "desc2" : `${messages.slogan22}`,
            "img" : "./../../Images/Main/slide2"
        },
        {
            "desc1" : `${messages.slogan31}`,
            "desc2" : `${messages.slogan32}`,
            "img" : "./../../Images/Main/slide3"
        },
        {
            "desc1" : `${messages.slogan41}`,
            "desc2" : `${messages.slogan42}`,
            "img" : "./../../Images/Main/slide4"
        }
    ];
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
                    {
                        slogan.map((e, i) => {
                            return (
                                <>
                                <SwiperSlide key={i} className='relative'>
                                    <img src={`${e.img}.png`} alt={`slide${i + 1}`} className='lg:block md:block hidden' />
                                    <img src={`${e.img}-mobile.png`} alt={`slide${i + 1}mobile`} className='lg:hidden md:hidden block' />
                                    <p key={i} className='absolute z-10 text-white left-[50%] translate-x-[-50%] tracking-tight text-center bottom-16 md:bottom-10 w-full text-2xl
                                    lg:bottom-20 lg:text-6xl
                                    md:text-4xl font-bold'>{e.desc1}<br /><br />{e.desc2}</p>
                                </SwiperSlide>
                            </>
                            )
                        })
                    }                
            </Swiper>
        </>
    )
}

export default Content1Swiper