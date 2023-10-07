import React from 'react'

// left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4
function Intro() {
  return (
    <>
      <div className=" flex justify-center items-center w-full h-full dark:bg-[#272929] overflow-x-hidden">
      {/*  container*/}
          <div className="w-[1200px] h-full">
              <div className="mt-[50px]">
                <p className='text-center text-[28px] lg:text-[48px] md:text-[34px] tracking-[-4px] text-[#162C58] dark:text-[#ebf4f1] animate__animated animate__backInLeft'>우리의
                  <span className='font-bold tracking-[-5px] dark:text-[#ebf4f1'>작은 친구들을 위한 </span>특별한 보호소</p>
              </div>
          
              <div className="text-center">
                <p className='text-[#162C58] dark:text-[#ebf4f1] text-[17px] lg:text-[20px] md:text-[18px]  tracking-[-2px] animate__animated animate__backInRight animate__delay-1s 1s'>애정 어린 소리로 유기동물을 지칭하는 이름으로, 보호와 관심을 나타냅니다.</p>
              </div>
              <div className=''>
              <div className=" ">
                  {/* <div className="mt-[50px] md:text-left sm:text-left md:w-auto md:items-center sm:items-end  sm:px-5 items-center">
                    <span className="font-bold text-[20px] text-[#162C58] dark:text-[#ebf4f1] tracking-[-3px]">푸리푸리</span>
                    <span className='text-[20px] text-[#162C58] dark:text-[#ebf4f1]'>는</span>
                    <p className='text-[20px] text-[#162C58] dark:text-[#ebf4f1] tracking-[-1px]'>사지 않고 입양하는 문화를 만듭니다.</p>
                  </div> */}

                  {/* <div className="mt-[50px] md:text-left sm:text-left md:w-auto md:items-start sm:items-end  sm:px-5 items-center ">
                    <p className='text-[#162C58] dark:text-[#ebf4f1] text-[20px] tracking-[-1px]'>잊혀져가는 유기동물들을 세상에 알리고</p>
                    <p className='text-[#162C58] dark:text-[#ebf4f1] text-[20px] tracking-[-1px]'>소중한 가족을 찾아주는 플랫폼입니다.</p>
                  </div> */}
                  </div>
                  <div className="flex items-center w-auto md:flex-col md:px-5 sm:flex-col sm:text-center">
                      <div className="w-1/2 sm:w-auto">
                          <div className="mt-[60px]  text-[#162C58] dark:text-[#ebf4f1]">
                            <span className=" text-[20px] font-bold tracking-[-3px]">푸리푸리</span>
                            <span className='tracking-[-3px] text-[20px]'>는</span>
                            <p className='text-[20px] tracking-[-1px]'>사지 않고 입양하는 문화를 만듭니다.</p>
                          </div>
                          <div className="mt-[60px]  text-[#162C58] dark:text-[#ebf4f1]  md:text-right">
                            <p className='text-[#162C58] dark:text-[#ebf4f1] text-[20px] tracking-[-1px]'>잊혀져가는 유기동물들을 세상에 알리고</p>
                            <p className='text-[#162C58] dark:text-[#ebf4f1] text-[20px] tracking-[-1px]'>소중한 가족을 찾아주는 플랫폼입니다.</p>
                          </div>
                      </div>
                  </div>

                  <div className="flex items-center md:flex-col md:px-5 sm:flex-col  ">
                      <div className="w-1/2 sm:w-auto">
                          <div className="mt-[60px] text-right md:text-left sm:text-center  sm:w-auto text-[#162C58] dark:text-[#ebf4f1]">
                            <span className=" text-[20px] font-bold tracking-[-3px] ">푸리푸리</span>
                            <span className='tracking-[-3px] text-[20px]'>는</span>
                            <p className='text-[20px] tracking-[-1px]'>버려진 동물들의 새로운 시작을 도와줄 뿐만 아니라</p>
                            <p className='text-[20px] tracking-[-1px]'>더 나은 세상을 위해 함께 노력하는 공동체의 일원입니다.</p>
                          </div>
                          <div className="mt-[60px] text-right text-[#162C58] dark:text-[#ebf4f1]  max-md:text-left sm:text-center">
                            <span className="font-bold text-[20px] tracking-[-1px] ">함께해주세요.</span>
                            <p className='text-[20px] tracking-[-1px] '>당신의 포옹이, </p>
                            <p className='text-[20px] tracking-[-1px] '>그 작은 생명에게 큰 희망을 가져다줄 것입니다.</p>
                          </div>
                      </div>
                      <div className="mt-[20px] ">
                          <img src="./Images/intro.png" alt="intro" />
                      </div>
                  </div>
                </div>
          </div>
      </div>
    </>
  )
}

export default Intro