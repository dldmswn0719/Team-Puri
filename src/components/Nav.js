import { faMoon , faSun } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEarthAmericas, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    
    const [dark,setDark] = useState(false);

    const toggleDarkMode = () =>{
        if(localStorage.getItem("theme") === "dark"){
            localStorage.removeItem("theme");
            document.documentElement.classList.remove("dark")
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        setDark(!dark);
    }
    console.log(dark)

    useEffect(()=>{
        if(localStorage.getItem("theme") === "dark"){
            document.documentElement.classList.add("dark");
        }
    },[dark])

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

    const [hamburger,setHamburger] = useState(false)
    const toggleHamburger = () =>{
        setHamburger(!hamburger)
    }

    return (
        <div className="w-full bg-[#fff] dark:bg-[#292929] dark:border-b dark:border-[#dadbdb] px-[2%] sticky top-0 pb-4 pt-7 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div>
                    <NavLink to="/">
                        <img className="items-center w-[200px] h-[65px]" src="./../Images/logo_s1.png" alt="logo" />
                    </NavLink>
                </div>
                <div className='basis-[60%] hidden lg:block'>
                    <ul className='flex justify-between'>
                        <li className='basis-full text-center hover:font-bold text-[18px] relative after:w-0 hover:after:w-full hover:after:h-[3px] after:transition-all hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0'>
                            <NavLink to="/introduce" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1] ">소개</NavLink>
                        </li>
                        <li className='hover:font-bold text-[18px]  text-center after:transition-all basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0'>
                            <NavLink to="/info" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">동물친구 소개</NavLink>
                        </li>
                        <li className='hover:font-bold text-[18px]  text-center after:transition-all basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0'>
                            <NavLink to="/review_page" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">입양후기</NavLink>
                        </li>
                        <li className='hover:font-bold text-[18px] text-center after:transition-all basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0'>
                            <NavLink to="/support" className="text-[#797979] hover:text-[#222] dark:text-[#ebf4f1]">후원/스토어</NavLink>
                         </li>
                    </ul>
                </div>
                <div className="w-[10%] hidden lg:block">                  
                    <ul className='basis-[10%] flex justify-between'>
                        <li className='basis-2/4 text-center cursor-pointer text-2xl'>
                            <button onClick={toggleDarkMode}>
                                <FontAwesomeIcon icon={dark ? faSun : faMoon} className='text-[25px] dark:text-[#ebf4f1]' />
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
                <div className="hidden lg:block absolute top-2 right-[14%]">
                    <ul className='flex justify-between'>
                        <NavLink to="/login">
                            <li className='dark:text-[#ebf4f1]'>로그인</li>
                        </NavLink>
                        <NavLink to="/member">
                            <li className='px-5 dark:text-[#ebf4f1]'>회원가입</li>
                        </NavLink>
                        <NavLink to="/mypage">
                            <li className='dark:text-[#ebf4f1]'>마이페이지</li>
                        </NavLink>
                    </ul>
                </div>
                <div className="fixed right-5 top-10 transition-all duration-1000 z-[100] cursor-pointer lg:hidden" onClick={()=>{toggleHamburger()}}>
                    {
                        hamburger ?
                        <FontAwesomeIcon icon={faXmark} className='w-8 h-8 dark:text-white'/>
                        :
                        <FontAwesomeIcon icon={faBars} className='w-8 h-8 dark:text-white'/>
                    }
                </div>
                <div className={`w-80 h-full fixed bg-gray-100 dark:bg-[#272929] z-50 p-12 top-0 box-border transition-all duration-500 lg:hidden ${hamburger ? 'right-0' : '-right-80'}`}>
                    <ul>
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
            </div>
        </div>  
    );
}

export default Nav