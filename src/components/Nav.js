import { faMoon , faSun } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEarthAmericas, faLock, faUserPen, faXmark , faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../firebase';
import { logOut, toggleTheme } from '../store';

function Nav() {
    
    const theme = useSelector(state => state.dark)
    const dispatch = useDispatch()

    //아직 다국어 설정못함
    const [lang,setLang] = useState("kr")

    const toggleLang = () =>{
        if(localStorage.getItem("lang") === "kr"){
            localStorage.removeItem("lang");
            setLang("en")
        }else{
            localStorage.setItem("lang","en");
            setLang("kr")
        }
    }
    //아직 다국어 설정못함

    const [hamburger,setHamburger] = useState(false)
    const toggleHamburger = () =>{
        setHamburger(!hamburger)
    }

    const userState = useSelector(state => state.user);
    // console.log(userState);

    return (
        <>
            <div className="w-full bg-[#fff] dark:bg-[#292929] dark:border-b dark:border-[#dadbdb] px-[2%] sticky top-0 pb-4 pt-7 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div>
                         <NavLink to="/">
                            <img className="items-center w-[200px] h-[65px]" src={
                                theme === 'light' ?
                                "./../Images/logo_s1.png"
                                :
                                "./../Images/Main/logo_dark_small.png"
                            } alt="logo" />
                    </NavLink>
                    </div>
                    <div className='basis-[60%] hidden md:block'>
                        <ul className='flex justify-between'>
                            <li className='basis-full text-center hover:font-bold text-[18px] relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/introduce" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1] ">소개</NavLink>
                            </li>
                            <li className='hover:font-bold text-[18px]  text-center basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/info" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">동물친구 소개</NavLink>
                            </li>
                            <li className='hover:font-bold text-[18px]  text-center after:transition-all basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/review_page" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">입양후기</NavLink>
                            </li>
                            <li className='hover:font-bold text-[18px] text-center after:transition-all basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/support" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">후원/스토어</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[10%] hidden md:block">                  
                        <ul className='basis-[10%] flex justify-between'>
                            <li className='basis-2/4 text-center cursor-pointer text-2xl'>
                                <button onClick={()=>{dispatch(toggleTheme())}}>
                                    <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className='text-[25px] dark:text-[#ebf4f1]' />
                                </button>
                            </li>
                            <li className='basis-2/4 text-center cursor-pointer text-2xl relative group'>
                                <FontAwesomeIcon icon={faEarthAmericas} className='text-[25px] dark:text-[#ebf4f1]' />
                                <ul className='dark:bg-[#272929] absolute w-20 top-[40px] left-[-5px] bg-white rounded transition-all duration-500 flex flex-wrap h-0 overflow-hidden group-hover:h-24'>
                                    <li onClick={()=>{toggleLang()}} className='w-full basis-full h-12 leading-10 hover:font-bold hover:bg-[#f8f0e5]'>
                                        <Link to="?Lang=kr" className='text-sm dark:text-[#ebf4f1]' onClick={()=>{setLang("kr")}}>한국어</Link>
                                    </li>
                                    <li onClick={()=>{toggleLang()}} className='w-full basis-full h-12 leading-10 hover:font-bold hover:bg-[#f8f0e5]'>
                                        <Link to="?Lang=en" className='text-sm dark:text-[#ebf4f1]' onClick={()=>{setLang("en")}}>ENGLISH</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className='flex justify-between'>
                            <li className='dark:text-[#ebf4f1]'>
                                <NavLink to={userState.data?.email ? "/logout" : "/login"}>
                                    <FontAwesomeIcon icon={faLock} className='dark:text-[#ebf4f1]' />{userState.data?.email ? 
                                    <p className='dark:text-[#ebf4f1]'>로그아웃</p>
                                    :
                                    <p className='dark:text-[#ebf4f1]'>로그인</p>
                                    }
                                </NavLink>
                            </li>
                            {
                                userState.data?.email ?
                                <li className='px-5 dark:text-[#ebf4f1]'>
                                    <NavLink to="/modify">
                                        <FontAwesomeIcon icon={faUserPen} className='dark:text-[#ebf4f1]' />
                                        <p className='dark:text-[#ebf4f1]'>정보수정</p>
                                    </NavLink>
                                </li>
                                :
                                <li className='px-5 dark:text-[#ebf4f1]'>
                                    <NavLink to="/member">
                                        <FontAwesomeIcon icon={faUser} className='dark:text-[#ebf4f1]' />
                                        <p className='dark:text-[#ebf4f1]'>회원가입</p>
                                    </NavLink>
                                </li>
                            }
                            <NavLink to="/mypage">
                                <li className='dark:text-[#ebf4f1]'>마이페이지</li>
                            </NavLink>
                        </ul>
                    </div>

                    {/* 모바일 네비 시작 */}
                    <div className="fixed right-5 top-7 transition-all duration-1000 z-[100] cursor-pointer md:hidden" onClick={()=>{toggleHamburger()}}>
                        {
                            hamburger ?
                            <FontAwesomeIcon icon={faXmark} className='w-8 h-8 dark:text-white'/>
                            :
                            <FontAwesomeIcon icon={faBars} className='w-8 h-8 dark:text-white'/>
                        }
                    </div>
                    <div className={`w-80 h-full fixed bg-gray-100 dark:bg-[#272929] z-50 p-12 top-0 box-border transition-all duration-500 lg:hidden ${hamburger ? 'right-0' : '-right-80'}`}>
                        <ul>
                            <li className='absolute top-4 left-5'>
                                <button onClick={()=>{dispatch(toggleTheme())}}>
                                    <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className='text-[25px] dark:text-[#ebf4f1]' />
                                </button>
                            </li>
                            <ul className='flex mt-3'>
                                <FontAwesomeIcon icon={faLock} className='mt-[5px] w-5 h-5 dark:text-[#ebf4f1] pr-2' />
                                <li className='mt-1 text-center cursor-pointer dark:text-[#ebf4f1]'>
                                    <NavLink to={userState.data?.email ? "/logout" : "/login"}>
                                        {
                                            userState.data?.email ? 
                                            <p className='dark:text-[#ebf4f1] after:w-[2px] after:h-5 after:bg-[#d2d2d2] after:absolute after:mt-1 after:ml-[9px]'>로그아웃</p>
                                            :
                                            <p className='dark:text-[#ebf4f1] after:w-[2px] after:h-5 after:bg-[#d2d2d2] after:absolute after:mt-1 after:ml-[9px]'>로그인</p>
                                        }
                                    </NavLink>
                                </li>

                                <FontAwesomeIcon icon={userState.data?.email ? faUserPen : faUser} className='mt-1 w-[22px] h-[22px] dark:text-[#ebf4f1]  pl-[25px] pr-2' />
                                <li className='mt-1 text-center cursor-pointer dark:text-[#ebf4f1]'>
                                        <NavLink to={userState.data?.email ? "/modify" : "/member" }>
                                            {
                                                userState.data?.email ? 
                                                <p className=' dark:text-[#ebf4f1]'>정보수정</p>
                                                :
                                                <p className='dark:text-[#ebf4f1] '>회원가입</p>
                                            }
                                        </NavLink>
                                </li>
                            </ul>
                            <NavLink to="/introduce">
                                <li className='pt-8 pb-5 border-b hover:font-bold cursor-pointer dark:text-[#ebf4f1]'>소개</li>
                            </NavLink>
                            <NavLink to="/info">
                                <li className='pt-8 pb-5 border-b hover:font-bold cursor-pointer dark:text-[#ebf4f1]'>동물친구 소개</li>
                            </NavLink>
                            <NavLink to="/review_page">
                                <li className='pt-8 pb-5 border-b hover:font-bold cursor-pointer dark:text-[#ebf4f1]'>입양후기</li>
                            </NavLink>
                            <NavLink to="/support">
                                <li className='pt-8 pb-5 border-b hover:font-bold cursor-pointer dark:text-[#ebf4f1]'>후원 / 스토어</li>
                            </NavLink>
                        </ul>
                    </div>
                    {/* 모바일 네비 끝 */}
                </div>
            </div>
        </>  
    );
}

export default Nav