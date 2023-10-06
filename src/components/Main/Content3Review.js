import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function Content3Review() {
    
    const theme = useSelector(state => state.dark);
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <div
        className={`bg-cover bg-center dark:bg-[#292929]
        ${theme === `light`? `content3bg` : `content3bgdark`}
        relative py-4
        lg:pt-48 lg:pb-48
        md:pb-10`} id='review'>
            <div className='md:w-[768px] lg:w-[1200px] m-auto pb-10'>
                <ul className='md:flex md:justify-between lg:flex lg:justify-between text-center md:text-left'>
                    <li className='dark:text-white'>
                        <p className='tracking-tight lg:text-5xl lg:mb-[43px]
                        md:text-3xl md:mb-7 text-2xl mb-4 mt-32'><span className='font-bold'>{messages.cont3review1}</span>{messages.cont3review2}</p>
                        <p className='md:text-xl lg:text-2xl tracking-tight'>{messages.cont3review3}<span className='font-bold'>ON</span> {messages.cont3review4}<span className='font-bold'>OFF</span><br />{messages.cont3review5}</p>
                    </li>
                    <li>
                        <button className='bg-[#E75A56] text-white font-bold cursor-pointer duration-500 hover:bg-[#db3b36] rounded-full
                        
                        w-60 h-10 mt-5
                        md:w-80 md:h-16 md:text-xl md:mt-36
                        lg:w-[440px] lg:h-[80px] lg:text-2xl lg:mt-48 '><NavLink to='/review_page' className='text-white'>{messages.cont3review6}</NavLink></button>
                    </li>
                </ul>
            </div>

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                pagination={{clickable: true}}
                modules={[Autoplay, Pagination]}
                className='md:w-[768px] lg:w-[1200px] m-auto mb-20'
                >

                <SwiperSlide className='md:w-[768px] lg:w-[1200px] lg:bg-white md:bg-white'>
                    <ul className='lg:flex md:flex'>
                        <li>
                            <img src="./../../Images/Main/11.jpg" alt="1" className='lg:w-full md:w-[82%] md:my-auto md:m-0 w-2/3 m-auto' />
                        </li>
                        <li>
                            <ul className='lg:p-14 lg:w-full md:w-96 md:px-0 p-5 bg-white w-2/3 m-auto'>
                                <li><p className='lg:text-3xl font-bold text-[#255db1] text-xl'>{messages.cont311[0]}<span className='lg:text-base font-normal text-gray-400 ml-5 text-sm'>D2022111756</span></p></li>
                                <li>
                                    <ul className='lg:mt-16 mt-5 lg:leading-10 leading-7 text-gray-400'>
                                        <li><p>{messages.cont31}<span className={`text-black lg:text-lg lg:ml-[119px] ml-[90px] ${language === `en` ? `ml-20 lg:ml-[136px]` : ``}`}>{messages.cont312[0]}</span></p></li>
                                        <li><p>{messages.cont32}<span className={`text-black lg:text-lg lg:ml-[86px] ml-14 ${language === `en` ? `lg:ml-[84px] ml-[38px]` : ``}`}>{messages.cont313[0]}</span></p></li>
                                        <li><p>{messages.cont33}<span className={`text-black lg:text-lg lg:ml-28 ml-20 ${language === `en` ? `ml-[108px] lg:ml-[151px]` : ``}`}>{messages.cont314[0]}</span></p></li>
                                        <li><p>{messages.cont34}<span className={`text-black lg:text-lg lg:ml-32 ml-24 ${language === `en` ? `ml-[84px]` : ``}`}>3.3kg</span></p></li>
                                        <li><p>{messages.cont35}<span className={`text-black lg:text-lg lg:ml-[142px] ml-28 ${language === `en` ? `ml-[98px]` : ``}`}>{messages.cont315[0]}</span></p></li>
                                    </ul>
                                </li>
                                <li className='lg:mt-14 mt-5'>
                                    <ul className='lg:flex lg:text-xl text-lg'>
                                        <li className='flex lg:mr-28 lg:mb-0 mb-2'>{messages.cont36}
                                            <div className='flex items-center gap-x-1 ml-5'>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                            </div>
                                        </li>
                                        <li className='flex'>{messages.cont37}
                                            <div className='flex items-center gap-x-1 ml-5'>
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
                <SwiperSlide className='md:w-[768px] lg:w-[1200px] lg:bg-white md:bg-white'>
                    <ul className='lg:flex md:flex'>
                        <li><img src="./../../Images/Main/12.jpg" alt="1" className='lg:w-full md:w-[82%] md:my-auto md:m-0 w-2/3 m-auto' /></li>
                        <li>
                            <ul className='lg:p-14 lg:w-full md:w-96 md:px-0 p-5 bg-white w-2/3 m-auto'>
                                <li><p className='lg:text-3xl font-bold text-[#255db1] text-xl'>{messages.cont311[1]}<span className='lg:text-base font-normal text-gray-400 ml-5 text-sm'>D2022111754</span></p></li>
                                <li>
                                    <ul className='lg:mt-16 mt-5 lg:leading-10 leading-7 text-gray-400'>
                                        <li><p>{messages.cont31}<span className={`text-black lg:text-lg lg:ml-[119px] ml-[90px] ${language === `en` ? `ml-20 lg:ml-[136px]` : ``}`}>{messages.cont312[1]}</span></p></li>
                                        <li><p>{messages.cont32}<span className={`text-black lg:text-lg lg:ml-[86px] ml-14 ${language === `en` ? `lg:ml-[84px] ml-[38px]` : ``}`}>{messages.cont313[1]}</span></p></li>
                                        <li><p>{messages.cont33}<span className={`text-black lg:text-lg lg:ml-28 ml-20 ${language === `en` ? `ml-[108px] lg:ml-[151px]` : ``}`}>{messages.cont314[1]}</span></p></li>
                                        <li><p>{messages.cont34}<span className={`text-black lg:text-lg lg:ml-32 ml-24 ${language === `en` ? `ml-[84px]` : ``}`}>7.8kg</span></p></li>
                                        <li><p>{messages.cont35}<span className={`text-black lg:text-lg lg:ml-[142px] ml-28 ${language === `en` ? `ml-[98px]` : ``}`}>{messages.cont315[1]}</span></p></li>
                                    </ul>
                                </li>
                                <li className='lg:mt-14 mt-5'>
                                    <ul className='lg:flex lg:text-xl text-lg'>
                                        <li className='flex lg:mr-28 lg:mb-0 mb-2'>{messages.cont36}
                                            <div className='flex items-center gap-x-1 ml-5'>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-white border border-[#255db1] border-1 rounded-full'></div>
                                            </div>
                                        </li>
                                        <li className='flex'>{messages.cont37}
                                            <div className='flex items-center gap-x-1 ml-5'>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-white border border-[#255db1] border-1 rounded-full'></div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>                            
                        </li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide className='md:w-[768px] lg:w-[1200px] lg:bg-white md:bg-white'>
                    <ul className='lg:flex md:flex'>
                        <li><img src="./../../Images/Main/13.jpg" alt="1" className='lg:w-[500px] md:w-[82%] md:my-auto md:m-0 w-2/3 m-auto' /></li>
                        <li>
                            <ul className='lg:p-14 lg:w-full md:w-96 md:px-0 p-5 bg-white w-2/3 m-auto'>
                                <li><p className='lg:text-3xl font-bold text-[#255db1] text-xl'>{messages.cont311[2]}<span className='lg:text-base font-normal text-gray-400 ml-5 text-sm'>D2023061224</span></p></li>
                                <li>
                                    <ul className='lg:mt-16 mt-5 lg:leading-10 leading-7 text-gray-400'>
                                        <li><p>{messages.cont31}<span className={`text-black lg:text-lg lg:ml-[119px] ml-[90px] ${language === `en` ? `ml-20 lg:ml-[136px]` : ``}`}>{messages.cont312[2]}</span></p></li>
                                        <li><p>{messages.cont32}<span className={`text-black lg:text-lg lg:ml-[86px] ml-14 ${language === `en` ? `lg:ml-[84px] ml-[38px]` : ``}`}>{messages.cont313[2]}</span></p></li>
                                        <li><p>{messages.cont33}<span className={`text-black lg:text-lg lg:ml-28 ml-20 ${language === `en` ? `ml-[108px] lg:ml-[151px]` : ``}`}>{messages.cont314[2]}</span></p></li>
                                        <li><p>{messages.cont34}<span className={`text-black lg:text-lg lg:ml-32 ml-24 ${language === `en` ? `ml-[84px]` : ``}`}>11.5kg</span></p></li>
                                        <li><p>{messages.cont35}<span className={`text-black lg:text-lg lg:ml-[142px] ml-28 ${language === `en` ? `ml-[98px]` : ``}`}>{messages.cont315[2]}</span></p></li>
                                    </ul>
                                </li>
                                <li className='lg:mt-14 mt-5'>
                                    <ul className='lg:flex lg:text-xl text-lg'>
                                        <li className='flex lg:mr-28 lg:mb-0 mb-2'>{messages.cont36}
                                            <div className='flex items-center gap-x-1 ml-5'>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                            </div>
                                        </li>
                                        <li className='flex'>{messages.cont37}
                                            <div className='flex items-center gap-x-1 ml-5'>
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
                <SwiperSlide className='md:w-[768px] lg:w-[1200px] lg:bg-white md:bg-white'>
                    <ul className='lg:flex md:flex'>
                        <li><img src="./../../Images/Main/14.jpg" alt="4" className='lg:w-[500px] md:w-[82%] md:my-auto md:m-0 w-2/3 m-auto' /></li>
                        <li>
                            <ul className='lg:p-14 lg:w-full md:w-96 md:px-0 p-5 bg-white w-2/3 m-auto'>
                                <li><p className='lg:text-3xl font-bold text-[#255db1] text-xl'>{messages.cont311[3]}<span className='lg:text-base font-normal text-gray-400 ml-5 text-sm'>C2018071601</span></p></li>
                                <li>
                                    <ul className='lg:mt-16 mt-5 lg:leading-10 leading-7 text-gray-400'>
                                        <li><p>{messages.cont31}<span className={`text-black lg:text-lg lg:ml-[119px] ml-[90px] ${language === `en` ? `ml-20 lg:ml-[136px]` : ``}`}>{messages.cont312[3]}</span></p></li>
                                        <li><p>{messages.cont32}<span className={`text-black lg:text-lg lg:ml-[86px] ml-14 ${language === `en` ? `lg:ml-[84px] ml-[38px]` : ``}`}>{messages.cont313[3]}</span></p></li>
                                        <li><p>{messages.cont33}<span className={`text-black lg:text-lg lg:ml-28 ml-20 ${language === `en` ? `ml-[108px] lg:ml-[151px]` : ``}`}>{messages.cont314[3]}</span></p></li>
                                        <li><p>{messages.cont34}<span className={`text-black lg:text-lg lg:ml-32 ml-24 ${language === `en` ? `ml-[84px]` : ``}`}>5.1kg</span></p></li>
                                        <li><p>{messages.cont35}<span className={`text-black lg:text-lg lg:ml-[142px] ml-28 ${language === `en` ? `ml-[98px]` : ``}`}>{messages.cont315[3]}</span></p></li>
                                    </ul>
                                </li>
                                <li className='lg:mt-14 mt-5'>
                                    <ul className='lg:flex lg:text-xl text-lg'>
                                        <li className='flex lg:mr-28 lg:mb-0 mb-2'>{messages.cont36}
                                            <div className='flex items-center gap-x-1 ml-5'>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                            </div>
                                        </li>
                                        <li className='flex'>{messages.cont37}
                                            <div className='flex items-center gap-x-1 ml-5'>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-white border border-[#255db1] border-1 rounded-full'></div>
                                                <div className='w-9 h-4 bg-white border border-[#255db1] border-1 rounded-full'></div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>                            
                        </li>
                    </ul>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Content3Review