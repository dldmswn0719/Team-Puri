import { faFacebook, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-[#292929] w-full'>
            <div className='m-auto py-10 lg:w-[1200px] md:w-[768px]'>
                <div>
                    <img src="./../../Images/Main/logo_dark_small.png" alt="footerlogo" className='m-auto' />
                </div>
                <ul className='flex text-xs justify-around m-auto py-5
                md:text-sm md:py-8 md:justify-between
                lg:text-base lg:py-8 lg:w-5/6 lg:justify-between'>
                    <li><NavLink to='/introduce' className='text-white'>푸리푸리 소개</NavLink></li>
                    <li><NavLink className='text-white'>인재채용</NavLink></li>
                    <li><NavLink className='text-white'>제휴제안</NavLink></li>
                    <li><NavLink className='text-white'>이용약관</NavLink></li>
                    <li><NavLink className='text-white font-bold'>개인정보처리방침</NavLink></li>
                    <li><NavLink className='text-white'>고객센터</NavLink></li>
                    <li><NavLink to='/supportpay' className='text-white'>후원하기</NavLink></li>
                </ul>
                <ul className='flex pb-8 justify-between text-5xl w-2/3 m-auto
                md:text-5xl md:w-3/4 md:m-auto
                lg:text-7xl lg:w-2/5 lg:m-auto'>
                    <li><NavLink><FontAwesomeIcon icon={faGithub} color='white' /></NavLink></li>
                    <li><NavLink><FontAwesomeIcon icon={faInstagram} color='white' /></NavLink></li>
                    <li><NavLink><FontAwesomeIcon icon={faFacebook} color='white' /></NavLink></li>
                    <li><NavLink><FontAwesomeIcon icon={faYoutube} color='white' /></NavLink></li>
                </ul>
                <ul className='lg:flex lg:justify-between text-white text-sm hidden'>
                    <li>회사명 : 푸리푸리</li>
                    <li>사업자등록번호 : 505-82-91522</li>
                    <li>통신판매업 : 제 2023-대구광역시중구-00505 호</li>
                    <li>개인정보보호책임자 : React Puri</li>
                    <li>입점문의 : 505-8282</li>
                </ul>
                <p className='text-gray-500 text-center lg:pt-8'>Copyright 2023. 푸리푸리 All rights reserved.</p>                
            </div>
        </div>
    );
}

export default Footer