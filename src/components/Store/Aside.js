import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Aside() {

    const MoveToTop = () =>{
        window.scrollTo({
          top:0,behavior:'smooth'
        })
      } //aside버튼 위 화살표 누르면 위로 이동
    
      const MoveToDown = () =>{
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior : "smooth"
        })
      } //aside버튼 아래 화살표 누르면 아래로 이동

    return (
        <>
            <div className="fixed right-[10%] top-[40%] z-10"><img src="./../images/Store/aside_img.png" alt="aside이미지" />
                <div className="w-12 h-[164px] bg-[#EADBC8] relative ml-[18px] mt-[-5px] rounded-[10px]">
                  <FontAwesomeIcon icon={faAngleUp} size='2x' color='#DAC0A3' className='pl-[7px] pt-[30px] cursor-pointer' onClick={MoveToTop}/>
                </div>
                <FontAwesomeIcon icon={faAngleDown} size='2x' color='#DAC0A3' className='absolute left-[26px] bottom-[35px] cursor-pointer' onClick={MoveToDown}/>     
            </div>
        </>
    )
}

export default Aside