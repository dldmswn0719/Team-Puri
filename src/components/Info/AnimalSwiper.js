import React from 'react'
import AnimalData from './../../data/AnimalData.json';
import { Link } from 'react-router-dom'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useEffect } from 'react';
import { useState } from 'react';

function AnimalSwiper() {
    const [data, setData] = useState([])

    useEffect(() => {
        const RandomData = () => {
            const Array = [];
            const Result = AnimalData.filter((e) => e.image !== '');
            const usedIndexes = []; 

            for (let i = 0; i < 16; i++) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * Result.length);
                } while (usedIndexes.includes(randomIndex)); 

                Array.push(Result[randomIndex]);
                usedIndexes.push(randomIndex);
            }

            setData(Array);
        };
        RandomData();
    }, [AnimalData]);
    
    return (
        <div className="w-full mt-2 flex justify-between items-center overflow-hidden">
            <Swiper
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                loop={true}
                slidesPerView={4}
                modules={[Autoplay]}
            >
                {data.map((e, i) => (
                    <SwiperSlide className="basis-1/4" key={i}>
                        <Link to={`/infodetail/${e.desertionNo}`} state={{ e: e }}>
                            <img
                                className="w-full px-1 lg:h-[260px] md:h-[200px]  sm:h-[150px] fold:h-[100px]"
                                src={e.image}
                                alt="img"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default AnimalSwiper