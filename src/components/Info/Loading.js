import React from 'react'

function Loading() {
  return (
    <div className="w-full h-full fixed left-2/4 top-2/4 bg-white -translate-x-2/4 -translate-y-2/4 z-50">
    <div className="max-w-[1200px] h-[100vh]  flex justify-center mx-auto items-center flex-col">
  <img src="./../Images/Spinner-1s-200px.gif" alt="loading" />
  <p className='text-lg text-center'>로딩중입니다.</p>
  </div>
  </div>

  )
}

export default Loading