import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

function Review() {
    return (
        <>
            <div className="w-[1200px] my-0 mx-auto review">
                <div className="mt-[97px] text-xl">
                    <div className="flex leading-10">
                        <p>상품후기</p>
                        <p className="text-[#DAC0A3]">(0)</p>
                    </div>
                    <p>상품을 구매하신 분들이 작성한 리뷰입니다.</p>
                    <div className="w-[170px] h-[55px] bg-[#DAC0A3] mt-[25px] cursor-pointer">
                        <NavLink to='/review_input'><p className="text-white leading-[55px] text-center">상품후기 작성</p></NavLink>
                    </div>
                    <div className="w-[1200px] h-[550px] border-t border-[#EADBC8] mt-[50px] text-center">
                        <FontAwesomeIcon icon={faCommentDots} className='mt-[230px] mx-auto' color='#DAC0A3' size='2x'/>
                        <p className="text-[#EADBC8] pt-[35px]">등록된 상품후기가 없습니다.</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Review