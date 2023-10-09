import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faDog } from '@fortawesome/free-solid-svg-icons'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function ProductDetail() {

    const theme = useSelector(state => state.dark)
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <>
            <div className="w-full bg-white dark:bg-[#272929]">
                <div className="max-w-7xl p-5 mx-auto">
                    <div className="text-center relative">
                        <img className='mx-auto' src={
                            language === "kr" ?
                            "./../Images/Store/dog_hand.png"
                            :
                            "./../Images/Store/dog_hand_en.png"
                        } alt="강아지 손잡는 사진" />
                    </div>
                    <div className="text-center dark:text-[#ebf4f1]">
                        <img className='lg:py-10 py-5 mx-auto lg:w-[200px] w-[170px]' src={
                            theme === 'light' ?
                            "./../Images/logo.png" 
                            :
                            "./../Images/Main/logo_dark.png"
                        } alt="로고" />
                        <p className='lg:text-xl text-[18px] leading-9'>{messages.desc1}</p>
                        <p className='lg:text-xl text-[18px] border-b border-[#86bcd5] pb-[50px] dark:border-[#dadbdb]'>{messages.desc2}</p>
                        <div className="py-[35px] px-0 text-2xl lg:text-4xl text-[#86bcd5] font-medium dark:text-[#ebf4f1]">
                            <p>{messages.desc3}</p>
                            <p className='leading-[50px]'>{messages.desc4}</p>
                        </div>
                        <div className="flex justify-center lg:pb-[50px] gap-x-[14%]">
                            <div className="pt-[50px] dark:text-[#ebf4f1]">
                                <FontAwesomeIcon icon={faDog} className="lg:w-[80px] lg:h-[80px] w-[65px] h-[65px] dark:text-[#ebf4f1]" color='#86bcd5' />
                                <p className="font-bold lg:text-[23px] pt-10 text-[20px] pb-1">{messages.desc5}</p>
                                <div className="lg:text-[20px] text-[18px] lg:leading-9 leading-7">
                                    {
                                        [6, 7, 8].map(i => (
                                            <p key={i}>{messages[`desc${i}`]}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="pt-[50px]">
                                <FontAwesomeIcon icon={faBullhorn} className='lg:w-[80px] lg:h-[80px] w-[65px] h-[65px] dark:text-[#ebf4f1]' color='#86bcd5' />
                                <p className="font-bold lg:text-[23px] pt-10 text-[20px] pb-1">{messages.desc9}</p>
                                <div className="lg:text-[20px] text-[18px] lg:leading-9 leading-7">
                                    {
                                        [10, 11, 12 , 13].map(i => (
                                            <p key={i}>{messages[`desc${i}`]}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail