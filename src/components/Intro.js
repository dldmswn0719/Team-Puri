import React from 'react'


function Intro() {
  return (
    <>
      <div className="w-full h-full">
      {/*  container*/}
          <div className="w-[1200px] h-[500px] bg-white mt-[100px] mb-auto mx-auto">
              <div className="text-center mt-[50px]">
                <p className='text-[48px] tracking-[-4px] text-[#162C58] animate__animated animate__backInLeft'>우리의
                  <span className='font-bold tracking-[-5px]'>작은 친구들을 위한 </span>특별한 보호소</p>
              </div>
              <div className="text-center">
                <p className='text-[#162C58] text-[20px]  tracking-[-2px] animate__animated animate__backInRight animate__delay-1s	1s'>애정 어린 소리로 유기동물을 지칭하는 이름으로, 보호와 관심을 나타냅니다.</p>
              </div>
              <div>
                  <div className="mt-[50px]">
                    <span className="font-bold text-[20px] text-[#162C58] tracking-[-3px]">푸리푸리</span>
                    <span className='text-[20px] text-[#162C58]'>는</span>
                    <p className='text-[20px] text-[#162C58] tracking-[-1px]'>사지 않고 입양하는 문화를 만듭니다.</p>
                  </div>
                  <div className="mt-[50px]">
                    <p className='text-[#162C58] text-[20px] tracking-[-1px]'>잊혀져가는 유기동물들을 세상에 알리고</p>
                    <p className='text-[#162C58] text-[20px] tracking-[-1px]'>소중한 가족을 찾아주는 플랫폼입니다.</p>
                  </div>
                  <div className="flex justify-around">
                      <div className="w-1/2">
                          <div className="mt-[60px] text-right text-[#162C58]">
                            <span className=" text-[20px] 
                            font-bold tracking-[-3px] ">푸리푸리</span>
                            <span className='tracking-[-3px] text-[20px]'>는</span>
                            <p className='text-[20px] tracking-[-1px]'>버려진 동물들의 새로운 시작을 도와줄 뿐만 아니라</p>
                            <p className='text-[20px] tracking-[-1px]'>더 나은 세상을 위해 함께 노력하는 공동체의 일원입니다.</p>
                          </div>
                          <div className="mt-[60px] text-right text-[#162C58]">
                            <span className="font-bold text-[20px] tracking-[-1px]">함께해주세요.</span>
                            <p className='text-[20px] tracking-[-1px] '>당신의 포옹이, </p>
                            <p className='text-[20px] tracking-[-1px] '>그 작은 생명에게 큰 희망을 가져다줄 것입니다.</p>
                          </div>
                      </div>
                      <div className="mt-[20px]">
                          <img src="./../images/intro.png" alt="intro" />
                      </div>
                  </div>
                </div>
          </div>
      </div>
    </>
  )
}

export default Intro