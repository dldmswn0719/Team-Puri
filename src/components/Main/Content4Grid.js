import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import AnimalData from './../../data/AnimalData.json';
import { useSelector } from 'react-redux';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function Content4Grid() {

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

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
        <div className='md:max-w-[768px] lg:max-w-[1200px] m-auto pt-28
        lg:pt-52 lg:pb-[147px] md:pt-40'>          
            <p className='text-center lg:text-4xl md:text-2xl text-xl font-bold relative sm:mx-[5%]'>
                {messages.grid1}
                <img src='./../../Images/Main/puppy.png' alt='puppy' className='absolute lg:-top-36 md:-top-20 md:w-1/3 sm:w-1/4 sm:-top-12 left-1/2 -translate-x-1/2 z-[-1]' />
            </p>    
            <p className='text-center lg:text-base lg:pb-20 md:pb-20 pb-10 text-gray-700 lg:pt-5 sm:mx-[5%]'>
                {messages.grid2}
            </p>
            <ul className='flex flex-wrap md:justify-start justify-around lg:gap-5 md:gap-5 gap-2 sm:mx-[5%]'>
                {
                    data.map((e, i) => {
                        return (                            
                            <li key={i} className={`lg:basis-[23.5%] md:basis-[31%] basis-[48%]
                            cursor-pointer duration-300 relative
                            hover:scale-105 h-[200px] lg:h-[285px]`}><Link to={`/infodetail/${e.desertionNo}`} state={{e : e}} className='inline-block w-full h-full'><img src={e.image} alt={i} className='h-full w-full'/></Link></li>
                        );
                    })
                }
            </ul>
            <div className='text-center'>
                <NavLink to='/info'>
                    <button className='bg-[#E75A56] text-white font-bold cursor-pointer duration-500 hover:bg-[#b3312c] rounded-full w-48 h-12 mt-10 text-lg
                    md:w-80 md:h-16 md:text-xl md:mt-36
                    lg:w-80 lg:h-20 lg:text-2xl lg:mt-20'>
                        {messages.grid3}
                    </button>
                </NavLink>
            </div>
        </div>
    );
}

export default Content4Grid