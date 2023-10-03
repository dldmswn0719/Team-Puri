import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ScrollUpDown from './ScrollUpDown'
import TellButton from './TellButton'
import { faLocationDot, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function AnimalDetails() {
    const [mapX, setMapX] = useState(0)
    const [mapY, setMapY] = useState(0)
    const location = useLocation();
    const detaildata = location.state.e;
    const { popfile, kindCd, sexCd, age, weight, neuterYn, colorCd, specialMark, noticeNo, happenPlace, careNm, careTel, orgNm, officetel, careAddr } = detaildata


    const { kakao } = window;

    useEffect(() => {

        var geocoder = new kakao.maps.services.Geocoder(),
            wtmX = 160082.538257218,
            wtmY = -4680.975749087054;

        var callback = async function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                let data = await result;

                console.log(data[0])
                // console.log(result[0].x); // 126.570667
                // console.log(result[0].y); // 33.45070100000001
                if (data[0].x !== 126.570667) {
                    setMapX(data[0].x)
                }
                if (data[0].y !== 33.45070100000001) {
                    setMapY(data[0].y);
                }

            }
        };


        // WTM 좌표를 WGS84 좌표계의 좌표로 변환한다
        geocoder.transCoord(wtmX, wtmY, callback, {
            input_coord: kakao.maps.services.Coords.WTM,
            output_coord: kakao.maps.services.Coords.WGS84
        });

        geocoder.addressSearch(careAddr, callback);



        //지도생성
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션

            // https://address.dawul.co.kr/index.php 서 주소 검색후 y좌표가 앞 x좌표가 뒤
            center: new kakao.maps.LatLng(mapY, mapX), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


        //마커생성
        var markerPosition = new kakao.maps.LatLng(mapY, mapX);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [mapX])


    return (
        <>
            <div className="max-w-full dark:bg-[#272929]">
                <div className=" max-w-[1200px] py-10 mx-auto ">
                    <div className="flex justify-center">
                        <div className="w-full flex items-center justify-center flex-col mt-3">
                            <div className='w-full flex items-center justify-center  md:w-[500px] sm:w-[400px]'>
                                <img className=' md:w-[500px] sm:w-[400px]' src={popfile} alt="img" />
                            </div>
                            <div className="  md:w-[500px] sm:w-[400px]  dark:text-[#ebf4f1]">
                                <div className="">
                                    <p className='text-xl font-bold mt-10 mb-2'><FontAwesomeIcon icon={faPaw} /> 상세 정보</p>
                                    <div className='border-b-2 border-[#DAC0A3] dark:border-[#dadbdb]'></div>
                                    <div className="">
                                        <p className='mt-1'>품종 : {kindCd}</p>
                                        <p className='mt-1'>성별 : {sexCd === 'M' ? "남" : sexCd === 'F' ? "여" : "미상"}</p>
                                        <p className='mt-1'>나이 : {age}추정</p>
                                        <p className='mt-1'>몸무게 : {weight}</p>
                                        <p className='mt-1'>중성화 : {neuterYn === 'Y' ? "○" : neuterYn === 'x' ? "아니오" : "모름"}</p>
                                        <p className='mt-1'>모색 : {colorCd}</p>
                                        <p className='mt-1 '>특징 : {specialMark}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-xl font-bold mt-10 mb-2'><FontAwesomeIcon icon={faPaw} />  구조 정보</p>
                                    <div className='border-b-2 border-[#DAC0A3] dark:border-[#dadbdb]'></div>
                                    <div className="mt-3">
                                        <p className='mt-1'>공고번호 : {noticeNo}</p>
                                        <p className='mt-1'>발견장소 : {happenPlace}</p>
                                        <p className='mt-1'>보호센터 : {careNm}</p>
                                        <p className='mt-1'>담당부서 : {orgNm}</p>
                                        <p className='mt-1 lg:block md:hidden sm:hidden'>보호센터 Tel : {careTel}</p>
                                        <p className='mt-1 lg:block md:hidden sm:hidden'>담당부서 Tel : {officetel}</p>
                                        <p className='lg:block md:hidden sm:hidden sm:text-base'>전화 문의는 평일 <span className='font-bold'>오전 9시 부터 오후 6시까지</span>입니다.</p>
                                        <p className='lg:block md:hidden sm:hidden'> {`(공휴일 제외)`}</p>
                                        <TellButton />
                                        <p className='text-xl   mt-11 dark:text-[#ebf4f1]'><FontAwesomeIcon icon={faLocationDot} color='#ff5b5b' />  보호소 위치</p>
                                    </div>
                                </div>
                            </div>
                            <div id='map' className='w-[500px] h-[500px] max-md:w-[400px] max-md:h-[400px] mt-5'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnimalDetails