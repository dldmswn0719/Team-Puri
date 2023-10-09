import React from 'react'
import { NavLink } from 'react-router-dom'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';



function Support_Store() {
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <>  
            <div className="support w-full h-[650px] overflow-hidden">
                <div className="w-[1200px] h-full items-center lg:pl-[7%] md:pl-[7%] pl-[4%]" >
                    <div className="flex items-center h-1/2 translate-y-1/2">
                        <div className="mb-[50px]">
                            <p className="text-white lg:pb-8 md:pb-3 lg:text-[40px] md:text-[26px] text-xl fold:text-[18px]">{messages.support1}</p>
                            <p className="text-white lg:pb-8 md:pb-3 lg:text-[40px] md:text-[26px] text-xl fold:text-[18px]">{messages.support2}</p>
                            <p className="text-white lg:text-[40px] md:text-[26px] text-xl fold:text-[18px]">{messages.support3}</p>
                        </div>
                    </div>
                    <div className='h-1/2 translate-y-1/3 mt-[-15px]'>
                        <NavLink to="/supportpay" className="bg-[#E75A56] text-white rounded-full font-bold flex justify-center items-center dark:bg-[#404343] lg:w-[200px] lg:text-xl lg:h-20 w-32 h-10  duration-500 fold:w-[90px] fold:text-[12px] text-center hover:bg-[#b3312c]">{messages.support4}</NavLink>
                    </div>
                </div>
            </div>
            <div className="w-full dark:bg-[#272929] overflow-hidden">
                <div className="lg:w-9/12 pb-[70px] my-0 mx-auto md:w-5/6 w-11/12 fold:w-10/12">
                    <div className="text-center lg:pt-[100px] md:pt-[100px] pt-[40px] lg:text-3xl font-bold md:text-3xl text-[25px] dark:text-[#ebf4f1]">
                        <FontAwesomeIcon className='text-[#86bcd5] dark:text-white' icon={faStore} />
                        <p className='pt-1'>{messages.supstoretitle}</p>
                     </div>
                    <div className="flex justify-center items-center text-center h-[75px] bg-[#86bcd5] text-white mt-[30px] lg:mb-[50px] md:mb-[50px] mb-[30px] mx-auto  md:w-full w-full lg:h-[70px] md:h-[75px] dark:bg-[#404343]">
                        <p className="lg:text-[23px] md:text-xl text-[16px] dark:text-[#ebf4f1]">{messages.supstoresubtitle}</p>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex flex-wrap gap-x-[2%] lg:gap-x-[1.33%]">
                            <div className="lg:w-[24%] w-[49%] md:w-[32%] fold:w-full lg:mb-[1.33%] mb-[2%] fold:mb-[4%]">
                                <NavLink to='/store/2'>
                                    <img src="./../../Images/Support/store1.jpg" alt="1" className="w-full fold:h-[200px]" />
                                    <div className="w-full py-[30px] bg-[#86bcd5] text-white text-[16px] dark:bg-[#404343] lg:pl-[6%] md:pl-[6%] pl-[5%] sm:py-3 fold:py-3">
                                        <p className="lg:text-[17px] text-[15px] md:text-[16px] font-[500] dark:text-[#ebf4f1] overflow-hidden whitespace-nowrap text-ellipsis">{messages.supstore1}</p>
                                        <span className='lg:text-xl md:text-[19px] text-[17px] font-bold dark:text-[#ebf4f1] pr-[2px]'>15,000</span>
                                        <span className='lg:text-[17px] md:text-[16px] text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="lg:w-[24%] w-[49%] md:w-[32%] fold:w-full lg:mb-[1.33%] mb-[2%] fold:mb-[4%]">
                                <NavLink to='/store/3'>
                                    <img src="./../../Images/Support/store9.jpg" alt="1" className="w-full fold:h-[200px]" />
                                    <div className="w-full py-[30px] bg-[#86bcd5] text-white text-[16px] lg:pl-[6%] md:pl-[6%] pl-[5%] dark:bg-[#404343] sm:py-3 fold:py-3">
                                        <p className="lg:text-[17px] text-[15px] md:text-[16px] font-[500] dark:text-[#ebf4f1] overflow-hidden whitespace-nowrap text-ellipsis">{messages.supstore2}</p>
                                        <span className='lg:text-xl md:text-[19px] text-[17px] font-bold dark:text-[#ebf4f1] pr-[2px]'>10,000</span>
                                        <span className='lg:text-[17px] md:text-[16px] text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="lg:w-[24%] w-[49%] md:w-[32%] fold:w-full lg:mb-[1.33%] mb-[2%] fold:mb-[4%]">
                                <NavLink to='/store/4'>
                                    <img src="./../../Images/Support/store3.jpg" alt="1" className="w-full fold:h-[200px]" />
                                    <div className="w-full py-[30px] bg-[#86bcd5] text-white text-[16px] lg:pl-[6%] md:pl-[6%] pl-[5%] dark:bg-[#404343] sm:py-3 fold:py-3">
                                        <p className="lg:text-[17px] text-[15px] md:text-[16px] font-[500] dark:text-[#ebf4f1] overflow-hidden whitespace-nowrap text-ellipsis">{messages.supstore3}</p>
                                        <span className='lg:text-xl md:text-[19px] text-[17px] font-bold dark:text-[#ebf4f1] pr-[2px]'>7,000</span>
                                        <span className='lg:text-[17px] md:text-[16px] text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="lg:w-[24%] w-[49%] md:w-[32%] fold:w-full lg:mb-[1.33%] mb-[2%] fold:mb-[4%]">
                                <NavLink to='/store/1'>
                                    <img src="./../../Images/Support/store4.jpg" alt="1" className="w-full fold:h-[200px]" />
                                    <div className="w-full py-[30px]  bg-[#86bcd5] text-white text-[16px] lg:pl-[6%] md:pl-[6%] pl-[5%] dark:bg-[#404343] sm:py-3 fold:py-3">
                                        <p className="lg:text-[17px] text-[15px] md:text-[16px] font-[500] dark:text-[#ebf4f1] overflow-hidden whitespace-nowrap text-ellipsis">{messages.supstore4}</p>
                                        <span className='lg:text-xl md:text-[19px] text-[17px] font-bold dark:text-[#ebf4f1] pr-[2px]'>18,000</span>
                                        <span className='lg:text-[17px] md:text-[16px] text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="lg:w-[24%] w-[49%] md:w-[32%] fold:w-full lg:mb-[1.33%] mb-[2%] fold:mb-[4%]">
                                <NavLink to='/store/5'>
                                    <img src="./../../Images/Support/store5.jpg" alt="1" className="w-full fold:h-[200px]" />
                                    <div className="w-full py-[30px]  bg-[#86bcd5] text-white text-[16px] lg:pl-[6%] md:pl-[6%] pl-[5%] dark:bg-[#404343] sm:py-3 fold:py-3">
                                        <p className="lg:text-[17px] text-[15px] md:text-[16px] font-[500] dark:text-[#ebf4f1] overflow-hidden whitespace-nowrap text-ellipsis">{messages.supstore5}</p>
                                        <span className='lg:text-xl md:text-[19px] text-[17px] font-bold dark:text-[#ebf4f1] pr-[2px]'>9,000</span>
                                        <span className='lg:text-[17px] md:text-[16px] text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="lg:w-[24%] w-[49%] md:w-[32%] fold:w-full lg:mb-[1.33%] mb-[2%] fold:mb-[4%]">
                                <NavLink to='/store/7'>
                                    <img src="./../../Images/Support/store6.jpg" alt="1" className="w-full fold:h-[200px]" />
                                    <div className="w-full py-[30px] bg-[#86bcd5] text-white text-[16px] lg:pl-[6%] md:pl-[6%] pl-[5%] dark:bg-[#404343] sm:py-3 fold:py-3">
                                        <p className="lg:text-[17px] text-[15px] md:text-[16px] font-[500] dark:text-[#ebf4f1] overflow-hidden whitespace-nowrap text-ellipsis">{messages.supstore6}</p>
                                        <span className='lg:text-xl md:text-[19px] text-[17px] font-bold dark:text-[#ebf4f1] pr-[2px]'>5,000</span>
                                        <span className='lg:text-[17px] md:text-[16px] text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div> 
                            <div className="lg:w-[24%] w-[49%] md:w-[32%] fold:w-full lg:mb-[1.33%] mb-[2%] fold:mb-[4%]">
                                <NavLink to='/store/6'>
                                    <img src="./../../Images/Support/store7.jpg" alt="1" className="w-full fold:h-[200px]" />
                                    <div className="w-full py-[30px] bg-[#86bcd5] text-white text-[16px] lg:pl-[6%] md:pl-[6%] pl-[5%] dark:bg-[#404343] sm:py-3 fold:py-3">
                                        <p className="lg:text-[17px] text-[15px] md:text-[16px] font-[500] dark:text-[#ebf4f1] overflow-hidden whitespace-nowrap text-ellipsis">{messages.supstore7}</p>
                                        <span className='lg:text-xl md:text-[19px] text-[17px] font-bold dark:text-[#ebf4f1] pr-[2px]'>15,000</span>
                                        <span className='lg:text-[17px] md:text-[16px] text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="lg:w-[24%] w-[49%] md:w-[32%] fold:w-full lg:mb-[1.33%] mb-[2%] fold:mb-[4%]">
                                <NavLink to='/store/8'>
                                    <img src="./../../Images/Support/store8.jpg" alt="1" className="w-full fold:h-[200px]" />
                                    <div className="w-full py-[30px]  bg-[#86bcd5] text-white text-[16px] lg:pl-[6%] md:pl-[6%] pl-[5%] dark:bg-[#404343] sm:py-3 fold:py-3">
                                        <p className="lg:text-[17px] text-[15px] md:text-[16px] font-[500] dark:text-[#ebf4f1] overflow-hidden whitespace-nowrap text-ellipsis">{messages.supstore8}</p>
                                        <span className='lg:text-xl md:text-[19px] text-[17px] font-bold dark:text-[#ebf4f1] pr-[2px]'>35,000</span>
                                        <span className='lg:text-[17px] md:text-[16px] text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support_Store
