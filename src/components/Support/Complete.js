import React from 'react'
import { NavLink } from 'react-router-dom'

function Complete() {
  return (
    <>
        <div className="w-[1200px] h-[800px] bg-[#f8f0e5] absolute mx-auto my-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="mb-[50px]">
                <li className="text-3xl text-center relative top-[170px] leading-10">
                    <p>결제가 완료되었습니다.</p>
                    <p>유기동물을 위한 소중한 후원에<br />진심으로 감사드립니다.</p>
                </li>
            </ul>
            <ul>
                <li className="text-3xl text-center relative top-[170px] leading-10"><p>유기동물을 위해 더욱 노력하는<br /><span className='text-[#dac0a3] text-[35px]'>푸리푸리</span>가 되겠습니다.</p></li>
            </ul>
            <NavLink to='/' className="w-[180px] h-[70px] bg-[#dac0a3] flex justify-center items-center text-white absolute bottom-[25%] left-1/2 -translate-x-1/2 -translate-y-[-25%]">메인화면으로 가기</NavLink>
        </div>
    </>
  )
}

export default Complete