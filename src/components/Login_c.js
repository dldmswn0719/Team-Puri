import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



function Login_c() {

    const navigate = useNavigate();

    return (
        <>
            <div className='w-[400px] h-[500px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-[30px] dark:bg-[#272929]'>
                <ul className='text-center'>
                    <li>
                        <img src="./../Images/logo_s1.png" alt='logo' className='mb-[20px] w-[200px] h-[65px] mx-auto' />
                    </li>
                    <li>
                        <p className='text-left text-[18px] font-bold pt-[30px] dark:text-[#ebf4f1]'>아이디</p>
                        <input type='text' autoFocus className='w-full h-[50px] border-b border-[#ddd] text-[16px] p-[15px] text-[#bbb] box-border dark:bg-[#404343] dark:text-[#ebf4f1] dark:border-none'></input>
                    </li>
                    <li>
                        <p className='text-left text-[18px] font-bold pt-[30px] dark:text-[#ebf4f1]'>비밀번호</p>
                        <input type='password' className='w-full h-[50px] border-b border-[#ddd] text-[16px] p-[15px] text-[#bbb] box-border dark:bg-[#404343] dark:text-[#ebf4f1] dark:border-none'></input>
                    </li>
                    <li>
                        <button className='w-full h-[50px] bg-[#162c58] text-[#fff] text-[18px] rounded-[10px] cursor-pointer mt-[30px] mb-[30px] dark:bg-[#404343]' onClick={() => {navigate(-1);}}>로그인</button>
                    </li>
                </ul>
                <ul className='flex justify-around text-sm text-gray-500'>
                    <li>
                        <NavLink to="/join">
                            <p className='dark:text-[#ebf4f1]'>회원가입</p>
                        </NavLink>
                    </li>
                    <li className='dark:text-[#ebf4f1]'>아이디 찾기</li>
                    <li className='dark:text-[#ebf4f1]'>비밀번호 찾기</li>
                </ul>
            </div>
        </>
    )
}

export default Login_c