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
      <div className='fixed w-full h-full bg-[#86bcd5] left-0 top-0 z-50 flex justify-center items-center px-[2%] box-border'>
          <div className='leading-[1.4] p-10 w-full text-center'>
              <h3 className='pr-[50px] lg:text-[165px] md:text-[165px] text-[140px] font-bold mb-[40px] text-white -rotate-[18deg] [text-shadow:_5px_15px_0_rgb(0_0_0_/_40%)] italic'>404</h3>
              <p className='mb-5 font-bold lg:text-[30px] md:text-[30px] text-[25px]'>{messages.notpage1}</p>
              <p className='mb-5 font-bold text-xl'>{messages.notpage2}</p>
              {
                language === 'en' ?
                <p className='text-xl lg:mb-[3%] md:mb-[5%] mb-[10%]'>Will be redirected in <span className='text-red-600 text-[22px] font-bold'>{countDown}</span> seconds.</p>
                :
                <p className='text-xl lg:mb-[3%] md:mb-[5%] mb-[10%]'><span className='text-red-600 text-[22px] font-bold'>{countDown}</span>초 후에 이동됩니다.</p>
              }
              <div className='mx-auto bg-[#1e4557]  lg:py-[25px] md:py-[25px] py-[20px] lg:w-[230px] md:w-[210px] w-[170px] rounded-[50px] cursor-pointer text-white lg:text-xl'>
                <FontAwesomeIcon icon={faHome} className='pr-2' />
                <button onClick={()=>{navigate('/')}} className=''>{messages.notpage3}</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default Notpage