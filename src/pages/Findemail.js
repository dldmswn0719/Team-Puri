import React, { useState } from 'react';
import { collection, query, where, getDocs, getFirestore, Firestore } from 'firebase/firestore';
import { firebaseAuth, sendPasswordResetEmail } from '../firebase';
import styled from 'styled-components';
import Modal from '../components/Modal';

function Findemail() {
    
    const [name,setName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [message,setMessage] = useState("");
    const [resultEmail,setResultEmail] = useState("");
    const [isModalOpen,setModalOpen] = useState(false);

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
            setMessage(`귀하의 ${resultEmail.replace(/(.{3}).+(@.+)/,"$1*****$2")}로 메일을 발송하였습니다.`);
            setModalOpen(!isModalOpen);
            return;
        })
        .catch(error=>{
            setMessage(error);
            setModalOpen(!isModalOpen);
            return;
        })
      }
    
    return (
        <>
        <div className='flex bg-[#f5f5f5] justify-center h-full items-center'>
            <div className='w-[35vw] p-5 bg-white rounded-xl'>
                <p className='text-2xl text-center mb-5'>이메일 및 비밀번호 재설정</p>
                <div className='relative mb-5'>
                    <input className='w-full p-[10px] mb-[10px] border border-[#ddd] rounded-md box-border pl-[45px]' type="text" placeholder='이름을 입력해주세요.' value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className='relative mb-5'>
                    <input className='w-full p-[10px] mb-[10px] border border-[#ddd] rounded-md box-border pl-[45px]' type="text" placeholder='전화번호를 입력해주세요.' value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} onInput={PhoneNumber} maxLength={13} />
                </div>
                <div className='relative mb-5'>
                    <button onClick={findID}>이메일 찾기</button>
                </div>
                <div className='relative mb-5'>
                    {resultEmail && 
                        <button onClick={passwordEdit}>패스워드 재설정 </button>

                    }
                </div>
            </div>
        </div>
        {
            isModalOpen && <Modal error={message} onClose={()=>{setModalOpen(!isModalOpen)}} />
        }
    </>
    )
}

export default Findemail