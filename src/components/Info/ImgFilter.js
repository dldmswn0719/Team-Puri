import React, { useCallback, useEffect, useState } from 'react'
import { faAnglesLeft, faAnglesRight, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Loading from './Loading'




function ImgFilter() {
    const [page, setPage] = useState(1)
    const Array = ["", "417000", "422400", "429900"]
    const [city, setCity] = useState([])
    const [cityCode, setCityCode] = useState("")
    const kind = ["모든 축종", "개", "고양이", "기타"];
    const [kindCode, setKindCode] = useState(0);
    const [animal, setAnimal] = useState("");
    const [animalCode, setAnimalCode] = useState("");
    const [selectedAnimal, setSelectedAnimal] = useState("");
    const [data, setData] = useState([]);

    const selectedData = (data) => {
        const classValue = data.target.className;
        const dataValue = data.target.value;
        switch (true) {
            // 도시 선택시 스위치문!
            case classValue.includes("cityData"):
                setCityCode(dataValue)

                break;
            case classValue.includes("kindData"):
                setKindCode(dataValue)
                setAnimal("");
                setAnimalCode("");
                setSelectedAnimal("");
                break;
            case classValue.includes("animalData"):
                const dataValue2 = data.target.selectedOptions[0].getAttribute('data-animal-name')
                setSelectedAnimal(dataValue2);
                setAnimalCode(dataValue)
                
                break;
            default:
                console.log("데이터가 없습니다.");
        }
    }

    const PageReset = ()=>{
        data === undefined && setPage(1);
    }


    useEffect(() => {

        fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=100&pageNo=1&serviceKey=${process.env.REACT_APP_dataapiKey}&_type=json`).then((res) => {
            return res.json()
        }).then((data) => { setCity(data.response.body.items.item) });

    }, []);




    useEffect(() => {

        fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?up_kind_cd=${Array[kindCode]}&serviceKey=${process.env.REACT_APP_dataapiKey}&_type=json`).then((res) => {
            return res.json()
        }).then((data) => {

            setAnimal(data && data.response.body?.items.item)
        });
    }, [kindCode])

    const [loading, setLoading] = useState(false);

    const ResultData = useCallback(() => {
        console.log(`콜백 : https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&upr_cd=${cityCode}&pageNo=${page}&kind=${animalCode}&numOfRows=12&serviceKey=${process.env.REACT_APP_dataapiKey}&_type=json&upkind=${Array[kindCode]}`)
        fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&upr_cd=${cityCode}&pageNo=${page}&kind=${animalCode}&numOfRows=12&serviceKey=${process.env.REACT_APP_dataapiKey}&_type=json&upkind=${Array[kindCode]}`).
            then((res) => {
                return res.json()

            }).then(async (data) => {
                const result = await data.response.body?.items.item;
                const resultCnt = await data.response.body?.totalCount;
                setData(result)
                console.log(result)
                setTotalCnt(resultCnt)
                setLoading(false)
            });
    }, [cityCode, animalCode, Array[kindCode], page])

    useEffect(() => {
        setLoading(true);
        ResultData()
        console.log(`스테이트 : https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&upr_cd=${cityCode}&pageNo=${page}&kind=${animalCode}&numOfRows=12&serviceKey=${process.env.REACT_APP_dataapiKey}&_type=json&upkind=${Array[kindCode]}`)
    }, [page])


    const list = 5;
    //페이지
    // 같은 api주소에서 토탈카운트 뽑기https://github.com/dldmswn0719/Team-Puri
    // 페이지 5개씩
    const pagination = 5;
    //최종갯수를 받아오는 State
    const [totalCnt, setTotalCnt] = useState(0);
    // totalPage 5페이지씩 나오게 "totalCount" : 8308 / 1500 = 5.538866 
    const totalPage = Math.floor(totalCnt / list);
    // 변수지정은 했지만 값은 대입하지 않겠다는뜻

    let startPage, endPage;
    //현재 block설정 ceil소수점이 나왔을때 값을 반올림 
    const currentBlock = Math.ceil(page / pagination)
    //만약 현재 페이지가 1이고 / pagination이 5이고 1/5를 하게되면 -> 0.2 하면 반올림해줘서 1,2,3,4,5 이런식으로 나오게 만듦   
    startPage = (currentBlock - 1) * pagination + 1;
    endPage = startPage + pagination - 1;
    // endPage >totalPage 다면 endPage를 totalPage로 고정한다   // 230908 pagination 추가
    if (endPage > totalPage) {
        endPage = totalPage
    }

    // 이전페이지  
    const PrevBlock = () => {
        if (startPage > 1) {

            // ex 페이지가 11 12 13 14 15 라면 시작페이지가 11 - pagination 5 = 6 이전페이지가 6부터나옴
            setPage(startPage - pagination);

        }

    }

    // 다음페이지   
    const NextBlock = () => {
        // endpage가 totalPage보다 작나면 startPage + pagination가 된다.
        if (endPage < totalPage) {
            setPage(startPage + pagination)
        }
    }

    // 
    const PageList = [];

    for (let i = startPage; i <= endPage; i++) {
        PageList.push(
            <li key={i} className={(page === i ? 'max-w-[1200px] rounded-full cursor-pointer min-w-[50px] min-h-[50px] sm:w-[40px] sm:h-[40px] leading-10 text-cente relative block py-1 px-1.5 mx-3 border-1 border-[#DAC0A3] dark:border-1 dark:border-[#dadbdb]  text-white bg-[#dac0a3] dark:bg-[#404343]' : 'max-w-[1200px] rounded-full cursor-pointer min-w-[50px] min-h-[50px] sm:w-[40px] sm:h-[40px] leading-10 text-cente relative block py-1 px-1.5 mx-3 border-1 border-[#DAC0A3] text-black shadow-sm dark:text-[#ebf4f1]')} onClick={() => { setLoading(true); setPage(i); }}>{i}
            </li>
        )
    }
    return (
        <>

            {
                loading && <Loading />
            }
            <div className='max-w-full bg-white dark:bg-[#272929]'>
                <div className="max-w-[1200px]  mx-auto">
                    {/* <p>도시 : {cityCode}</p>
            <p>축종 : {Array[kindCode]}</p>
            <p>품종 : {selectedAnimal}</p>
            <p>페이지 : {page}</p> */}
                    {/* <p>https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&upr_cd=${cityCode}&pageNo=${page}&kind=${animalCode}&numOfRows=12&serviceKey=${process.env.REACT_APP_apiKey}&_type=json&upkind=${Array[kindCode]}</p> */}
                    <div className="max-w-full border-b-2 border-[#EADBC8] dark:border-[#dadbdb] py-5">
                        <div className="max-w-full h-full flex flex-col md:flex-row justify-between text-left my-2">
                            <div className="w-full">
                                <p className='font-bold text-[#999] dark:text-[#ebf4f1]'>지역</p>
                                <select onChange={selectedData} className='text-xl font-bold dark:bg-[#404343] dark:text-[#ebf4f1] lg:w-48 max-lg:w-full cityData'>
                                    <option value="">모든 지역</option>
                                    {city.map((el, index) => <option key={index} value={el.orgCd}>{el.orgdownNm}</option>)}
                                </select>
                            </div>
                            {/* 동물 축종 */}
                            <div className="w-full">
                                <p className='font-bold text-[#999] dark:text-[#ebf4f1]'>축종</p>
                                <select className='text-xl font-bold dark:bg-[#404343] dark:text-[#ebf4f1] lg:w-48 max-lg:w-full kindData' onChange={selectedData}>
                                    {kind.map((el, index) => <option key={index} value={index}>{el}</option>)}
                                </select>
                            </div>

                            {/* 동물 품종 */}
                            <div className="w-full ">
                                <p className='font-bold text-[#999] dark:text-[#ebf4f1]'>품종</p>
                                <select className='text-xl font-bold w-full md:w-[310px] dark:bg-[#404343] dark:text-[#ebf4f1] dark:mb-5 animalData' onChange={selectedData}>
                                    {kindCode !== "3" && <option value="">모든 품종</option>}
                                    {
                                        animal && animal.map((e, i) => {
                                            return (
                                                <option key={i} value={e.kindCd} data-animal-name={e.knm} >{e.knm}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div className="w-full flex  items-center justify-end max-lg:justify-center font-bold">
                                <button className="font-bold w-48 lg:w-48 max-lg:w-full h-12 border-2 bg-[#DAC0A3] border-[#DAC0A3] dark:bg-[#272929]  dark:text-[#ebf4f1]  dark:border-[#dadbdb] rounded-[20px]"
                                    onClick={() => {
                                        setLoading(true);
                                        ResultData();
                                        PageReset();
                                    }}>검색하기</button>
                            </div>
                        </div>
                    </div>


                    <div className="flex text-[15px] gap-y-4 flex-wrap justify-start gap-x-3  max-md:justify-center max-lg:justify-center pt-8">
                        {
                            data === undefined ? <div className='w-full max-h-max text-center '><p className='text-[32px] text-[#999] font-bold dark:text-[#ebf4f1]'>검색결과가 없습니다.</p></div> :
                                data && data.map((e, i) => {
                                    return (
                                        <div className="relative box-border border border-[#f1f1ef] flex-wrap basis-[32.5%] shadow-[4px_4px_4px_-4px_rgb(119, 112, 112)] rounded-[20px] " key={i}>
                                            <Link to={`/infodetail/${e.desertionNo}`} state={{ e: e }}>
                                                <div className='font-bold px-3 py-3 flex items-center justify-between max-md:w-[350px] max-lg:w-[300px] dark:bg-[#404343] rounded-t-[20px] dark:text-[#ebf4f1] '>
                                                    <p><FontAwesomeIcon icon={e.sexCd === 'M' ? faMars : e.sexCd === 'F' ? faVenus : ""} className='w-[18px] h-[18px] pr-1 align-text-bottom dark:text-[#ebf4f1] ' />{e.sexCd === 'M' ? "남" : e.sexCd === 'F' ? "여" : "성별 미상"} </p>
                                                </div>
                                                <div className="h-[350px]  flex ">
                                                    <img src={e.popfile} alt="img" className='w-full' />
                                                </div>

                                            </Link>
                                            <div className="pl-[10px] py-[10px] dark:text-[#ebf4f1] dark:bg-[#404343] dark:rounded-b-[20px]">
                                                <p className='font-bold text-[14px]'><span className='text-[#999]dark:text-[#ebf4f1]'>품종 :</span> {e.kindCd}</p>
                                                <p className='font-bold text-[14px]'><span className='text-[#999] dark:text-[#ebf4f1]'>나이 :</span> {e.age} 추정</p>
                                                <p className='font-bold text-[14px]'><span className='text-[#999] dark:text-[#ebf4f1]'>지역 :</span> {e.orgNm}</p>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>

                    <div className="max-w-[1200px] mx-auto justify-center">
                        <div className="max-w-[1200px] mx-auto py-8 text-center overflow-x-hidden">

                            {/* { data !== undefined ?<ul className='flex justify-center items-center list-style-none'>
                        <li
                            className='cursor-pointer min-w-[50px] min-h-[50px] sm:w-[40px] sm:h-[40px] rounded-full leading-10 text-cente relative block py-1 px-1.5 border-1 border-[#DAC0A3]
   text-black shadow-sm dark:text-[#ebf4f1]' onClick={PrevBlock}><FontAwesomeIcon icon={faAnglesLeft} /></li>
                        {PageList}
                        <li
                            className='cursor-pointer min-w-[50px] min-h-[50px] sm:w-[40px] sm:h-[40px] rounded-full leading-10 text-cente relative block py-1 px-1.5 border-1 border-[#DAC0A3]
 text-black shadow-sm focus:shadow-sm dark:text-[#ebf4f1]' onClick={NextBlock}><FontAwesomeIcon icon={faAnglesRight} /></li>
                    </ul> : ""  } */}
                            <ul className='flex justify-center items-center list-style-none'>
                                <li
                                    className='cursor-pointer min-w-[50px] min-h-[50px] sm:w-[40px] sm:h-[40px] rounded-full leading-10 text-cente relative block py-1 px-1.5 border-1 border-[#DAC0A3]
   text-black shadow-sm dark:text-[#ebf4f1]' onClick={PrevBlock}><FontAwesomeIcon icon={faAnglesLeft} /></li>
                                {PageList}
                                <li
                                    className='cursor-pointer min-w-[50px] min-h-[50px] sm:w-[40px] sm:h-[40px] rounded-full leading-10 text-cente relative block py-1 px-1.5 border-1 border-[#DAC0A3]
 text-black shadow-sm focus:shadow-sm dark:text-[#ebf4f1]' onClick={NextBlock}><FontAwesomeIcon icon={faAnglesRight} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImgFilter