import React from 'react'
import { useSelector } from 'react-redux';

function Modal({error, onClose}) {
    
    const theme = useSelector(state => state.dark);

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex justify-center items-center dark:bg-black/80'>
            <div className='basis-[360px] bg-white pt-14 px-5 pb-10 rounded-lg flex justify-center flex-wrap dark:bg-[#272929]'>
                <div>
                    <img src={
                    theme === 'light' ? './../Images/Main/alertdog.png' : './../Images/Main/alertdogdark.png'
                } alt='alert' className='w-1/2 mx-auto' /></div>
                <p className='text-base font-bold my-6 mx-0 dark:text-[#ebf4f1]'>{error}</p>
                <button onClick={onClose} className='w-full p-[10px] rounded-md bg-[#60a7c8] border-none text-white cursor-pointer hover:bg-[#327290] dark:bg-[#404343]'>확인</button>
            </div>
        </div>
    )
}

export default Modal