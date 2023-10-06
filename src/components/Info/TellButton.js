import React from 'react'
import { useLocation } from 'react-router-dom'

function TellButton() {
    const location = useLocation();
    const detaildata = location.state.e;
    const {careTel, officetel} = detaildata
    console.log(`보호센터:${careTel} 담당부서:${officetel}`)
    const careTell = () => {
        window.location.href = `tel:${careTel}`
    }
    const officeTell = () => {
        window.location.href = `tel:${officetel}`
    }


    return (
        <>
            <div className="flex flex-col  text-white">
                <p className='lg:hidden mt-5  text-[#999] fold:text-sm '>전화 문의는 평일 <span className='fold:text-sm font-bold text-black'>오전 9시</span>부터 <span className='fold:text-sm font-bold text-black'>오후 6시</span>까지 입니다.</p>
                <p className='lg:hidden text-black fold:text-sm'>{`(공휴일 제외)`}</p>
                <button title className='font-bold max-w-full lg:hidden h-12 border-2  bg-[#86bcd5] border-[#86bcd5] dark:bg-[#272929]  dark:text-[#ebf4f1]  dark:border-[#dadbdb] rounded-[20px] mt-3' onClick={careTell}><p>보호센터 Tel : {careTel}</p></button>
                <button title className='font-bold max-w-full lg:hidden h-12 border-2 bg-[#86bcd5] border-[#86bcd5] dark:bg-[#272929]  dark:text-[#ebf4f1]  dark:border-[#dadbdb] rounded-[20px] mt-3 'onClick={officeTell}><p>담당부서 Tel : {officetel}</p></button>
            </div>
        </>
    )
}

export default TellButton