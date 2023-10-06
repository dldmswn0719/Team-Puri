import React from 'react'
import { NavLink } from 'react-router-dom';

function Content4Grid() {
    return (
        <div className='md:w-[768px] lg:w-[1200px] m-auto
        pt-28
        lg:pt-[130px] lg:pb-[147px]'>
            <ul className='flex flex-wrap lg:gap-x-5 gap-y-10'>
                {
                    Array(8).fill().map((_, i) => {
                        return (
                            <li className='lg:w-[285px] w-52 m-auto
                            cursor-pointer hover:scale-105 duration-300'><NavLink><img src={`./../../Images/Main/list${i + 1}.png`} alt={i + 1} /></NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className='bg-[#E75A56] text-white font-bold cursor-pointer duration-500 hover:bg-[#db3b36] rounded-full w-60 h-10 mt-10
            md:w-80 md:h-16 md:text-xl md:mt-36
            lg:w-80 lg:h-20 lg:text-2xl lg:mt-20'><NavLink to='/info' className='text-white'>보호동물 더 보기</NavLink></button>
        </div>
    );
}

export default Content4Grid