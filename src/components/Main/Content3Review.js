import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";

function Content3Review() {
    return (
        <div className='content3bg relative
        lg:pt-52 lg:pb-52 md:pt-20' id='review'>
            <div className='md:w-[768px] lg:w-[1200px] m-auto pb-10'>
                <ul className='md:flex md:justify-between lg:flex lg:justify-between text-center md:text-left'>
                    <li>
                        <p className='tracking-tight lg:text-5xl lg:mb-[43px]
                        md:text-3xl md:mb-7 text-2xl mb-4 mt-32'><span className='font-bold'>입양후기</span>를 만나보세요.</p>
                        <p className='md:text-xl lg:text-2xl tracking-tight'>입양<span className='font-bold'>ON</span> 펫숍<span className='font-bold'>OFF</span><br />동물을 사고 팔지 않는 사회를 만드는 데에 동참해주세요.</p>
                    </li>
                    <li>
                        <button className='bg-[#E75A56] text-white font-bold cursor-pointer duration-500 hover:bg-[#db3b36] rounded-full
                        
                        w-60 h-10 mt-5
                        md:w-80 md:h-16 md:text-xl md:mt-36
                        lg:w-[440px] lg:h-[80px] lg:text-2xl lg:mt-48 '><NavLink to='/review_page' className='text-white'>더 많은 후기 만나러 가기</NavLink></button>
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
                // modules={[Autoplay]}
                className='md:w-[768px] lg:w-[1200px] m-auto mb-20'
                >

                <SwiperSlide className='md:w-[768px] lg:w-[1200px] lg:bg-white md:bg-white'>
                    <ul className='lg:flex md:flex'>
                        <li>
                            <img src="./../../Images/Main/11.jpg" alt="1" className='lg:w-full md:w-[82%] md:my-auto md:m-0 w-2/3 m-auto' />
                        </li>
                        <li>
                            <ul className='lg:p-14 lg:w-full md:w-96 md:px-0 p-5 bg-white w-2/3 m-auto'>
                                <li><p className='lg:text-3xl font-bold text-[#255db1] text-xl'>캐시<span className='lg:text-base font-normal text-gray-400 ml-5 text-sm'>D2022111756</span></p></li>
                                <li>
                                    <ul className='lg:mt-16 mt-5 lg:leading-10 leading-7 text-gray-400'>
                                        <li><p>종/품종<span className='text-black lg:text-lg lg:ml-[119px] ml-[90px]'>개 / 포메라니안</span></p></li>
                                        <li><p>성별(중성화)<span className='text-black lg:text-lg lg:ml-[86px] ml-14'>암컷 / 중성화 ○</span></p></li>
                                        <li><p>추정나이<span className='text-black lg:text-lg lg:ml-28 ml-20'>13살 10개월</span></p></li>
                                        <li><p>몸무게<span className='text-black lg:text-lg lg:ml-32 ml-24'>3.3kg</span></p></li>
                                        <li><p>털색<span className='text-black lg:text-lg lg:ml-[142px] ml-28'>브라운</span></p></li>
                                    </ul>
                                </li>
                                <li className='lg:mt-14 mt-5'>
                                    <ul className='lg:flex lg:text-xl text-lg'>
                                        <li className='flex lg:mr-28 lg:mb-0 mb-2'>친화도
                                            <div className='flex items-center gap-x-1 ml-5'>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                            </div>
                                        </li>
                                        <li className='flex'>활발함
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
                                <li><p className='lg:text-3xl font-bold text-[#255db1] text-xl'>벨<span className='lg:text-base font-normal text-gray-400 ml-5 text-sm'>D2022111754</span></p></li>
                                <li>
                                    <ul className='lg:mt-16 mt-5 lg:leading-10 leading-7 text-gray-400'>
                                        <li><p>종/품종<span className='text-black lg:text-lg lg:ml-[119px] ml-[90px]'>개 / 셀티</span></p></li>
                                        <li><p>성별(중성화)<span className='text-black lg:text-lg lg:ml-[86px] ml-14'>암컷 / 중성화 ○</span></p></li>
                                        <li><p>추정나이<span className='text-black lg:text-lg lg:ml-28 ml-20'>8살 10개월</span></p></li>
                                        <li><p>몸무게<span className='text-black lg:text-lg lg:ml-32 ml-24'>7.8kg</span></p></li>
                                        <li><p>털색<span className='text-black lg:text-lg lg:ml-[142px] ml-28'>브라운화이트</span></p></li>
                                    </ul>
                                </li>
                                <li className='lg:mt-14 mt-5'>
                                    <ul className='lg:flex lg:text-xl text-lg'>
                                        <li className='flex lg:mr-28 lg:mb-0 mb-2'>친화도
                                            <div className='flex items-center gap-x-1 ml-5'>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-white border border-[#255db1] border-1 rounded-full'></div>
                                            </div>
                                        </li>
                                        <li className='flex'>활발함
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
                <SwiperSlide className='md:w-[768px] lg:w-[1200px] lg:bg-white'>
                    <ul className='lg:flex'>
                        <li><img src="./../../Images/Main/13.jpg" alt="1" className='lg:w-[500px] w-2/3 m-auto' /></li>
                        <li>
                            <ul className='lg:p-14 lg:w-full p-5 bg-white w-2/3 m-auto'>
                                <li><p className='lg:text-3xl font-bold text-[#255db1] text-xl'>뽀뽀<span className='lg:text-base font-normal text-gray-400 ml-5 text-sm'>D2023061224</span></p></li>
                                <li>
                                    <ul className='lg:mt-16 mt-5 lg:leading-10 leading-7 text-gray-400'>
                                        <li><p>종/품종<span className='text-black lg:text-lg lg:ml-[119px] ml-[90px]'>개 / 진도믹스</span></p></li>
                                        <li><p>성별(중성화)<span className='text-black lg:text-lg lg:ml-[86px] ml-14'>암컷 / 중성화 X</span></p></li>
                                        <li><p>추정나이<span className='text-black lg:text-lg lg:ml-28 ml-20'>1살 3개월</span></p></li>
                                        <li><p>몸무게<span className='text-black lg:text-lg lg:ml-32 ml-24'>11.5kg</span></p></li>
                                        <li><p>털색<span className='text-black lg:text-lg lg:ml-[142px] ml-28'>브라운</span></p></li>
                                    </ul>
                                </li>
                                <li className='lg:mt-14 mt-5'>
                                    <ul className='lg:flex lg:text-xl text-lg'>
                                        <li className='flex lg:mr-28 lg:mb-0 mb-2'>친화도
                                            <div className='flex items-center gap-x-1 ml-5'>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                            </div>
                                        </li>
                                        <li className='flex'>활발함
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
                <SwiperSlide className='md:w-[768px] lg:w-[1200px] lg:bg-white'>
                    <ul className='lg:flex'>
                        <li><img src="./../../Images/Main/14.jpg" alt="4" className='lg:w-[500px] w-2/3 m-auto' /></li>
                        <li>
                            <ul className='lg:p-14 lg:w-full p-5 bg-white w-2/3 m-auto'>
                                <li><p className='lg:text-3xl font-bold text-[#255db1] text-xl'>마리<span className='lg:text-base font-normal text-gray-400 ml-5 text-sm'>C2018071601</span></p></li>
                                <li>
                                    <ul className='lg:mt-16 mt-5 lg:leading-10 leading-7 text-gray-400'>
                                        <li><p>종/품종<span className='text-black lg:text-lg lg:ml-[119px] ml-[90px]'>고양이 / 코숏</span></p></li>
                                        <li><p>성별(중성화)<span className='text-black lg:text-lg lg:ml-[86px] ml-14'>암컷 / 중성화 ○</span></p></li>
                                        <li><p>추정나이<span className='text-black lg:text-lg lg:ml-28 ml-20'>7살 2개월</span></p></li>
                                        <li><p>몸무게<span className='text-black lg:text-lg lg:ml-32 ml-24'>5.1kg</span></p></li>
                                        <li><p>털색<span className='text-black lg:text-lg lg:ml-[142px] ml-28'>삼색이</span></p></li>
                                    </ul>
                                </li>
                                <li className='lg:mt-14 mt-5'>
                                    <ul className='lg:flex lg:text-xl text-lg'>
                                        <li className='flex lg:mr-28 lg:mb-0 mb-2'>친화도
                                            <div className='flex items-center gap-x-1 ml-5'>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                                <div className='w-9 h-4 bg-[#255db1] rounded-full'></div>
                                            </div>
                                        </li>
                                        <li className='flex'>활발함
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