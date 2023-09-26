import { faLock, faUserPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


function LoginNav() {
    const userState = useSelector(state => state.user);
    // console.log(userState)

    return (
        <>
            <div className="">
                <ul className='flex justify-between'>
                    <li className='dark:text-[#ebf4f1]'>
                        <NavLink to={userState.data?.email ? "/" : "./login"}>
                            <FontAwesomeIcon icon={faLock} />{userState.data?.email ? ' 로그아웃' : ' 로그인'}
                        </NavLink>
                    </li>
                    <li className='px-5 dark:text-[#ebf4f1]'>
                        <NavLink to="/member">
                            <FontAwesomeIcon icon={faUserPen} /> 회원가입
                        </NavLink>
                    </li>
                    <NavLink to="/mypage">
                        <li className='dark:text-[#ebf4f1]'>마이페이지</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}

export default LoginNav