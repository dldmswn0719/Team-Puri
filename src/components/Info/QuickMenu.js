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
<div className="fixed z-10  right-2 md:right-4 lg:right-4 bottom-3 opacity-80 ">
    <div className="shadow-lg text-white flex flex-col text-center rounded-lg border-2
     border-[#86bcd5] bg-[#86bcd5] dark:bg-[#272929] dark:border-[#dadbdb]">
        <button className='py-2.5 px-5 md:px-3 sm:px-1 fold:px-1 text-xs border-b-2'  onClick={() => navigate(-1)}>뒤로</button>
        <button className='py-2.5 px-5 md:px-3 sm:px-1 fold:px-1 text-xs  border-b-2'  onClick={() => navigate(1)}>앞으로</button>
        <button className='py-2.5 px-5 md:px-3 sm:px-1 fold:px-1 text-xs  border-b-2' onClick={MoveToTop}>위로</button>
        <button className='py-2.5 px-5 md:px-3 sm:px-1 fold:px-1 text-xs' onClick={MoveToDown}>아래로</button>
    </div>
</div>
</>
  )
}

export default QuickMenu