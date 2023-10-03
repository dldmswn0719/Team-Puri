import React from 'react'
import { NavLink } from 'react-router-dom'

function Content5Donate() {
    return (
        <div className='content5bg lg:h-[800px] lg:mt-0 h-64 mt-28'>
            <div className='m-auto text-white
            p-10
            md:w-[768px]
            lg:w-[1200px] lg:pt-36 lg:text-right'>
                <p className='lg:text-5xl tracking-tight text-2xl'><span className='font-bold'>후원</span>으로 함께 만드는 <span className='font-bold'>변화</span></p>
                <p className='lg:text-2xl lg:py-[73px] tracking-tight text-lg py-5'>구조와 입양, 정책연구와 법제정,<br />생명권 교육과 캠페인으로<br />우리사회의 동물권을 확장합니다.</p>
                <button className='lg:w-[200px] lg:h-20 lg:text-2xl
                w-32 h-10 text-xl
                bg-[#E75A56] rounded-full duration-500 font-bold hover:bg-[#db3b36]'><NavLink to='/supportpay' className='text-white'>후원하기</NavLink></button>
            </div>
        </div>
    )
}

export default Content5Donate