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
    <div className='w-full h-screen dark:bg-[#272929]'>
        <div className="flex flex-col justify-center items-center bg-[#86bcd5] mx-auto lg:w-2/3 md:w-2/3 w-3/4 lg:h-[80vh] md:h-[80vh] h-[70vh] absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 dark:bg-[#404343] dark:text-white">
            <ul className="mb-[4%] text-center px-4">
                <li className="text-[17px] lg:text-3xl md:text-2xl fold:text-[13px]">
                <p>{messages.complete1}</p>
                <p>{messages.complete2}<br />{messages.complete3}</p>
                </li>
            </ul>
            <ul className='mb-[4%] text-center px-4'>
                <li className='text-[17px] lg:text-3xl md:text-2xl fold:text-[13px]'>
                <p>{messages.complete4}</p>
                <p>{messages.complete5}</p>
                <p>{messages.complete6}</p>
                </li>
            </ul>
            <ul className='mb-[6%] text-center px-4'>
                <li className="text-[17px] lg:text-3xl md:text-2xl fold:text-[13px]">
                <p>{messages.complete7}<br />
                    <span className='text-white dark:text-[#86bcd5] text-[25px] lg:text-[35px] md:text-[29px] fold:text-[18px]'>
                        {messages.complete8}
                    </span>
                    {messages.complete9}
                </p>
                </li>
            </ul>
            <NavLink to='/' className="text-white lg:text-xl md:text-xl fold:text-[13px] lg:w-[200px]  md:w-[200px] w-[160px] fold:w-[130px]  h hover:bg-[#b3312c] duration-500 bg-[#E75A56] dark:bg-[#272929] flex justify-center items-center  mx-auto lg:py-5 md:py-5 py-4 fold: rounded-[50px]"><FontAwesomeIcon icon={faHome} className='pr-1 text-white lg:text-xl md:text-xl fold:text-[13px]' />{messages.complete10}</NavLink>
        </div>
        </div>
    </>
  )
}

export default Complete