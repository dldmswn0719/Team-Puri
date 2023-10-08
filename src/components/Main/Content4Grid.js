import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import AnimalData from './../../data/AnimalData.json';

function Content4Grid() {
    const [data, setData] = useState([]);
    useEffect (() => {
        const RandomData = () => {
            const Array = [];
            const Result = AnimalData.filter((e) => e.image !== '');
            const usedIndexes = [];

            for (let i = 0; i < 8; i++) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * Result.length);
                } while (usedIndexes.includes(randomIndex));
                
                Array.push(Result[randomIndex]);
                usedIndexes.push(randomIndex);
            }
            setData(Array);
        }
        RandomData();
    }, [AnimalData]);

    return (
        <div className='md:max-w-[768px] lg:max-w-[1200px] m-auto
        pt-28
        lg:pt-[130px] lg:pb-[147px]'>
            
            <p className='text-center lg:pb-20 pb-10 lg:text-4xl md:text-2xl text-xl font-bold '>함께할 유기동물 친구들을 만나보세요</p>
            <ul className='flex flex-wrap md:justify-start justify-around gap-5 sm:mx-[5%]'>
                {
                    data.map((e, i) => {
                        return (
                            <Link to={`/infodetail/${e.desertionNo}`} state={{e : e}}>
                                <li key={i} className={`lg:basis-1/4 md:basis-1/3 basis-1/2
                                cursor-pointer duration-300 relative
                                hover:scale-105 hover:after:w-full hover:after:h-full hover:after:bg-black hover:after:bg-opacity-30 hover:after:absolute hover:after:top-0 hover:after:left-0  hover:after:text-white hover:after:text-center hover:after:text-sm`}><img src={e.image} alt={i} className='lg:w-[280px] lg:h-[280px] md:w-[240px] md:h-[240px] w-56 h-56'/>
                                </li>
                            </Link>
                        );
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