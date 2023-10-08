import React, { useCallback, useEffect, useState } from 'react'
import { faAnglesLeft, faAnglesRight, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { useSelector } from 'react-redux'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';
import QuickMenu from './QuickMenu'




function AnimalList() {
    const [page, setPage] = useState(1)
    const Array = ["", "417000", "422400", "429900"]
    const [city, setCity] = useState([])
    const [cityCode, setCityCode] = useState("")
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;
    const kind = [`${messages.animal4}`, "개", "고양이", "기타"];
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
                // setSelectedAnimal("");
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

    const PageReset = () => {
        data === undefined && setPage(1);
    }


    useEffect(() => {

        fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=100&pageNo=1&serviceKey=${process.env.REACT_APP_dataapiKey}&_type=json`).then((res) => {
            return res.json()
        }).then((data) => { setCity(data.response.body.items.item) });

    }, []);


    useEffect(() => {

        fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?up_kind_cd=${Array[kindCode]}&serviceKey=${process.env.REACT_APP_dataapiKey}&_type=json`).then((res) => {
            return res.json()
        }).then((data) => {
            setAnimal(data && data.response.body?.items.item)
        });
    }, [kindCode])

    const [loading, setLoading] = useState(false);
    const ResultData = useCallback(() => {
        fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&upr_cd=${cityCode}&pageNo=${page}&kind=${animalCode}&numOfRows=12&serviceKey=${process.env.REACT_APP_dataapiKey}&_type=json&upkind=${Array[kindCode]}`).
            then((res) => {
                return res.json()
            }).then(async (data) => {
                const result = await data.response.body?.items.item;
                const resultCnt = await data.response.body?.totalCount;
                setData(result)
                setTotalCnt(resultCnt)
                setLoading(false)
            });
    }, [cityCode, animalCode, Array[kindCode], page])

    useEffect(() => {
        setLoading(true);
        ResultData()
    }, [page])





    const list = 5;
    const pagination = 5;
    const [totalCnt, setTotalCnt] = useState(0);
    const totalPage = Math.floor(totalCnt / list);

    let startPage, endPage;
    const currentBlock = Math.ceil(page / pagination) 
    startPage = (currentBlock - 1) * pagination + 1;
    endPage = startPage + pagination - 1;
    if (endPage > totalPage) {
        endPage = totalPage
    }

    // 이전페이지  
    const PrevBlock = () => {
        if (startPage > 1) {
            setPage(startPage - pagination);

        }

    }

    // 다음페이지   
    const NextBlock = () => {
        if (endPage < totalPage) {
            setPage(startPage + pagination)
        }
    }


    const PageList = [];

    for (let i = startPage; i <= endPage; i++) {
        PageList.push(
            <div className="flex items-center justify-center h-full">
                <li key={i} className={(page === i ? 'rounded-full cursor-pointer w-[50px] h-[50px] fold:w-[35px] fold:h-[35px] fold:py-0 fold:px-0 border-transparent leading-10 text-center relative block py-1 px-1.5 lg:mx-3 border-2  border-[#86bcd5] dark:border-1 dark:border-[#dadbdb] text-white bg-[#86bcd5] dark:bg-[#404343]' : ' rounded-full cursor-pointer w-[50px] h-[50px] fold:w-[35px] fold:h-[35px]  leading-10 text-center relative block py-1 px-1.5 fold:py-0 fold:px-0 lg:mx-3 border-2 border-transparent text-black shadow-sm dark:text-[#ebf4f1]')} onClick={() => { setLoading(true); setPage(i); }}>
                    <div className="flex items-center justify-center h-full">
                        {i}
                    </div>
                </li>
            </div>

        )
    }




    return (
        <>
    <QuickMenu/>

            {
                loading && <Loading />
            }
           
            <div className='max-w-full min-h-screen bg-white dark:bg-[#272929] overflow-hidden'>
                <div className="max-w-[1200px] h-full mx-auto">
                    <div className="min-w-full max-h-full max-md:border-none sm:border-none fold:border-none border-b-4 border-[#86bcd5] dark:border-[#dadbdb] lg:px-5 lg:py-5  md:px-5 md:py-5 sm:px-8 box-border fold:px-3 fold:pb-0 ">
                        <div className="max-w-full h-full flex sm:flex-col fold:flex-col justify-between text-left">
                            <div className="w-full pb-2">
                                <p className='font-bold text-[#999] dark:text-[#ebf4f1] md:mt-5 '>{messages.animal1}</p>
                                <select onChange={selectedData} className='text-xl font-bold w-full md:basis-[15%] dark:bg-[#272929] dark:text-[#ebf4f1]
                                cityData'>
                                    <option value="">{messages.animal2}</option>
                                    {city.map((el, index) => <option key={index} value={el.orgCd}>{el.orgdownNm}</option>)}
                                </select>
                            </div>
                            {/* 동물 축종 */}
                            <div className="w-full pb-2">
                                <p className='
                                font-bold text-[#999] dark:text-[#ebf4f1] md:mt-5'>{messages.animal3}</p>
                                <select className='text-xl font-bold w-full md:basis-[15%] dark:bg-[#272929]  dark:text-[#ebf4f1] kindData' onChange={selectedData}>
                                    {kind.map((el, index) => <option key={index} value={index}>{el}</option>)}
                                </select>
                            </div>
                            {/* 동물 품종 */}
                            <div className="w-full pb-2">
                                <p className='
                                font-bold text-[#999] dark:text-[#ebf4f1] md:mt-5'>{messages.animal5}</p>
                                <select className='text-xl font-bold w-full md:basis-[15%] dark:bg-[#272929]  dark:text-[#ebf4f1] animalData' onChange={selectedData}>
                                    {kindCode !== "3" && <option value="">{messages.animal6}</option>}
                                    {
                                        animal && animal.map((e, i) => {
                                            return (
                                                <option key={i} value={e.kindCd} data-animal-name={e.knm} >{e.knm}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="w-full flex items-center justify-end sm:justify-center  font-bold">
                                <button className="text-white font-bold w-48 h-12 md:w-48 sm:w-full  fold:w-full  sm:mt-4  fold:mt-1  border-2 rounded-[20px] bg-[#86bcd5] border-[#86bcd5] md:mt-5 dark:bg-[#404343] dark:text-[#ebf4f1] dark:border-[#dadbdb]"
                                    onClick={() => {
                                        setLoading(true);
                                        ResultData();
                                        PageReset();
                                    }}>{messages.animal7}</button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full max-h-full flex text-[15px] lg:gap-x-3 lg:gap-y-3  flex-wrap justify-start md:justify-around lg:px-3 md:px-2 md:gap-y-3 sm:justify-center sm:gap-y-7 fold:px-3 fold:gap-y-3 pt-4 sm:pt-8 md:pt-3">
                        {
                            data === undefined ? <div className='w-full h-full flex items-center justify-center'><p className='text-[32px] fold:text-2xl text-[#999] font-bold dark:text-[#ebf4f1]'>검색 결과가 없습니다.</p></div> :
                                data && data.map((e, i) => {
                                    return (
                                        <div className="w-full h-full relative box-border 
                                        border-2 border-[#f1f1ef] shadow-lg rounded-[20px] flex-wrap lg:basis-[32.5%] md:basis-[48%] sm:basis-[90%] shadow-[4px_4px_4px_-4px_rgb(119, 112, 112)] rounded-[20px] " key={i}>
                                            <Link to={`/infodetail/${e.desertionNo}`} state={{ e: e }}>
                                                <div className='font-bold px-3 py-3 flex items-center justify-between  dark:bg-[#404343] rounded-t-[20px] dark:text-[#ebf4f1] '>
                                                    <p><FontAwesomeIcon icon={e.sexCd === 'M' ? faMars : e.sexCd === 'F' ? faVenus : ""} className='w-[18px] h-[18px] pr-1 align-text-bottom dark:text-[#ebf4f1] ' />{e.sexCd === 'M' ? "남" : e.sexCd === 'F' ? "여" : "성별 미상"} </p>
                                                </div>
                                                <div className="flex lg:basis-[32.5%] md:basis-[48%] sm:basis-[90%] fold:basis-[100%]  h-[300px] lg:h-[380px] md:h-[450px] sm:h-[600px] fold:h-[250px]  ">
                                                    <img src={e.popfile} alt="img" className='w-full' />
                                                </div>
                                            </Link>
                                            <div className="pl-[10px] py-[10px] dark:text-[#ebf4f1] dark:bg-[#404343] dark:rounded-b-[20px]">
                                                <p className='font-bold text-[14px]'><span className='text-[#999] dark:text-[#ebf4f1]'>품종 :</span> {e.kindCd}</p>
                                                <p className='font-bold text-[14px]'><span className='text-[#999] dark:text-[#ebf4f1]'>나이 :</span> {e.age} 추정</p>
                                                <p className='font-bold text-[14px]'><span className='text-[#999] dark:text-[#ebf4f1]'>지역 :</span> {e.orgNm}</p>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                    <div className="max-w-[1200px] mx-auto justify-center flex items-center h-full py-8 overflow-x-hidden">
                        <ul className='flex items-center justify-center h-full list-style-none'>
                            <li className='cursor-pointer w-[50px] h-[50px] fold:w-[35px] fold:h-[35px] rounded-full leading-10 text-center relative block py-1 px-1.5 border-1 border-[#DAC0A3] text-black shadow-sm dark:text-[#ebf4f1]' onClick={PrevBlock}>
                                <div className="flex items-center justify-center h-full">
                                    <FontAwesomeIcon icon={faAnglesLeft} />
                                </div>
                            </li>
                            {PageList}
                            <div className="flex items-center justify-center h-full">
                                <li className='cursor-pointer w-[50px] h-[50px] fold:w-[35px] fold:h-[35px] rounded-full leading-10 text-center relative block py-1 px-1.5 border-1 border-[#DAC0A3]
                                text-black shadow-sm focus:shadow-sm dark:text-[#ebf4f1]' onClick={NextBlock}>
                                    <div className="flex items-center justify-center h-full">
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                    </div>
                                </li>
                            </div>

                        </ul>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AnimalList