import React, { useState } from 'react'
import data1 from './../data/product.json'
import { useParams } from 'react-router-dom'

function DetailPage2() {

    const params = useParams();
    const data = data1[(params.id-1)]
    const [close, setClose] = useState(false);
    // console.log(params.id)

    return (
      <>
      <div className="w-[1200px] my-0 mx-auto">
        <div className='text-center'>
            <div className="text-center text-xl font-normal">
                <p className='leading-10 title2'>{data.title}</p>
                <p className="text-3xl font-bold leading-10 tracking-wider">{data.Main_title}</p>
                <p className='pb-[45px] leading-10 title2'>{data.Sub_title}</p>
                <img className='mx-auto my-0 py-[20px]' src={data.imageUrl1} alt={data.name} />
                <p className="text-left pl-[13%] font-bold text-[32px] leading-10 py-2 title">{data.Sub_title_1}</p>
                <p className="text-left pl-[13%] text-[25px]">{data.Sub_title_2}</p>
                <p className="text-left pl-[13%] text-[25px] py-3 text-[#DAC0A3]">{data.Sub_title_3}</p>
                <p className="text-left pl-[13%] text-[25px]">{data.Sub_title_4}</p>
                <div className="text-left pl-[13%] leading-8 py-4 ">
                    <p>{data.desc}</p>
                    <p>{data.desc_1}</p>
                    <p>{data.desc_2}</p>
                    <p>{data.desc_3}</p>
                    <p>{data.desc_4}</p>
                </div>
                {
                 data.design_story_title &&
                    <p className='border border-[#EADBC8] bg-[#EADBC8] text-white rounded-[40px] w-[250px] mx-auto mt-[-20px] text-[25px] py-3'>{data.design_story_title}</p>
                }
                {
                    data.design_story1 &&
                    <div className="text-center mt-3 py-6 leading-[40px]">
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
                        <img key={i} className='mx-auto my-0 py-[20px]' src={e[1]} alt={data.name} />
                    )
                    })
                }
                <div onClick={()=>{setClose(close === false ? true : false)}} className="w-[930px] bottom-0 bg-white absolute h-[80px] border border-[#D5C09F] ml-[11%]">
                    <div className="flex justify-center pt-[20px] cursor-pointer">
                       {
                        close === false &&
                        <div className="gradient"></div>
                       }
                        <div className="text-xl mr-3 font-medium">상세정보 {close === false ? "열기" : "닫기"}</div>
                        <div className="w-[20px] h-[20px] mt-[6px]">
                            <img src='./../img/arrow_top.png'className={`${close === false ? 'rotate-180': ''}`} />
                        </div>
                    </div>
                </div>
                {
                    data.Main_title_1 &&
                    <div className={`w-[900px] bg-[#F8F0E5] leading-10 ml-[12.5%] mb-[40px] text-[20px] font-[500] ${params.id === "2" || params.id === "4" ? 'h-[530px]' : 'h-[650px]'}`} >
                        <p className='text-[32px] font-bold pt-[94px] title'>{data.Main_title_1}</p>
                        <p className='pt-8'>{data.desc2_title}</p>
                        <p className='text-[#404040b3]'>{data.desc2}</p>
                        <p className='text-[#404040b3]'>{data.desc2_1}</p>
                        <p className='text-[#404040b3]'>{data.desc2_2}</p>
                        <p className='pt-8'>{data.desc3_title}</p>
                        <p className='text-[#404040b3]'>{data.desc3}</p>
                        <p className='pt-8'>{data.desc4_title}</p>
                        <p className='text-[#404040b3]'>{data.desc4}</p>
                        <p className='text-[#404040b3]'>{data.desc4_1}</p>
                        <p className='text-[#404040b3]'>{data.desc4_2}</p>
                    </div>
                }
                <div className="pb-[40px] text-xl leading-[35px]">
                    <p>푸리푸리 스토어 수익금은 유기동물 후원 및</p>
                    <p>유기동물 입양 문화 조성을 위한 푸리푸리 활동에 사용됩니다.</p>
                    <p>여러분의 가치 있는 소비가</p>
                    <p>유기동물들에게 닿을수 있도록 더욱 노력하겠습니다.</p>
                </div>
                <img className='mx-auto my-0 py-[20px]' src={data.endImageUrl} alt={data.name} />
                <img className='mx-auto my-0' src="./../img/bone.png" alt="강아지뼈다귀" />
                <div className="text-xl leading-[35px] pb-10 text-[#DAC0A3]">
                    <p className='title2'>사랑하는 존재를 더욱 사랑하도록</p>
                    <p className='title2'>아파하는 존재가 다시 사랑받도록</p>
                </div>
                <img className='mx-auto my-0 mb-[110px]' src="./../img/logo.png" alt="로고" />
            </div>
        </div>
      </div>
      </>
  )
}

export default DetailPage2