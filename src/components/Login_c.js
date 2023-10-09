import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { firebaseAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '../firebase';
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
    const theme = useSelector(state => state.dark);

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
            alert(`${messages.alert[3]}`);

            sessionStorage.setItem("users", user.uid);
            dispatch(logIn(user.uid));

            const userDoc = doc(collection(getFirestore(), "users"), user.uid);
            
            const userDocSnapshot = await getDoc(userDoc);

            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data();
                dispatch(loggedIn(userData));
                navigate(-1);
            }

        } catch(error) {
            setError(errorMsg(error.code));
        }
    }

    const snsLogin = async (data) => {
        let provider;
        switch(data) {
            case 'google' : 
                provider = new GoogleAuthProvider();
            break;

            default:
            return;
        } try {
            const result = await signInWithPopup(firebaseAuth,provider);
            const user = result.user;
            console.log(user);
            sessionStorage.setItem("users",user.uid);
            dispatch(logIn(user.uid));
            navigate("/", {
                state:
                {
                name : user.displayName,
                email : user.email
                }
            });
        } catch (error) {
            setError(errorMsg(error));
        }
    }

    return (
        <>
            <div className="bg-[#fff] dark:bg-[#292929] lg:h-[calc(100vh-133px)] md:h-[calc(100vh-97px)] h-[calc(100vh-74px)] flex items-center px-5">
                <div className="h-max mx-auto flex flex-col items-center">
                    <h1 className="lg:text-3xl text-xl font-bold text-center pb-10 dark:text-white">{messages.login3}</h1>
                    <div className="bg-white dark:bg-[#404343] shadow-xl p-10 flex flex-col gap-4 text-sm">
                        <form onSubmit={LoginForm}>
                            <div>
                                <label className="text-gray-600 dark:text-white font-bold inline-block pb-2" for="email">{messages.login1}</label>
                                <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full h-12 shadow-sm px-5 py-2 dark:bg-[#272929] dark:text-white" type="email" onChange={(e) => setEmail(e.target.value)} required autoFocus name="email" placeholder="puripuri@react.com" />
                            </div>
                            <div>
                                <label className="text-gray-600 dark:text-white font-bold inline-block pb-2 pt-5" for="password">{messages.login2}</label>
                                <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full h-12 shadow-sm px-5 py-2 dark:bg-[#272929] dark:text-white" type="password" onChange={(e) => setPassword(e.target.value)} required name="password" placeholder="******" />
                            </div>
                            <div>
                                <p className='pt-4 text-red-500 text-sm text-left dark:text-[#ebf4f1]'>{error}</p>
                            </div>
                            <button className='w-full h-[40px] bg-[#60a7c8] text-[#fff] rounded-md cursor-pointer mt-[22px] mb-[15px] dark:bg-[#272929] hover:bg-[#4090b6]' onClick={LoginForm}>{messages.login3}</button>
                            <div>
                                <div className='w-full h-[40px] bg-[#db4437] text-[#fff] rounded-md cursor-pointer dark:bg-[#272929] pl-5 pt-[10px] mb-3 hover:bg-[#bf3225]' onClick={()=>{alert(messages.alert[5])}}><FontAwesomeIcon icon={faGoogle} className='mr-2' /> Login with Google</div>
                            </div>
                        </form>
                        <div class="flex justify-between">
                            <NavLink to='/findemail' className="text-gray-500 dark:text-white">{messages.login4}</NavLink>
                            <NavLink to='/member' className="text-gray-500 dark:text-white">{messages.login5}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login_c