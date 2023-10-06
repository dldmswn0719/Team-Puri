import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Content4Grid() {
    const arr = [
        {
            "type" : "품종 : 개",
            "gender" : "성별 : 수컷",
            "age" : "2019년생 추정"
        },
        {
            "type" : "품종 : 개",
            "gender" : "성별 : 암컷",
            "age" : "2019년생 추정"
        },
        {
            "type" : "품종 : 개",
            "gender" : "성별 : 수컷",
            "age" : "2019년생 추정"
        },
        {
            "type" : "품종 : 개",
            "gender" : "성별 : 수컷",
            "age" : "2019년생 추정"
        },
        {
            "type" : "품종 : 개",
            "gender" : "성별 : 수컷",
            "age" : "2019년생 추정"
        },
        {
            "type" : "품종 : 개",
            "gender" : "성별 : 수컷",
            "age" : "2019년생 추정"
        },
        {
            "type" : "품종 : 개",
            "gender" : "성별 : 수컷",
            "age" : "2019년생 추정"
        },
        {
            "type" : "품종 : 개",
            "gender" : "성별 : 수컷",
            "age" : "2019년생 추정"
        }
    ];
    return (
        <div className='md:w-[768px] lg:w-[1200px] m-auto
        pt-28
        lg:pt-[130px] lg:pb-[147px]'>
            <ul className='flex flex-wrap lg:gap-x-5 gap-y-10'>
                {
                    Array(8).fill().map((_, i) => {
                        return (
                            <li key={i} className={`lg:w-[285px] w-52 m-auto
                            cursor-pointer duration-300 relative
                            hover:scale-105 hover:after:w-full hover:after:h-full hover:after:bg-black hover:after:bg-opacity-30 hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:content-["개"] hover:after:text-white hover:after:text-center hover:after:items-center hover:after:text-3xl`}><Link to='/infodetail/444450202101068' /><img src={`./../../Images/Main/list${i + 1}.png`} alt={i + 1} />
                            </li>
                        )
                    })
                }
                {
                    arr.map((e, index) => {
                        console.log(e, index);
                        
                    })
                }
            </ul>
            <div className='text-center'>
                <button className='bg-[#E75A56] text-white font-bold cursor-pointer duration-500 hover:bg-[#b3312c] rounded-full w-48 h-12 mt-10 text-lg
                md:w-80 md:h-16 md:text-xl md:mt-36
                lg:w-80 lg:h-20 lg:text-2xl lg:mt-20'><NavLink to='/info' className='text-white'>보호동물 더 보기</NavLink></button>
            </div>
        </div>
    );
}

export default Content4Grid