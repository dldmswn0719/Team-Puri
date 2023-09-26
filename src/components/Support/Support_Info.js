import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./../../../src/index.css"

function Support_Info() {

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
        alert("이름이 비어있습니다.");
        document.querySelector(".name").focus();
        return;
      }
      if(document.querySelector(".middle-nb").value === "" || document.querySelector(".name").value === null){
        alert("중간번호가 비어있습니다.");
        document.querySelector(".middle-nb").focus();
        return;
      }
      if(document.querySelector(".end-nb").value === "" || document.querySelector(".name").value === null){
        alert("끝번호가 비어있습니다.");
        document.querySelector(".end-nb").focus();
        return;
      }
      if(document.querySelector(".e-mail").value === "" || document.querySelector(".name").value === null){
        alert("이메일이 비어있습니다.");
        document.querySelector(".e-mail").focus();
        return;
      }
      if(document.querySelector(".card-nb").value === "" || document.querySelector(".name").value === null){
        alert("카드번호가 비어있습니다.");
        document.querySelector(".card-nb").focus();
        return;
      }
      if(document.querySelector(".card-nb").value.length !== 19){
        alert("카드번호가 잘못되었습니다..");
        document.querySelector(".card-nb").focus();
        return;
      }
      if(document.querySelector(".month").value === "" || document.querySelector(".name").value === null){
        alert("유효기간(월)이 비어있습니다.");
        document.querySelector(".month").focus();
        return;
      }
      if(document.querySelector(".year").value === "" || document.querySelector(".name").value === null){
        alert("유효기간(년)이 비어있습니다.");
        document.querySelector(".year").focus();
        return;
      }
      if(document.querySelector(".card-name").value === "" || document.querySelector(".name").value === null){
        alert("카드주명이 비어있습니다.");
        document.querySelector(".card-name").focus();
        return;
      }
      if(document.querySelector(".birth").value === "" || document.querySelector(".name").value === null){
        alert("생년월일이 비어있습니다.");
        document.querySelector(".birth").focus();
        return;
      }
      if(document.querySelector(".password").value === "" || document.querySelector(".name").value === null){
        alert("비밀번호가 비어있습니다.");
        document.querySelector(".password").focus();
        return;
      }




      navigate('/paycomplete')
    
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
                <ul className="w-full h-[155px] bg-[#f8f0e5] flex justify-around items-center max-lg:h-[120px]">
                  <li className="">
                    <p className='h-[72px] font-bold text-xl max-lg:flex max-lg:items-center'>후원하기</p>
                  </li>
                  <li className="">
                    <p>
                      유기동물들은 우리의 사랑과 돌봄을 <br />
                      필요로 합니다. 당신의 후원이 그들에게<br /> 사랑의 날개를 펼치게 해주세요.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-[500px] relative py-[50px] info  max-lg:w-full">
                <p className="mb-[30px] text-xl font-bold">후원하기</p>
                <ul className="flex justify-between mb-[25px]">
                  <li className="h-[43px] flex items-center whitespace-nowrap"><p className='w-[60px]'>후원항목</p></li>
                  <div className="w-[353px] flex gap-x-5 max-lg:w-[600px] max-md:w-[420px]">
                    <li className={`cursor-pointer w-40 h-[43px] bg-[#f8f0e5] flex justify-center items-center max-lg:w-[290px] max-md:w-[200px] ${isActive === true ? "color" : ""}`}  onClick={()=>{setIsActive(!isActive);setActive(false)}}><p>일시후원</p></li>
                    <li className={`cursor-pointer w-40 h-[43px] bg-[#f8f0e5] flex justify-center items-center max-lg:w-[290px] max-md:w-[200px] ${Active === true ? "color" : ""}`}  onClick={()=>{setActive(!Active);setIsActive(false)}}><p>정기후원</p></li>
                  </div>
                </ul>
                <ul className="flex justify-between">
                  <li className="h-[30px] flex justify-center whitespace-nowrap"><p className='w-[60px]'>후원금액</p></li>
                  <div className="w-[353px] h-[100px] flex gap-x-[15px] flex-wrap max-lg:w-[600px] max-md:w-[420px]">
                    {
                      Array(5).fill().map((e,i)=>{
                        return (
                          <li key={i} className={`w-[105px] h-[40px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer max-lg:w-[190px] max-md:w-[130px] ${money === i ? "color" : ""}`} onClick={()=>{setMoney(i)}}><p>{i+1}0,000원</p></li>
                        )
                      })
                    }
                    <li className="" onClick={()=>{setMoney(money === false ? true : false)}}><input type="text" placeholder="직접입력"  onInput={NumChk}  className='w-[105px] h-[38px] flex justify-center items-center text-center border-[1px] border-black max-lg:w-[190px] max-md:w-[130px]' maxLength={11} /></li> 
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
                <ul className="flex justify-between mb-[25px]">
                  <li className='h-[43px] flex items-center whitespace-nowrap'><p className='w-[60px]'>구분</p></li>
                  <div className="w-[353px] flex gap-x-5 max-lg:w-[600px] max-md:w-[420px]">
                    <li className={`cursor-pointer w-40 h-[43px] bg-[#f8f0e5] flex justify-center items-center max-lg:w-[290px] max-md:w-[200px] ${solo === true ? "color" : ""}`} onClick={()=>{setSolo(!solo);setBuisness(false)}}><p>개인</p></li>
                    <li className={`cursor-pointer w-40 h-[43px] bg-[#f8f0e5] flex justify-center items-center max-lg:w-[290px] max-md:w-[200px] ${buisness === true ? "color" : ""}`} onClick={()=>{setBuisness(!buisness);setSolo(false)}}><p>단체(사업자)</p></li>
                  </div>
                </ul>
                <ul className="flex justify-between mb-[25px]">
                  <li className="h-[43px] flex items-center whitespace-nowrap" ><p className='w-[60px]'>{buisness === true ? "단체(사업자명)" : "이름"}</p></li>
                  <li><input type="text"  className='name w-[350px] h-[43px] text-[18px] text-center border-[1px] border-black max-lg:w-[600px] max-md:w-[420px]' /></li>
                </ul>
                <ul className="flex justify-between mb-[25px]">
                  <li className="h-[43px] flex items-center whitespace-nowrap"><p className='w-[60px]'>전화번호</p></li>
                  <div className="flex w-[353px] gap-x-[15px] max-lg:w-[600px] max-md:w-[420px]">
                    <li className="">
                      <select className='flex flex-wrap w-[105px] h-10 border-[1px] border-black text-center text-[17px] max-lg:w-[190px] max-md:w-[130px]'>
                        <option value="0">010</option>
                        <option value="1">011</option>
                        <option value="2">016</option>
                        <option value="3">017</option>
                        <option value="4">018</option>
                        <option value="5">019</option>
                      </select>
                    </li>
                    <li className=""><input type="text" className='middle-nb w-[105px] h-10 border-[1px] border-black text-center text-[17px] max-lg:w-[190px] max-md:w-[130px]' maxLength={4} onInput={Num} /></li>
                    <li className=""><input type="text" className='end-nb w-[105px] h-10 border-[1px] border-black text-center text-[17px] max-lg:w-[190px] max-md:w-[130px]' maxLength={4} onInput={Num} /></li>
                  </div>
                </ul>
                <ul className="flex justify-between">
                  <li className="h-[43px] flex items-center whitespace-nowrap"><p className='w-[60px]'>이메일</p></li>
                  <li className=""><input type="email" className='e-mail w-[350px] h-10 border-[1px] border-black text-center text-[18px] max-lg:w-[600px] max-md:w-[420px]' /></li>
                </ul>
              </div>
              <div className="info w-[500px] relative py-[50px] info max-lg:w-full">
                <p className="text-xl mb-[30px] font-bold">결제정보</p>
                <ul className="flex justify-between mb-[25px]">
                  <li className="h-[43px] flex items-center whitespace-nowrap"><p className='w-[60px]'>결제수단</p></li>
                  <div className="w-[353px] h-[43px] max-lg:w-[600px] max-md:w-[420px]">
                    <li className={`w-40 h-full bg-[#f8f0e5] flex justify-center items-center cursor-pointer max-md:w-[200px] max-lg:w-[290px] ${card === true ? "color" : ""}`} onClick={()=>setCard(card === false ? true : false)}><p>신용카드</p></li>
                  </div>
                </ul>
                <ul className="flex justify-between mb-[25px]">
                  <li className="h-[43px] flex items-center whitespace-nowrap"><p className='w-[60px]'>카드번호</p></li>
                  <li className=""><input type="text"  className='card-nb w-[350px] h-10 border-[1px] border-black text-center text-[18px] max-lg:w-[600px] max-md:w-[420px]' onInput={Hyphen} maxLength={19} /></li>
                </ul>
                <ul className="flex justify-between mb-[25px]">
                  <li className="h-[43px] flex items-center whitespace-nowrap"><p className='w-[60px]'>유효기간</p></li>
                  <div className="w-[353px] flex gap-x-5 max-lg:w-[600px] max-md:w-[420px]">
                    <li className=""><input type="text" placeholder='MM' maxLength={2}  className='month w-[160px] h-10 border-[1px] border-black text-center text-[18px] max-lg:w-[290px] max-md:w-[200px]' onInput={Num} /></li>
                    <li className=""><input type="text" placeholder='YY' maxLength={2}  className='year w-[160px] h-10 border-[1px] border-black text-center text-[18px] max-lg:w-[290px]  max-md:w-[200px]' onInput={Num} /></li>
                  </div>
                </ul>
                <ul className="flex justify-between mb-[25px]">
                  <li className="h-[43px] flex items-center whitespace-nowrap"><p className='w-[60px]'>카드주명</p></li>
                  <li className=""><input type="text" className='card-name w-[350px] h-10 border-[1px] border-black text-center text-[18px] max-lg:w-[600px] max-md:w-[420px]' /></li>
                </ul>
                <ul className="flex justify-between mb-[25px]">
                  <li className="h-[43px] flex items-center whitespace-nowrap"><p className='w-[60px]'>생년월일</p></li>
                  <li className=""><input type="text" onInput={Num} maxLength={buisness === true ? 10 : 6} placeholder='주민번호 앞 6자리(또는 사업자번호)' className='birth w-[350px] h-10 border-[1px] border-black text-center text-[18px] max-lg:w-[600px] max-md:w-[420px]' /></li>
                </ul>
                <ul className="flex justify-between mb-[25px]">
                  <li className="w-[60px]h-[43px] flex items-center whitespace-nowrap"><p className='w-[60px]'>비밀번호</p></li>
                  <li className=""><input type="text" onInput={Num} maxLength={2} placeholder='카드 비밀번호 앞 2자리' className='password w-[350px] h-10 border-[1px] border-black text-center text-[18px] max-lg:w-[600px] max-md:w-[420px]' /></li>
                </ul>
                <ul className='flex justify-between mb-[25px]' style={{display: Active === true ? "flex" : "none"}}>
                  <li className="h-[43px] flex items-center whitespace-nowrap"><p className='w-[60px]'>결제일</p></li>
                  <div className="w-[353px] h-[43px] relative max-lg:w-[600px] max-md:w-[420px]">
                    <select className='w-40 h-10 text-center text-[17px] border-[1px] border-black max-md:w-[200px] max-lg:w-[290px]'>
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
                  <label htmlFor='policy' className='ml-2'>[필수] 이용약관 동의<NavLink to='/'>[보기]</NavLink></label>
                </div>
                <button onClick={formChk} className='w-[165px] h-[43px] bg-[#dac0a3] text-white my-0 mx-auto flex justify-center items-center mt-[50px]  max-lg:w-full max-lg:h-[60px]' >결제하기</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Support_Info