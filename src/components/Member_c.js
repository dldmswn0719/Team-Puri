import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, firebaseAuth } from './../firebase';
import { doc, setDoc, getFirestore, getDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../store';
import Modal from './Modal';
import Modify from '../pages/Modify';
import { getAuth } from 'firebase/auth';
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';

function Member_c() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");
    const [eye, setEye] = useState([0, 0]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialMode = window.location.pathname.includes("member");
    const [userUid, setUserUid] = useState("");

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    useEffect(() => {
        if (!initialMode) {
            firebaseAuth.onAuthStateChanged((user) => {
                if (user) {
                    setUserUid(user.uid);
                }
            });
        }
        
    }, [initialMode]);


    useEffect(() => {
        if (!initialMode && userUid) {
            const fetchUserData = async () => {
                const userRef = doc(getFirestore(), "users", userUid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    const data = userSnap.data();
                    setEmail(data.email);
                    setName(data.name);
                    setPhoneNumber(data.phoneNumber);
                }
            }
            fetchUserData();
        }
    }, [initialMode, userUid]);

    const toggleEye = (index) => {
        const newEye = [...eye];
        newEye[index] = !newEye[index];
        setEye(newEye);
    }

    const PhoneNumber = (e) => {
        const value = e.target.value;

        e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/-{1,2}$/g, "");

        setPhoneNumber(value);
    }

    const errorMsg = (errorCode) => {
        const firebaseError = {
            "auth/admin-restriced-operation": `${messages.firebaseError[0]}`,
            "auth/email-already-in-use": `${messages.firebaseError[1]}`,
            "invalid-argument": `${messages.firebaseError[2]}`,
            "auth/invlid-email": `${messages.firebaseError[3]}`,
            "auth/operation-not-allowed": `${messages.firebaseError[4]}`,
            "auth/weak-password": `${messages.firebaseError[5]}`
        }
        return firebaseError[errorCode] || `${messages.firebaseError[6]}`
    }

    const isValidPhone = (phoneNumber) => {
        const regex = /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/;
        return regex.test(phoneNumber)
    }

    const isValidEmail = (email) => {
        const regex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        return regex.test(email);
    }

    const signUp = async (e) => {
        e.preventDefault();

        let errorMessage = "";

        if (name.length === 0) {
            errorMessage = `${messages.member2}`;
        } else if (!isValidPhone(phoneNumber)) {
            setError(`${messages.setError[0]}`);
            return;
        } else if (!isValidEmail(email)) {
            setError(`${messages.setError[1]}`);
            return;
        } else if (password.length === 0 && initialMode) {
            errorMessage = `${messages.login2}`;
        } else if (passwordConfirm.length === 0 && initialMode) {
            errorMessage = `${messages.member1}`;
        } else if (password !== passwordConfirm && initialMode) {
            setError(`${messages.setError[2]}`);
            return;
        }

        if (errorMessage) {
            setError(errorMessage + `${messages.setError[3]}`);
            return;
        }

        if (!isEmailChecked && initialMode) {
            setError(`${messages.setError[6]}`);
            return;
        }
        
        const userProfile = { name, phoneNumber, email }

        try {
            if (initialMode) {
                const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);

                await setDoc(doc(getFirestore(), "users", user.uid), userProfile);
                sessionStorage.setItem("users", user.uid);
                alert(`${messages.alert[0]}`);
                dispatch(logIn(user.uid));

            } else {
                    const userRef = doc(getFirestore(), "users", userUid);
                    const docSnap= await getDoc(userRef);

                    if(docSnap.exists()){
                        const data=docSnap.data();
            
                        if(data.name === userProfile.name&&data.phoneNumber === userProfile.phoneNumber&&data.email === userProfile.email) {
                            alert(`${messages.alert[4]}`);
                            navigate('/modify');
                            return; 
                        }
                        
                        await updateDoc(userRef,userProfile); 
                        alert(`${messages.alert[1]}`);
            
                      }

            }
            navigate('/');

        } catch (error) {
            setError(errorMsg(error.code));
        }
    }

    const userState = useSelector(state => state.user);
    console.log(userState);

    const auth = getAuth();
    const [emailCheckMsg, setEmailCheckMsg] = useState("");
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    
    const checkEmail = async () => {

        if (!email) {
            setEmailCheckMsg(`${messages.setError[7]}`); 
            return;
        }

        if (!isValidEmail(email)) { 
            setEmailCheckMsg(`${messages.setError[8]}`); 
            return;
        }
       
        const userRef = collection(getFirestore(), "users");
        const q = query(userRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
        setEmailCheckMsg(`${messages.setError[9]}`);
        setIsEmailChecked(true);
        return true;

        } else {
        setEmailCheckMsg(`${messages.setError[10]}`);
        setIsEmailChecked(false);
        return false;

        }
    };

    return (
        <>
            { initialMode ? "" : <Modify /> }
            {
                userState.loggedIn && initialMode ? <Modal error={`${messages.alert[2]}`} onClose={() => { navigate('/') }} />
                :
                <div className='bg-[#fff] dark:bg-[#292929] lg:h-[calc(100vh-133px)] md:h-[calc(100vh-97px)] h-[calc(100vh-74px)] flex items-center px-5'>
                    <div className="h-max mx-auto flex flex-col items-center">
                        <h1 class="lg:text-3xl text-xl font-bold text-center pb-10 dark:text-white">{initialMode ? `${messages.login5}` : `${messages.member4}`}</h1>
                        <div class="bg-white dark:bg-[#404343] shadow-xl p-10 flex flex-col gap-4 text-sm">
                            <div>
                                {
                                    initialMode ?
                                        <div className='relative'>
                                            <input defaultValue={email} onChange={(e) => {setEmail(e.target.value); setIsEmailChecked(false);}} type="email" placeholder={messages.login1} autoFocus className='email border border-gray-400 focus:outline-slate-400 rounded-md w-full h-12 shadow-sm px-5 py-2 dark:bg-[#272929] dark:text-white' />
                                            <button className='dark:border-none dark:bg-[#404343] dark:text-[#ebf4f1] absolute right-2 top-2 border px-2 py-1' onClick={checkEmail}>{messages.member5}</button>
                                        </div>
                                        :
                                        <input readOnly defaultValue={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder={messages.login1} autoFocus className='email border border-gray-400 focus:outline-slate-400 rounded-md w-full h-12 shadow-sm px-5 py-2 dark:bg-[#272929] dark:text-white' />
                                }
                                <p className='pb-2 text-red-500 text-sm text-left dark:text-[#ebf4f1]'>{emailCheckMsg}</p>
                                {
                                    initialMode &&
                                    <>
                                        <div className='relative'>
                                            <input onChange={(e) => { setPassword(e.target.value) }} type={eye[0] ? "text" : "password"} placeholder={messages.login2} className='password border border-gray-400 focus:outline-slate-400 rounded-md w-full h-12 shadow-sm px-5 py-2 mb-2 dark:bg-[#272929] dark:text-white' />
                                            <FontAwesomeIcon icon={eye[0] ? faEye : faEyeSlash} onClick={() => { toggleEye(0) }} className='absolute cursor-pointer right-7 top-4 dark:text-[#ebf4f1]' />
                                        </div>
                                        <div className='relative'>
                                            <input onChange={(e) => { setPasswordConfirm(e.target.value) }} type={eye[1] ? "text" : "password"} placeholder={messages.member1} className='confirm_password border border-gray-400 focus:outline-slate-400 rounded-md w-full h-12 shadow-sm px-5 py-2 mb-2 dark:bg-[#272929] dark:text-white' />
                                            <FontAwesomeIcon icon={eye[1] ? faEye : faEyeSlash} onClick={() => { toggleEye(1) }} className='absolute cursor-pointer right-7 top-4 dark:text-[#ebf4f1]' />
                                        </div>
                                    </>
                                }                                
                                    <input defaultValue={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder={messages.member2} className='name border border-gray-400 focus:outline-slate-400 rounded-md w-full h-12 shadow-sm px-5 py-2 mb-2 dark:bg-[#272929] dark:text-white' />
                                    <input defaultValue={phoneNumber} onInput={PhoneNumber} type="text" maxLength={13} placeholder={messages.member3} className='phone border border-gray-400 focus:outline-slate-400 rounded-md w-full h-12 shadow-sm px-5 py-2 dark:bg-[#272929] dark:text-white' />                                
                                {
                                    initialMode ? <p className='pt-4 text-red-500 text-sm text-left dark:text-[#ebf4f1]'>{error}</p> : ""
                                }
                                    <button className='w-full h-[40px] bg-[#60a7c8] text-[#fff] rounded-md cursor-pointer mt-[22px] mb-[15px] dark:bg-[#272929] hover:bg-[#4090b6]' onClick={signUp}>{initialMode ? `${messages.login5}` : `${messages.member4}`}</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Member_c