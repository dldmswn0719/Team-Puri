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
        <div className="w-[1200px] h-[800px] bg-[#86bcd5] absolute mx-auto my-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:w-11/12 max-md:w-3/4 max-lg:h-full max-md:h-full">
            <ul className="mb-[50px] text-center relative top-[150px]">
                <li className="text-3xl  leading-10 max-lg:text-2xl max-md:text-xl">
                    <p>{messages.complete1}</p>
                    <p>{messages.complete2}<br />{messages.complete3}</p>
                </li>
            </ul>
            <ul className='mb-[50px] text-center relative top-[150px]'>
                <li className='text-3xl  leading-10 max-lg:text-2xl max-md:text-xl'>
                    <p>여러분의 소중한 후원 금액은</p>
                    <p>유기동물들의 입양 활동 금액으로 사용됩니다.</p>
                    <p>다시 한번, 소중한 후원에 감사드립니다.</p>
                </li>
            </ul>
            <ul className='text-center relative top-[150px] '>
                <li className="text-3xl leading-10 max-lg:text-2xl max-md:text-xl"><p>{messages.complete4}<br /><span className='text-white text-[35px] max-lg:text-[29px] max-md:text-[25px]'>{messages.complete5} </span>{messages.complete6}</p></li>
            </ul>
            <NavLink to='/' className="w-[180px] h-[70px] bg-[#1e4557] flex justify-center items-center text-white mx-auto relative top-[200px] max-lg:w-[150px] max-lg:h-[50px] max-lg:text-[14px] max-md:w-[130px] max-md:h-[40px] max-md:text-[13px] rounded-[50px]">{messages.complete7}</NavLink>
        </div>
    </>
  )
}

export default Complete