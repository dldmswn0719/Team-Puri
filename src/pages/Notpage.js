import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';
import { useSelector } from 'react-redux';



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
      <div className='fixed w-full h-full bg-[#EADBC8] left-0 top-0 z-50 flex justify-center items-center px-[2%] box-border'>
          <div className='leading-[1.4] p-10 w-full text-center'>
              <h3 className='text-[165px] font-bold mb-[40px] text-white -rotate-[18deg] [text-shadow:_5px_15px_0_rgb(0_0_0_/_40%)] italic'>404</h3>
              <p className='mb-5 text-10 font-bold text-[30px]'>{messages.notpage1}</p>
              <p className='mb-5 text-10 font-bold text-xl'>{messages.notpage2}</p>
              {
                language === 'en' ?
                <p className='text-xl mb-3'>Will be redirected in <span className='text-red-600 text-[22px] font-bold'>{countDown}</span> seconds.</p>
                :
                <p className='text-xl mb-3'><span className='text-red-600 text-[22px] font-bold'>{countDown}</span>초 후에 이동됩니다.</p>
              }
              <button onClick={()=>{navigate('/')}} className='bg-[#DAC0A3] border-solid border-[1px] border-[#ddd] py-[10px] px-[30px] rounded-[50px] cursor-pointer text-white'>{messages.notpage3}</button>
          </div>
      </div>
    </>
  )
}

export default Notpage