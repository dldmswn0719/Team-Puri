import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';



function Notpage() {
    const navigate = useNavigate()
    const [countDown, setCountDown] = useState(5)
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;
    useEffect(()=>{
        if(countDown > 0){
            const timer = setTimeout(()=>{
                setCountDown(countDown-1)
            }, 1000)
            return ()=>clearTimeout(timer)
        }else{
            navigate('/')
        }
    }, [countDown,navigate])

  return (
    <>
      <div className='flex flex-col justify-center h-screen bg-[#86bcd5] mx-auto dark:bg-[#404343]'>
          <div className='leading-[1.4] w-full text-center flex flex-col justify-between'>
              <h3 className='sm:w-[93%] pr-[50px] sm:pr-0 lg:text-[165px] md:text-[165px] text-[100px] text- font-bold text-white -rotate-[18deg] [text-shadow:_5px_15px_0_rgb(0_0_0_/_40%)] italic'>404</h3>
              <p className='mb-5  mt-[40px] font-bold lg:text-[30px] md:text-[30px] text-[23px] dark:text-white'>{messages.notpage1}</p>
              <p className='mb-5 font-bold lg:text-xl md:text-xl text-[19px] dark:text-white'>{messages.notpage2}</p>
              {
                language === 'en' ?
                <p className='text-xl lg:mb-[3%] md:mb-[5%] mb-[10%]'>Will be redirected in <span className='text-red-600 text-[22px] font-bold'>{countDown}</span> seconds.</p>
                :
                <p className='text-xl lg:mb-[3%] md:mb-[5%] mb-[10%] dark:text-white'><span className='text-red-600 text-[22px] font-bold'>{countDown}</span>초 후에 이동됩니다.</p>
              }
              <div className='mx-auto bg-[#E75A56] hover:bg-[#b3312c] dark:bg-[#272929] duration-500 lg:py-[20px] md:py-[20px] py-[16px] lg:w-[200px] md:w-[180px] w-[150px] rounded-[50px] cursor-pointer text-white lg:text-xl'>
                <FontAwesomeIcon icon={faHome} className='pr-2' />
                <button onClick={()=>{navigate('/')}} className=''>{messages.notpage3}</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default Notpage