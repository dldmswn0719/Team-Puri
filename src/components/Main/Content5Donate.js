import React from 'react'
import { NavLink } from 'react-router-dom'

function Content5Donate() {
    return (
        <div className='content5bg h-[800px]'>
            <div className='w-[1200px] m-auto text-white pt-36 text-right'>
                <p className='text-5xl tracking-tight'><span className='font-bold'>후원</span>으로 함께 만드는 <span className='font-bold'>변화</span></p>
                <p className='text-2xl py-[73px] tracking-tight'>구조와 입양, 정책연구와 법제정,<br />생명권 교육과 캠페인으로<br />우리사회의 동물권을 확장합니다.</p>
                <button className='w-[200px] h-20 bg-[#E75A56] text-2xl rounded-full duration-500 font-bold hover:bg-[#db3b36]'><NavLink to='/supportpay' className='text-white'>후원하기</NavLink></button>
            </div>
        </div>
    )
}

export default Content5Donate