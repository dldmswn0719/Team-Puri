import React from 'react'
import { useNavigate } from 'react-router-dom'

function QuickMenu() {
    const MoveToTop = () =>{
        window.scrollTo({
          top:0,behavior:'smooth'
        })
      } 
      const MoveToDown = () =>{
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior : "smooth"
        })
      } 
      const navigate = useNavigate();
  return (
    <>
<div className="fixed z-10  right-2 md:right-4 lg:right-4 bottom-3 opacity-95 ">
    <div className="shadow-lg text-white flex flex-col text-center rounded-lg border-2
     border-[#86bcd5] bg-[#86bcd5]">
        <button className='py-2.5 px-5 text-xs border-b-2'  onClick={() => navigate(-1)}>뒤로</button>
        <button className='py-2.5 px-5 text-xs  border-b-2'  onClick={() => navigate(1)}>앞으로</button>
        <button className='py-2.5 px-5 text-xs  border-b-2' onClick={MoveToTop}>위로</button>
        <button className='py-2.5 px-5 text-xs' onClick={MoveToDown}>아래로</button>
    </div>
</div>
</>
  )
}

export default QuickMenu