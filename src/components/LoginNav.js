import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { faLock, faUserPen , faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';


function LoginNav() {
    const userState = useSelector(state => state.user);
    // console.log(userState)
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <>
            <div className="hidden md:block">
                <ul className='flex justify-end'>
                    <FontAwesomeIcon icon={faLock} className='dark:text-[#ebf4f1] mt-1' />
                    <li className='dark:text-[#ebf4f1]'>
                        <NavLink to={userState.data?.email ? "/logout" : "/login"}>
                            {userState.data?.email ?
                                <p className='dark:text-[#ebf4f1]'>{messages.logout}</p>
                                :
                                <p className='dark:text-[#ebf4f1]'>{messages.login}</p>
                            }
                        </NavLink>
                    </li>
                    <FontAwesomeIcon icon={userState.data?.email ? faUserPen : faUser} className='dark:text-[#ebf4f1] mt-1 pl-3' />
                    <li className='dark:text-[#ebf4f1]'>
                        {
                            userState.data?.email ?
                                <p className=' dark:text-[#ebf4f1]'>
                                    <NavLink to={"/modify"}>{messages.modify}</NavLink>
                                </p>
                                :
                                <p className='dark:text-[#ebf4f1] '>
                                    <NavLink to={"/member"}>{messages.member}</NavLink>
                                </p>
                        }
                    </li>
                    {/* <NavLink to="/mypage">
                                <li className='dark:text-[#ebf4f1]'>마이페이지</li>
                            </NavLink> */}
                    {/* 마이페이지 임시 주석 */}
                </ul>
            </div>

        </>
    )
}

export default LoginNav