import React, { useEffect, useState } from 'react'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'



function ImgFilter() {
  //  페이지 출력
  const list = 10;
  //페이지
  // 같은 api주소에서 토탈카운트 뽑기
  let [page, setPage] = useState(1)
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
    if (startPage > 1)
      // ex 페이지가 11 12 13 14 15 라면 시작페이지가 11 - pagination 5 = 6 이전페이지가 6부터나옴
      setPage(startPage - pagination);
  }

  // 다음페이지   // 230908 pagination 추가
  const NextBlock = () => {
    // endpage가 totalPage보다 작나면 startPage + pagination5가 된다.
    if (endPage < totalPage) {
      setPage(startPage + pagination)
    }
  }

  // 페이지 1번~n번 출력을 위함

  const PageList = []
  for (let i = startPage; i <= endPage; i++) {
    PageList.push(
      <li key={i} className={(page === i ? ' rounded-full cursor-pointer w-[50px] h-[50px]  leading-10 text-cente relative block py-1.5 px-1.5 mx-3 border-1 border-[#DAC0A3] text-white bg-[#dac0a3] ' : ' rounded-full cursor-pointer w-[50px] h-[50px]  leading-10 text-cente relative block py-1.5 px-1.5 mx-3 border-1 border-[#DAC0A3] text-black shadow-sm ')} onClick={() => { setPage(i) }}>{i}</li>
    )
  }

  // 지역 도시 city
  const [city, setCity] = useState(["모든 지역"])
  useEffect(() => {

    fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=100&pageNo=1&serviceKey=${process.env.REACT_APP_apiKey}&_type=json`).then((res) => {
      return res.json()
    }).then((data) => { setCity(data.response.body.items.item) });

  }, []);

  //축종/품종 개
  const [dog, setDog] = useState([])
  useEffect(() => {

    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?up_kind_cd=417000&serviceKey=${process.env.REACT_APP_apiKey}&_type=json`).then((res) => {
      return res.json()

    }).then((data) => { setDog(data.response.body.items.item) });
  }, []);

  //축종/품종 고양이
  const [cat, setCat] = useState([])
  useEffect(() => {
    async function getCatData() {
      const response = fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?up_kind_cd=422400&serviceKey=${process.env.REACT_APP_apiKey}&_type=json`);
      return response;
    }
    getCatData()
      .then(res => res.json())
      .then(json => setCat(json.response.body.items.item));
  }, []);



  //축종
  const [kind, setKind] = useState(["모든 축종", "개", "고양이"])

  const [selected, setSelected] = useState("모든 축종");

  function ChangeKind(e) {
    //축종의 value값
    setSelected(e.target.value);
    //품종의 value값
    FilterData(e.target.value)


  }


  const [selectData, setSelectData] = useState()


  function FilterData(data) {

    let value = [];
    if (data === '개') {
      value = dog;
    } else {
      value = cat;
    }
    return setSelectData(value);

  }
// ${process.env.REACT_APP_apiKey}
  // 모든 유기동물 데이터
  const [data, setData] = useState([])
  //defaultData로 기본 data값을 받아오고 setDefaultdata에 result값을 넣는다.
  const [defaultData, serDefaultData] = useState(data);
  useEffect(() => {
    fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=${page}&numOfRows=12&serviceKey=${process.env.REACT_APP_apiKey}&_type=json`).then((res) => {
      // console.log(process.env)
      return res.json()
    }).then(async (data) => {
      const result = await data.response.body.items.item;
      const resultCnt = await data.response.body.totalCount
      console.log(result)
      setData(result)
      serDefaultData(result)
      setTotalCnt(resultCnt)
    });

    
  }, [page]);


  const [optionCitySelect, setOptionCitySelect] = useState("");
  const [optionKindSelect, setOptionKindSelect] = useState("");
  const [isChoice, setIsChoice] = useState([0, 0])


  const optionCity = (e) => {
    const cityValue = e.target.value
    setOptionCitySelect(cityValue);

    if (cityValue !== '모든 지역') {
      setIsChoice([1, 0])

    } else {
      setIsChoice([0, 0])
    }

  }

  const optionKind = (e) => {
    const KindValue = e.target.value
    setOptionKindSelect(KindValue);
    if (KindValue !== '모든 축종') {
      setIsChoice([1, 1])
    } else {
      setIsChoice([0, 0])
    }

  }




  const oncePrint = () => {
    return data.filter(el => el.kindCd.includes(optionKindSelect)).length
  }



  const searchResult = () => {


    const FilterAll = data && data.filter((e, i) => {
      //   const cityOneremove = e.orgNm.replace("특별" , "");
      const cityValueArray = e.orgNm.split(" ")[0] === optionCitySelect
      //  console.log("cityValueArray 도시" ,cityValueArray )
      const KindValueArray = e.kindCd.includes(optionKindSelect);
      //  console.log("KindValueArray 품종", KindValueArray)
      const etcRemove = !e.kindCd.includes("[기타축종]");
      // const CntKind =  data.filter(el => el.kindCd.includes(optionKindSelect)).length;

      //isChoice가 모든지역이 아니고 모든축종이 아닐때 ->지역/축종 2개다 선택시 지역 필터 안됨
      if (isChoice[0] === 1 && isChoice[1] === 1) {
        return KindValueArray && etcRemove
        // 모든 지역이 아닐때 ㅇ
      } else if (isChoice[0] === 1) {
        return cityValueArray && etcRemove
        // 품종만 선택시 
      } else {
        return e && etcRemove
      }
    })
    // serDefaultData에 FilterAll 값을 한번 더 넣어주고
    serDefaultData(FilterAll)
  }










  return (
    <>
  <div className="w-full">
    <div className="max-w-[1200px] mx-auto">
    {optionCitySelect}
    <p>{optionKindSelect}</p>
    <p>{isChoice}</p>
        <div className="my-10 border-b-2 border-[#dac0a3]">
        <div className="w-full h-full flex justify-between text-left ">
        <div className="">
         <p className=' font-bold text-[#999]'>지역</p>
         <select  onChange={optionCity} className='text-xl font-bold'>
           <option value="모든 지역" >모든 지역</option>
           {city.map((el,index) =><option key={index} value={el.orgdownNm}>{el.orgdownNm}</option>)}
         </select>
        </div>
         {/* 동물 축종 */}
        <div className="">
        <p className='font-bold text-[#999]'>축종</p>
        
        <select onChange={ChangeKind} className='text-xl   font-bold' >
            {kind.map((el,index) => <option key={index} value={el}>{el}</option>)}
        </select>
        </div>

        {/* 동물 품종 */}
        <div className="">
            <p className='font-bold text-[#999]'>품종</p>
                <select className='text-xl font-bold w-[408px]'
                onChange={optionKind}>
                {

                    //selected 가 모든 축종이면 모든 품종을 출력 : 아니라면 selecData가 참이라면 e.knm을 출력
                    selected === '모든 축종'? <option value="모든 품종">모든 품종</option> :selectData && selectData.map((e,i)=>{
                    return (
                        <option key={i} value={e.knm}>{e.knm}</option>
                    )
                    })
                }   
                </select>
          </div>
         
            <div className="flex items-center">
            <button className="font-bold w-48 h-12  bg-[#dac0a3] whitespace-nowrap hover:text-white rounded-[20px]" onClick={searchResult}
            >검색하기</button>
            </div>

        </div>
        </div>
  
            <div className="flex text-[15px] gap-y-4 flex-wrap justify-start gap-x-3">
              {

                  
defaultData.length  === 0 ? <div className='w-full text-center'><p className='text-[32px] text-[#999] font-bold'>검색결과가 없습니다.</p></div> :


                // 기본값을.map돌리고   serDefaulTdata에 Fiterall함수를 넣어 준다.
              defaultData.map((e,i)=>{
               console.log(e)
              return(
                // e.kindCd != 0 ? <p className='text-[32px] text-[#999] font-bold '>검색결과가 없습니다.</p> :
                <div className="relative box-border border border-[#f1f1ef] flex-wrap  basis-[32.5%] shadow-[4px_4px_4px_-4px_rgb(119, 112, 112)] rounded-[20px]" key={i}>

                    <Link to={`/infodetail/${e.desertionNo}`} state={{e:e}}>
                  <div className='font-bold px-3 py-3 flex items-center justify-between'>
              
                      <p><FontAwesomeIcon icon={e.sexCd === 'M'? faMars : e.sexCd === 'F'? faVenus: ""} className='w-[18px] h-[18px] pr-1 align-text-bottom'/>{e.sexCd === 'M'? "남" : e.sexCd === 'F'? "여" : "미상"} </p>
                  </div>
              <div className="h-[350px] flex ">
                  <img src={e.popfile} alt="img" className='w-full' />
              </div>

                    </Link>
              <div className="pl-[10px] py-[10px]">
                  <p className='font-bold text-[14px]'><span className= 'text-[#999]'>품종 :</span> {e.kindCd}</p>
                  <p className='font-bold text-[14px]'><span className= 'text-[#999]'>나이 :</span> {e.age} 추정</p>
                  <p className='font-bold text-[14px]'><span className= 'text-[#999]'>지역 :</span> {e.orgNm}</p>
              </div>
            </div>
                )
                }) 
            }
            </div> 
             {/* 페이지 네비 */}
        <div className="w-[1200px] my-0 mx-auto justify-center">
      <div className="mx-auto my-8 text-center">

        <ul className='flex justify-center items-center list-style-none '>

          <li   
          className='cursor-pointer w-[50px] h-[50px] rounded-full leading-10 text-cente relative block py-1.5 px-1.5 border-1 border-[#DAC0A3] mx-5
           text-black shadow-sm' onClick={PrevBlock}>이전</li>
            {PageList}
           <li  
          className='cursor-pointer w-[50px] h-[50px] rounded-full leading-10 text-cente relative block py-1.5 px-1.5 mx-5 border-1 border-[#DAC0A3]
         text-black shadow-sm focus:shadow-sm'  onClick={NextBlock}>다음</li>
        </ul>
      </div>
    </div>
    </div>
    </div>
 

  </>
  )
}

export default ImgFilter