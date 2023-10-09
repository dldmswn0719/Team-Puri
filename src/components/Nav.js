import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faEarthAmericas, faLock, faUserPen, faXmark, faUser, faBurger } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, toggleTheme } from '../store';
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';

function Nav() {

    const theme = useSelector(state => state.dark)
    const userState = useSelector(state => state.user);
    const language = useSelector(state => state.language);

    const dispatch = useDispatch()
    const messages = language === 'en' ? enMessages : krMessages;
    const [hamburger, setHamburger] = useState(false)

    const toggleHamburger = () => {
        setHamburger(!hamburger)
    }

    const changeLanguage = (lang) => {
        localStorage.setItem('language', lang);
        dispatch(setLanguage(lang));
    }

    return (
        <>
            <div className="w-full bg-[#fff] dark:bg-[#292929] px-[2%] sticky top-0 py-3 z-50 md:py-4 lg:pb-6">
                <div className="max-w-7xl mx-auto hidden lg:block">
                    <ul className='flex justify-end py-1'>
                        <FontAwesomeIcon icon={faLock} className='dark:text-[#ebf4f1] mt-1' />
                        <li className='dark:text-[#ebf4f1]'>
                            <NavLink to={userState.data?.email ? "/logout" : "/login"}>
                                {userState.data?.email ?
                                    <p className='dark:text-[#ebf4f1] pl-1'>{messages.logout}</p>
                                    :
                                    <p className='dark:text-[#ebf4f1] pl-1'>{messages.login}</p>
                                }
                            </NavLink>
                        </li>
                        <FontAwesomeIcon icon={userState.data?.email ? faUserPen : faUser} className='dark:text-[#ebf4f1] mt-1 pl-3' />
                        <li className='dark:text-[#ebf4f1]'>
                            {
                                userState.data?.email ?
                                <NavLink to={"/modify"}>
                                    <p className=' dark:text-[#ebf4f1] pl-1'>{messages.modify}</p>
                                </NavLink>
                                :
                                <NavLink to={"/member"}>
                                    <p className=' dark:text-[#ebf4f1] pl-1'>{messages.member}</p>
                                </NavLink>
                            }
                        </li>
                    </ul>
                </div>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div>
                        <NavLink to="/">
                            <img className="items-center lg:block md:block fold:block sm:hidden " src={
                                theme === 'light' ?
                                    "./../Images/logo.png"
                                    :
                                    "./../Images/logo_dark.png"
                            } alt="logo" />
                            <img className="items-center lg:hidden sm:ml-3 md:hidden fold:hidden sm:block" src={
                                theme === 'light' ?
                                    "./../Images/mobile_logo.png"
                                    :
                                    "./../Images/mobile_logo_dark.png"
                            } alt="logo" />
                        </NavLink>
                    </div>
                    <div className='basis-[60%] hidden lg:block'>
                        <ul className='flex justify-between'>
                            <li className='basis-full text-center text-[18px] relative
                            hover:font-bold hover:after:w-full hover:after:h-[7px] hover:after:absolute hover:after:bg-[#86bcd5] hover:after:bottom-[-43px] hover:after:left-0
                            after:w-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/introduce" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1] ">{messages.introduction}</NavLink>
                            </li>
                            <li className='basis-full text-center text-[18px] relative
                            hover:font-bold hover:after:w-full hover:after:h-[7px] hover:after:absolute hover:after:bg-[#86bcd5] hover:after:bottom-[-43px] hover:after:left-0
                            after:w-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/info" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">{messages.introducinganimal}</NavLink>
                            </li>
                            <li className='basis-full text-center text-[18px] relative
                            hover:font-bold hover:after:w-full hover:after:h-[7px] hover:after:absolute hover:after:bg-[#86bcd5] hover:after:bottom-[-43px] hover:after:left-0
                            after:w-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/review_page" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">{messages.adoptionreview}</NavLink>
                            </li>
                            <li className='basis-full text-center text-[18px] relative
                            hover:font-bold hover:after:w-full hover:after:h-[7px] hover:after:absolute hover:after:bg-[#86bcd5] hover:after:bottom-[-43px] hover:after:left-0
                            after:w-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                <NavLink to="/support" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">{messages.sponsoredstore}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[10%] hidden lg:block">
                        <ul className='basis-[10%] flex justify-between'>
                            <li className='basis-1/2 text-center cursor-pointer text-2xl'>
                                <button onClick={() => { dispatch(toggleTheme()) }}>
                                    <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className='text-[25px] dark:text-[#ebf4f1]' />
                                </button>
                            </li>
                            <li className='basis-1/2 cursor-pointer text-2xl mt-1'>
                                {
                                    language === 'kr' && 
                                    <img onClick={() => changeLanguage('en')} src={
                                        theme === 'light' ? './../Images/global.png' : './../Images/global-dark.png'
                                    } alt='global'/>
                                }
                                {
                                    language === 'en' &&
                                    <img onClick={() => changeLanguage('kr')} src={
                                        theme === 'light' ? '/../Images/korean.png' : '/../Images/korean-dark.png'
                                    } alt='korean'/>
                                }
                            </li>
                        </ul>
                    </div>
                    
                    {/* 모바일 네비 시작 */}
                    <div className='lg:hidden flex'>
                        <div className='cursor-pointer mt-[2px]'>
                            {
                                language === 'kr' && 
                                <img onClick={() => changeLanguage('en')} src={
                                    theme === 'light' ? './../Images/global.png' : './../Images/global-dark.png'
                                } alt='global'/>
                            }
                            {
                                language === 'en' &&
                                <img onClick={() => changeLanguage('kr')} src={
                                    theme === 'light' ? '/../Images/korean.png' : '/../Images/korean-dark.png'
                                } alt='korean'/>
                            }
                        </div>
                        <div className="transition-all duration-1000 z-[100] cursor-pointer lg:hidden pr-3 pl-4" onClick={() => {toggleHamburger() }}>
                            {
                                hamburger ?
                                <FontAwesomeIcon icon={faXmark} className='w-8 h-8 dark:text-white' />
                                :
                                <FontAwesomeIcon icon={faBurger} className='w-7 h-7 dark:text-white' />
                            }
                        </div>
                    </div>
                    <div className={`w-[280px] md:w-80 h-full fixed bg-[#e5f0f6] dark:bg-[#272929] z-50 p-8 md:p-12 top-0 box-border transition-all duration-500 lg:hidden ${hamburger ? 'right-0' : '-right-80'}`}>
                        <ul className='flex mt-7'>
                            <FontAwesomeIcon icon={faLock} className=' mt-[5px] w-5 h-5 dark:text-[#ebf4f1] pr-2' />
                            <li className='mt-1 text-center cursor-pointer dark:text-[#ebf4f1]'>
                                <NavLink to={userState.data?.email ? "/logout" : "/login"}>
                                    {
                                        userState.data?.email ?
                                        <p className=' dark:text-[#ebf4f1] after:w-[2px] after:h-5 after:bg-[#d2d2d2] after:absolute after:mt-1 after:ml-[9px]'>{messages.logout}</p>
                                        :
                                        <p className=' dark:text-[#ebf4f1] after:w-[2px] after:h-5 after:bg-[#d2d2d2] after:absolute after:mt-1 after:ml-[9px]'>{messages.login}</p>
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
                        <div className='flex pt-4 justify-end'>
                            <button className='flex' onClick={() => {dispatch(toggleTheme()) }}>
                                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className='text-[25px] dark:text-[#ebf4f1] mt-1 w-6 h-6' />
                                <p className='dark:text-[#ebf4f1] pl-2 pt-1'>
                                    {
                                        theme === 'light' ? `${messages.mnavdark}` : `${messages.mnavlight}`
                                    }
                                </p>
                            </button>
                        </div>
                        <img src='./../Images/mobilenav.jpg' alt='img' className='pt-8'/>
                    </div>
                    {/* 모바일 네비 끝 */}
                </div>
            </div>
        </>
    );
}

export default Nav