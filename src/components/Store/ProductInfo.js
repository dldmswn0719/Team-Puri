import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faTruck } from '@fortawesome/free-solid-svg-icons';
import { setPrice } from '../../store';
import data1 from './../../data/product.json'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';


function ProductInfo() {

  const params = useParams(0);
  const data = data1[(params.id - 1)];
  const [totalCnt, setTotalCnt] = useState(0);
  const [num, setNum] = useState(Object.entries(data.option).filter(e => e[1].name === "").fill(1));
  const [selectTxt, setSelectTxt] = useState([]);
  const [isCnt, setIsCnt] = useState(false);
  const [visible, setVisible] = useState(false);
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
      if (data.option[i].count > 1) {
        decreasedCount(data.option[i]);
        setTotalCnt(totalCnt - 1);
      } else if (data.option[i].count === 1) {
        alert(messages.storealert)
        return;
      }
    } catch (error) {
      console.error("handleDecrease 에러" + error)
    }
    if (!data.option.length && totalCnt < 1) {
      alert(messages.storealert)
      return;
    }
    setTotalCnt(totalCnt - 1);
  }
  // -플러스 버튼 누르면 숫자 감소

  const handleDeleteSelectTxt = (i) => {
    const newSelectTxt = [...selectTxt];
    const indexToRemove = newSelectTxt.indexOf(data.option[i].name);
    if (indexToRemove !== -1) {
      newSelectTxt.splice(indexToRemove, 1);
    }
    setSelectTxt(newSelectTxt);

    const updatedTotalCount = totalCnt - data.option[i].count;
    data.option[i].count = 0;
    setTotalCnt(updatedTotalCount);
  };
  // X눌렀을때 옵션 각각 삭제

  useEffect(() => {
    if (data.option.length === 0) {
      setIsCnt(true);
      setSelectTxt([""])
    }
  }, [])

  //옵션이 있다면 수량 바로x, 없다면 수량 바로 뜨기

  const optionSelect = (e) => {

    if (!selectTxt.includes(e.name)) {
      return setOptionSelectNum(2)
    } else if (selectTxt.includes(e.name)) {
      alert(messages.storealert1)
      return
    }
  }
  // 이미 선택한 옵션이라면 알림창뜨기

  const SelectTxtEvent = (e, i) => {
    if (!selectTxt.includes(e.name)) {
      setSelectTxt([...selectTxt, e.name]);
      const newOption = [...num];
      newOption[i] = 1;
      setNum(newOption);
      e.count = 1;
      setTotalCnt(totalCnt + 1);
    }
  }

  useEffect(() => {
  data.option = Object.entries(data.option).map(([key, value]) => ({
    ...value,
    count: 0,
  }));
}, []);

  const language = useSelector(state => state.language);
  const messages = language === 'en' ? enMessages : krMessages;
  const navigate = useNavigate();
  const userState = useSelector(state => state.user.loggedIn);

  const handlecheckout = () =>{   

    if(!userState){
      alert(messages.storealert3)
      navigate('/login')
      return; // 사용자가 로그인하지 않았다면, 이후 코드는 실행되지 않습니다.
    }
  
    if(data.option.length === 0){
      if(totalCnt <= -1){
        alert(messages.storealert2);
        return;
      }
      // 옵션 없는것 총 상품금액이 1개이상 구매 넘기기
        
    }else{
      if(totalCnt <= 0) {
        alert(messages.storealert2);
        return;
      }
    } // 옵션 있는것 총 0개면 alert창 , 1개 이상이면 구매 넘기기
      
     navigate('/checkout');

  }

  const dispatch = useDispatch();

  useEffect(()=>{
    const totalPrice = () => {
      if(data.option.length === 0){
        return data.price * Number(parseInt(totalCnt)+1);
      }else{
        return data.price * Number(parseInt(totalCnt));
      }
    }
    
    dispatch(setPrice(totalPrice()));
  },[totalCnt])

  return (
    <>
      <div className="w-full dark:bg-[#272929] pb-[15px]">
        <div className="max-w-7xl mx-auto">
          <div className="h-auto flex overflow-hidden pt-3 flex-wrap justify-between md:pt-0">
            <div className='basis-full md:basis-1/2 lg:basis-1/2 px-4 md:py-4 lg:py-6'>
              <img src={data.imageUrl} alt={data.name} className='mx-auto' />
            </div>
            <div className='p-5 md:pl-1 basis-full md:basis-[50%] lg:basis-[50%]'>
              <p className="lg:text-xl font-medium  text-[#73b1ce] dark:text-[#ebf4f1]">{messages[`product_${params.id}`].hash}</p>
              <p className="pt-3 lg:pb-3 text-xl font-medium  lg:text-[27px] bg-white  dark:bg-[#272929]  dark:text-[#ebf4f1]">{messages[`product_${params.id}`].name}</p>
              <p className="py-3  text-3xl lg:text-4xl font-medium  dark:text-[#ebf4f1]">{(data.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{messages.won}</p>
              <p className="lg:pt-3 lg:text-xl text-[18px] font-medium dark:text-[#ebf4f1]">
                <FontAwesomeIcon icon={faTruck} className='pr-1 text-[#112731] dark:text-[#ebf4f1]'/>
                {messages.delivery}
              </p>
              <p className="py-2 lg:py-3 lg:text-xl text-[17px] font-medium dark:text-[#ebf4f1]">
                {messages.delivery_price}
              </p>
              <p className='pb-2 lg:pb-3 lg:text-[18px] text-[16px] font-medium dark:text-[#ebf4f1] text-[#999]'>{messages.deliveryplusprice}</p>
              {
                data.option.length > 0 &&
                data.option[0].name !== '' &&
                <div className="py-2 text-xl font-medium">
                  <button onClick={() => { setVisible(!visible) }} className='p-1 relative border text-[17px] text-left cursor-pointer w-full '>
                    <p className='dark:text-[#ebf4f1] pl-1'>{messages[`product_${params.id}`].option_title}</p>
                    <FontAwesomeIcon icon={faAngleUp} className={`w-6 h-6 absolute right-3 bottom-2 dark:text-[#ebf4f1] ${visible === false ? 'rotate-180' : ''}`} />
                  </button>
                  {
                    visible &&
                    Object.entries(data.option).map((e, i) => {
                      return (
                        e[1].name !== '' &&
                        <div key={i} className='text-[16px] border cursor-pointer hover:bg-[#f5f6f7] pl-2 bg-[#fff] z-[100] relative dark:text-[#ebf4f1] dark:bg-[#272929]' onClick={() => {
                          SelectTxtEvent(e[1], i); setIsCnt(true); setVisible(false); optionSelect(e[1])
                        }}>{messages[`product_${params.id}`].option[i].name}
                        </div>
                      )
                    })
                  }
                </div>
              }
              {
                isCnt &&
                Object.entries(data.option).map((_, i) => {
                  if (data.option.length > 0 && data.option[i].count > 0) {
                    return (
                      <>
                        <div className="border-b relative py-5 lg:text-[18px] font-medium" key={i}>
                          <div className='dark:text-[#ebf4f1]'>{messages[`product_${params.id}`].option[i].name}</div>
                          <div className={`text-xl flex ${params.id === "1" || params.id === "2" || params.id === "6" ? 'my-[3%]' : 'mt-[10px]'}`}>
                            <div className="flex border dark:border-none">
                              <button onClick={() => { handleDecrease(i) }} className='border bg-white dark:bg-[#404343] px-[10px] dark:text-[#f1f2f4]'>–</button>
                              <div className='border px-6 lg:px-[30px] py-1 bg-white dark:bg-[#404343] dark:text-[#f1f2f4]'>{data.option[i].count}</div>
                              <button onClick={() => { handleIncrease(i) }} className='border bg-white dark:bg-[#404343] font-bold px-[10px] dark:text-[#f1f2f4]'>+</button>
                            </div>
                            <div className="flex absolute right-0 dark:text-[#ebf4f1]">
                              <p>{(data.price * Number(data.option[i].count)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{messages.won}</p>
                              <button className='pl-2' onClick={() => { handleDeleteSelectTxt(i) }}>X</button>
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
                    <div className="border-y relative py-3 text-xl font-medium">
                      <div className={`text-xl flex ${params.id === "1" || params.id === "2" || params.id === "6" ? 'my-[3%]' : 'mt-[10px]'}`}>
                        <div className="flex my-0 border">
                          <button onClick={() => { handleDecrease(null) }} className='border bg-white dark:bg-[#f1f2f4] px-[10px]'>–</button>
                          <div className='border px-[30px] py-1 bg-white dark:bg-[#f1f2f4]'>{totalCnt + 1}</div>
                          <button onClick={() => { handleIncrease(null) }} className='border bg-white dark:bg-[#f1f2f4] font-bold px-[10px]'>+</button>
                        </div>
                      </div>
                    </div>
                </>
              }
              <div className="flex justify-between font-medium">
                {
                  data.option.length === 0 ?
                    <>
                      <p className='text-[17px] py-5  text-[#404040b3] dark:text-[#ebf4f1]'>{messages.totalamountofgoods}({parseInt(totalCnt) + 1}{messages.ea}) </p>
                      <p className="text-[26px] py-5  text-[#102C57] dark:text-[#ebf4f1]">{(data.price * Number(parseInt(totalCnt) + 1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{messages.won}</p>
                    </>
                    :
                    <>
                      <p className='text-[17px] py-5  text-[#404040b3] dark:text-[#ebf4f1]'>{messages.totalamountofgoods}({parseInt(totalCnt)}{messages.ea}) </p>
                      <p className="text-[26px] py-5  text-[#102C57] dark:text-[#ebf4f1]">{(data.price * Number(parseInt(totalCnt))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{messages.won}</p>
                    </>
                }
              </div>
              <div onClick={handlecheckout} className="bg-[#86bcd5] cursor-pointer text-[21px] text-center text-white leading-[45px] dark:text-[#ebf4f1] dark:bg-[#404343]">
                <p>{messages.buying}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo