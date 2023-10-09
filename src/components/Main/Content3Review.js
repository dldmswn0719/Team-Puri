import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function Content3Review() {
    
    const theme = useSelector(state => state.dark);
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    const swiperArray = [
        {
            "img" : "./../../Images/Main/1", // .jpg
            "name" : `${messages.cont311[0]}`,
            "number" : "D2022111756",
            "breed" : `${messages.cont312[0]}`,
            "gender" : `${messages.cont313[0]}`,
            "age" : `${messages.cont314[0]}`,
            "weight" : "3.3kg",
            "color" : `${messages.cont315[0]}`
        },
        {
            "img" : "./../../Images/Main/1", // .jpg
            "name" : `${messages.cont311[1]}`,
            "number" : "D2022111756",
            "breed" : `${messages.cont312[1]}`,
            "gender" : `${messages.cont313[1]}`,
            "age" : `${messages.cont314[1]}`,
            "weight" : "7.8kg",
            "color" : `${messages.cont315[1]}`
        },
        {
            "img" : "./../../Images/Main/1", // .jpg
            "name" : `${messages.cont311[2]}`,
            "number" : "D2022111756",
            "breed" : `${messages.cont312[2]}`,
            "gender" : `${messages.cont313[2]}`,
            "age" : `${messages.cont314[2]}`,
            "weight" : "11.5kg",
            "color" : `${messages.cont315[2]}`
        },
        {
            "img" : "./../../Images/Main/1", // .jpg
            "name" : `${messages.cont311[3]}`,
            "number" : "D2022111756",
            "breed" : `${messages.cont312[3]}`,
            "gender" : `${messages.cont313[3]}`,
            "age" : `${messages.cont314[3]}`,
            "weight" : "5.1kg",
            "color" : `${messages.cont315[3]}`
        }
    ];

    return (
        <div className={`bg-cover bg-center dark:bg-[#292929] relative
        ${theme === `light`? `content3bg` : `content3bgdark`}`}>
            <div className={`py-4 m-auto lg:pt-48 lg:pb-48 lg:max-w-[1200px] md:pb-10 md:max-w-[768px]`} id='review'>
                <div className=' pb-10'>
                    <ul className='md:flex md:justify-between lg:flex lg:justify-between text-center md:text-left lg:relative'>
                        <li className='absolute lg:-bottom-[650px] md:bottom-10 bottom-5 left-1/2 -translate-x-1/2 z-10'>
                            <img src="./../../Images/Main/click.gif" alt="click" className='cursor-pointer' />
                        </li>
                        <li className='dark:text-white'>
                            <p className='tracking-tight lg:text-5xl lg:mb-[43px] md:text-3xl md:mb-7 text-2xl mb-4 mt-32'>
                                <span className='font-bold'>
                                    {messages.cont3review1}
                                </span>
                                {messages.cont3review2}
                            </p>
                            <p className='md:text-xl lg:text-2xl tracking-tight sm:mx-[5%]'>
                                {messages.cont3review3}
                                <span className='font-bold'>ON</span> 
                                {messages.cont3review4}
                                <span className='font-bold'>OFF</span>
                                <br />{messages.cont3review5}
                            </p>
                        </li>
                        <li>
                            <button className='bg-[#E75A56] text-white font-bold cursor-pointer duration-500 hover:bg-[#b3312c] rounded-full
                            w-60 h-10 mt-5
                            md:w-80 md:h-16 md:text-xl md:mt-36
                            lg:w-[440px] lg:h-20 lg:text-2xl lg:mt-48 '>
                                <NavLink to='/review_page' className='text-white'>
                                    {messages.cont3review6}
                                </NavLink>
                            </button>
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
                    modules={[Autoplay]}
                    className='md:basis-full lg:basis-full m-auto mb-20'
                    >
                        {
                            swiperArray.map((e, i) => {
                                return (
                                    <SwiperSlide key={i} className='lg:bg-white md:bg-white'>
                                        <ul className='lg:flex md:flex'>
                                            <li>
                                                <img src={`${e.img + (i + 1)}.jpg`} alt="i + 1" className='lg:w-full md:w-[82%] md:my-auto md:m-0 w-2/3 m-auto' />
                                            </li>
                                            <li>
                                                <ul className='lg:p-14 lg:w-full md:w-96 md:px-0 p-5 bg-white w-2/3 m-auto'>
                                                    <li>
                                                        <p className='lg:text-3xl font-bold text-[#255db1] text-xl'>
                                                            {e.name}
                                                            <span className='lg:text-base font-normal text-gray-400 ml-5 text-sm'>
                                                                {e.number}
                                                            </span>
                                                        </p></li>
                                                    <li>
                                                        <ul className='lg:mt-16 mt-5 lg:leading-10 leading-7 text-gray-400 sm:text-xs'>
                                                            <div className='flex justify-start'>
                                                                <li className='basis-1/3'>{messages.cont31}</li>
                                                                <li className='text-black lg:text-lg'>{e.breed}</li>
                                                            </div>
                                                            <div className='flex justify-start'>
                                                                <li className='basis-1/3 '>{messages.cont32}</li>
                                                                <li className='text-black lg:text-lg'>{e.gender}</li>
                                                            </div>
                                                            <div className='flex justify-start'>
                                                                <li className='basis-1/3'>{messages.cont33}</li>
                                                                <li className='text-black lg:text-lg'>{e.age}</li>
                                                            </div>
                                                            <div className='flex justify-start'>
                                                                <li className='basis-1/3'>{messages.cont34}</li>
                                                                <li className='text-black lg:text-lg'>3.3kg</li>
                                                            </div>
                                                            <div className='flex justify-start'>
                                                                <li className='basis-1/3'>{messages.cont35}</li>
                                                                <li className='text-black lg:text-lg'>{e.color}</li>
                                                            </div>
                                                        </ul>
                                                    </li>
                                                    <li className='lg:mt-14 mt-5'>
                                                        <ul className='lg:flex flex-wrap lg:text-xl text-lg sm:text-sm'>
                                                            <li className='flex lg:mb-0 mb-2'>{messages.cont36}
                                                                <div className='flex items-center gap-x-1 lg:mx-5 ml-5'>
                                                                    <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                                    <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                                    <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                                    <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                                </div>
                                                            </li>
                                                            <li className='flex'>{messages.cont37}
                                                                <div className='flex items-center gap-x-1 lg:ml-5 ml-5'>
                                                                    <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                                    <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                                    <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                                    <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>                            
                                            </li>
                                        </ul>
                                    </SwiperSlide>
                                )
                            })
                        }
                </Swiper>
            </div>
        </div>
    )
}

export default Content3Review