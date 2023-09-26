import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Modal({error, onClose}) {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex justify-center items-center'>
            <div className='basis-[360px] bg-white pt-14 px-5 pb-10 rounded-lg flex justify-center flex-wrap'>
                <FontAwesomeIcon icon={faTriangleExclamation} className='basis-full text-7xl text-red-500' />
                <p className='text-base font-bold my-6 mx-0'>{error}</p>
                <button onClick={onClose} className='w-full p-[10px] rounded-md bg-[#007bff] border-none text-white cursor-pointer hover:bg-blue-800'>확인</button>
            </div>
        </div>
    )
}

export default Modal