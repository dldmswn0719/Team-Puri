import React from 'react'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';
import { useSelector } from 'react-redux';

function Loading() {
  const language = useSelector(state => state.language);
  const messages = language === 'en' ? enMessages : krMessages;
  
  return (
    <div className="w-full h-full overflow-hidden fixed left-2/4 top-2/4 bg-white -translate-x-2/4 -translate-y-2/4 z-50  dark:bg-[#272929] dark:text-[#ebf4f1]">
      <div className="max-w-[1200px] h-[100vh]  flex justify-center mx-auto items-center flex-col">
        <img src="./../Images/Spinner-1s-200px.gif" alt="loading"/>
        <p className='text-lg text-center'>
          {messages.animal8}
        </p>
      </div>
    </div>
  )
}

export default Loading