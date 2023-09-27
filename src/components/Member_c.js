import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, firebaseAuth } from './../firebase';
import { doc, setDoc, getFirestore, getDoc, updateDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../store';
import Modal from './Modal';
import Modify from '../pages/Modify';

function Member_c() {

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
    // alert(initialMode)
    const [userUid, setUserUid] = useState("");

    function imgChange() {
        document.querySelector(".real-upload").click();
    }

    useEffect(() => {
        if (!initialMode){
            firebaseAuth.onAuthStateChanged((user) => {
                if(user){
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

    const errorMsg = (errorCode) =>{
        const firebaseError = {
            "auth/admin-restriced-operation" : "빈칸이 있습니다.",
            "auth/email-already-in-use" : "이미 사용중인 이메일입니다.",
            "invalid-argument" : "빈칸이 있습니다.",
            "auth/invlid-email" : "유효하지 않은 이메일 주소입니다",
            "auth/operation-not-allowed" : "이메일/비밀번호 계정이 비활성화 되어 있습니다",
            "auth/weak-password" : "비밀번호 6자리이상 설정해주세요."
        }
        return firebaseError[errorCode] || "알 수 없는 에러가 발생하였습니다."
    }

    const isValidPhone = (phoneNumber) =>{
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
            errorMessage = "이름";
        } else if (!isValidPhone(phoneNumber)) {
            setError("유효한 전화번호를 입력해주세요.");
            return;
        } else if (!isValidEmail(email)) {
            setError("유효한 이메일 주소를 입력해주세요.");
            return;
        } else if (password.length === 0 && initialMode) {
            errorMessage = "비밀번호";
        } else if (passwordConfirm.length === 0 && initialMode) {
            errorMessage = "비밀번호 확인";
        } else if (password !== passwordConfirm && initialMode) {
            setError("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (errorMessage) {
            setError(errorMessage + "이(가) 비어있습니다.");
            return;
        }
    
        try {
            const userProfile = {
                name,
                phoneNumber,
                email
            }

            if(initialMode){
                const {user} = await createUserWithEmailAndPassword(firebaseAuth, email, password);

                await setDoc(doc(getFirestore(), "users", user.uid), userProfile);
                sessionStorage.setItem("users", user.uid);
                dispatch(logIn(user.uid));
    
                alert("회원가입이 완료되었습니다.");
            }else{
                if (userUid) { 
                    const userRef = doc(getFirestore(), "users", userUid);
                    await updateDoc(userRef, userProfile);
                    alert("정보수정이 완료되었습니다.");
                }
            }
            navigate('/');

        } catch(error) {
            setError(errorMsg(error.code));
            // console.log(error.code);
        }
    }

    const userState = useSelector(state => state.user);
    // console.log(userState.loggedIn);

    return (
        <>
        {
            initialMode ? 
            ""
            :
            <Modify />
        }
        {
            userState.loggedIn && initialMode ? <Modal error="이미 로그인 중입니다." onClose={() => {navigate('/')}} /> :
            <div className='w-full bg-white dark:bg-[#272929] h-[100vh]'>
                <div className='w-[400px] h-[600px] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white dark:bg-[#404343]'>
                    <h1 className='pt-[30px] pb-[20px] text-[24px] font-bold dark:text-[#ebf4f1]'>{initialMode ? "회원가입" : "정보수정"}</h1>
                    <ul>
                        <li>
                            <img src="https://via.placeholder.com/100" alt="100" className='mb-[20px] mx-auto rounded-full cursor-pointer change' onClick={imgChange} />
                            <input type="file" class="real-upload hidden" accept="image/*" required multiple />
                        </li>
                        <li>
                            <input defaultValue={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='이메일' autoFocus className='email w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#272929] dark:text-[#ebf4f1] dark:border-none dark:focus:outline-none' />
                        </li>
                        {
                            initialMode &&
                            <>
                                <li>
                                    <div className='relative w-full'>
                                        <input onChange={(e) => {setPassword(e.target.value)}} type={eye[0] ? "text" : "password"} placeholder='비밀번호' className='password w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#272929] dark:text-[#ebf4f1] dark:border-none dark:focus:outline-none' />
                                        <FontAwesomeIcon icon={eye[0] ? faEye : faEyeSlash} onClick={()=>{toggleEye(0)}} className='absolute cursor-pointer right-7 top-4 dark:text-[#ebf4f1]' />
                                    </div>
                                </li>
                                <li>
                                    <div className='relative w-full'>
                                        <input onChange={(e) => {setPasswordConfirm(e.target.value)}} type={eye[1] ? "text" : "password"} placeholder='비밀번호 확인' className='confirm_password w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#272929] dark:text-[#ebf4f1] dark:border-none dark:focus:outline-none' />
                                        <FontAwesomeIcon icon={eye[1] ? faEye : faEyeSlash} onClick={()=>{toggleEye(1)}} className='absolute cursor-pointer right-7 top-4 dark:text-[#ebf4f1]' />
                                    </div>
                                </li>
                            </>
                        }
                        <li>
                            <input defaultValue={name} onChange={(e) => {setName(e.target.value)}} type="text" placeholder='이름' className='name w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#272929] dark:text-[#ebf4f1] dark:border-none dark:focus:outline-none' />
                        </li>
                        <li>
                            <input defaultValue={phoneNumber} onInput={PhoneNumber} type="text" maxLength={13} placeholder='휴대폰 번호' className='phone w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#272929] dark:text-[#ebf4f1] dark:border-none dark:focus:outline-none' />
                        </li>
                        {
                            initialMode ? <p>{error}</p> : ""
                        }
                        <li>
                            <button className='w-[360px] h-[60px] bg-[#162c58] text-white text-[18px] rounded-[10px] mt-[10px] cursor-pointer dark:bg-[#272929]' onClick={signUp}>{initialMode ? "가입" : "수정"}</button>
                        </li>
                    </ul>
                </div>
            </div>
        }
        </>
    )
}

export default Member_c