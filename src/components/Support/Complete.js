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
        <div className="w-11/12 h-full bg-[#86bcd5] absolute mx-auto my-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-10/12 md:w-10/12 lg:h-full md:h-full">
            <ul className="lg:mb-[4%] md:mb-[7%] mb-[8%] fold:mb-[12%] text-center relative lg:top-[15%] md:top-[17%] top-[18%]">
                <li className="text-[17px]  lg:text-3xl md:text-2xl fold:text-[13px]">
                    <p>{messages.complete1}</p>
                    <p>{messages.complete2}<br />{messages.complete3}</p>
                </li>
            </ul>
            <ul className='lg:mb-[4%] md:mb-[7%] mb-[8%] fold:mb-[12%] text-center relative lg:top-[15%] md:top-[17%] top-[18%]'>
                <li className='text-[17px]  lg:text-3xl md:text-2xl fold:text-[13px]'>
                    <p>{messages.complete4}</p>
                    <p>{messages.complete5}</p>
                    <p>{messages.complete6}</p>
                </li>
            </ul>
            <ul className='text-center relative lg:top-[15%] md:top-[17%] top-[18%] lg:mb-[5%] md:mb-[7%] mb-[15%] '>
                <li className="text-[17px] lg:text-3xl md:text-2xl fold:text-[13px]"><p>{messages.complete7}<br /><span className='text-white text-[25px] lg:text-[35px] md:text-[29px] fold:text-[18px]'>{messages.complete8} </span>{messages.complete9}</p></li>
            </ul>
            <div className='lg:w-[180px] lg:h-[70px] bg-[#1e4557] flex justify-center items-center text-white mx-auto relative lg:top-[15%] md:top-[17%] top-[18%]  w-[140px] h-[45px] fold:w-[120px] fold:h-[40px] lg:text-[16px] text-[14px] rounded-[50px]'>
                <FontAwesomeIcon icon={faHome} className='pr-1 text-white lg:text-[16px] text-[14px] fold:text-[12px]' />
                <NavLink to='/' className="text-white lg:text-[16px] md:text-[14px] text-[13px] fold:text-[12px]">{messages.complete10}</NavLink>
            </div>
        </div>
    </>
  )
}

export default Complete