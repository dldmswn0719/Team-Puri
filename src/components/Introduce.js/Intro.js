import React from 'react'
import { useSelector } from 'react-redux'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function Intro() {
  const language = useSelector(state => state.language);
  const messages = language === 'en' ? enMessages : krMessages;

  return (
    <>
      <div className=" flex justify-center items-center w-full h-full  dark:bg-[#272929] overflow-x-hidden">
        <div className="w-[1200px] min-h-screen px-3">
          <div className="mt-[50px] ">
            <p className='text-center text-[28px] lg:text-[48px] md:text-[34px] fold:text-[22px] text-[#162C58] dark:text-[#ebf4f1] animate__animated animate__backInLeft sm:px-3'>
              {messages.introduce.desc1}
              <span className='font-bold tracking-[-2px] fold:tracking-[-2px] dark:text-[#ebf4f1'>
                {messages.introduce.desc2}
              </span>
              {messages.introduce.desc3}
            </p>
          </div>
          <div className="text-center">
            <p className='text-[#162C58] dark:text-[#ebf4f1] text-[17px] lg:text-[20px] md:text-[18px] fold:text-[16.5px] tracking-[-1px] animate__animated animate__backInRight animate__delay-1s	1s sm:px-3'>
              {messages.introduce.desc4}
            </p>
          </div>
          <div>
            <div className="flex items-center w-auto md:flex-col md:px-5 sm:flex-col sm:text-center fold:flex-col fold:text-center">
              <div className="w-1/2 sm:w-auto">
                <div className="mt-[60px]  text-[#162C58] dark:text-[#ebf4f1]">
                  <span className=" text-[20px] fold:text-[17px] font-bold tracking-[-2px]">
                    {messages.introduce.desc5}
                  </span>
                  <span className='tracking-[-2px] text-[20px] fold:text-[7px]'>
                    {messages.introduce.desc6}
                  </span>
                  <p className='text-[20px] fold:text-[17px] tracking-[-1px]'>
                    {messages.introduce.desc7}
                  </p>
                </div>
                <div className="mt-[60px]  text-[#162C58] dark:text-[#ebf4f1] md:text-right">
                  <p className='text-[#162C58] dark:text-[#ebf4f1] text-[20px] fold:text-[17px] tracking-[-1px]'>
                    {messages.introduce.desc8}
                  </p>
                  <p className='text-[#162C58] dark:text-[#ebf4f1] text-[20px] fold:text-[17px] tracking-[-1px]'>
                    {messages.introduce.desc9}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center md:flex-col md:px-5 sm:flex-col fold:flex-col">
              <div className="w-1/2 sm:w-auto">
                <div className="mt-[60px] text-right md:text-left sm:text-center fold:text-center sm:w-auto text-[#162C58] dark:text-[#ebf4f1]">
                  <span className=" text-[20px]  fold:text-[17px] font-bold tracking-[-2px]">
                    {messages.introduce.desc10}
                  </span>
                  <span className='tracking-[-3px] text-[20px]'>
                    {messages.introduce.desc11}
                  </span>
                  <p className='text-[20px] fold:text-[17px] tracking-[-1px]'>
                    {messages.introduce.desc12}
                  </p>
                  <p className='text-[20px] fold:text-[17px] tracking-[-1px]'>
                    {messages.introduce.desc13}
                  </p>
                </div>
                <div className="mt-[60px] text-right text-[#162C58] dark:text-[#ebf4f1] max-md:text-left sm:text-center fold:text-center">
                  <span className="font-bold text-[20px] fold:text-[17px] tracking-[-1px]">
                    {messages.introduce.desc14}
                  </span>
                  <p className='text-[20px]  fold:text-[17px] tracking-[-1px]'>
                    {messages.introduce.desc15}
                  </p>
                  <p className='text-[20px]  fold:text-[17px] tracking-[-1px]'>
                    {messages.introduce.desc16}
                  </p>
                </div>
              </div>
              <div className="mt-[20px] ">
                <img src="./Images/intro.png" alt="intro" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro