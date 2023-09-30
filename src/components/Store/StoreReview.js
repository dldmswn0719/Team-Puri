import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function StoreReview() {

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <>
            <div className="w-full bg-white dark:bg-[#272929]">
                <div className="lg:w-[1200px] my-0 mx-auto review">
                    <div className="pt-[97px] text-xl">
                        <div className="flex leading-10 dark:text-[#ebf4f1]">
                            <p className='pr-1'>{messages.productreview}</p>
                            <p className="text-[#DAC0A3] dark:text-[#ebf4f1]">(0)</p>
                        </div>
                        <p className='dark:text-[#ebf4f1]'>{messages.desc20}</p>
                        <div className="w-[170px] h-[55px] bg-[#DAC0A3] mt-[25px] cursor-pointer dark:bg-[#404343]">
                            <NavLink to='/review_input'>
                                <p className="text-white leading-[55px] text-center">{messages.desc21}</p>
                            </NavLink>
                        </div>
                        <div className="lg:w-[1200px] h-[550px] border-t border-[#EADBC8] mt-[50px] text-center dark:border-[#dadbdb]">
                            <FontAwesomeIcon icon={faCommentDots} className='mt-[230px] mx-auto dark:text-[#ebf4f1]' color='#DAC0A3' size='2x'/>
                            <p className="text-[#EADBC8] pt-[35px] dark:text-[#ebf4f1]">{messages.desc22}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoreReview