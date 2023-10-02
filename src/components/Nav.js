import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEarthAmericas, faLock, faUserPen, faXmark, faUser } from '@fortawesome/free-solid-svg-icons';
// import { signOut } from 'firebase/auth';
// import { firebaseAuth } from '../firebase';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, toggleTheme } from '../store';
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';

function Nav() {

    const theme = useSelector(state => state.dark)
    const dispatch = useDispatch()

    const [hamburger, setHamburger] = useState(false)
    const toggleHamburger = () => {
        setHamburger(!hamburger)
    }

    const userState = useSelector(state => state.user);
    // console.log(userState);

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    const changeLanguage = (lang) => {
        localStorage.setItem('language', lang);
        dispatch(setLanguage(lang));
    }

    return (
        <>
            <div className="w-full bg-[#fff] dark:bg-[#292929] px-[2%] sticky top-0 pb-4 pt-7 z-50">
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
                    <div className='basis-[60%] hidden lg:block'>
                        <ul className='flex justify-between'>
                            <li className='basis-full text-center hover:font-bold text-[18px] relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/introduce" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1] ">{messages.introduction}</NavLink>
                            </li>
                            <li className='hover:font-bold text-[18px]  text-center basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/info" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">{messages.introducinganimal}</NavLink>
                            </li>
                            <li className='hover:font-bold text-[18px]  text-center after:transition-all basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/review_page" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">{messages.adoptionreview}</NavLink>
                            </li>
                            <li className='hover:font-bold text-[18px] text-center after:transition-all basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/support" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">{messages.sponsoredstore}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[10%] hidden lg:block">
                        <ul className='basis-[10%] flex justify-between'>
                            <li className='basis-2/4 text-center cursor-pointer text-2xl'>
                                <button onClick={() => { dispatch(toggleTheme()) }}>
                                    <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className='text-[25px] dark:text-[#ebf4f1]' />
                                </button>
                            </li>
                            <li className='basis-2/4 text-center cursor-pointer text-2xl relative group'>
                                <FontAwesomeIcon icon={faEarthAmericas} className='text-[25px] dark:text-[#ebf4f1]' />
                                <ul className='z-100 dark:bg-[#272929] absolute w-20 top-[50px] left-[-5px] bg-white transition-all duration-500 flex flex-wrap h-0 overflow-hidden group-hover:h-24'>
                                    <li onClick={() => changeLanguage('kr')} className='dark:hover:bg-[#404040b3] border w-full basis-full h-12 leading-10 hover:font-bold hover:bg-[#f8f0e5]'>
                                        <button className='text-sm dark:text-[#ebf4f1]'>{messages.korean}</button>
                                    </li>
                                    <li onClick={() => changeLanguage('en')} className='dark:hover:bg-[#404040b3] border w-full basis-full h-12 leading-10 hover:font-bold hover:bg-[#f8f0e5]'>
                                        <button className='text-sm dark:text-[#ebf4f1]'>{messages.english}</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <ul className='flex justify-between'>
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
                                        <NavLink to={"/modify"}>
                                            <p className=' dark:text-[#ebf4f1]'>{messages.modify}</p>
                                        </NavLink>
                                        :
                                        <NavLink to={"/member"}>
                                            <p className=' dark:text-[#ebf4f1]'>{messages.member}</p>
                                        </NavLink>
                                }
                            </li>
                            {/* <NavLink to="/mypage">
                                <li className='dark:text-[#ebf4f1]'>마이페이지</li>
                            </NavLink> */}
                            {/* 마이페이지 임시 주석 */}
                        </ul>
                    </div>
                    {/* 후원,스토어  페이지만 보이도록 */}

                    {/* 모바일 네비 시작 */}
                    <div className='lg:hidden flex'>
                        <div>
                            <button onClick={() => { dispatch(toggleTheme()) }}>
                                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className='text-[25px] dark:text-[#ebf4f1] mt-1' />
                            </button>
                        </div>
                        <div className='lg:hidden text-center cursor-pointer text-2xl relative group pl-3 pr-2'>
                            <FontAwesomeIcon icon={faEarthAmericas} className='text-[25px] dark:text-[#ebf4f1]' />
                            <ul className='z-100 dark:bg-[#272929] absolute w-20 top-[50px] -left-[25px] bg-white transition-all duration-500 flex flex-wrap h-0 overflow-hidden group-hover:h-24'>
                                <li onClick={() => changeLanguage('kr')} className='dark:hover:bg-[#404040b3] border w-full basis-full h-12 leading-10 hover:font-bold hover:bg-[#f8f0e5]'>
                                    <button className='text-sm dark:text-[#ebf4f1]'>{messages.korean}</button>
                                </li>
                                <li onClick={() => changeLanguage('en')} className='dark:hover:bg-[#404040b3] border w-full basis-full h-12 leading-10 hover:font-bold hover:bg-[#f8f0e5]'>
                                    <button className='text-sm dark:text-[#ebf4f1]'>{messages.english}</button>
                                </li>
                            </ul>
                        </div>
                        <div className="transition-all duration-1000 z-[100] cursor-pointer lg:hidden" onClick={() => {toggleHamburger() }}>
                            {
                                hamburger ?
                                    <FontAwesomeIcon icon={faXmark} className='w-8 h-8 dark:text-white' />
                                    :
                                    <FontAwesomeIcon icon={faBars} className='w-8 h-8 dark:text-white' />
                            }
                        </div>
                    </div>
                    <div className={`w-80 h-full fixed bg-gray-100 dark:bg-[#272929] z-50 p-12 top-0 box-border transition-all duration-500 lg:hidden ${hamburger ? 'right-0' : '-right-80'}`}>
                        <ul className='flex mt-3'>
                            <FontAwesomeIcon icon={faLock} className='mt-[5px] w-5 h-5 dark:text-[#ebf4f1] pr-2' />
                            <li className='mt-1 text-center cursor-pointer dark:text-[#ebf4f1]'>
                                <NavLink to={userState.data?.email ? "/logout" : "/login"}>
                                    {
                                        userState.data?.email ?
                                            <p className='dark:text-[#ebf4f1] after:w-[2px] after:h-5 after:bg-[#d2d2d2] after:absolute after:mt-1 after:ml-[9px]'>{messages.logout}</p>
                                            :
                                            <p className='dark:text-[#ebf4f1] after:w-[2px] after:h-5 after:bg-[#d2d2d2] after:absolute after:mt-1 after:ml-[9px]'>{messages.login}</p>
                                    }
                                </NavLink>
                            </li>
                            <FontAwesomeIcon icon={userState.data?.email ? faUserPen : faUser} className='mt-1 w-[22px] h-[22px] dark:text-[#ebf4f1]  pl-[25px] pr-2' />
                            <li className='mt-1 text-center cursor-pointer dark:text-[#ebf4f1]'>
                                {
                                    userState.data?.email ?
                                        <NavLink to={"/modify"}>
                                            <p className=' dark:text-[#ebf4f1]'>{messages.modify}</p>
                                        </NavLink>
                                        :
                                        <NavLink to={"/member"}>
                                            <p className=' dark:text-[#ebf4f1]'>{messages.member}</p>
                                        </NavLink>
                                }
                            </li>
                        </ul>
                        <ul>                           
                            <NavLink to="/introduce">
                                <li className='pt-8 pb-5 border-b hover:font-bold cursor-pointer dark:text-[#ebf4f1]'>
                                    {messages.introduction}
                                </li>
                            </NavLink>
                            <NavLink to="/info">
                                <li className='pt-8 pb-5 border-b hover:font-bold cursor-pointer dark:text-[#ebf4f1]'>
                                    {messages.introducinganimal}
                                </li>
                            </NavLink>
                            <NavLink to="/review_page">
                                <li className='pt-8 pb-5 border-b hover:font-bold cursor-pointer dark:text-[#ebf4f1]'>
                                    {messages.adoptionreview}
                                </li>
                            </NavLink>
                            <NavLink to="/support">
                                <li className='pt-8 pb-5 border-b hover:font-bold cursor-pointer dark:text-[#ebf4f1]'>
                                    {messages.sponsoredstore}
                                </li>
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