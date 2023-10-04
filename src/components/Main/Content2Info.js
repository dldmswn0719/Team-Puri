import React from 'react'
import { useSelector } from 'react-redux';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function Content2Info() {

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <>
            <div className='md:w-[768px] lg:w-[1200px] m-auto flex items-center
            flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between
            pt-20 md:pb-4 lg:py-[140px]'>
                <div className='text-center tracking-tight lg:mb-0 mb-5'>
                    <p className='text-2xl lg:text-[40px] font-bold leading-none'>{messages.cont2info1}<br />{messages.cont2info2}</p>
                    <p className='text-lg lg:text-2xl mt-[20px]'>{messages.cont2info3}<br />{messages.cont2info4}<br />{messages.cont2info5}</p>
                </div>
                <div className='relative'>
                    <img src="./../../Images/Main/deco_needle_leaf.png" alt="2" className=' absolute w-[10%]
                    -left-20 lg:left-[-170px] lg:top-[50px]' />
                    <img src="./../../Images/Main/deco_needle.png" alt="1" className=' absolute w-[25%]
                    -left-16 top-6 lg:left-[-100px] z-[-1]' />
                    <img src="./../../Images/Main/deco_flower2.png" alt="3" className=' absolute w-[15%]
                    -right-10 lg:right-[-150px] lg:top-[50px]' />
                    <img src="./../../Images/Main/deco_needle2.png" alt="4" className=' absolute w-[30%]
                    -right-20 top-20 lg:right-[-140px] lg:top-[150px] z-[-1]' />
                    <img src="./../../Images/Main/content1.png" alt="content1" className='rounded-3xl
                    w-80 md:w-[350px] lg:w-[500px]' />
                </div>
            </div>
        </>
    )
}

export default Content2Info