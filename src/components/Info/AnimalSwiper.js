import React from 'react'
import AnimalData from './../../data/AnimalData.json';
import { Link } from 'react-router-dom'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useEffect } from 'react';
import { useState } from 'react';
import ScrollToTop from './ScrollToTop';

function AnimalSwiper() {
    const [data, setData] = useState([])

    useEffect(() => {
        const RandomData = () => {
            const Array = [];
            const Result = AnimalData.filter((e) => e.image !== '');
            const usedIndexes = []; // 사용된 인덱스를 추적하기 위한 배열

            for (let i = 0; i < 16; i++) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * Result.length);
                } while (usedIndexes.includes(randomIndex)); // 이미 사용된 인덱스인 경우 다시 뽑기

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
                                className="w-full px-2 lg:h-[260px] md:h-[200px]  sm:h-[180px] fold:h-[100px]"
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