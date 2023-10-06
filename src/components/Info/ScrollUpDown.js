import React from 'react'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useState } from 'react';

function ScrollUpDown() {

  const [position, setPosition] = useState(0);
  useEffect(() => {
    const scroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };



  }, []);

  function click() {
    if (position >= 80) {
      // 클릭시 최상단으로 이동
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // 클릭시 최하단으로 이동
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }
  }

  return (
    <>
      <div className='fixed rounded-full cursor-pointer min-w-[50px] min-h-[50px] sm:w-[40px] sm:h-[40px] leading-10 text-center  block py-1 px-1.5 lg:mx-3 border-1  text-white border-[#86bcd5] dark:border-1 dark:border-[#dadbdb] bg-[#86bcd5] dark:bg-[#404343] dark:text-[#ebf4f1] lg:right-6 bottom-6 md:right-2 md:bottom-[30px] sm:right-2 sm:bottom-[100px] opacity-70 z-10' onScroll={ScrollUpDown} onClick={click}>
        {
          position <= 80 ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowUp} />
        }
      </div>
    </>


  )
}

export default ScrollUpDown