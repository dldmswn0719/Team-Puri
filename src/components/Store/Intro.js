import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import data1 from './../../data/product.json'
import { useParams } from 'react-router-dom'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Intro() {
    const params = useParams(0);
    const data = data1[(params.id-1)];
    const [totalCnt,setTotalCnt] = useState(0);
    const [num,setNum] = useState(Object.entries(data.option).filter(e => e[1].name === "").fill(1));

    const decreasedCount = (item) => {
      item.count -= 1;
      return item.count;
    }
    const updatedCount = (item) => {
      item.count += 1;
      return item.count;  
    }
     
    //옵션 수량증가
    const [selectTxt,setSelectTxt] = useState([]);
    const [isCnt,setIsCnt] = useState(false);
    const [visible,setVisible] = useState(false);
    //옵션버튼 눌러서 더 보이기
    const [optionSelectNum, setOptionSelectNum] = useState(1)
    //옵션 여러개 추가하기위해서

    const handleIncrease = (i) => {
      updatedCount(data.option[i]);
      setTotalCnt(totalCnt + 1);
    }; // +플러스 버튼 누르면 숫자 증가

    const handleDecrease = (i) => {
      if(data.option[i].count > 1){
        decreasedCount(data.option[i]);
        setTotalCnt(totalCnt - 1);
      }else if(data.option[i].count < 2){
        alert("최소 주문 수량은 1개입니다.")
      }
    }
    // -플러스 버튼 누르면 숫자 감소

    const handleDeleteSelectTxt = (i) => {
      const newSelectTxt = [...selectTxt];
      const indexToRemove = newSelectTxt.indexOf(data.option[i].name);
      if (indexToRemove !== -1){
        newSelectTxt.splice(indexToRemove, 1); 
      }
      setSelectTxt(newSelectTxt);
    
      const updatedTotalCount = totalCnt - data.option[i].count;
      data.option[i].count = 0;
      setTotalCnt(updatedTotalCount);

    };
    // X눌렀을때 옵션 각각 삭제

    useEffect(()=>{
      if(data.option.length === 0){
        setIsCnt(true);
        setSelectTxt([""])
      }
    }, [])
    //옵션이 있다면 수량 바로x, 없다면 수량 바로 뜨기

    const optionSelect = (e)=>{

      if(!selectTxt.includes(e.name)){
        return setOptionSelectNum(2)
      }else if(selectTxt.includes(e.name)){
        alert("이미 선택한 옵션입니다.")
        return
      }
      
    }
    // 이미 선택한 옵션이라면 알림창뜨기

    const SelectTxtEvent = (e, i)=>{

      if(!selectTxt.includes(e.name)){
        setSelectTxt([...selectTxt, e.name]);
        
        const newOption = [...num];
        newOption[i] = 1;
        
        setNum(newOption);

        e.count = 1;      
        setTotalCnt(totalCnt + 1);
      }
    } 


    return (
      <>
        <div className="w-full dark:bg-[#272929] pb-[15px]">
          <div className="lg:max-w-[1200px] my-0 mx-auto">
            <div className="pt-[50px] lg:flex items-start">
              <img src={data.imageUrl} alt={data.name} className='lg:w-[650px] w-[570px] mx-auto' />
              <div className='lg:ml-10 ml-10 pt-5 md:ml-[12%]'>
                <p className="text-xl font-medium dark:text-[#ebf4f1]">{data.name}</p>
                <p className={`text-xl font-medium bg-[#EADBC8] mt-[15px] dark:text-[#ebf4f1] dark:bg-[#404343] ${params.id === "4" || params.id === "5" || params.id === "6" ? 'w-[310px]' : 'w-[358px]'}`}>{data.hash}</p>
                <p className="font-medium my-[30px] mx-0 text-[35px] text-[#102C57] dark:text-[#ebf4f1]">{(data.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                <p className="text-xl font-medium dark:text-[#ebf4f1]">{data.delivery}</p>
                <p className="text-xl font-medium mb-[23px] dark:text-[#ebf4f1]">{data.delivery_price}</p>
                {
                  data.option.length > 0 &&
                  data.option[0].name !== '' &&
                  <div className="text-xl mr-20 flex mt-[20px]">
                    <div className="mb-4">
                      <button onClick={()=>{setVisible(!visible)}} className='relative w-[470px] h-[40px] border text-[17px] text-left cursor-pointer'>
                        <p className='ml-2 dark:text-[#ebf4f1]'>{data.option_title}</p>
                        <FontAwesomeIcon icon={faAngleUp} className={`w-6 h-6 absolute right-3 bottom-2 dark:text-[#ebf4f1] ${visible === false ? 'rotate-180': ''}`} />
                      </button>
                      <div>
                        {
                          visible &&
                          Object.entries(data.option).map((e,i)=>{
                            return (
                              e[1]['name'] !== '' &&
                              <div key={i} className='text-[16px] border cursor-pointer hover:bg-[#f5f6f7] pl-2 bg-[#fff] z-[100] relative dark:text-[#ebf4f1] dark:bg-[#272929]' onClick={()=>{
                                SelectTxtEvent(e[1], i); setIsCnt(true); setVisible(false); optionSelect(e[1])}}>{e[1]['name']}
                              </div> 
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                }
                {/* 2개이상의 메뉴가있는 경우, */}
                {
                  isCnt &&
                  Array(data.option.length).fill().map((_, i) => {
                    if (data.option[i].count > 0){
                      return (
                        <>
                          <div className="border-y py-5 lg:w-[500px] sm:w-[550px] relative" key={i}>
                            <div className='dark:text-[#ebf4f1]'>{data.option[i].name}</div>
                            <div className={`text-xl flex ${params.id === "1" || params.id === "2" || params.id === "6" ? 'my-[3%]' : 'mt-[10px]'}`}>
                              <div className="flex my-0 border">
                                <button onClick={()=>{handleDecrease(i)}} className='border bg-white dark:bg-[#f1f2f4] px-[10px]'>–</button>
                                <div className='border px-[30px] py-1 bg-white dark:bg-[#f1f2f4]'>{data.option[i].count}</div>
                                <button onClick={()=>{handleIncrease(i)}} className='border bg-white dark:bg-[#f1f2f4] font-bold px-[10px]'>+</button>
                              </div>
                              {
                                data.option[0]["name"] !== "" &&
                                <div className="flex absolute right-0 dark:text-[#ebf4f1]">
                                  <p>{(data.price * Number(data.option[i].count)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                                  <button className='pl-4' onClick={()=>{handleDeleteSelectTxt(i)}}>X</button>
                                </div>
                              }
                            </div>
                          </div>
                        </>
                      )                      
                    }
                  })
                }
                <div>
                  <div className="my-[18px] flex justify-between">
                    {
                      data.option.length === 0 ?
                      <>
                        <p className='text-[17px] text-[#404040b3] dark:text-[#ebf4f1]'>총 상품 금액({ parseInt(totalCnt)+1}개) </p>
                        <p className="text-[26px] md:mr-[16%] text-right mr-[11%] font-medium text-[#102C57] dark:text-[#ebf4f1]">{(data.price * Number(parseInt(totalCnt)+1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                      </>
                        :
                      <>
                        <p className='text-[17px] text-[#404040b3] dark:text-[#ebf4f1]'>총 상품 금액({parseInt(totalCnt)}개) </p>
                        <p className="text-[26px] md:mr-[16%] text-right mr-[11%] font-medium text-[#102C57] dark:text-[#ebf4f1]">{(data.price * Number(parseInt(totalCnt))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                      </>
                    }
                  </div>
                  <div className="flex flex-wrap w-[550px] mx-auto md:mr-[13%]">
                    <div className="w-[495px] h-[45px] bg-[#DAC0A3] cursor-pointer text-[21px] text-center text-white leading-[45px] dark:text-[#ebf4f1] dark:bg-[#404343]">
                      <p>구매하기</p>
                    </div>
                    <div className="flex sm:flex-wrap md:flex-wrap">
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
        </div>
      </>
    )
}

export default Intro