import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import data1 from './../../data/product.json'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function ProductInfo() {

    const params = useParams(0);
    const data = data1[(params.id-1)];
    const [totalCnt,setTotalCnt] = useState(0);
    const [num,setNum] = useState(Object.entries(data.option).filter(e => e[1].name === "").fill(1));
    const [selectTxt,setSelectTxt] = useState([]);
    const [isCnt,setIsCnt] = useState(false);
    const [visible,setVisible] = useState(false);
    //옵션버튼 눌러서 더 보이기
    const [optionSelectNum, setOptionSelectNum] = useState(1)
    //옵션 여러개 추가하기위해서

    const decreasedCount = (item) => {
      item.count -= 1;
      return item.count;
    }
    //옵션있는것 수량감소
    const updatedCount = (item) => {
      item.count += 1;
      return item.count;  
    }
    //옵션있는것 수량증가

    const handleIncrease = (i) => {
      try {
        updatedCount(data.option[i]);
      } catch (error) {
        console.error("handleIncrease 함수 에러 " + error);
      }
      setTotalCnt(totalCnt + 1);        

    }; 
    // +플러스 버튼 누르면 숫자 증가

    const handleDecrease = (i) => {
      try {
        if(data.option[i].count > 1){
          decreasedCount(data.option[i]);
        }else if(data.option[i].count < 2){
          alert("최소 주문 수량은 1개입니다.")
          return;
        }
      } catch (error) {
        console.error("handleDecrease 에러" + error)
      }
      if(!data.option.length && totalCnt < 1){
        alert("최소 주문 수량은 1개입니다.")
        return;
      }
      setTotalCnt(totalCnt - 1);
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

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <>
            <div className="w-full dark:bg-[#272929] pb-[15px]">
                <div className="max-w-7xl mx-auto">
                    <div className="h-auto flex overflow-hidden pt-8 flex-wrap justify-between">
                            <div className='basis-full md:basis-[50%] py-6 px-4'>
                                <img src={data.imageUrl} alt={data.name} className='mx-auto' />
                            </div>
                        <div className='basis-full md:basis-[50%]'>
                            <p className="p-5 text-xl font-medium bg-white  dark:bg-[#272929]  dark:text-[#ebf4f1]">{messages[`product_${params.id}`].name}</p>
                            <p className="max-w-auto mx-5 text-xl font-medium bg-[#EADBC8] dark:text-[#ebf4f1] dark:bg-[#404343]">{messages[`product_${params.id}`].hash}</p>
                            <p className="p-5 text-4xl font-medium text-[#102C57] dark:text-[#ebf4f1]">{(data.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{messages.won}</p>
                            <p className="px-5 py-3 text-xl font-medium dark:text-[#ebf4f1]">{messages.delivery}</p>
                            <p className="px-5 py-3 text-xl font-medium dark:text-[#ebf4f1]">{messages.delivery_price}</p>
                            {
                                data.option.length > 0 &&
                                data.option[0].name !== '' &&
                                    <div className="p-5 text-xl font-medium">
                                        <button onClick={()=>{setVisible(!visible)}} className='p-1 relative border text-[17px] text-left cursor-pointer w-full '>
                                            <p className='dark:text-[#ebf4f1] pl-1'>{messages[`product_${params.id}`].option_title}</p>
                                            <FontAwesomeIcon icon={faAngleUp} className={`w-6 h-6 absolute right-3 bottom-2 dark:text-[#ebf4f1] ${visible === false ? 'rotate-180': ''}`} />
                                        </button>
                                            {
                                            visible &&
                                            Object.entries(data.option).map((e,i)=>{
                                                return (
                                                e[1].name !== '' &&
                                                <div key={i} className='text-[16px] border cursor-pointer hover:bg-[#f5f6f7] pl-2 bg-[#fff] z-[100] relative dark:text-[#ebf4f1] dark:bg-[#272929]' onClick={()=>{
                                                    SelectTxtEvent(e[1], i); setIsCnt(true); setVisible(false); optionSelect(e[1])}}>{e[1]['name']}
                                                </div> 
                                                )
                                            })
                                            }
                                    </div>
                            }

                            {/* 2개이상의 메뉴가있는 경우, */}
                            {
                                isCnt &&
                                Object.entries(data.option).map((_, i) => {
                                    if (data.option.length > 0 && data.option[i].count > 0){               
                                        return (
                                            <>
                                                <div className="border-b relative p-5 text-xl font-medium" key={i}>
                                                    <div className='dark:text-[#ebf4f1]'>{messages[`product_${params.id}`].option[i].name}</div>
                                                    <div className={`text-xl flex ${params.id === "1" || params.id === "2" || params.id === "6" ? 'my-[3%]' : 'mt-[10px]'}`}>
                                                    <div className="flex my-0 border">
                                                        <button onClick={()=>{handleDecrease(i)}} className='border bg-white dark:bg-[#f1f2f4] px-[10px]'>–</button>
                                                        <div className='border px-[30px] py-1 bg-white dark:bg-[#f1f2f4]'>{data.option[i].count}</div>
                                                        <button onClick={()=>{handleIncrease(i)}} className='border bg-white dark:bg-[#f1f2f4] font-bold px-[10px]'>+</button>
                                                    </div>
                                                        <div className="flex absolute right-0 dark:text-[#ebf4f1]">
                                                        <p>{(data.price * Number(data.option[i].count)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{messages.won}</p>
                                                        <button className='pl-2' onClick={()=>{handleDeleteSelectTxt(i)}}>X</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )                      
                                    }
                                })
                            }
                            {
                                isCnt &&
                                !data.option.length &&
                                    <>
                                        <div className="border-y relative px-5 py-3 text-xl font-medium">
                                            <div className={`text-xl flex ${params.id === "1" || params.id === "2" || params.id === "6" ? 'my-[3%]' : 'mt-[10px]'}`}>
                                            <div className="flex my-0 border">
                                                <button onClick={()=>{handleDecrease(null)}} className='border bg-white dark:bg-[#f1f2f4] px-[10px]'>–</button>
                                                <div className='border px-[30px] py-1 bg-white dark:bg-[#f1f2f4]'>{totalCnt + 1}</div>
                                                <button onClick={()=>{handleIncrease(null)}} className='border bg-white dark:bg-[#f1f2f4] font-bold px-[10px]'>+</button>
                                            </div>
                                            </div>
                                        </div>
                                    </>
                            }
                            <div className="flex justify-between">
                                {
                                    data.option.length === 0 ?
                                        <>
                                            <p className='text-[17px] p-5 font-medium text-[#404040b3] dark:text-[#ebf4f1]'>{messages.totalamountofgoods}({ parseInt(totalCnt)+1}{messages.ea}) </p>
                                            <p className="text-[26px] p-5 font-medium text-[#102C57] dark:text-[#ebf4f1]">{(data.price * Number(parseInt(totalCnt)+1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{messages.won}</p>
                                        </>
                                            :
                                        <>
                                            <p className='text-[17px] p-5 font-medium text-[#404040b3] dark:text-[#ebf4f1]'>{messages.totalamountofgoods}({parseInt(totalCnt)}{messages.ea}) </p>
                                            <p className="text-[26px] p-5 font-medium text-[#102C57] dark:text-[#ebf4f1]">{(data.price * Number(parseInt(totalCnt))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{messages.won}</p>
                                        </>
                                }
                            </div>
                            <div className="mx-auto p-5">
                                <div className="basis-full h-[45px] bg-[#DAC0A3] cursor-pointer text-[21px] text-center text-white leading-[45px] dark:text-[#ebf4f1] dark:bg-[#404343]">
                                    <p>{messages.buying}</p>
                                </div>
                                {/* <div className="flex sm:flex-wrap md:flex-wrap">
                                <div className="w-60 h-[45px] bg-[#EADBC8] cursor-pointer mt-5 mr-[15px] text-[21px] text-center text-white leading-[45px] dark:text-[#ebf4f1] dark:bg-[#404343]">
                                    <p>장바구니</p>
                                </div>
                                <div className="w-60 h-[45px] bg-[#EADBC8] cursor-pointer mt-5 text-[21px] text-center text-white leading-[45px] dark:text-[#ebf4f1] dark:bg-[#404343]">
                                    <p className='text-[18px]'>
                                    <FontAwesomeIcon icon={faHeart} /> 찜하기</p>
                                </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo