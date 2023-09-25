import { faBullhorn, faDog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function DetailPage() {
  return (
    <>
      <div className="w-full bg-white dark:bg-[#272929]">
        <div className="lg:w-[1200px] my-0 mx-auto detail pt-[71px]">
          <div className="lg:pl-[11%] relative">
              <img className='opacity-80 relative' src="./../images/Store/puppy_hand.png" alt="강아지 손잡는 사진" />
              <p className='absolute z-10 left-[35%] text-xl text-[#F8F0E5] top-[50px]'>" 사지 않고 입양하는 문화를 만드는 "</p>
              <p className="absolute z-10 left-[42%] text-[40px] text-[#F8F0E5] bottom-[40%] font-bold">푸리푸리</p>
              <p className="absolute z-10 left-[35%] text-xl text-[#F8F0E5] bottom-[70px]">푸리푸리는 전국 유기동물 공고 정보를 제공해</p>
              <p className="absolute z-10 left-[31%] text-xl text-[#F8F0E5] bottom-[40px]">유기동물에게 소중한 가족을 찾아주고있는 플랫폼입니다.</p>
            </div>
            <div className="text-center dark:text-[#ebf4f1]">
              <img className='pt-[50px] pb-[40px] my-0 mx-auto' src="./../Images/logo_s1.png" alt="로고" />
              <p className='text-xl leading-9'>푸리푸리 굿즈를 통해 일상에서 입양 문화 메시지를 알리고</p>
              <p className='text-xl border-b border-[#EADBC8] pb-[50px] dark:border-[#dadbdb]'>입양 문화의 선순환 구조를 만들어나갑니다.</p>
              <div className="py-[35px] px-0 text-3xl text-[#DAC0A3] font-medium dark:text-[#ebf4f1]">
                <p>푸리푸리 굿즈</p>
                <p className='leading-[50px]'>수익금은 어떻게 사용되나요?</p>
              </div>
              <div className="flex justify-center pb-[67px] gap-x-[14%]">
                <div className="pt-[50px] dark:text-[#ebf4f1]">
                  <FontAwesomeIcon icon={faDog} className="w-[80px] h-[80px] ml-[10px] dark:text-[#ebf4f1]" color='#DAC0A3' />
                  <p className="font-bold lg:text-[23px] pt-10">유기동물 후원</p>
                  <div className="lg:text-xl leading-8">
                    <p>유기동물이 가족을 만나는 날까지</p>
                    <p>건강하게 기다릴수 있도록</p>
                    <p>사료, 기부금 등으로 후원합니다</p>
                  </div>
                </div>
                <div className="pt-[50px]">
                  <FontAwesomeIcon icon={faBullhorn} className='w-[70px] h-[70px] ml-[10px] dark:text-[#ebf4f1]' color='#DAC0A3' />
                  <p className="font-bold lg:text-[23px] pt-10">입양 문화 조성</p>
                  <div className="lg:text-xl leading-8">
                    <p>매거진, 영상, 캠페인, 굿즈 등</p>
                    <p>다양한 콘텐츠를 제작하여</p>
                    <p>유기동물에 대한 편견을 없애고</p>
                    <p>입양의 행복을 알립니다</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage