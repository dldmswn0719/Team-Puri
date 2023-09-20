import React from 'react'
import { NavLink } from 'react-router-dom'

function Support_Store() {
  return (
    <>  
        <div className="support w-full h-[650px]">
            <div className="w-[1200px] pt-[150px] pl-[200px]" >
                <div className="mb-[70px]">
                    <p className="text-[40px] text-[#F8F0E5]">여러분의 작은 손길로</p>
                    <p className="text-[40px] text-[#F8F0E5]">소중한 한 생명을</p>
                    <p className="text-[40px] text-[#F8F0E5] ">살릴 수 있습니다.</p>
                </div>
                <div className="">
                    <NavLink to="/supportpay" className="w-[190px] h-[75px] bg-[#DAC0A3] rounded-[50px] flex justify-center items-center text-white text-xl">후원하러 가기</NavLink>
                </div>
            </div>
        </div>
        <div className="w-[1200px] h-[900px] my-0 mx-auto">
            <div className="text-center mt-[30px] text-3xl font-bold">스토어</div>
            <div className="flex justify-center items-center w-[960px] h-[75px] bg-[#f8f0e5] mt-[30px] mb-[60px] mx-auto">
                <p className="text-[25px]">스토어 수익금은 유기동물 후원 및 유기동물 입양 활동으로 사용 됩니다.</p>
            </div>
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-wrap justify-between">
                    <div className="w-[270px]">
                        <NavLink to='/store/2'>
                            <img src="./../../Images/Support/store1.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 에코백</p>
                                <span className='text-[17px] font-bold'>15,000</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/store/3'>
                            <img src="./../../Images/Support/store9.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 페이스 그립톡</p>
                                <span className='text-[17px] font-bold'>10,000</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/store/4'>
                            <img src="./../../Images/Support/store3.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">무지개다리 뱃지</p>
                                <span className='text-[17px] font-bold'>7,000</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/store/1'>
                            <img src="./../../Images/Support/store4.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 리유저블 컵</p>
                                <span className='text-[17px] font-bold'>18,000</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/store/5'>
                            <img src="./../../Images/Support/store5.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">아크릴 키링</p>
                                <span className='text-[17px] font-bold'>9,000</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/store/7'>
                            <img src="./../../Images/Support/store6.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">슬로건 마스킹 테이프</p>
                                <span className='text-[17px] font-bold'>5,000</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/store/6'>
                            <img src="./../../Images/Support/store7.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">베이직 머그컵</p>
                                <span className='text-[17px] font-bold'>15,000</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/store/8'>
                            <img src="./../../Images/Support/store8.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 어답미 인형</p>
                                <span className='text-[17px] font-bold'>35,000</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Support_Store