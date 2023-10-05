import React from 'react'
import { useSelector } from 'react-redux';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function Content2Info() {
    
    const theme = useSelector(state => state.dark);
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <>
        <div className='bg-white dark:bg-[#292929]'>
            <div className='md:w-[768px] lg:w-[1200px] m-auto flex items-center
            flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between
            pt-20 md:pb-5 md:pt-36 lg:py-[140px]'>
                <div className='text-center tracking-tight lg:mb-0 mb-5'>
                    <p className='text-2xl lg:text-[40px] font-bold leading-none dark:text-white'>{messages.cont2info1}<br />{messages.cont2info2}</p>
                    <p className='text-lg lg:text-2xl mt-[20px] dark:text-white'>{messages.cont2info3}<br />{messages.cont2info4}<br />{messages.cont2info5}</p>
                </div>
                <div className='relative'>
                    <img src="./../../Images/Main/deco_needle_leaf.png" alt="잎1개" className={`absolute w-[13%] -left-56 bottom-10 -rotate-45
                    lg:block md:hidden hidden
                    ${language === `en` ? `rotate-0 -left-16` : ``}`} />
                    <img src="./../../Images/Main/deco_needle.png" alt="왼쪽이파리" className={`absolute w-2/5 top-32 -left-44
                    lg:block md:hidden hidden
                    ${language === `en` ? `w-1/5 -left-24 top-52` : ``}`} />
                    <img src="./../../Images/Main/deco_flower2.png" alt="꽃" className=' absolute w-[15%] right-[-150px] top-[50px]
                    lg:block md:hidden hidden' />
                    <img src="./../../Images/Main/deco_needle2.png" alt="오른쪽이파리" className=' absolute w-[30%] right-[-140px] top-[150px]
                    lg:block md:hidden hidden' />
                    <img src="./../../Images/Main/content1.png" alt="content1" className='rounded-3xl
                    w-80 md:w-[350px] lg:w-[500px]' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Content2Info