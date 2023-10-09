import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function Content2Info() {
    
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (        
        <>
            <div className='bg-white dark:bg-[#292929]'>
                <div className='md:w-[768px] lg:max-w-[1200px] m-auto flex items-center pb-10
                flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between
                pt-20 md:pb-20 md:pt-36 lg:py-64 relative'>
                    <div className='text-center tracking-tight lg:mb-0 mb-5 basis-1/2'>
                        <p className='text-2xl lg:text-[40px] font-bold leading-none dark:text-white animate__animated animate__fadeInDown animate__delay-2s sm:px-2'>{messages.cont2info1}<br />{messages.cont2info2}</p>
                        <p className='text-lg lg:text-2xl mt-[20px] dark:text-white sm:px-2'>
                            {messages.cont2info3}<br />{messages.cont2info4}<br />{messages.cont2info5}
                        </p>
                    </div>
                    <div className='lg:basis-1/2'>
                        <img src="./../../Images/Main/im.png" alt="content" className="w-80 lg:block hidden lg:w-full" />
                        <img src="./../../Images/Main/content1.png" alt="content" className="w-80 md:w-[350px]
                        lg:hidden block rounded-3xl" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content2Info