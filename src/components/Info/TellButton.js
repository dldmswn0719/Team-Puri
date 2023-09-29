import React from 'react'
import { useLocation } from 'react-router-dom'

function TellButton({ telNumber }) {
    const location = useLocation();
    const detaildata = location.state.e;
    const {careTel, officetel } = detaildata

    const tell = () => {
        window.location.href = `tel:${telNumber}`
    }
    return (

        <>
            <p className='lg:hidden mt-10'>전화 문의는 평일 <span>오전 9시</span>부터 <span>오후 6시까지</span>입니다. {`(공휴일 제외)`}</p>
            <button title className='font-bold max-w-full lg:hidden h-12 border-2 bg-[#DAC0A3] border-[#DAC0A3] dark:bg-[#272929]  dark:text-[#ebf4f1]  dark:border-[#dadbdb] rounded-[20px] mt-1' onClick={tell}><p>보호센터 Tel : {careTel}</p></button>
            <button title className='font-bold max-w-full lg:hidden h-12 border-2 bg-[#DAC0A3] border-[#DAC0A3] dark:bg-[#272929]  dark:text-[#ebf4f1]  dark:border-[#dadbdb] rounded-[20px] mt-1 'onClick={tell}>  <p>담당부서 Tel : {officetel}</p></button>
        </>
    )
}

export default TellButton