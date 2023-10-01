import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function ScrollUpDown() {




    const [position, setPosition] = useState(0);
    console.log(position)


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
        
        if(position >= 100){
            // 클릭시 최상단으로 이동
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }else{
            // 클릭시 최하단으로 이동
             window.scrollTo({ 
                top: document.body.scrollHeight, 
                behavior: "smooth" 
            });
        }
    

    }  

  return (
    <>
        <div className='fixed rounded-full cursor-pointer min-w-[50px] min-h-[50px] sm:w-[40px] sm:h-[40px] leading-10 text-center  block py-1 px-1.5 lg:mx-3 border-1 border-[#DAC0A3] dark:border-1 dark:border-[#dadbdb]  text-black bg-[#dac0a3] dark:bg-[#404343] dark:text-[#ebf4f1] right-2 bottom-[30px] z-10' onScroll={ScrollUpDown} onClick={click}>
        {
            position<=100 ? <FontAwesomeIcon icon={faArrowDown}/> : <FontAwesomeIcon icon={faArrowUp}/>
        }
    
    
    
    </div>
    </>

    
  )
}

export default ScrollUpDown