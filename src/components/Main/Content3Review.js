import React from 'react'

function Content3Review() {
    return (
        <div className='bg-[#F7F0E4] mt-[155px] pt-[128px] pb-[335px] relative' id='review'>
            <div className='w-[1200px] m-auto pb-[92px]'>
                <ul className='flex justify-between'>
                    <li>
                        <p className='text-5xl mb-[43px] tracking-tight'><span className='font-bold'>입양후기</span>를 만나보세요.</p>
                        <p className='text-2xl tracking-tight'>입양<span className='font-bold'>ON</span> 펫숍<span className='font-bold'>OFF</span></p>
                        <p className='text-2xl tracking-tight'>동물을 사고 팔지 않는 사회를 만드는 데에 동참해주세요.</p>
                    </li>
                    <li>
                        <button className='bg-[#E75A56] text-white w-[440px] h-[80px] rounded-full text-2xl font-bold cursor-pointer mt-[93px] duration-500 hover:bg-[#db3b36]'>더 많은 후기 만나러 가기</button>
                    </li>
                </ul>
            </div>
            <div className='w-[1200px] m-auto'>
                <img src="https://via.placeholder.com/1200x500" alt="1200x500" />
            </div>
        </div>
    )
}

export default Content3Review