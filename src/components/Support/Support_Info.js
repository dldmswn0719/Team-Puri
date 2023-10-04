import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import "./../../../src/index.css"
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';
import { useSelector } from 'react-redux';
import Modal from '../Modal'


function Support_Info() {
  
  const language = useSelector(state => state.language);
  const messages = language === 'en' ? enMessages : krMessages;
  const view = useParams()
  const [isModal, setIsModal] = useState(view ? false : true)
  const memberProfile = useSelector(state => state.user)

  const NumChk = (e)=>{
    return e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const Hyphen = (e)=>{
    return e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/\B(?=(\d{4})+(?!\d))/g, '-');
  }
  const Num = (e)=>{
    return e.target.value = e.target.value.replace(/[^0-9.]/g, '');
  }

  const [isActive, setIsActive] = useState(true)
  const [Active, setActive] = useState(false)
  const [solo, setSolo] = useState(true)
  const [buisness, setBuisness] = useState(false)
  const [card, setCard] = useState(true)
  const [money, setMoney] = useState(-1)
  const navigate = useNavigate();

  const formChk = ()=>{
      if(document.querySelector(".name").value === "" || document.querySelector(".name").value === null){
        alert(messages.supportpay1);
        document.querySelector(".name").focus();
        return;
      }
      if(document.querySelector(".middle-nb").value === "" || document.querySelector(".name").value === null){
        alert(messages.supportpay2);
        document.querySelector(".middle-nb").focus();
        return;
      }
      if(document.querySelector(".end-nb").value === "" || document.querySelector(".name").value === null){
        alert(messages.supportpay3);
        document.querySelector(".end-nb").focus();
        return;
      }
      if(document.querySelector(".e-mail").value === "" || document.querySelector(".name").value === null){
        alert(messages.supportpay4);
        document.querySelector(".e-mail").focus();
        return;
      }
      if(document.querySelector(".card-nb").value === "" || document.querySelector(".name").value === null){
        alert(messages.supportpay5);
        document.querySelector(".card-nb").focus();
        return;
      }
      if(document.querySelector(".card-nb").value.length !== 19){
        alert(messages.supportpay6);
        document.querySelector(".card-nb").focus();
        return;
      }
      if(document.querySelector(".month").value === "" || document.querySelector(".name").value === null){
        alert(messages.supportpay7);
        document.querySelector(".month").focus();
        return;
      }
      if(document.querySelector(".year").value === "" || document.querySelector(".name").value === null){
        alert(messages.supportpay8);
        document.querySelector(".year").focus();
        return;
      }
      if(document.querySelector(".card-name").value === "" || document.querySelector(".name").value === null){
        alert(messages.supportpay9);
        document.querySelector(".card-name").focus();
        return;
      }
      if(document.querySelector(".birth").value === "" || document.querySelector(".name").value === null){
        alert(messages.supportpay10);
        document.querySelector(".birth").focus();
        return;
      }
      if(document.querySelector(".password").value === "" || document.querySelector(".name").value === null){
        alert(messages.supportpay11);
        document.querySelector(".password").focus();
        return;
      }

      navigate('/paycomplete')    
  }
  if(!memberProfile.loggedIn){
    return(
      <>
        isModal && <Modal error="로그인 이후 이용해주시기 바랍니다!" onClose={()=>{setIsModal(false); navigate('/login')}} />
      </>
    )
  }

  const checkedAll = (e)=>{
    if(e.target.checked === true){
      document.querySelectorAll("input[type='checkbox']").forEach((el)=>{
        el.setAttribute("checked", "true")
      })
      
    }else{
      document.querySelectorAll("input[type='checkbox']").forEach((el)=>{
        el.removeAttribute("checked") 
      })  
    }
  }
  
  return (
    <>
        <div className="full w-full max-lg:bg-none">
            <div className="w-[545px] ml-[150px] pt-[50px] max-lg:w-11/12  max-lg:mx-auto max-md:w-11/12">
              <NavLink to='/'><img src="./../../Images/Support/logo.png" alt="로고" className='mb-[50px]' /></NavLink>
              <div className="w-[500px] h-[225px] relative info max-lg:w-full max-lg:h-[190px] max-md:w-full">
                <ul className="w-full h-[155px] bg-[#f8f0e5] flex justify-around items-center max-lg:h-[120px] py-4">
                  <li className="">
                    <p className='h-[72px] font-bold text-xl max-lg:flex max-lg:items-center'>{messages.supportpay1_1}</p>
                  </li>
                  <li className="">
                    <p>
                    {messages.supportpay1_2} <br />
                    {messages.supportpay1_3}<br /> {messages.supportpay1_4}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-[500px] relative py-[50px] info  max-lg:w-full">
                <p className="mb-[30px] text-xl font-bold">{messages.supportpay1_1}</p>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center whitespace-nowrap"><p className=''>{messages.supportpay1_5}</p></li>
                  <div className="w-[70%] flex gap-x-5">
                    <li className={`cursor-pointer w-[49%] h-[43px] bg-[#f8f0e5] flex justify-center items-center max-md:w-[47%] ${isActive === true ? "color" : ""}`}  onClick={()=>{setIsActive(!isActive);setActive(false)}}><p>{messages.supportpay1_6}</p></li>
                    <li className={`cursor-pointer w-[49%] h-[43px] bg-[#f8f0e5] flex justify-center items-center max-md:w-[47%] ${Active === true ? "color" : ""}`}  onClick={()=>{setActive(!Active);setIsActive(false)}}><p>{messages.supportpay1_7}</p></li>
                  </div>
                </ul>
                <ul className="flex justify-between w-full">
                  <li className="w-[30%] h-[30px] flex whitespace-nowrap"><p className='max-md:text-[15px]'>{messages.supportpay1_8}</p></li>
                  <div className="w-[70%] h-[100px] flex gap-x-[15px] flex-wrap ">
                    {
                      Array(5).fill().map((e,i)=>{
                        return (
                          <li key={i} className={`w-[30.4%] max-lg:w-[31.2%] max-md:w-[29.1%] h-[40px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === i ? "color" : ""}`} onClick={()=>{setMoney(i)}}><p>{i+1}0,000{messages.won}</p></li>
                        )
                      })
                    }
                    <li className="w-[30.4%] flex max-lg:w-[31.2%] max-md:w-[29.1%]" onClick={()=>{setMoney(money === false ? true : false)}}><input type="text" placeholder={messages.supportpay1_9} onInput={NumChk}  className='w-full h-[40px] flex justify-center items-center text-center border-[1px] border-black' maxLength={11} /></li> 
                    {/* <li className={`w-[105px] h-[30px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === true ? "color" : ""}`} onClick={()=>{setMoney(money === false ? true : false)}}><p>10,000원</p></li>
                    <li className={`w-[105px] h-[30px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === true ? "color" : ""}`} onClick={()=>{setMoney(money === false ? true : false)}}><p>20,000원</p></li>
                    <li className={`w-[105px] h-[30px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === true ? "color" : ""}`} onClick={()=>{setMoney(money === false ? true : false)}}><p>30,000원</p></li>
                    <li className={`w-[105px] h-[30px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === true ? "color" : ""}`} onClick={()=>{setMoney(money === false ? true : false)}}><p>40,000원</p></li>
                    <li className={`w-[105px] h-[30px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === true ? "color" : ""}`} onClick={()=>{setMoney(money === false ? true : false)}}><p>50,000원</p></li>
                    <li className="" onClick={()=>{setMoney(money === false ? true : false)}}><input type="text" placeholder="직접입력"  onInput={NumChk}  className='w-[101px] h-[28px] flex justify-center items-center text-center border-[1px] border-black' /></li> */}
                  </div>
                </ul>
              </div>
              <div className="w-[500px] relative py-[50px] info  max-lg:w-full">
                <p className='text-xl mb-[30px] font-bold'>개인정보</p>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className='w-[30%] h-[43px] flex items-center whitespace-nowrap'><p>구분</p></li>
                  <div className="w-[70%] flex gap-x-5">
                    <li className={`w-[49%] cursor-pointerh-[43px] bg-[#f8f0e5] flex justify-center items-center ${solo === true ? "color" : ""}`} onClick={()=>{setSolo(!solo);setBuisness(false)}}><p>개인</p></li>
                    <li className={`cursor-pointer w-[49%] h-[43px] bg-[#f8f0e5] flex justify-center items-center ${buisness === true ? "color" : ""}`} onClick={()=>{setBuisness(!buisness);setSolo(false)}}><p>단체(사업자)</p></li>
                  </div>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center whitespace-nowrap" ><p>{buisness === true ? "단체(사업자명)" : "이름"}</p></li>
                  <li className='w-[70%]'><input type="text"  className='name w-full h-[43px] text-[18px] text-center border-[1px] border-black' /></li>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center whitespace-nowrap"><p>전화번호</p></li>
                  <div className="flex w-[70%] gap-x-[15px]">
                    <li className="w-[31.5%] max-md:w-[30%]">
                      <select className='flex flex-wrap w-full h-10 border-[1px] border-black text-center text-[17px]'>
                        <option value="0">010</option>
                        <option value="1">011</option>
                        <option value="2">016</option>
                        <option value="3">017</option>
                        <option value="4">018</option>
                        <option value="5">019</option>
                      </select>
                    </li>
                    <li className="w-[31.5%]"><input type="text" className='middle-nb w-full h-10 border-[1px] border-black text-center text-[17px]' maxLength={4} onInput={Num} /></li>
                    <li className="w-[31.4%]"><input type="text" className='end-nb w-full h-10 border-[1px] border-black text-center text-[17px]' maxLength={4} onInput={Num} /></li>
                  </div>
                </ul>
                <ul className="w-full flex justify-between">
                  <li className="w-[30%] h-[43px] flex items-center whitespace-nowrap"><p>이메일</p></li>
                  <li className="w-[70%]"><input type="email" className='e-mail w-full h-10 border-[1px] border-black text-center text-[18px]' /></li>
                </ul>
              </div>
              <div className="w-[500px] relative py-[50px] info  max-lg:w-full">
                <p className="text-xl mb-[30px] font-bold">결제정보</p>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center whitespace-nowrap"><p>결제수단</p></li>
                  <div className="w-[70%] h-[43px]">
                    <li className={`w-[49%] h-full bg-[#f8f0e5] flex justify-center items-center cursor-pointer ${card === true ? "color" : ""}`} onClick={()=>setCard(card === false ? true : false)}><p>신용카드</p></li>
                  </div>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center whitespace-nowrap"><p>카드번호</p></li>
                  <li className="w-[70%]"><input type="text"  className='card-nb w-full h-10 border-[1px] border-black text-center text-[18px]' onInput={Hyphen} maxLength={19} /></li>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center whitespace-nowrap"><p>유효기간</p></li>
                  <div className="w-[70%] flex gap-x-5">
                    <li className="w-[49%]"><input type="text" placeholder='MM' maxLength={2}  className='month w-full h-10 border-[1px] border-black text-center text-[18px]' onInput={Num} /></li>
                    <li className="w-[49%]"><input type="text" placeholder='YY' maxLength={2}  className='year w-full h-10 border-[1px] border-black text-center text-[18px]' onInput={Num} /></li>
                  </div>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center whitespace-nowrap"><p>카드주명</p></li>
                  <li className="w-[70%]"><input type="text" className='card-name w-full h-10 border-[1px] border-black text-center text-[18px]' /></li>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center whitespace-nowrap"><p>생년월일</p></li>
                  <li className="w-[70%]"><input type="text" onInput={Num} maxLength={buisness === true ? 10 : 6} placeholder='주민번호 앞 6자리(또는 사업자번호)' className='birth w-full h-10 border-[1px] border-black text-center text-[18px]' /></li>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center whitespace-nowrap"><p>비밀번호</p></li>
                  <li className="w-[70%]"><input type="text" onInput={Num} maxLength={2} placeholder='카드 비밀번호 앞 2자리' className='password w-full h-10 border-[1px] border-black text-center text-[18px]' /></li>
                </ul>
                <ul className='w-full flex justify-between mb-[25px]' style={{display: Active === true ? "flex" : "none"}}>
                  <li className="w-[30%] h-[43px] flex items-center whitespace-nowrap"><p>결제일</p></li>
                  <div className="w-[70%] h-[43px] relative">
                    <select className='w-[49%] h-10 text-center text-[17px] border-[1px] border-black'>
                      <option value="0">매월 10일</option>
                      <option value="1">매월 20일</option>
                      <option value="2">매월 30일</option>
                    </select>
                  </div>
                </ul>
                <ul className="w-full block bg-[#f8f0e5] py-[30px] pl-5">
                  <li className='font-bold mb-[10px]'><p>[출금정책 안내]</p></li>
                  <li className='text-[13px] mb-[5px]'><p>* 일시후원은 당일 바로 결제됩니다.</p></li>
                  <li className='text-[13px] mb-[5px]'><p>* 정기출금일은 매월 10, 20, 30일입니다.</p></li>
                  <li className='text-[13px] mb-[5px]'><p>* 첫 후원금은 지정일이 아닌 가까운 정기출금일에 출금될 수 있습니다.</p></li>
                  <li className='text-[13px] mb-[5px] text-[#a37541]'><p>예) 지정일은 10일이나 첫 후원금은 30일에 출금</p></li>
                  <li className='text-[13px] mb-[5px]'><p>* 지정일에 미출금된 경우 다음달에 합산 출금될 수 있습니다.</p></li>
                  <li className='text-[13px] mb-[5px] text-[#a37541]'><p>예) 5월분 1만원의 미출금으로 6월에 5,6월분 합계인 2만원이 출금</p></li>
                </ul>
              </div>
              <div className="py-[50px] relative w-[500px]  max-lg:w-full">
                <div className="mb-[30px]">
                  <input type="checkbox" id='all' onInput={checkedAll} />
                  <label htmlFor='all' className='ml-2' >전체 동의하기</label>
                </div>
                <div className="mb-[10px]">
                  <input type="checkbox" id='use' />
                  <label htmlFor='use' className='ml-2' >[필수] 이용약관 동의<NavLink to='/'>[보기]</NavLink></label>
                </div>
                <div className="mb-[10px]">
                  <input type="checkbox" id='policy'/>
                  <label htmlFor='policy' className='ml-2'>[필수] 개인정보처리방침 동의<NavLink to='/'>[보기]</NavLink></label>
                </div>
                <button onClick={formChk} className='w-[165px] h-[43px] bg-[#dac0a3] text-white my-0 mx-auto flex justify-center items-center mt-[50px]  max-lg:w-full max-lg:h-[60px]' >결제하기</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Support_Info