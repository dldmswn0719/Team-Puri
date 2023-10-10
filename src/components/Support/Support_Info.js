import React, { useEffect, useState, } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Modal from '../Modal'
import "./../../../src/index.css"
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';


function Support_Info() {
  
  const language = useSelector(state => state.language);
  const messages = language === 'en' ? enMessages : krMessages;
  const view = useParams()
  const [isModal, setIsModal] = useState(view ? false : true)
  const memberProfile = useSelector(state => state.user)
  const theme = useSelector(state => state.dark);


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
  const [allChecked, setAllChecked] = useState(false);
  const [useChecked, setUseChecked] = useState(false);
  const [policyChecked, setPolicyChecked] = useState(false);
  const [money, setMoney] = useState(null);
  const [moneyboxValue, setMoneyboxValue] = useState("");

  useEffect(() => {
    // 페이지 로드 시 첫 번째 요소 선택
    setMoney(0);
  }, []);

  const handleItemClick = (i) => {
    setMoney(i);
    setMoneyboxValue("");
  };
  
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setMoneyboxValue(e.target.value);

    if (e.target.value !== "") {
      setMoney(null);
    }
  };

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
      const emailInput = document.querySelector(".e-mail").value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(emailInput)) {
          alert("유효한 이메일 주소를 입력해주세요.");
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
      if(!document.querySelector('#use').checked){
        alert(messages.supportpay1_45)
        document.querySelector('#use').focus()
        return
      }
      if(!document.querySelector('#policy').checked){
        alert(messages.supportpay1_46)
        document.querySelector('#policy').focus()
        return
      }

      navigate('/paycomplete')    
  }

  if(!memberProfile.loggedIn){
    return(
      <>
        isModal && <Modal error={messages.modal1} onClose={()=>{setIsModal(false); navigate('/login')}} />
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

  const handleUseChange = (e) => {
    setUseChecked(e.target.checked);
    if (e.target.checked && policyChecked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  };

  const handlePolicyChange = (e) => {
    setPolicyChecked(e.target.checked);
    if (useChecked && e.target.checked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  };

  const handleAllChange = (e) => {
    setAllChecked(e.target.checked);
    setUseChecked(e.target.checked);
    setPolicyChecked(e.target.checked);
  };
  
  return (
    <>
        <div className="full w-full md:bg-none sm:bg-none fold:bg-none dark:bg-[#272929]">
            <div className="lg:w-[705px] lg:pl-[150px] pt-[50px] md:w-11/12 md:mx-auto sm:w-11/12 sm:mx-auto fold:w-11/12 fold:mx-auto dark:bg-[#272929]">
              <NavLink to='/'><img src={theme === 'light' ? `./../../Images/Main/logo.png` : `./../../Images/Main/logo_dark.png`}alt="로고" className='mb-[50px]' /></NavLink>
              <div className="w-[500px] lg:h-[225px] relative info md:w-full md:h-[190px] sm:w-full sm:h-[180px] fold:w-full fold:h-[180px]">
                <ul className="w-full lg:h-[155px] md:h-[155px] bg-[#86bcd5] dark:bg-[#404343] dark:text-white flex sm:h-[130px] py-[7%] md:py-[4%] fold:py-4">
                  <li className="w-[40%] text-center">
                    <p className='font-bold lg:text-xl md:text-2xl text-[16px]'>{messages.supportpay1_1}</p>
                  </li>
                  <li className="w-[60%] sm:pr-[3%] fold:pr-[3%]">
                    <p className='sm:text-[14px] fold:text-[14px] md:text-[20px]'>{messages.supportpay1_2}<br className='hidden lg:block md:block' /> {messages.supportpay1_3}<br className='hidden lg:block md:block' /> {messages.supportpay1_4}</p>
                  </li>
                </ul>
              </div>
              <div className="lg:w-[500px] relative py-[50px] info  md:w-full sm:w-full">
                <p className="mb-[30px] text-xl font-bold dark:text-white">{messages.supportpay1_1}</p>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center fold:text-[15px] dark:text-white"><p className=''>{messages.supportpay1_5}</p></li>
                  <div className="w-[70%] flex justify-between">
                    <li className={`cursor-pointer lg:w-[49%] dark:bg-[#404343] h-[43px] bg-[#86bcd5] flex justify-center text-center items-center md:w-[47%] w-[47%] sm:text-[14px] fold:text-[14px] ${isActive === true ? "color" : ""}`}  onClick={()=>{if(isActive) return; setActive(false); setIsActive(true);}}><p>{messages.supportpay1_6}</p></li>
                    <li className={`cursor-pointer lg:w-[49%] dark:bg-[#404343] h-[43px] bg-[#86bcd5] flex justify-center text-center items-center md:w-[47%] w-[47%] sm:text-[14px] fold:text-[14px] ${Active === true ? "color" : ""}`}  onClick={()=>{if(Active) return; setIsActive(false); setActive(true);}}><p>{messages.supportpay1_7}</p></li>
                  </div>
                </ul>
                <ul className="flex justify-between w-full">
                  <li className="w-[30%] h-[40px] flex items-center fold:text-[15px] dark:text-white"><p>{messages.supportpay1_8}</p></li>
                  <div className="w-[70%] h-full flex justify-between gap-y-3 flex-wrap">
                    {
                      Array(5).fill().map((e,i)=>{
                        return (
                          <li key={i} className={`lg:w-[30.4%] md:w-[31.2%] w-[47%] h-[40px] flex justify-center items-center dark:bg-[#404343] bg-[#86bcd5] cursor-pointer sm:text-[14px] fold:text-[14px] ${money === i ? "color" : ""}`} onClick={()=>{handleItemClick(i)}}><p>{i+1}0,000{messages.won}</p></li>
                        )
                      })
                    }
                    <li className="lg:w-[30.4%] flex md:w-[31.2%] w-[47%] "><input type="text" placeholder={messages.supportpay1_9} onInput={NumChk} value={moneyboxValue} onChange={handleInputChange}  className='dark:bg-[#404343] dark:border-white dark:text-white w-full h-[40px] flex justify-center items-center text-center border-[1px] border-black sm:text-[14px] fold:text-[14px]' maxLength={11} /></li>
                  </div>
                </ul>
              </div>
              <div className="lg:w-[500px] relative py-[50px] info  md:w-full sm:w-full fold:w-full">
                <p className='text-xl mb-[30px] font-bold dark:text-white'>{messages.supportpay1_10}</p>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className='w-[30%] h-[43px] flex items-center fold:text-[15px] dark:text-white'><p>{messages.supportpay1_11}</p></li>
                  <div className="w-[70%] flex justify-between">
                    <li className={`lg:w-[49%] cursor-pointer h-[43px] dark:bg-[#404343] bg-[#86bcd5] flex justify-center text-center items-center md:w-[47%] w-[47%] sm:text-[14px] fold:text-[14px] ${solo === true ? "color" : ""}`} onClick={()=>{if(solo) return; setBuisness(false); setSolo(true);}}><p>{messages.supportpay1_12}</p></li>
                    <li className={`lg:w-[49%] cursor-pointer h-[43px] dark:bg-[#404343] bg-[#86bcd5] flex justify-center text-center items-center md:w-[47%] w-[47%] sm:text-[14px] fold:text-[14px] ${buisness === true ? "color" : ""}`} onClick={()=>{if(buisness) return; setSolo(false); setBuisness(true);}}><p>{messages.supportpay1_13}</p></li>
                  </div>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center fold:text-[15px] dark:text-white" ><p>{buisness === true ? `${messages.supportpay1_13}` : `${messages.supportpay1_14}`}</p></li>
                  <li className='w-[70%]'><input type="text"  className='dark:bg-[#404343] dark:border-white name w-full h-[43px] text-[18px] text-center border-[1px] border-black sm:text-[14px]' /></li>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center fold:text-[15px] dark:text-white"><p>{messages.supportpay1_15}</p></li>
                  <div className="flex w-[70%] justify-between">
                    <li className="lg:w-[31.5%] md:w-[30%] w-[30%]">
                      <select className='dark:bg-[#404343] dark:border-white dark:text-white flex flex-wrap w-full h-10 border-[1px] border-black text-center text-[17px] sm:text-[14px] fold:text-[14px] bg-white'>
                        <option value="0">010</option>
                        <option value="1">011</option>
                        <option value="2">016</option>
                        <option value="3">017</option>
                        <option value="4">018</option>
                        <option value="5">019</option>
                      </select>
                    </li>
                    <li className="lg:w-[31.5%] md:w-[30%] w-[30%]"><input type="text" className='dark:bg-[#404343] dark:border-white dark:text-white middle-nb w-full h-10 border-[1px] border-black text-center text-[17px] sm:text-[14px] fold:text-[14px]' maxLength={4} onInput={Num} /></li>
                    <li className="lg:w-[31.5%] md:w-[30%] w-[30%]"><input type="text" className='dark:bg-[#404343] dark:border-white dark:text-white end-nb w-full h-10 border-[1px] border-black text-center text-[17px] sm:text-[14px] fold:text-[14px]' maxLength={4} onInput={Num} /></li>
                  </div>
                </ul>
                <ul className="w-full flex justify-between">
                  <li className="w-[30%] h-[43px] flex items-center fold:text-[15px] dark:text-white"><p>{messages.supportpay1_16}</p></li>
                  <li className="w-[70%]"><input type="email" className='dark:bg-[#404343] dark:border-white dark:text-white e-mail w-full h-10 border-[1px] border-black text-center text-[18px] sm:text-[14px] fold:text-[14px]' /></li>
                </ul>
              </div>
              <div className="lg:w-[500px] relative py-[50px] info  md:w-full sm:w-full">
                <p className="text-xl mb-[30px] font-bold dark:text-white">{messages.supportpay1_17}</p>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center fold:text-[15px] dark:text-white"><p>{messages.supportpay1_18}</p></li>
                  <div className="w-[70%] h-[43px]">
                    <li className={`lg:w-[49%] h-full dark:bg-[#404343] bg-[#86bcd5] flex justify-center items-center cursor-pointer md:w-[47%] w-[47%] sm:text-[14px] fold:text-[14px] ${card === true ? "color" : ""}`} onClick={()=>{if(card) return; setCard(true);}}><p>{messages.supportpay1_19}</p></li>
                  </div>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center fold:text-[15px] dark:text-white"><p>{messages.supportpay1_20}</p></li>
                  <li className="w-[70%]"><input type="text"  className='dark:bg-[#404343] dark:border-white dark:text-white card-nb w-full h-10 border-[1px] border-black text-center text-[18px] sm:text-[14px] fold:text-[14px]' onInput={Hyphen} maxLength={19} /></li>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center fold:text-[15px] dark:text-white"><p>{messages.supportpay1_21}</p></li>
                  <div className="w-[70%] flex justify-between">
                    <li className="lg:w-[49%] md:w-[47%] w-[47%]"><input type="text" placeholder='MM' maxLength={2}  className='dark:bg-[#404343] dark:border-white dark:text-white month w-full h-10 border-[1px] border-black text-center text-[18px] sm:text-[14px] fold:text-[14px]' onInput={Num} /></li>
                    <li className="lg:w-[49%] md:w-[47%] w-[47%]"><input type="text" placeholder='YY' maxLength={2}  className='dark:bg-[#404343] dark:border-white dark:text-white year w-full h-10 border-[1px] border-black text-center text-[18px] sm:text-[14px] fold:text-[14px]' onInput={Num} /></li>
                  </div>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center fold:text-[14px] dark:text-white"><p>{messages.supportpay1_22}</p></li>
                  <li className="w-[70%]"><input type="text" className='dark:bg-[#404343] dark:border-white dark:text-white card-name w-full h-10 border-[1px] border-black text-center text-[18px] sm:text-[14px] fold:text-[14px]' /></li>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center fold:text-[15px] dark:text-white"><p>{buisness === true ? `${messages.supportpay1_24}` : `${messages.supportpay1_23}`}</p></li>
                  <li className="w-[70%]"><input type="text" onInput={Num} maxLength={buisness === true ? 10 : 6} placeholder={buisness === true ? `${messages.supportpay1_26}` : `${messages.supportpay1_25}`} className='dark:bg-[#404343] dark:border-white dark:text-white birth w-full h-10 border-[1px] border-black text-center text-[18px] sm:text-[14px] fold:text-[14px]' /></li>
                </ul>
                <ul className="w-full flex justify-between mb-[25px]">
                  <li className="w-[30%] h-[43px] flex items-center fold:text-[15px] dark:text-white"><p>{messages.supportpay1_27}</p></li>
                  <li className="w-[70%]"><input type="text" onInput={Num} maxLength={2} placeholder={messages.supportpay1_28} className='dark:bg-[#404343] dark:border-white dark:text-white password w-full h-10 border-[1px] border-black text-center text-[18px] sm:text-[14px] fold:text-[14px]' /></li>
                </ul>
                <ul className='w-full flex justify-between mb-[25px]' style={{display: Active === true ? "flex" : "none"}}>
                  <li className="w-[30%] h-[43px] flex items-center dark:text-white"><p>{messages.supportpay1_29}</p></li>
                  <div className="w-[70%] h-[43px] relative">
                    <select className='lg:w-[49%] md:w-[47%] w-[47%] h-10 text-center text-[17px] border-[1px] border-black sm:text-[14px] fold:text-[14px] bg-white dark:bg-[#404343] dark:text-white dark:border-white'>
                      <option value="0">{messages.supportpay1_30}</option>
                      <option value="1">{messages.supportpay1_31}</option>
                      <option value="2">{messages.supportpay1_32}</option>
                    </select>
                  </div>
                </ul>
                <ul className="dark:bg-[#404343] dark:border-white dark:text-white w-full block bg-[#86bcd5] py-[30px] pl-5 fold:pl-[3%] text-[#1e4557]">
                  <li className='font-bold mb-[10px]'><p>{messages.supportpay1_33}</p></li>
                  <li className='text-[13px] mb-[5px] fold:text-[12px] pr-[4%]'><p>{messages.supportpay1_34}</p></li>
                  <li className='text-[13px] mb-[5px] fold:text-[12px] pr-[4%]'><p>{messages.supportpay1_35}</p></li>
                  <li className='text-[13px] mb-[5px] fold:text-[12px] pr-[4%]'><p>{messages.supportpay1_36}</p></li>
                  <li className='text-[13px] mb-[5px] fold:text-[12px] pr-[4%] '><p>{messages.supportpay1_37}</p></li>
                  <li className='text-[13px] mb-[5px] fold:text-[12px] pr-[4%]'><p>{messages.supportpay1_38}</p></li>
                  <li className='text-[13px] mb-[5px] fold:text-[12px] pr-[4%]'><p>{messages.supportpay1_39}</p></li>
                </ul>
              </div>
              <div className="lg:py-[50px] md:py-[50px] relative lg:w-[500px] md:w-full sm:w-full py-[30px] dark:text-white">
                <div className="mb-[30px]">
                  <input type="checkbox" id='all' onInput={checkedAll}  checked={allChecked} onChange={handleAllChange} />
                  <label htmlFor='all' className='ml-2 sm:text-[15px] fold:text-[15px]' >{messages.supportpay1_40}</label>
                </div>
                <div className="mb-[10px]">
                  <input type="checkbox" id='use' checked={useChecked} onChange={handleUseChange} />
                  <label htmlFor='use' className='ml-2 sm:text-[15px] fold:text-[15px]' >{messages.supportpay1_41}<NavLink to='' className='dark:text-white'>{messages.supportpay1_43}</NavLink></label>
                </div>
                <div className="mb-[10px]">
                  <input type="checkbox" id='policy' checked={policyChecked} onChange={handlePolicyChange} />
                  <label htmlFor='policy' className='ml-2 sm:text-[15px] fold:text-[15px]'>{messages.supportpay1_42}<NavLink to='' className='dark:text-white'>{messages.supportpay1_43}</NavLink></label>
                </div>
                <button onClick={formChk} className='dark:bg-[#404343] dark:border-white dark:text-white bg-[#86bcd5]  my-0 mx-auto flex justify-center items-center mt-[50px] w-full h-[60px] text-white' >{messages.supportpay1_44}</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Support_Info