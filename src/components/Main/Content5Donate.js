import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function Content5Donate() {

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <div className='content5bg lg:h-[800px] lg:mt-0 h-64 mt-28'>
            <div className='m-auto text-white
            p-10
            md:w-[768px]
            lg:w-[1200px] lg:pt-36 lg:text-right'>
                <p className='lg:text-5xl tracking-tight text-2xl'><span className='font-bold'>{messages.cont5donate1}</span>{messages.cont5donate2}<span className='font-bold'>{messages.cont5donate3}</span></p>
                <p className='lg:text-2xl lg:py-[73px] tracking-tight text-base py-4'>{messages.cont5donate4}<br />{messages.cont5donate5}<br />{messages.cont5donate6}</p>
                <button className='lg:w-[200px] lg:h-20 lg:text-2xl
                w-32 h-10 text-lg
                bg-[#E75A56] rounded-full duration-500 font-bold hover:bg-[#db3b36]'><NavLink to='/supportpay' className='text-white'>{messages.cont5donate7}</NavLink></button>
            </div>
        </div>
    )
}

export default Content5Donate