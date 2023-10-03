import { faFacebook, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-[#797979] w-full lg:h-[300px]'>
            <div className='lg:w-[1200px] lg:flex lg:justify-between lg:px-[10px] lg:py-[40px]
            md:w-[768px]
            m-auto p-5'>
                <div className='lg:basis-1/2 text-white'>
                    <ul className='lg:block hidden'>
                        <li>푸리푸리 고객센터</li>
                        <li><span className='lg:text-2xl md:text-xl pr-[10px] font-bold'>8282-0000</span>09:00-18:00</li>
                        <li className='lg:text-xs'><span className='p-[10px] border inline-block cursor-pointer m-[10px]
                        ml-0 rounded-md hover:bg-slate-400 duration-500'>카카오톡 문의</span>공휴일 제외 09:00-18:00</li>
                        <li className='lg:text-xs'><span className='p-[10px] border inline-block cursor-pointer m-[10px]
                        ml-0 rounded-md hover:bg-slate-400 duration-500'>1:1 문의</span>365일 고객센터 운영시간에 순차적으로 답변드리겠습니다.</li>
                    </ul>
                </div>
                <div className='text-white basis-1/2'>
                    <ul className='flex text-sm justify-between pb-8'>
                        <li><NavLink className='text-white'>푸리푸리 소개</NavLink></li>
                        <li><NavLink className='text-white'>마이페이지</NavLink></li>
                        <li><NavLink className='text-white'>이용약관</NavLink></li>
                        <li><NavLink className='text-white font-bold'>개인정보처리방침</NavLink></li>
                        <li><NavLink className='text-white'>이용안내</NavLink></li>
                    </ul>
                    <ul className='lg:flex text-sm leading-9 hidden'>
                        <li className='pr-5'>법인명 : 푸리푸리</li>
                        <li>사업자등록번호 : 119-82-1234</li>
                    </ul>
                    <ul className='lg:flex text-sm leading-9 hidden'>
                        <li className='pr-5'>통신판매업 : 제 2023-대구광역시중구-00505 호</li>
                        <li>개인정보보호책임자 : React Puri</li>
                    </ul>
                    <ul className='lg:flex text-sm hidden'>
                        <li className='pr-5'>입점문의 : 8282-0000</li>
                        <li>채용문의 : 8282-0000</li>
                    </ul>
                    <ul className='flex pt-7 lg:justify-start justify-center'>
                        <li className='pr-7'><NavLink><FontAwesomeIcon icon={faGithub} size='xl' /></NavLink></li>
                        <li className='pr-7'><NavLink><FontAwesomeIcon icon={faInstagram} size='xl' /></NavLink></li>
                        <li className='pr-7'><NavLink><FontAwesomeIcon icon={faFacebook} size='xl' /></NavLink></li>
                        <li><NavLink><FontAwesomeIcon icon={faYoutube} size='xl' /></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer