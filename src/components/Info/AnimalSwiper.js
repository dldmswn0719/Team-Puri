import React from 'react'
import AnimalData from './../../data/AnimalData.json';
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useEffect } from 'react';
import { useState } from 'react';

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
        <div className="w-[800px] md:w-[400px] sm:w-[300px] fold:w-[250px] mt-2 flex justify-between items-center overflow-hidden">
            <Swiper
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                loop={true}
                slidesPerView={4}
                spaceBetween={1}
                Pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
            >
                {data.map((e, i) => (
                    <SwiperSlide className="basis-1/4" key={i}>
                        <Link to={`/infodetail/${e.desertionNo}`} state={{ e: e }}>
                            <img
                                className="w-[194px] h-[194px] md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px] fold:w-[80px] fold:h-[80px]"
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