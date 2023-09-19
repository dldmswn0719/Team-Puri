import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';


function Qa() {
    return (
        <>
            <div className="w-[1200px] my-0 mx-auto qa">
                <div className="mt-[97px] text-xl">
                    <div className="flex leading-10">
                        <p>Q &amp; A</p>
                        <p className="text-[#DAC0A3]">(0)</p>
                    </div>
                    <p>구매하시려는 상품에 대해 궁금한 점이 있으면 문의주세요.</p>
                    <div className="w-[170px] h-[55px] bg-[#DAC0A3] mt-[25px] cursor-pointer mr-[25px]">
                        <NavLink to='/qa_input'><p className="text-white leading-[55px] text-center">상품문의</p></NavLink>
                    </div>
                    <div className="w-[1200px] h-[550px] border-t border-[#EADBC8] mt-[50px] text-center">
                        <FontAwesomeIcon icon={faCircleQuestion} className='mt-[230px] mx-auto' color='#DAC0A3' size='2x'/>
                        <p className="text-[#EADBC8] pt-[35px]">등록된 문의가 없습니다.</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Qa