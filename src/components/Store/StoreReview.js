import React from 'react'
import { useSelector } from 'react-redux';
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
                <div className="max-w-7xl mx-auto review">
                    <div className="pt-[8%] text-[18px] lg:text-xl px-5">
                        <div className="flex leading-10 dark:text-[#ebf4f1]">
                            <p className='pr-1'>{messages.productreview}</p>
                            <p className="text-[#86bcd5] dark:text-[#ebf4f1]">(0)</p>
                        </div>
                        <p className='dark:text-[#ebf4f1]'>{messages.desc20}</p>
                        <div className="w-[170px] h-[55px] bg-[#86bcd5] mt-[25px] cursor-pointer dark:bg-[#404343]">
                            <p className="text-white leading-[55px] text-center">{messages.desc21}</p>
                        </div>
                        <div className="max-w-7xl h-[550px] border-t border-[#86bcd5] mt-8 lg:mt-[50px] text-center dark:border-[#dadbdb]">
                            <FontAwesomeIcon icon={faCommentDots} className='mt-[230px] mx-auto dark:text-[#ebf4f1]' color='#86bcd5' size='2x'/>
                            <p className="text-[#86bcd5] pt-[35px] dark:text-[#ebf4f1]">{messages.desc22}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoreReview