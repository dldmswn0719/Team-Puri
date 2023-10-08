import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { firebaseAuth, signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup , createUserWithEmailAndPassword } from '../firebase';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { logIn , loggedIn } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';

function Login_c() {

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const userState = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = useSelector(state => state.dark)

    const errorMsg = (errorCode) => {
        const firebaseError = {
            'auth/user-not-found' : `${messages.firebaseError[7]}`,
            'auth/wrong-password' : `${messages.firebaseError[8]}`,
            'auth/invalid-email' : `${messages.firebaseError[3]}`,
            'auth/invalid-login-credentials' : `${messages.firebaseError[8]}`
        }
        return firebaseError[errorCode] || `${messages.firebaseError[6]}`
    }

    const LoginForm = async (e) => {
        e.preventDefault();
        try {
            const userLogin = await signInWithEmailAndPassword(firebaseAuth, email, password);

            const user = userLogin.user;
            alert(`${messages.alert[3]}`)

            sessionStorage.setItem("users", user.uid);
            dispatch(logIn(user.uid));

            const userDoc = doc(collection(getFirestore(), "users"), user.uid);
            
            const userDocSnapshot = await getDoc(userDoc);

            if(userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data();
                dispatch(loggedIn(userData));
                navigate(-1);
            }

        } catch(error) {
            setError(errorMsg(error.code));
        }
    }

    const snsLogin = async (data) =>{
        let provider;
        switch(data){
            case 'google' : 
                provider = new GoogleAuthProvider();
            break;

            default:
            return;
        }
        try{  
            const result = await signInWithPopup(firebaseAuth,provider)
            const user = result.user
            console.log(user)
            sessionStorage.setItem("users",user.uid)
            dispatch(logIn(user.uid))
            navigate("/" ,{
                state:
                {
                name : user.displayName,
                email : user.email
                }
            })
          }catch(error){
            setError(errorMsg(error))
          }
        
    }

    return (
        <>
            <div className="w-full bg-white dark:bg-[#272929] h-[100vh]">
                <div className='w-[400px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-[30px] dark:bg-[#404343]'>
                    <ul className='text-center'>
                        <li>
                            <img src={
                                theme === 'light' ? 
                                "./../Images/logo_s1.png"
                                :
                                "./../Images/Main/logo_s1_dark.png"
                            } alt='logo' className='mb-[20px] w-[200px] h-[65px] mx-auto' />
                        </li>    
                        <form onSubmit={LoginForm}>
                            <li>
                                <p className='text-left text-[18px] font-bold pt-[30px] dark:text-[#ebf4f1] pb-2'>{messages.login1}</p>
                                <input type='email' onChange={(e) => setEmail(e.target.value)} required autoFocus className='email w-full h-[50px] border-b border-[#ddd] text-[16px] p-[15px] text-[#bbb] box-border dark:bg-[#272929] dark:focus:outline-none dark:text-[#ebf4f1] dark:border-none'></input>
                            </li>
                            <li>
                                <p className='text-left text-[18px] font-bold pt-[20px] dark:text-[#ebf4f1] pb-2'>{messages.login2}</p>
                                <input type='password' onChange={(e) => setPassword(e.target.value)} required className='password w-full h-[50px] border-b border-[#ddd] text-[16px] p-[15px] text-[#bbb] box-border dark:bg-[#272929] dark:focus:outline-none dark:text-[#ebf4f1] dark:border-none'></input>
                            </li>
                            <li>
                                <p className='pt-4 text-red-500 text-sm text-left dark:text-[#ebf4f1]'>{error}</p>
                            </li>
                            <li>
                                <button className='w-full h-[50px] bg-[#60a7c8] text-[#fff] text-[18px] rounded-[10px] cursor-pointer mt-[22px] mb-[15px] dark:bg-[#272929]' onClick={LoginForm}>{messages.login3}</button>
                            </li>
                        </form>
                    </ul>
                    <div className='w-full h-[50px] bg-[#db4437] text-[#fff] text-[16px] rounded-[10px] cursor-pointer dark:bg-[#272929] pl-5 py-3 mb-3' onClick={()=>{alert("이 기능은 현재 마법사가 주문을 완성하는 중입니다.")}}>
                        <FontAwesomeIcon icon={faGoogle} className='mr-2' /> Login with Google
                    </div>
                    <ul className='flex justify-between text-sm text-gray-500'>
                        <li>
                            <NavLink to="/findemail">
                                <p className='dark:text-[#ebf4f1]'>{messages.login4}</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/member">
                                <p className='dark:text-[#ebf4f1]'>{messages.login5}</p>
                            </NavLink>
                        </li>
                    </ul>                   
                </div>
            </div>
        </>
    )
}

export default Login_c