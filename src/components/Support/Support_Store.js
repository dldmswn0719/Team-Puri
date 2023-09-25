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
        <div className="w-[1200px] pb-[70px] my-0 mx-auto max-lg:w-10/12 max-sm:w-3/4">
            <div className="text-center mt-[30px] text-3xl font-bold max-lg:text-[25px]">스토어</div>
            <div className="flex justify-center items-center w-[960px] h-[75px] bg-[#f8f0e5] mt-[30px] mb-[50px] mx-auto max-lg:w-full max-sm:w-full max-lg:h-[60px] max-sm:h-[60px]">
                <p className="text-[25px] max-lg:text-xl max-sm:text-[18px]">스토어 수익금은 유기동물 후원 및 유기동물 입양 활동으로 사용 됩니다.</p>
            </div>
            <div className="w-full ">
                <div className="w-full flex flex-wrap justify-between gap-y-[30px]">
                    <div className="w-[270px] max-sm:w-[49%] max-lg:w-[32%]">
                        <NavLink to='/store/2'>
                            <img src="./../../Images/Support/store1.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl max-sm:text-[18px] max-lg:text-xl">믹스패밀리 에코백</p>
                                <span className='text-[18px] font-bold max-sm:text-base'>15,000</span>
                                <span className='text-[16px] max-sm:text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px] max-sm:w-[49%] max-lg:w-[32%]">
                        <NavLink to='/store/3'>
                            <img src="./../../Images/Support/store9.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl max-sm:text-[18px] max-lg:text-xl">믹스패밀리 페이스 그립톡</p>
                                <span className='text-[18px] font-bold max-sm:text-base'>10,000</span>
                                <span className='text-[16px] max-sm:text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px] max-sm:w-[49%] max-lg:w-[32%]">
                        <NavLink to='/store/4'>
                            <img src="./../../Images/Support/store3.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl max-sm:text-[18px] max-lg:text-xl">무지개다리 뱃지</p>
                                <span className='text-[18px] font-bold max-sm:text-base'>7,000</span>
                                <span className='text-[16px] max-sm:text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px] max-sm:w-[49%] max-lg:w-[32%]">
                        <NavLink to='/store/1'>
                            <img src="./../../Images/Support/store4.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl max-sm:text-[18px] max-lg:text-xl">믹스패밀리 리유저블 컵</p>
                                <span className='text-[18px] font-bold max-sm:text-base'>18,000</span>
                                <span className='text-[16px] max-sm:text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px] max-sm:w-[49%] max-lg:w-[32%]">
                        <NavLink to='/store/5'>
                            <img src="./../../Images/Support/store5.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl max-sm:text-[18px] max-lg:text-xl">아크릴 키링</p>
                                <span className='text-[18px] font-bold max-sm:text-base'>9,000</span>
                                <span className='text-[16px] max-sm:text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px] max-sm:w-[49%] max-lg:w-[32%]">
                        <NavLink to='/store/7'>
                            <img src="./../../Images/Support/store6.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl max-sm:text-[18px] max-lg:text-xl">슬로건 마스킹 테이프</p>
                                <span className='text-[18px] font-bold max-sm:text-base'>5,000</span>
                                <span className='text-[16px] max-sm:text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div> 
                    <div className="w-[270px] max-sm:w-[49%] max-lg:w-[32%]">
                        <NavLink to='/store/6'>
                            <img src="./../../Images/Support/store7.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl max-sm:text-[18px] max-lg:text-xl">베이직 머그컵</p>
                                <span className='text-[18px] font-bold max-sm:text-base'>15,000</span>
                                <span className='text-[16px] max-sm:text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px] max-sm:w-[49%] max-lg:w-[32%]">
                        <NavLink to='/store/8'>
                            <img src="./../../Images/Support/store8.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl max-sm:text-[18px] max-lg:text-xl">믹스패밀리 어답미 인형</p>
                                <span className='text-[18px] font-bold max-sm:text-base'>35,000</span>
                                <span className='text-[16px] max-sm:text-[15px]'>원</span>
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
