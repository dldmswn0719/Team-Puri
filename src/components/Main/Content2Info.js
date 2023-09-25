import React from 'react'

function Content2Info() {
    return (
        <>
            <div className='w-[1200px] m-auto flex justify-between items-center pt-[140px] pb-[140px]'>
                <div className='text-center tracking-tight leading-tight'>
                    <p className='text-[40px] font-bold'>삶에 대한 가치를 느낄 수 있는,</p>
                    <p className='text-[40px] font-bold'>휴식과 즐거움이 만나는 곳</p>
                    <p className='text-[24px] mt-[20px]'>동물권행동 푸리푸리는<br />100% 시민의 후원으로 운영되는<br />비영리단체로서 투명하고 정직하게 활동합니다.</p>
                </div>
                <div className='relative'>
                    <img src="./../../Images/Main/deco_needle.png" alt="1" className='duration-500 absolute w-[25%] left-[-100px] z-[-1]' />
                    <img src="./../../Images/Main/deco_needle_leaf.png" alt="2" className='duration-500 absolute w-[10%] left-[-170px] top-[50px]' />
                    <img src="./../../Images/Main/deco_flower2.png" alt="3" className='duration-500 absolute w-[15%] right-[-150px] top-[50px]' />
                    <img src="./../../Images/Main/deco_needle2.png" alt="4" className='duration-500 absolute w-[30%] right-[-140px] top-[150px] z-[-1]' />
                    <img src="./../../Images/Main/content1.png" alt="content1" className='rounded-3xl w-[500px] h-[350px]' />
                </div>
                <div className='absolute left-0 bottom-[-700px]'>
                    <img src="./../../Images/Main/bg-.png" alt="bg" />
                </div>
            </div>
        </>
    )
}

export default Content2Info