import React from 'react'
import { useLocation } from 'react-router-dom'

function TellButton() {
    
    const location = useLocation();
    const detaildata = location.state.e;
    const {careTel, officetel} = detaildata
    const careTell = () => {
        window.location.href = `tel:${careTel}`
    }
    const officeTell = () => {
        window.location.href = `tel:${officetel}`
    }

    return (
        <>
            <div className="flex flex-col ">
                <p className='lg:hidden mt-5  text-[#999] md:text-sm sm:text-sm fold:text-sm dark:text-[#ebf4f1]  '>전화 문의는 평일 <span className='md:text-sm sm:text-sm fold:text-sm font-bold text-black dark:text-[#ebf4f1] '>오전 9시</span>부터 <span className='md:text-sm sm:text-sm fold:text-sm font-bold text-black dark:text-[#ebf4f1] '>오후 6시</span>까지 입니다.</p>
                <p className='lg:hidden text-[#999] md:text-sm sm:text-sm fold:text-sm dark:text-[#ebf4f1] '>{`(공휴일 제외)`}</p>
                <button title className='font-bold max-w-full lg:hidden h-12 border-2  bg-[#86bcd5] border-[#86bcd5] text-white dark:bg-[#272929]  dark:text-[#ebf4f1]  dark:border-[#dadbdb] rounded-[20px] mt-3' onClick={careTell}><p >보호센터 Tel : {careTel}</p></button>
                <button title className='font-bold max-w-full lg:hidden h-12 border-2 bg-[#86bcd5] border-[#86bcd5] text-white dark:bg-[#272929]  dark:text-[#ebf4f1]  dark:border-[#dadbdb] rounded-[20px] mt-3 'onClick={officeTell}><p>담당부서 Tel : {officetel}</p></button>
            </div>
        </>
    )
}

export default TellButton