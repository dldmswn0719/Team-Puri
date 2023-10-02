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
    // console.log(params.id)
    const theme = useSelector(state => state.dark)
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <>
            <div className="w-full bg-white dark:bg-[#272929] detail">
                <div className="max-w-7xl mx-auto">
                    <div className='text-center px-5'>
                        <div className="text-center text-xl font-normal dark:text-[#ebf4f1]">
                            <p className='leading-10 title2'>{data.title}</p>
                            <p className="text-3xl font-bold leading-10 tracking-wider">{messages[`product_${params.id}`].Main_title}</p>
                            <p className='pb-[45px] leading-10 title2'>{data.Sub_title}</p>
                            <img className='mx-auto py-5' src={data.imageUrl1} alt={data.name} />
                            <p className="font-bold text-[32px] leading-10 py-2 title">{data.Sub_title}</p>
                            <p className="text-[25px]">{messages[`product_${params.id}`].Sub_title_2}</p>
                            <p className="text-[25px] py-3 text-[#DAC0A3]">{messages[`product_${params.id}`].Sub_title_3}</p>
                            <p className="text-[25px]">{messages[`product_${params.id}`].Sub_title_4}</p>
                            <div className="leading-8 pb-4 ">
                                <p>{messages[`product_${params.id}`].desc}</p>
                                <p>{messages[`product_${params.id}`].desc_1}</p>
                                <p>{messages[`product_${params.id}`].desc_2}</p>
                                <p>{messages[`product_${params.id}`].desc_3}</p>
                                <p>{messages[`product_${params.id}`].desc_4}</p>
                            </div>
                            {
                                data.design_story_title &&
                                <p className='border border-none dark:bg-[#404040b3] bg-[#EADBC8] text-white rounded-[40px] w-[250px] mx-auto mt-[-20px] text-[25px] py-3'>
                                    {messages[`product_${params.id}`].design_story_title}
                                </p>
                            }
                            {
                                data.design_story1 &&
                                <div className="text-center mt-3 py-6 leading-[40px] dark:text-[#ebf4f1]">
                                    <p>{messages[`product_${params.id}`].design_story1}</p>
                                    <p>{messages[`product_${params.id}`].design_story2}</p>
                                    <p>{messages[`product_${params.id}`].design_story3}</p>
                                    <p>{messages[`product_${params.id}`].design_story4}</p>
                                </div>
                            }
                        </div>
                        <div className={`relative overflow-hidden py-5 ${close === false ? 'h-[500px]' : 'h-auto'}`}>
                            {
                                Object.entries(data.img).map((e, i) => {
                                    return (
                                        <img key={i} className='mx-auto py-5 dark:text-[#ebf4f1]' src={e[1]} alt={data.name} />
                                    )
                                })
                            }
                            <div onClick={() => { setClose(close === false ? true : false) }} className="mx-auto max-w-[950px] absolute right-0 left-0 bottom-0 bg-white border border-[#D5C09F] dark:border-[#dadbdb] dark:text-[#ebf4f1] dark:bg-[#272929]">
                                <div className="flex justify-center py-[25px] cursor-pointer">
                                    {
                                        close === false &&
                                        <div className="gradient"></div>
                                    }
                                    <div className="text-xl font-medium mr-3 ">{messages.detailinformation}</div>
                                    <FontAwesomeIcon icon={faAngleUp} className={`w-8 h-8 ${close === false ? 'rotate-180' : ''}`} />
                                </div>
                            </div>
                            <div className="max-w-[900px] mx-auto bg-[#F8F0E5] leading-10 mb-[40px] text-[20px] font-[500] dark:bg-[#404343] dark:text-[#ebf4f1] pb-[70px]" >
                                <p className='text-[32px] font-bold pt-[70px] title'>{messages[`product_${params.id}`].Main_title_1}</p>
                                <p className='pt-8'>{messages[`product_${params.id}`].desc2_title}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{messages[`product_${params.id}`].desc2}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{messages[`product_${params.id}`].desc2_1}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{messages[`product_${params.id}`].desc2_2}</p>
                                <p className='pt-8'>{messages[`product_${params.id}`].desc3_title}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{messages[`product_${params.id}`].desc3}</p>
                                <p className='pt-8'>{messages[`product_${params.id}`].desc4_title}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{messages[`product_${params.id}`].desc4}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{messages[`product_${params.id}`].desc4_1}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{messages[`product_${params.id}`].desc4_2}</p>
                            </div>
                            <div className="pb-[30px] text-xl leading-[35px] dark:text-[#ebf4f1]">
                                <p>{messages.desc14}</p>
                                <p>{messages.desc15}</p>
                                <p>{messages.desc16}</p>
                                <p>{messages.desc17}</p>
                            </div>
                            <img className='mx-auto pt-5' src={data.endImageUrl} alt={data.name} />
                            <div className="py-10 text-xl leading-[35px] text-[#DAC0A3] dark:text-[#ebf4f1]">
                                <FontAwesomeIcon icon={faBone} className='mx-auto dark:text-[#ebf4f1] w-[50px] h-[50px]' color='#DAC0A3' />
                                <p className='title2'>{messages.desc18}</p>
                                <p className='title2'>{messages.desc19}</p>
                                <img className='mx-auto pb-[6%]' src={
                                    theme === 'light' ?
                                        "./../Images/logo_s1.png"
                                        :
                                        "./../Images/Main/logo_dark_small.png"
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