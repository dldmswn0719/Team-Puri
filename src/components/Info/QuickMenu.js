import React from 'react'
import { useNavigate } from 'react-router-dom'
import { faAngleUp, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className="fixed z-10 right-[3%] bottom-[5%] opacity-80">
            <div className="shadow-lg text-white flex flex-col text-center rounded-2xl border-2
            border-[#86bcd5] bg-[#86bcd5] dark:bg-[#272929] dark:border-[#dadbdb]">
                <button className='py-2.5 px-5 md:px-3 sm:px-3 fold:px-1 border-b-2' onClick={MoveToTop}>
                  <FontAwesomeIcon icon={faAngleUp} size='xl' color='white'/>
                </button>
                <button className='py-2.5 px-5 md:px-3 sm:px-3 fold:px-1 border-b-2' onClick={MoveToDown}>
                  <FontAwesomeIcon icon={faAngleDown} size='xl' color='white'/>
                </button>
                <button className='py-2.5 px-5 md:px-3 sm:px-3 fold:px-1' onClick={() => navigate(-1)}>
                  <FontAwesomeIcon icon={faBackward} size='xl' color='white'/>
                </button>
            </div>
        </div>
      </>
  )
}

export default QuickMenu