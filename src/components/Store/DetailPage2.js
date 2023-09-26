import React, { useEffect, useState } from 'react'
import data1 from './../../data/product.json'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faBone } from '@fortawesome/free-solid-svg-icons';

function DetailPage2() {

    const params = useParams();
    const data = data1[(params.id-1)]
    const [close, setClose] = useState(false);
    // console.log(params.id)

    const [dark,setDark] = useState(false);

    useEffect(()=>{
      if(localStorage.getItem("theme") === "dark"){
          document.documentElement.classList.add("dark");
          setDark(!dark);
      }
    },[])

    return (
      <>
        <div className="w-full bg-white dark:bg-[#272929]">
            <div className="lg:w-[1200px] my-0 mx-auto">
                <div className='text-center'>
                    <div className="text-center text-xl font-normal dark:text-[#ebf4f1]">
                        <p className='leading-10 title2'>{data.title}</p>
                        <p className="text-3xl font-bold leading-10 tracking-wider">{data.Main_title}</p>
                        <p className='pb-[45px] leading-10 title2'>{data.Sub_title}</p>
                        <img className='mx-auto my-0 py-[20px] lg:w-[900px] w-[550px]' src={data.imageUrl1} alt={data.name} />
                        <p className="text-left lg:pl-[13%] sm:pl-[9%] md:pl-[13%] font-bold text-[32px] leading-10 py-2 title">{data.Sub_title_1}</p>
                        <p className="text-left lg:pl-[13%] text-[25px]">{data.Sub_title_2}</p>
                        <p className="text-left lg:pl-[13%] text-[25px] py-3 text-[#DAC0A3]">{data.Sub_title_3}</p>
                        <p className="text-left lg:pl-[13%] text-[25px]">{data.Sub_title_4}</p>
                        <div className="text-left lg:pl-[13%] pl-[9%] md:pl-[13%] leading-8 py-4 ">
                            <p>{data.desc}</p>
                            <p>{data.desc_1}</p>
                            <p>{data.desc_2}</p>
                            <p>{data.desc_3}</p>
                            <p>{data.desc_4}</p>
                        </div>
                        {
                        data.design_story_title &&
                            <p className='border border-none dark:bg-[#404040b3] bg-[#EADBC8] text-white rounded-[40px] w-[250px] mx-auto mt-[-20px] text-[25px] py-3'>{data.design_story_title}</p>
                        }
                        {
                            data.design_story1 &&
                            <div className="text-center mt-3 py-6 leading-[40px] dark:text-[#ebf4f1]">
                                <p>{data.design_story1}</p>
                                <p>{data.design_story2}</p>
                                <p>{data.design_story3}</p>
                                <p>{data.design_story4}</p>
                            </div>
                        }
                    </div>
                    <div className={`relative overflow-hidden ${close === false ? 'h-[500px]' : 'h-auto'}`}>
                        {
                            Object.entries(data.img).map((e,i)=>{
                            return (
                                <img key={i} className='mx-auto my-0 py-[20px] dark:text-[#ebf4f1] lg:w-[900px] w-[550px]' src={e[1]} alt={data.name} />
                            )
                            })
                        }
                        <div onClick={()=>{setClose(close === false ? true : false)}} className="lg:w-[930px] w-[650px] bottom-0 bg-white absolute h-[80px] border border-[#D5C09F] lg:ml-[11%] dark:border-[#dadbdb] dark:text-[#ebf4f1] dark:bg-[#272929]">
                            <div className="flex justify-center pt-[25px] cursor-pointer">
                            {
                                close === false &&
                                <div className="gradient"></div>
                            }
                                <div className="lg:text-xl lg:mr-3 font-medium sm:text-[17px]">상세정보 {close === false ? "열기" : "닫기"}</div>
                                <FontAwesomeIcon icon={faAngleUp} className={`lg:w-8 lg:h-8 sm:w-5 sm:h-5 sm:mt-1 sm:ml-1 ${close === false ? 'rotate-180': ''}`} />   
                            </div>
                        </div>
                        {
                            data.Main_title_1 &&
                            <div className={`lg:w-[900px] w-[550px] mx-auto bg-[#F8F0E5] leading-10 lg:ml-[12.5%] mb-[40px] text-[20px] font-[500] dark:bg-[#404343] dark:text-[#ebf4f1] ${params.id === "2" || params.id === "4" ? 'h-[530px]' : 'h-[650px]'}`} >
                                <p className='text-[32px] font-bold pt-[94px] title'>{data.Main_title_1}</p>
                                <p className='pt-8'>{data.desc2_title}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{data.desc2}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{data.desc2_1}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{data.desc2_2}</p>
                                <p className='pt-8'>{data.desc3_title}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{data.desc3}</p>
                                <p className='pt-8'>{data.desc4_title}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{data.desc4}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{data.desc4_1}</p>
                                <p className='text-[#404040b3] dark:text-[#ebf4f1]'>{data.desc4_2}</p>
                            </div>
                        }
                        <div className="pb-[40px] text-xl leading-[35px] dark:text-[#ebf4f1]">
                            <p>푸리푸리 스토어 수익금은 유기동물 후원 및</p>
                            <p>유기동물 입양 문화 조성을 위한 푸리푸리 활동에 사용됩니다.</p>
                            <p>여러분의 가치 있는 소비가</p>
                            <p>유기동물들에게 닿을수 있도록 더욱 노력하겠습니다.</p>
                        </div>
                        <img className='mx-auto my-0 py-[20px] lg:w-[900px] w-[550px]' src={data.endImageUrl} alt={data.name} />
                        <FontAwesomeIcon icon={faBone} className='mx-auto dark:text-[#ebf4f1] w-[50px] h-[50px]' color='#DAC0A3' />
                        <div className="text-xl leading-[35px] pb-5 text-[#DAC0A3] dark:text-[#ebf4f1]">
                            <p className='title2'>사랑하는 존재를 더욱 사랑하도록</p>
                            <p className='title2'>아파하는 존재가 다시 사랑받도록</p>
                        </div>
                        <img className='mx-auto my-0 pb-[110px]' src={
                            dark ?
                            "./../Images/Main/logo_dark_small.png"
                            :
                            "./../Images/logo_s1.png"
                        } alt="로고" />
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default DetailPage2