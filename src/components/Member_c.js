import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, firebaseAuth } from './../firebase';
import { doc, setDoc, getFirestore, getDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../store';
import Modal from './Modal';
import Modify from '../pages/Modify';
import { fetchSignInMethodsForEmail, getAuth } from 'firebase/auth';
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';

function Member_c() {

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");
    const [eye, setEye] = useState([0, 0]);
    const [isModal, setIsModal] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialMode = window.location.pathname.includes("member");
    const [userUid, setUserUid] = useState("");

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

        try {
            const userProfile = {
                name,
                phoneNumber,
                email
            }

            if (initialMode) {
                const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);

                await setDoc(doc(getFirestore(), "users", user.uid), userProfile);
                sessionStorage.setItem("users", user.uid);
                dispatch(logIn(user.uid));

                alert(`${messages.alert[0]}`);
            } else {
                if (userUid) {
                    const userRef = doc(getFirestore(), "users", userUid);
                    await updateDoc(userRef, userProfile);
                    alert(`${messages.alert[1]}`);
                }
            }
            navigate('/');

        } catch (error) {
            setError(errorMsg(error.code));
        }
    }

    const userState = useSelector(state => state.user);

    const auth = getAuth();
    const [emailCheckMsg, setEmailCheckMsg] = useState("");
    const checkEmail = async () => {
        const userRef = collection(getFirestore(), "users");
        const q = query(userRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
        setEmailCheckMsg("사용 가능한 이메일입니다.");
        return true;
        } else {
        setEmailCheckMsg("이미 사용중인 이메일입니다.");
        return false;
        }
    };

    return (
        <>
            {
                initialMode ?
                    ""
                    :
                    <Modify />
            }
            {
                userState.loggedIn && initialMode ? <Modal error={`${messages.alert[2]}`} onClose={() => { navigate('/') }} /> :
                    <div className='w-full bg-white dark:bg-[#272929] h-[100vh]'>
                        <div className='w-[400px] py-[30px] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white dark:bg-[#404343]'>
                            <h1 className='pb-[20px] text-[24px] font-bold dark:text-[#ebf4f1]'>{initialMode ? `${messages.login5}` : `${messages.member4}`}</h1>
                            <ul>
                                <li>
                                    {
                                        initialMode ?
                                            <input defaultValue={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder={messages.login1} autoFocus className='email w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#272929] dark:text-[#ebf4f1] dark:border-none dark:focus:outline-none' />
                                            :
                                            <input readOnly defaultValue={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder={messages.login1} autoFocus className='email w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#272929] dark:text-[#ebf4f1] dark:border-none dark:focus:outline-none' />
                                    }
                                    <button onClick={checkEmail}>중복확인</button>
                                    <p>{emailCheckMsg}</p>
                                </li>
                                {
                                    initialMode &&
                                    <>
                                        <li>
                                            <div className='relative w-full'>
                                                <input onChange={(e) => { setPassword(e.target.value) }} type={eye[0] ? "text" : "password"} placeholder={messages.login2} className='password w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#272929] dark:text-[#ebf4f1] dark:border-none dark:focus:outline-none' />
                                                <FontAwesomeIcon icon={eye[0] ? faEye : faEyeSlash} onClick={() => { toggleEye(0) }} className='absolute cursor-pointer right-7 top-4 dark:text-[#ebf4f1]' />
                                            </div>
                                        </li>
                                        <li>
                                            <div className='relative w-full'>
                                                <input onChange={(e) => { setPasswordConfirm(e.target.value) }} type={eye[1] ? "text" : "password"} placeholder={messages.member1} className='confirm_password w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#272929] dark:text-[#ebf4f1] dark:border-none dark:focus:outline-none' />
                                                <FontAwesomeIcon icon={eye[1] ? faEye : faEyeSlash} onClick={() => { toggleEye(1) }} className='absolute cursor-pointer right-7 top-4 dark:text-[#ebf4f1]' />
                                            </div>
                                        </li>
                                    </>
                                }
                                <li>
                                    <input defaultValue={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder={messages.member2} className='name w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#272929] dark:text-[#ebf4f1] dark:border-none dark:focus:outline-none' />
                                </li>
                                <li>
                                    <input defaultValue={phoneNumber} onInput={PhoneNumber} type="text" maxLength={13} placeholder={messages.member3} className='phone w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#272929] dark:text-[#ebf4f1] dark:border-none dark:focus:outline-none' />
                                </li>
                                {
                                    initialMode ? <p className='text-red-500 dark:text-[#ebf4f1]'>{error}</p> : ""
                                }
                                <li>
                                    <button className='w-[360px] h-[60px] bg-[#162c58] text-white text-[18px] rounded-[10px] mt-[10px] cursor-pointer dark:bg-[#272929]' onClick={signUp}>{initialMode ? `${messages.login5}` : `${messages.member4}`}</button>
                                </li>
                            </ul>
                        </div>
                    </div>
            }
        </>
    )
}

export default Member_c