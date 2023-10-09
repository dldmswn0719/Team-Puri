import React from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';


function StoreReview() {

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <>
            <div className="w-full bg-white dark:bg-[#272929]">
                <div className="max-w-7xl mx-auto review">
                    <div className="pt-[8%] px-5">
                        <div className="text-[18px] lg:text-[22px] flex leading-10 dark:text-[#ebf4f1]">
                            <p className='pr-1'>{messages.productreview}</p>
                            <p className="text-[#86bcd5] dark:text-[#ebf4f1]">(0)</p>
                        </div>
                        <p className='dark:text-[#ebf4f1] lg:text-[17px] text-[#ababab]'>{messages.desc20}</p>
                        <div onClick={()=>{alert(`${messages.alert[5]}`)}} className="w-[170px] h-[55px] bg-[#86bcd5] mt-[20px] cursor-pointer dark:bg-[#404343]">
                            <p className="text-white leading-[55px] text-center lg:text-[17px]">
                                {messages.desc21}
                                <FontAwesomeIcon icon={faPenToSquare} className="pl-2" />
                            </p>
                        </div>
                        <div className="max-w-7xl h-[550px] lg:text-[20px] border-t border-[#86bcd5] mt-8 lg:mt-[40px] text-center dark:border-[#dadbdb]">
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