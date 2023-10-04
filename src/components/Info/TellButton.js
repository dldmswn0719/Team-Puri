import React from 'react'
import { useLocation } from 'react-router-dom'

function TellButton({ telNumber }) {
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
    // const tell2 = () => {
    //     window.open(`tel:${telNumber}`);
    //   }

    return (
        <>
        <div className="flex flex-col">
            <p className='lg:hidden mt-10  text-[#999] '>전화 문의는 평일 <span>오전 9시</span>부터 <span>오후 6시까지</span>입니다. </p>
            <p className='lg:hidden text-[#999] '>{`(공휴일 제외)`}</p>
            <a href="tel:053-572-1005">전화번호</a>
            <a href={`tel:${telNumber}`}>전화번호</a>
            <button title className='font-bold max-w-full lg:hidden h-12 border-2 bg-[#DAC0A3] border-[#DAC0A3] dark:bg-[#272929]  dark:text-[#ebf4f1]  dark:border-[#dadbdb] rounded-[20px] mt-3' onClick={careTell}><p>보호센터 Tel : {careTel}</p></button>
            <button title className='font-bold max-w-full lg:hidden h-12 border-2 bg-[#DAC0A3] border-[#DAC0A3] dark:bg-[#272929]  dark:text-[#ebf4f1]  dark:border-[#dadbdb] rounded-[20px] mt-3 'onClick={officeTell}><p>담당부서 Tel : {officetel}</p></button>
            </div>
        </>
    )
}

export default TellButton