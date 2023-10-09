import React, { useState } from 'react'
import data1 from './../../data/product.json'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faBone } from '@fortawesome/free-solid-svg-icons';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function ProductDesc() {

    const params = useParams();
    const data = data1[(params.id - 1)]
    const [close, setClose] = useState(false);
    const theme = useSelector(state => state.dark)
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <>
            <div className="w-full bg-white dark:bg-[#272929] detail">
                <div className="max-w-7xl mx-auto">
                    <div className='text-center px-5'>
                        <div className="text-center font-normal dark:text-[#ebf4f1] pt-5">
                            <p className='text-[20px] lg:leading-10 title2'>{data.title}</p>
                            <p className="text-[27px] lg:text-3xl font-bold leading-10 tracking-wider">{messages[`product_${params.id}`].Main_title}</p>
                            <p className='text-[18px] pb-[25px] lg:pb-[45px] leading-10 title2'>{data.Sub_title}</p>
                            <img className='mx-auto lg:py-5' src={data.imageUrl1} alt={data.name} />
                            <p className="text-[27px] pt-6 lg:text-[32px] leading-10 lg:pt-2 title2">{data.Sub_title}</p>
                            <p className="text-[18px] lg:text-[25px]">{messages[`product_${params.id}`].Sub_title_2}</p>
                            <p className="text-[18px] lg:text-[25px] py-3 text-[#86bcd5]">{messages[`product_${params.id}`].Sub_title_3}</p>
                            <p className="text-[18px] lg:text-[25px]">{messages[`product_${params.id}`].Sub_title_4}</p>
                            <div className="leading-8 lg:text-[20px]">
                                {
                                    [0, 1, 2, 3, 4].map(i => (
                                        <p key={i}>{messages[`product_${params.id}`][`desc${i === 0 ? '' : `_${i}`}`]}</p>
                                    ))
                                }
                            </div>
                            {
                                data.design_story_title &&
                                <p className='border border-none dark:bg-[#404040b3] bg-[#86bcd5] text-white rounded-full w-[200px]  lg:w-[250px] mx-auto  text-[25px] py-3'>
                                    {messages[`product_${params.id}`].design_story_title}
                                </p>
                            }
                            {
                                data.design_story1 &&
                                <div className="text-center pt-6 lg:py-5 leading-[40px] dark:text-[#ebf4f1] text-[18px] lg:text-[20px]">
                                  {
                                    [1, 2, 3, 4].map(i => (
                                        <p key={i}>{messages[`product_${params.id}`][`design_story${i}`]}</p>
                                    ))
                                    }
                                </div>
                            }
                        </div>
                        <div className={`relative overflow-hidden py-5 ${close === false ? 'h-[500px]' : 'h-auto'}`}>
                            {
                                Object.entries(data.img).map((e, i) => {
                                    return (
                                        <img key={i} className='mx-auto pt-5 dark:text-[#ebf4f1]' src={e[1]} alt={data.name} />
                                    )
                                })
                            }
                            <div onClick={() => { setClose(close === false ? true : false) }} className="mx-auto max-w-[950px] absolute right-0 left-0 bottom-0 bg-white border border-[#86bcd5] dark:border-[#dadbdb] dark:text-[#ebf4f1] dark:bg-[#272929]">
                                <div className="flex justify-center py-4 lg:py-[25px] cursor-pointer">
                                    {
                                        close === false &&
                                        <div className="gradient"></div>
                                    }
                                    <div className="text-[18px] lg:text-xl font-medium mr-3 ">{messages.detailinformation}</div>
                                    <FontAwesomeIcon icon={faAngleUp} className={`w-6 h-6 pt-[3px] lg:w-8 lg:h-8 ${close === false ? 'rotate-180' : ''}`} />
                                </div>
                            </div>
                            <div className="max-w-[900px] text-white mx-auto bg-[#86bcd5] leading-10 my-5 lg:my-10 lg:text-[20px] font-[500] dark:bg-[#404343] dark:text-[#ebf4f1] py-[70px] px-5">
                                <p className='text-[27px] lg:text-[32px] font-bold title'>{messages[`product_${params.id}`].Main_title_1}</p>
                                {
                                    ['desc2', 'desc3', 'desc4'].map((desc, i) => (
                                        <React.Fragment key={i}>
                                            <p className='pt-8'>{messages[`product_${params.id}`][`${desc}_title`]}</p>
                                            {
                                                [0, 1, 2].map(j => (
                                                messages[`product_${params.id}`][`${desc}${j === 0 ? '' : `_${j}`}`] && 
                                                    <p className='text-[#404040b3] text-white dark:text-[#ebf4f1]' key={j}>
                                                        {messages[`product_${params.id}`][`${desc}${j === 0 ? '' : `_${j}`}`]}
                                                    </p>
                                                ))
                                            }
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                            <div className="lg:pb-[30px] text-base md:text-xl lg:text-xl md:leading-[35px] lg:leading-[35px] dark:text-[#ebf4f1]">
                                <p>{messages.desc14}</p>
                                <p>{messages.desc15}</p>
                                <p>{messages.desc16}</p>
                                <p>{messages.desc17}</p>
                            </div>
                            <img className='mx-auto pt-5' src={data.endImageUrl} alt={data.name} />
                            <div className="py-10 text-[18px] lg:pb-0  lg:text-xl leading-[35px] text-[#86bcd5] dark:text-[#ebf4f1]">
                                <FontAwesomeIcon icon={faBone} className='mx-auto dark:text-[#ebf4f1] w-[50px] h-[50px]' color='#86bcd5' />
                                <p className='title2'>{messages.desc18}</p>
                                <p className='title2'>{messages.desc19}</p>
                                <img className='mx-auto pb-[10%] lg:w-[200px] w-[170px] pt-8' src={
                                    theme === 'light' ?
                                        "./../Images/logo.png" 
                                        :
                                        "./../Images/Main/logo_dark.png"
                                } alt="로고" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDesc