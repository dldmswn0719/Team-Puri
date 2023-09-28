import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { firebaseAuth, signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup , createUserWithEmailAndPassword } from '../firebase';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { logIn , loggedIn } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Login_c() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const userState = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = useSelector(state => state.dark)

    const errorMsg = (errorCode) => {
        const firebaseError = {
            'auth/user-not-found' : "사용자를 찾을 수 없습니다.",
            'auth/wrong-password' : "이메일 혹은 비밀번호가 잘못되었습니다.",
            'auth/invalid-email' : "유효하지 않는 이메일입니다.",
            'auth/invalid-login-credentials' : "이메일 혹은 비밀번호가 잘못되었습니다."
        }
        return firebaseError[errorCode] || '알 수 없는 에러가 발생했습니다.'
    }

    const LoginForm = async (e) => {
        e.preventDefault();
        try {
            const userLogin = await signInWithEmailAndPassword(firebaseAuth, email, password);
            // console.log(userLogin);

            const user = userLogin.user;
            // console.log(user);
            alert("로그인 되었습니다.")

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
            // console.log(error.code);
        }
    }

    const snsLogin = async (data) =>{
        // alert(data)
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
            navigate("/member" ,{
                state:
                {
                name : user.displayName,
                email : user.email
                }
            })
          }catch(error){
            // console.log(error) 
            setError(errorMsg(error))
            // 파이어베이스 사용자 구글 설정 아직 안해서 오류날거임
          }
        
    }

    return (
        <>
            <div className="w-full bg-white dark:bg-[#272929] h-[100vh]">
                <div className='w-[400px] h-[555px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-[30px] dark:bg-[#404343]'>
                    <ul className='text-center'>
                        <li>
                            <img src={
                                theme === 'light' ? 
                                "./../Images/logo_s1.png"
                                :
                                "./../Images/Main/logo_dark_small.png"
                            } alt='logo' className='mb-[20px] w-[200px] h-[65px] mx-auto' />
                        </li>    
                        <form onSubmit={LoginForm}>
                            <li>
                                <p className='text-left text-[18px] font-bold pt-[30px] dark:text-[#ebf4f1] pb-2'>이메일</p>
                                <input type='email' onChange={(e) => setEmail(e.target.value)} required autoFocus className='email w-full h-[50px] border-b border-[#ddd] text-[16px] p-[15px] text-[#bbb] box-border dark:bg-[#272929] dark:focus:outline-none dark:text-[#ebf4f1] dark:border-none'></input>
                            </li>
                            <li>
                                <p className='text-left text-[18px] font-bold pt-[20px] dark:text-[#ebf4f1] pb-2'>비밀번호</p>
                                <input type='password' onChange={(e) => setPassword(e.target.value)} required className='password w-full h-[50px] border-b border-[#ddd] text-[16px] p-[15px] text-[#bbb] box-border dark:bg-[#272929] dark:focus:outline-none dark:text-[#ebf4f1] dark:border-none'></input>
                            </li>
                            <li>
                                <p className='pt-4 text-red-500 text-sm text-left'>{error}</p>
                            </li>
                            <li>
                                <button className='w-full h-[50px] bg-[#162c58] text-[#fff] text-[18px] rounded-[10px] cursor-pointer mt-[22px] mb-[15px] dark:bg-[#272929]' onClick={LoginForm}>로그인</button>
                            </li>
                        </form>
                    </ul>
                    <div className='w-full h-[50px] bg-[#db4437] text-[#fff] text-[16px] rounded-[10px] cursor-pointer dark:bg-[#272929] pl-5 py-3 mb-3' onClick={()=>{snsLogin('google')}}>
                        <FontAwesomeIcon icon={faGoogle} className='mr-2' /> Login with Google
                    </div>
                    <ul className='flex justify-between text-sm text-gray-500'>
                        <li>
                            <NavLink to="/findemail">
                                <p className='dark:text-[#ebf4f1]'>이메일 찾기 / 비밀번호 재설정</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/member">
                                <p className='dark:text-[#ebf4f1]'>회원가입</p>
                            </NavLink>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </>
    )
}

export default Login_c