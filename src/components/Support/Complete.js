import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


function Complete() {

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;
  return (
    <>
        <div className="flex flex-col justify-center items-center h-screen bg-[#86bcd5] mx-auto lg:w-10/12">
            <ul className="mb-[4%] text-center">
                <li className="text-[17px] lg:text-3xl md:text-2xl fold:text-[13px]">
                <p>{messages.complete1}</p>
                <p>{messages.complete2}<br />{messages.complete3}</p>
                </li>
            </ul>
            <ul className='mb-[4%] text-center'>
                <li className='text-[17px] lg:text-3xl md:text-2xl fold:text-[13px]'>
                <p>{messages.complete4}</p>
                <p>{messages.complete5}</p>
                <p>{messages.complete6}</p>
                </li>
            </ul>
            <ul className='mb-[7%] text-center'>
                <li className="text-[17px] lg:text-3xl md:text-2xl fold:text-[13px]">
                <p>{messages.complete7}<br />
                    <span className='text-white text-[25px] lg:text-[35px] md:text-[29px] fold:text-[18px]'>
                        {messages.complete8}
                    </span>
                    {messages.complete9}
                </p>
                </li>
            </ul>
            <div className='w-[200px] h-20 md:w-[200px] md:h-16 hover:bg-[#b3312c] duration-500 bg-[#E75A56] flex justify-center items-center text-white mx-auto py-5 lg:text-xl rounded-[50px]'>
                <FontAwesomeIcon icon={faHome} className='pr-1 text-white lg:text-xl fold:text-[12px]' />
                <NavLink to='/' className="text-white lg:text-xl fold:text-[12px]">{messages.complete10}</NavLink>
            </div>
        </div>
    </>
  )
}

export default Complete