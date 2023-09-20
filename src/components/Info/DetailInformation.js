import React, { useEffect, useState } from 'react'
import {  useLocation } from 'react-router-dom'


    // 지역 도시 city
    const {kakao} = window;

function DetailInformation() {
    const [mapX, setMapX] = useState(0)
    const [mapY, setMapY] = useState(0)
    const location = useLocation();
    const detaildata = location.state.e;
    const {popfile , kindCd , sexCd, age, weight, neuterYn, colorCd, specialMark, noticeNo , happenPlace, careNm ,careTel , orgNm, officetel, careAddr} = detaildata



  
  
  const {kakao} = window;


 


  useEffect(()=>{

    var geocoder = new kakao.maps.services.Geocoder(),
    wtmX = 160082.538257218,
    wtmY = -4680.975749087054;
  
  var callback = async function(result, status) {
    if (status === kakao.maps.services.Status.OK) {
      let data = await result;  
      
      console.log(data[0])
      // console.log(result[0].x); // 126.570667
      // console.log(result[0].y); // 33.45070100000001
      if(data[0].x !== 126.570667){
        setMapX(data[0].x)
      }
      if(data[0].y !== 33.45070100000001){
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
    var markerPosition  = new kakao.maps.LatLng(mapY, mapX); 
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);
},[mapX])

  return (
  <>
  <div className=" max-w-[1200px] my-10 mx-auto ">
    <div className="flex flex-wrap justify-center ">
      
            <div className="">
                <img className='w-[400px] h-[400px]' src={popfile} alt="img" />
            </div>
            <div className="w-full flex flex-wrap items-center justify-center mt-3">
                <div className="">
                    <div className="mt-9 w-[400px]">
                      <p className='text-xl font-bold mb-2'>{kindCd}</p>
                        <p className=' w-[400px] border-b-2 border-[#DAC0A3]'></p>
                        <div className="mt-3 ">
                            <p className='text-xl mt-1'>성별:{sexCd === 'M' ? "남" : sexCd === 'F' ? "여" : "미상"}</p>
                            <p className='text-xl mt-1'>나이: {age}추정</p>
                            <p className='text-xl mt-1'>몸무게: {weight}</p>
                            <p className='text-xl mt-1'>중성화: {neuterYn === 'Y'? "○":neuterYn === 'x'? "아니오" : "모름" }</p>
                            <p className='text-xl mt-1'>모색: {colorCd}</p>
                            <p className='text-xl mt-1 '>특징: {specialMark}</p>
                        </div>
                    </div>
                    <div className="">
                      <p className='text-xl font-bold mt-10 mb-2'>구조 정보</p>
                        <p className=' w-[400px] border-b-2  border-[#DAC0A3]'></p>
                        <div className="mt-3">
                            <p className='text-xl mt-1'>공고번호 : {noticeNo}</p>
                            <p className='text-xl mt-1'>발견장소 : {happenPlace}</p>
                            <p className='text-xl mt-1'>보호센터 : {careNm}</p>
                            <p className='text-xl mt-1'>보호센터Tel : {careTel}</p>
                            <p className='text-xl mt-1'>담당부서 : {orgNm}</p>
                            <p className='text-xl mt-1'>담당부서Tel : {officetel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p className='text-xl  mt-11'>보호소 위치</p>
        <div id='map' className='w-full h-[400px]'></div>
   
  
  </div>

  </>
  )
}

export default DetailInformation