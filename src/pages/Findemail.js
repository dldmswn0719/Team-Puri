import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from './../components/Nav'
import { firebaseAuth, sendPasswordResetEmail } from '../firebase';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';

function Findemail() {
    
    const [name,setName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [message,setMessage] = useState("");
    const [resultEmail,setResultEmail] = useState("");
    const [isModalOpen,setModalOpen] = useState(false);
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    const PhoneNumber = (e) =>{
        let value = e.target.value;
        e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/-{1,2}$/g, "");
          
        setPhoneNumber(value);
      }
      
    const isValidPhone = (phoneNumber) =>{
        const regex = /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/;
        return regex.test(phoneNumber)
    }

    const findID = async (e) =>{
        e.preventDefault()
        if (name.length === 0){
            setModalOpen(!isModalOpen);
            setMessage(messages.supportpay1);
        }else if(!isValidPhone(phoneNumber)){
            setMessage(messages.setError[0]);
            setModalOpen(!isModalOpen);
            return;
        }

        try{
            const userQuery = query(
                collection(getFirestore(),"users"),
                where("phoneNumber",'==',phoneNumber),
                where("name","==",name)
            );
            const querySnapShot = await getDocs(userQuery)
            console.log(querySnapShot)

            if(querySnapShot.empty){
                setMessage(messages.setError[4]);
                setModalOpen(!isModalOpen);
                return;
            }

            const userDoc = querySnapShot.docs[0];
            const userData = userDoc.data();
            const email = userData.email
            setResultEmail(email);

            if(!email){
                setMessage(messages.setError[5]);
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

    const passwordEdit = (e) =>{
        e.preventDefault()
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
        <div className="bg-[#fff] dark:bg-[#292929] lg:h-[calc(100vh-133px)] md:h-[calc(100vh-97px)] h-[calc(100vh-74px)] flex items-center px-5">
            <div className='h-max mx-auto flex flex-col items-center'>
                <h1 className="lg:text-3xl text-xl font-bold text-center pb-10 dark:text-white">{messages.login4}</h1>
                <form className='bg-white dark:bg-[#404343] shadow-xl px-10 pt-10 pb-5 flex flex-col gap-4 text-sm'>
                    <div>
                        <label className='text-gray-600 dark:text-white font-bold inline-block pb-2'>{messages.member2}</label>
                        <input className='border border-gray-400 focus:outline-slate-400 rounded-md w-full h-12 shadow-sm px-5 py-2 dark:bg-[#272929] dark:text-white' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div>
                        <label className='text-gray-600 dark:text-white font-bold inline-block pb-2'>{messages.member3}</label>
                        <input className='border border-gray-400 focus:outline-slate-400 rounded-md w-full h-12 shadow-sm px-5 py-2 dark:bg-[#272929] dark:text-white' type="text" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} onInput={PhoneNumber} maxLength={13} />
                    </div>
                    <div>
                        <p className=' text-red-500 text-sm text-left dark:text-[#ebf4f1]'>{message}</p>
                    </div>        
                    <button className='w-full h-[40px] bg-[#60a7c8] text-[#fff] rounded-md cursor-pointer dark:bg-[#272929] hover:bg-[#4090b6]' onClick={(e) => findID(e)}>
                        <p className='dark:text-[#ebf4f1]'>{messages.find}</p>
                    </button>
                    <div>
                        <div className='relative mb-5'>
                            {
                                resultEmail && 
                                <button className="w-full h-[40px] bg-[#60a7c8] text-[#fff] rounded-md cursor-pointer dark:bg-[#272929] hover:bg-[#4090b6]" onClick={(e) => passwordEdit(e)}>
                                    <p className='dark:text-[#ebf4f1]'>{messages.find1}</p>
                                </button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

export default Findemail