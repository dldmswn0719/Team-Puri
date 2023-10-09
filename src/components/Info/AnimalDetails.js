import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TellButton from './TellButton'
import { faLocationDot, faPaw, faPhone, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimalSwiper from './AnimalSwiper'


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
                if (data[0].x !== 126.570667) {
                    setMapX(data[0].x)
                }
                if (data[0].y !== 33.45070100000001) {
                    setMapY(data[0].y);
                }

            }
        };
        // WTM 좌표를 WGS84 좌표계의 좌표로 변환
        geocoder.transCoord(wtmX, wtmY, callback, {
            input_coord: kakao.maps.services.Coords.WTM,
            output_coord: kakao.maps.services.Coords.WGS84
        });

        geocoder.addressSearch(careAddr, callback);



        //지도생성
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
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
                <div className=" max-w-[1200px] py-5 mx-auto">
                    <div className="flex justify-center items-center ">
                        <div className="w-full flex items-center justify-center flex-col mt-3">
                            <div className=" w-[90%] px-2 ">
                                <p className="text-xl fold:text-lg font-bold mt-10 mb-2 dark:text-[#ebf4f1]">
                                    <FontAwesomeIcon icon={faPaw} /> 입양 문의
                                </p>
                                <span className="mt-1 dark:text-[#ebf4f1]">
                                    <FontAwesomeIcon icon={faHouse} color="#000" className='t dark:text-[#ebf4f1]' /> 보호센터 :{' '}
                                    <span className="text-black dark:text-[#ebf4f1]">{careNm} </span>
                                </span>
                                <span className="mx-1 text-black dark:text-[#ebf4f1] lg:inline-block md:hidden sm:hidden ">
                                    <FontAwesomeIcon icon={faPhone} color="#000  dark:text-[#ebf4f1]" /> 보호센터 Tel :{' '}
                                    <span className="text-black dark:text-[#ebf4f1]">{careTel}</span>
                                </span>
                                <div className="border-b-2 border-[#86bcd5] dark:border-[#dadbdb] mt-3 mb-3"></div>
                            </div>

                            <div className='w-[90%] flex justify-between items-center md:justify-center '>
                                <img className='lg:w-[1080px] w-full px-2 lg:h-[500px] md:h-[500px]  sm:h-[300px] fold:h-[250px]  ' src={popfile} alt="img" />
                            </div>
                            <div className="lg:flex dark:text-[#ebf4f1] w-[90%] lg:px-2 ">
                                <div className="lg:w-1/2 w-full ">
                                    <p className='text-xl fold:text-lg font-bold mt-10 mb-2'><FontAwesomeIcon icon={faPaw} /> 상세 정보</p>
                                    <div className='border-b-2 border-[#86bcd5] dark:border-[#dadbdb]'></div>
                                    <div className="dark:text-[#ebf4f1] fold:text-sm">
                                        <p className='mt-1 text-[#999] dark:text-[#ebf4f1]'>품종 : <span className='text-black dark:text-[#ebf4f1]'>{kindCd}</span> </p>
                                        <p className='mt-1 text-[#999] dark:text-[#ebf4f1]'>성별 : <span className='text-black dark:text-[#ebf4f1]'>{sexCd === 'M' ? "남" : sexCd === 'F' ? "여" : "미상"}</span></p>
                                        <p className='mt-1 text-[#999] dark:text-[#ebf4f1]'>나이 : <span className='text-black dark:text-[#ebf4f1]'>{age}추정</span></p>
                                        <p className='mt-1 text-[#999] dark:text-[#ebf4f1]'>몸무게 :<span className='text-black dark:text-[#ebf4f1]'>{weight}</span></p>
                                        <p className='mt-1 text-[#999] dark:text-[#ebf4f1]'>중성화 :<span className='text-black dark:text-[#ebf4f1]'>{neuterYn === 'Y' ? "○" : neuterYn === 'x' ? "아니오" : "모름"}</span> </p>
                                        <p className='mt-1 text-[#999] dark:text-[#ebf4f1]'>모색 : <span className='text-black dark:text-[#ebf4f1]'>{colorCd}</span></p>
                                        <p className='mt-1 text-[#999] dark:text-[#ebf4f1] '>특징 : <span className='text-black dark:text-[#ebf4f1]'>{specialMark}</span></p>
                                    </div>
                                </div>
                                <div className='lg:w-1/2 w-full '>
                                    <p className='text-xl fold:text-lg font-bold mt-10 mb-2'><FontAwesomeIcon icon={faPaw} />  구조 정보</p>
                                    <div className='border-b-2 border-[#86bcd5] dark:border-[#dadbdb]'></div>
                                    <div className="fold:text-sm">
                                        <p className='mt-1 text-[#999] dark:text-[#ebf4f1]'>공고번호 : <span className='text-black dark:text-[#ebf4f1]'>{noticeNo}</span></p>
                                        <p className='mt-1 text-[#999] dark:text-[#ebf4f1]'>발견장소 : <span className='text-black dark:text-[#ebf4f1]'>{happenPlace}</span></p>

                                        <p className='mt-1 text-[#999] dark:text-[#ebf4f1]'>담당부서 : <span className='text-black dark:text-[#ebf4f1]'>{orgNm}</span></p>

                                        <p className='mt-1 text-[#999] hidden lg:block md:hidden sm:hidden dark:text-[#ebf4f1]'>담당부서 Tel : <span className='text-black dark:text-[#ebf4f1]'>{officetel}</span></p>
                                        <p className='hidden lg:block  md:hidden sm:hidden text-sm text-[#999] dark:text-[#ebf4f1]'>*전화 문의는 평일 <span className='font-bold text-black dark:text-[#ebf4f1]'>오전 9시 <span className='text-[#999] dark:text-[#ebf4f1]'>부터</span><span className='text-black dark:text-[#ebf4f1]'>오후 6시</span></span>까지 입니다.</p>
                                        <p className='hidden lg:block md:hidden sm:hidden text-[#999] dark:text-[#ebf4f1] text-sm'> {`(공휴일 제외)`}</p>
                                        <TellButton />

                                    </div>
                                </div>
                            </div>

                            
                            <p className='flex justify-start items-center w-[90%] text-xl mt-11 mb-2 dark:text-[#ebf4f1] font-bold px-2 '><FontAwesomeIcon icon={faLocationDot} color='#ff5b5b' className='mr-1' />보호소 위치</p>
                            <div className="w-[90%] px-2 relative ">
                            <div id='map' className='h-[400px]  md:h-[400px]  sm:h-[300px] fold:h-[250px] '></div>
                            </div>
                         

                            <div className="w-[90%] px-2 ">
                                <p className='text-xl fold:text-lg font-bold mt-10 mb-2 dark:text-[#ebf4f1]'><FontAwesomeIcon icon={faPaw} />  또 다른 구조 정보</p>
                                <div className='border-b-2 border-[#86bcd5] dark:border-[#dadbdb]'></div>
                                <AnimalSwiper/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnimalDetails