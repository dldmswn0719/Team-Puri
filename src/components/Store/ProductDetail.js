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
                        <img className='pt-[40px] pb-[40px] my-0 mx-auto' src={
                            theme === 'light' ?
                            "./../Images/logo_s1.png" 
                            :
                            "./../Images/Main/logo_dark_small.png"
                        } alt="로고" />
                        <p className='text-xl leading-9'>{messages.desc1}</p>
                        <p className='text-xl border-b border-[#EADBC8] pb-[50px] dark:border-[#dadbdb]'>{messages.desc2}</p>
                        <div className="py-[35px] px-0 text-3xl text-[#DAC0A3] font-medium dark:text-[#ebf4f1]">
                            <p>{messages.desc3}</p>
                            <p className='leading-[50px]'>{messages.desc4}</p>
                        </div>
                        <div className="flex justify-center pb-[50px] gap-x-[14%]">
                            <div className="pt-[50px] dark:text-[#ebf4f1]">
                                <FontAwesomeIcon icon={faDog} className="w-[80px] h-[80px] ml-[10px] dark:text-[#ebf4f1]" color='#DAC0A3' />
                                <p className="font-bold lg:text-[23px] pt-10 text-[20px]">{messages.desc5}</p>
                                <div className="lg:text-xl text-[17px] leading-8">
                                    <p>{messages.desc6}</p>
                                    <p>{messages.desc7}</p>
                                    <p>{messages.desc8}</p>
                                </div>
                            </div>
                            <div className="pt-[50px]">
                                <FontAwesomeIcon icon={faBullhorn} className='w-[70px] h-[70px] ml-[10px] dark:text-[#ebf4f1]' color='#DAC0A3' />
                                <p className="font-bold lg:text-[23px] pt-10 text-[20px]">{messages.desc9}</p>
                                <div className="lg:text-xl text-[17px] leading-8">
                                    <p>{messages.desc10}</p>
                                    <p>{messages.desc11}</p>
                                    <p>{messages.desc12}</p>
                                    <p>{messages.desc13}</p>
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