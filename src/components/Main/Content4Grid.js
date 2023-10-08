import React, { useEffect } from 'react'
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

    // useEffect (() => {
    //     const RandomData = () => {
    //         const Array = [];
    //         const Result = AnimalData.filter((e) => e.firstImageUrl !== '');
    //         for (let i = 0; i < 16; i++){            
    //             const Random = Math.floor(Math.random() * Result.length);
    //             Array.push(Result[Random]);
    //             setData(Array);
    //         }
    //     }
    //     RandomData();
    // }, []);

    return (
        <div className='md:max-w-[768px] lg:max-w-[1200px] m-auto
        pt-28
        lg:pt-[130px] lg:pb-[147px]'>
            <ul className='flex flex-wrap md:justify-start justify-around'>
                {
                    Array(8).fill().map((_, i) => {
                        return (
                            <NavLink to='/infodetail/444450202101068'>
                                <li key={i} className={`lg:basis-1/4 md:basis-1/3 basis-1/2
                                cursor-pointer duration-300 relative
                                hover:scale-105 hover:after:w-full hover:after:h-full hover:after:bg-black hover:after:bg-opacity-30 hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:content-["개"] hover:after:text-white hover:after:text-center hover:after:items-center hover:after:text-3xl`}><img src={`./../../Images/Main/list${i + 1}.png`} alt={i + 1} className='w-full'/>
                                </li>
                            </NavLink>
                        );
                    })
                }
                {
                    arr.map((e, index) => {
                        // console.log(e, index);
                        
                    })
                }
            </ul>
            <div className='text-center'>
                <NavLink to='/info'>
                    <button className='bg-[#E75A56] text-white font-bold cursor-pointer duration-500 hover:bg-[#b3312c] rounded-full w-48 h-12 mt-10 text-lg
                    md:w-80 md:h-16 md:text-xl md:mt-36
                    lg:w-80 lg:h-20 lg:text-2xl lg:mt-20'>보호동물 더 보기</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Content4Grid