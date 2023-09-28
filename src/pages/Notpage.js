import React from 'react'
import { useNavigate } from 'react-router-dom'


function Notpage() {
    const navigate = useNavigate()
    // const [countDown, setCountDown] = useState(5)
    // useEffect(()=>{
    //     if(countDown > 0){
    //         const timer = setTimeout(()=>{
    //             setCountDown(countDown-1)
    //         }, 1000)
    //         return ()=>clearTimeout(timer)
    //     }else{
    //         navigate('/')
    //     }
    // }, [countDown,navigate])

  return (
    <div className='fixed w-full h-full bg-[#DAC0A3] left-0 top-0 z-50 flex justify-center items-center px-[2%] box-border   '>
        <div className='leading-[1.4] p-10 w-full text-center'>
            <h3 className='text-[165px] font-bold mb-[50px] text-white -rotate-[25deg] italic'>404</h3>
            <p className='mb-5 text-10 font-bold text-white'>페이지를 찾을 수 없습니다.</p>
            <p className='mb-5 text-10 font-bold'>주소를 다시 한번 확인해주세요.</p>
            {/* <p><span>{countDown}</span>초 후에 이동됩니다.</p> */}
            <button onClick={()=>{navigate('/')}} className='bg-white border-solid border-[1px] border-[#ddd] py-[10px] px-[30px] rounded-[50px] cursor-pointer'>메인으로 가기</button>
        </div>
    </div>
  )
}

export default Notpage