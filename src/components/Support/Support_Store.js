import React from 'react'
import { NavLink } from 'react-router-dom'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';
import { useSelector } from 'react-redux';


function Support_Store() {
    // const NumChk = (e)=>{
    //     return e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // }
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <>  
            <div className="support w-full h-[650px] overflow-hidden">
                <div className="w-[1200px] pt-[150px] pl-[10%]" >
                    <div className="mb-[70px]">
                        <p className="text-[40px] text-[#F8F0E5]">{messages.support1}</p>
                        <p className="text-[40px] text-[#F8F0E5]">{messages.support2}</p>
                        <p className="text-[40px] text-[#F8F0E5]">{messages.support3}</p>
                    </div>
                    <div>
                        <NavLink to="/supportpay" className="w-[190px] h-[75px] bg-[#DAC0A3] rounded-[50px] flex justify-center items-center text-white text-xl dark:bg-[#404343]">{messages.support4}</NavLink>
                    </div>
                </div>
            </div>
            <div className="w-full dark:bg-[#272929] overflow-hidden">
                <div className="w-[1200px] pb-[70px] my-0 mx-auto max-lg:w-10/12 max-md:w-3/4">
                    <div className="text-center pt-[30px] text-3xl font-bold max-lg:text-[25px] dark:text-[#ebf4f1]">{messages.supstoretitle}</div>
                    <div className="flex justify-center items-center w-[960px] h-[75px] bg-[#f8f0e5] mt-[30px] mb-[50px] mx-auto max-lg:w-full max-md:w-full max-lg:h-[60px] max-md:h-[60px] dark:bg-[#404343]">
                        <p className="text-[25px] max-lg:text-xl max-md:text-[18px] dark:text-[#ebf4f1]">{messages.supstoresubtitle}</p>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex flex-wrap justify-between gap-y-[20px]">
                            <div className="w-[280px] max-md:w-[49%] max-lg:w-[32%]">
                                <NavLink to='/store/2'>
                                    <img src="./../../Images/Support/store1.jpg" alt="1" className="w-full" />
                                    <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center dark:bg-[#404343]">
                                        <p className="text-xl max-md:text-[16px] max-lg:text-[18px] font-[500] dark:text-[#ebf4f1]">{messages.supstore1}</p>
                                        <span className='text-[18px] font-bold max-md:text-base dark:text-[#ebf4f1]'>15,000</span>
                                        <span className='text-[16px] max-md:text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="w-[280px] max-md:w-[49%] max-lg:w-[32%]">
                                <NavLink to='/store/3'>
                                    <img src="./../../Images/Support/store9.jpg" alt="1" className="w-full" />
                                    <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center dark:bg-[#404343]">
                                        <p className="text-xl max-md:text-[16px] max-lg:text-[18px] font-[500] dark:text-[#ebf4f1]">{messages.supstore2}</p>
                                        <span className='text-[18px] font-bold max-md:text-base dark:text-[#ebf4f1]'>10,000</span>
                                        <span className='text-[16px] max-md:text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="w-[280px] max-md:w-[49%] max-lg:w-[32%]">
                                <NavLink to='/store/4'>
                                    <img src="./../../Images/Support/store3.jpg" alt="1" className="w-full" />
                                    <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center dark:bg-[#404343]">
                                        <p className="text-xl max-md:text-[16px] max-lg:text-[18px] font-[500] dark:text-[#ebf4f1]">{messages.supstore3}</p>
                                        <span className='text-[18px] font-bold max-md:text-base dark:text-[#ebf4f1]'>7,000</span>
                                        <span className='text-[16px] max-md:text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="w-[280px] max-md:w-[49%] max-lg:w-[32%]">
                                <NavLink to='/store/1'>
                                    <img src="./../../Images/Support/store4.jpg" alt="1" className="w-full" />
                                    <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center dark:bg-[#404343]">
                                        <p className="text-xl max-md:text-[16px] max-lg:text-[18px] font-[500] dark:text-[#ebf4f1]">{messages.supstore4}</p>
                                        <span className='text-[18px] font-bold max-md:text-base dark:text-[#ebf4f1]'>18,000</span>
                                        <span className='text-[16px] max-md:text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="w-[280px] max-md:w-[49%] max-lg:w-[32%]">
                                <NavLink to='/store/5'>
                                    <img src="./../../Images/Support/store5.jpg" alt="1" className="w-full" />
                                    <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center dark:bg-[#404343]">
                                        <p className="text-xl max-md:text-[16px] max-lg:text-[18px] font-[500] dark:text-[#ebf4f1]">{messages.supstore5}</p>
                                        <span className='text-[18px] font-bold max-md:text-base dark:text-[#ebf4f1]'>9,000</span>
                                        <span className='text-[16px] max-md:text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="w-[280px] max-md:w-[49%] max-lg:w-[32%]">
                                <NavLink to='/store/7'>
                                    <img src="./../../Images/Support/store6.jpg" alt="1" className="w-full" />
                                    <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center dark:bg-[#404343]">
                                        <p className="text-xl max-md:text-[16px] max-lg:text-[18px] font-[500] dark:text-[#ebf4f1]">{messages.supstore6}</p>
                                        <span className='text-[18px] font-bold max-md:text-base dark:text-[#ebf4f1]'>5,000</span>
                                        <span className='text-[16px] max-md:text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div> 
                            <div className="w-[280px] max-md:w-[49%] max-lg:w-[32%]">
                                <NavLink to='/store/6'>
                                    <img src="./../../Images/Support/store7.jpg" alt="1" className="w-full" />
                                    <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center dark:bg-[#404343]">
                                        <p className="text-xl max-md:text-[16px] max-lg:text-[18px] font-[500] dark:text-[#ebf4f1]">{messages.supstore7}</p>
                                        <span className='text-[18px] font-bold max-md:text-base dark:text-[#ebf4f1]'>15,000</span>
                                        <span className='text-[16px] max-md:text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="w-[280px] max-md:w-[49%] max-lg:w-[32%]">
                                <NavLink to='/store/8'>
                                    <img src="./../../Images/Support/store8.jpg" alt="1" className="w-full" />
                                    <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center dark:bg-[#404343]">
                                        <p className="text-xl max-md:text-[16px] max-lg:text-[18px] font-[500] dark:text-[#ebf4f1]">{messages.supstore8}</p>
                                        <span className='text-[18px] font-bold max-md:text-base dark:text-[#ebf4f1]'>35,000</span>
                                        <span className='text-[16px] max-md:text-[15px] dark:text-[#ebf4f1]'>{messages.won}</span>
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
