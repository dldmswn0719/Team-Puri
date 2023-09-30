import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function Complete() {

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;
  return (
    <>
        <div className="w-[1200px] h-[800px] bg-[#f8f0e5] absolute mx-auto my-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="mb-[50px]">
                <li className="text-3xl text-center relative top-[170px] leading-10">
                    <p>{messages.complete1}</p>
                    <p>{messages.complete2}<br />{messages.complete3}</p>
                </li>
            </ul>
            <ul>
                <li className="text-3xl text-center relative top-[170px] leading-10"><p>{messages.complete4}<br /><span className='text-[#dac0a3] text-[35px]'>{messages.complete5} </span>{messages.complete6}</p></li>
            </ul>
            <NavLink to='/' className="w-[180px] h-[70px] bg-[#dac0a3] flex justify-center items-center text-white absolute bottom-[25%] left-1/2 -translate-x-1/2 -translate-y-[-25%]">{messages.complete7}</NavLink>
        </div>
    </>
  )
}

export default Complete