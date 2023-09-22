import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import data1 from './../../data/product.json'
import { useParams } from 'react-router-dom'

function Intro() {
    const params = useParams(0);
    const data = data1[(params.id-1)];

    const [totalCnt,setTotalCnt] = useState(0);
    const [num,setNum] = useState(Object.entries(data.option).filter(e => e[1] !== "").fill(1));
    //옵션 수량증가
    const [selectTxt,setSelectTxt] = useState([]);
    const [isCnt,setIsCnt] = useState(false);
    const [visible,setVisible] = useState(false);
    //옵션버튼 눌러서 더 보이기
    const [optionSelectNum, setOptionSelectNum] = useState(1)
    //옵션 여러개 추가하기위해서

    const handleIncrease = (i) => {
      const newOption = [...num];
      newOption[i] = newOption[i] + 1;  
      setNum(newOption)

      setTotalCnt(totalCnt + 1);
    };
    // +플러스 버튼 누르면 숫자 증가

    const handleDecrease = (i) => {
      const newOption = [...num];
      if(newOption[i] > 0){
        newOption[i] = newOption[i] - 1;
        setNum(newOption);

        setTotalCnt(totalCnt -1);
      }
    }
    // -플러스 버튼 누르면 숫자 감소

    const handleDeleteSelectTxt = (i) => {
      const newSelectTxt = [...selectTxt];
      newSelectTxt.splice(i, 1);
      setSelectTxt(newSelectTxt);

      setTotalCnt(totalCnt - 1);
    };
    // X눌렀을때 옵션 각각 삭제

    useEffect(()=>{
      if(data.option_title === ''){
        setIsCnt(true);
        setSelectTxt([""])
      }
    }, [])
    //옵션이 있다면 수량 바로x, 없다면 수량 바로 뜨기

    const optionSelect = (e)=>{
      for(let i = 0; i < optionSelectNum; i++){
        if(isCnt && !selectTxt.includes(e)){
          return setOptionSelectNum(2)
        }else if(selectTxt.includes(e)){
          alert("이미 선택한 옵션입니다.")
          return
        }
      }
    }
    // 이미 선택한 옵션이라면 알림창뜨기

    const SelectTxtEvent = (e)=>{
      if(!selectTxt.includes(e)){
        setSelectTxt([...selectTxt, e].reverse());
        setTotalCnt(totalCnt + 1);
      }
    } 

    //고치기 : 수량 이상함, 삭제버튼 누르면 개수 그대로 내려옴

    return (
      <>
        <div className="w-full dark:bg-[#272929] pb-[15px]">
          <div className="w-[1200px] my-0 mx-auto">
            <div className="pt-[50px] flex items-start">
              <img src={data.imageUrl} alt={data.name} className='w-[650px] ' />
              <div className='ml-10'>
                <p className="text-xl font-medium dark:text-[#ebf4f1]">{data.name}</p>
                <p className={`text-xl font-medium bg-[#EADBC8] mt-[15px] dark:text-[#ebf4f1] dark:bg-[#404343] ${params.id === "4" || params.id === "5" || params.id === "6" ? 'w-[310px]' : 'w-[358px]'}`}>{data.hash}</p>
                <p className="font-medium my-[30px] mx-0 text-[35px] text-[#102C57] dark:text-[#ebf4f1]">{(data.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                <p className="text-xl font-medium dark:text-[#ebf4f1]">{data.delivery}</p>
                <p className="text-xl font-medium mb-[23px] dark:text-[#ebf4f1]">{data.delivery_price}</p>
                {
                  data.option.option_value_1 !== '' &&
                  <div className="text-xl mr-20 flex mt-[20px]">
                    <div className="mb-4">
                      <button onClick={()=>{setVisible(!visible)}} className='relative w-[470px] h-[40px] border text-[17px] text-left cursor-pointer'>
                        <p className='ml-2 dark:text-[#ebf4f1]'>{data.option_title}</p>
                        <img src='./../images/Store/arrow_top.png' className={`w-[17px] absolute right-3 bottom-2 ${visible === false ? 'rotate-180': ''}`}/>
                      </button>
                      <div>
                        {
                          visible &&
                          Object.entries(data.option).map((e,i)=>{
                            return (
                              e[1] !== '' &&
                              <div key={i} className='text-[16px] border cursor-pointer hover:bg-[#f5f6f7] pl-2 bg-[#fff] z-[100] relative dark:text-[#ebf4f1] dark:bg-[#272929]' onClick={()=>{
                                SelectTxtEvent(e[1], i); setIsCnt(true); setVisible(false); optionSelect(e[1])}}>{e[1]}
                              </div> 
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                }
                {
                  isCnt &&
                  Array(selectTxt.length).fill().map((_,i)=>{
                    return (
                      <>
                        <div className="border-y py-5 w-[470px] relative" key={i}>
                          <div>{selectTxt[i]}</div>
                          <div className={`text-xl flex ${params.id === "1" || params.id === "2" || params.id === "6" ? 'my-[3%]' : 'mt-[10px]'}`}>
                            <div className="flex my-0 border">
                              <button onClick={()=>{handleDecrease(i)}} className='border bg-[#f1f2f4] px-[10px]'>–</button>
                              <div className='border px-[30px] py-1 bg-[#f1f2f4]'>{num[i]}</div>
                              <button onClick={()=>{handleIncrease(i)}} className='border bg-[#f1f2f4] font-bold px-[10px]'>+</button>
                            </div>
                            {
                              data.option.option_value_1 !== '' &&
                              <div className="flex absolute right-0">
                                <p>{(data.price * Number(num[i])).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                                <button className='pl-4' onClick={handleDeleteSelectTxt}>X</button>
                              </div>
                            }
                          </div>
                        </div>
                      </>
                    )
                  })
                }
                <div>
                  <div className="my-[18px] flex justify-between">
                    <p className='text-[17px] text-[#404040b3] dark:text-[#ebf4f1]'>총 상품 금액({totalCnt}개) </p>
                    <p className="text-[26px] text-right mr-[13%] font-medium text-[#102C57] dark:text-[#ebf4f1]">{(data.price * Number(totalCnt)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-[495px] h-[45px] bg-[#DAC0A3] cursor-pointer text-[21px] text-center text-white leading-[45px] dark:text-[#ebf4f1] dark:bg-[#404343]">
                      <p>구매하기</p>
                    </div>
                    <div className="w-60 h-[45px] bg-[#EADBC8] cursor-pointer mt-5 mr-[15px] text-[21px] text-center text-white leading-[45px] dark:text-[#ebf4f1] dark:bg-[#404343]">
                      <p>장바구니</p>
                    </div>
                    <div className="w-60 h-[45px] bg-[#EADBC8] cursor-pointer mt-5 text-[21px] text-center text-white leading-[45px] dark:text-[#ebf4f1] dark:bg-[#404343]">
                      <p className='text-[18px]'>
                        <FontAwesomeIcon icon={faHeart} /> 찜하기</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Intro