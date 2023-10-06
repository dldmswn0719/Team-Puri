import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from './../components/Nav'
import { firebaseAuth, sendPasswordResetEmail } from '../firebase';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';

function Findemail() {
    
    const [name,setName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [message,setMessage] = useState("");
    const [resultEmail,setResultEmail] = useState("");
    const [isModalOpen,setModalOpen] = useState(false);
    const theme = useSelector(state => state.dark)
    const PhoneNumber = (e) =>{
        let value = e.target.value;
        e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/-{1,2}$/g, "");
          
        setPhoneNumber(value);
      }
      
    const isValidPhone = (phoneNumber) =>{
    const regex = /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/;
    return regex.test(phoneNumber)
    }

    const findID = async () =>{
        // alert("")
        if(name.length === 0){
            setModalOpen(!isModalOpen);
            setMessage("이름이 비어있습니다.");
        }else if(!isValidPhone(phoneNumber)){
            setMessage("유효한 전화번호를 입력해주세요.");
            setModalOpen(!isModalOpen);
            return;
        }

        try{
            const userQuery = query(
                collection(getFirestore(),"users"),
                where("phoneNumber",'==',phoneNumber),
                where("name","==",name)
                // 폰넘버가 같다면 /  이름이 같다면, 이름이랑 폰넘버가 같은친구를 찾아주세요
            );
            const querySnapShot = await getDocs(userQuery)
            console.log(querySnapShot)

            if(querySnapShot.empty){
                setMessage("해당 이름과 전화번호로 가입한 계정이 없습니다.");
                setModalOpen(!isModalOpen);
                return;
            }

            const userDoc = querySnapShot.docs[0];
            const userData = userDoc.data();
            const email = userData.email
            console.log(userData)
            setResultEmail(email);

            if(!email){
                setMessage("이메일 정보를 찾을 수 없습니다.");
                setModalOpen(!isModalOpen);
                return;
            }

            const maskEmail = email.replace(/(.{3}).+(@.+)/,"$1*****$2")

            setModalOpen(!isModalOpen);
            setMessage(`귀하의 이메일 주소는 ${maskEmail} 입니다.`)

        }catch(error){
            setMessage(error);
            setModalOpen(!isModalOpen);
            return;
        }
    }

    const passwordEdit = () =>{
        sendPasswordResetEmail(firebaseAuth,resultEmail)
        .then(function(){
            setMessage(`${resultEmail.replace(/(.{3}).+(@.+)/,"$1*****$2")}로 메일을 발송하였습니다.`);
            return;
        })
        .catch(error=>{
            setMessage(error);
            return;
        })
      }
    
    return (
        <>
        <Nav />
        <div className="w-full bg-white dark:bg-[#272929] h-[100vh]">
            <div className='w-[400px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-[30px] dark:bg-[#404343]'>
                <img src={
                        theme === 'light' ? 
                        "./../Images/logo_s1.png"
                        :
                        "./../Images/Main/logo_dark_small.png"
                    } alt='logo' className='w-[200px] h-[65px] mx-auto' />
                <div className='relative mb-5'>
                    <p className='text-left text-[18px] font-bold pt-[30px] dark:text-[#ebf4f1] pb-2'>이름</p>
                    <input className='w-full p-[10px] mb-[10px] border-b border-[#ddd] rounded-md box-border pl-[45px] dark:text-[#ebf4f1] dark:bg-[#272929] dark:border-none dark:focus:outline-none' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className='relative mb-3'>
                <p className='text-left text-[18px] font-bold dark:text-[#ebf4f1] pb-2'>전화번호</p>
                    <input className='w-full p-[10px] mb-[10px] border-b border-[#ddd] rounded-md box-border pl-[45px] dark:text-[#ebf4f1] dark:bg-[#272929] dark:border-none dark:focus:outline-none' type="text" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} onInput={PhoneNumber} maxLength={13} />
                </div>
                <p className='text-[15px] text-red-500 dark:text-[#ebf4f1]'>{message}</p>
                <div className='relative mb-3'>
                    <button className='w-full h-[50px] bg-[#162c58] text-[#fff] text-[18px] rounded-[10px] cursor-pointer mt-[22px] dark:bg-[#272929]' onClick={findID}>
                        <p className='dark:text-[#ebf4f1]'>이메일 찾기</p>
                    </button>
                </div>
                <div className='relative mb-5'>
                    {resultEmail && 
                        <button className="w-full h-[50px] bg-[#162c58] text-[#fff] text-[18px] rounded-[10px] cursor-pointer dark:bg-[#272929]" onClick={passwordEdit}>
                            <p className='dark:text-[#ebf4f1]'> 패스워드 재설정</p>
                        </button>
                    }
                </div>
            </div>
        </div>
    </>
    )
}

export default Findemail