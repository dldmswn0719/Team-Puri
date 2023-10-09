import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faReact, faYoutube } from '@fortawesome/free-brands-svg-icons';
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';

function Footer() {

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    return (
        <div className='bg-[#292929] w-full'>
            <div className='m-auto py-10 lg:max-w-[1200px] md:max-w-[768px]'>
                <div>
                    <img src="./../../Images/logo_dark.png" alt="footerlogo" className='m-auto' />
                </div>
                <ul className={`flex text-xs justify-around m-auto py-5 w-60 flex-wrap
                md:text-sm md:py-8 md:justify-between md:w-5/6
                lg:text-base lg:py-8 lg:w-5/6 lg:justify-between`}>
                    <li><NavLink to='/introduce' className='text-white'>{messages.footer1}</NavLink></li>
                    <li><NavLink className='text-white'>{messages.footer2}</NavLink></li>
                    <li><NavLink className='text-white'>{messages.footer3}</NavLink></li>
                    <li><NavLink className='text-white'>{messages.footer4}</NavLink></li>
                    <li><NavLink className='text-white font-bold'>{messages.footer5}</NavLink></li>
                    <li><NavLink className='text-white'>{messages.footer6}</NavLink></li>
                    <li><NavLink to='/supportpay' className='text-white'>{messages.footer7}</NavLink></li>
                </ul>
                <ul className='flex pb-8 justify-between text-5xl w-2/3 m-auto
                md:text-5xl md:w-3/4 md:m-auto
                lg:text-7xl lg:w-2/5 lg:m-auto'>
                    <li><NavLink><FontAwesomeIcon icon={faGithub} color='white' /></NavLink></li>
                    <li><NavLink to='https://www.instagram.com/reactpuripuri/'><FontAwesomeIcon icon={faInstagram} color='white' /></NavLink></li>
                    <li><NavLink><FontAwesomeIcon icon={faReact} color='white' /></NavLink></li>
                    <li><NavLink><FontAwesomeIcon icon={faYoutube} color='white' /></NavLink></li>
                </ul>
                <ul className='lg:flex lg:justify-around text-white text-sm hidden'>
                    <li>{messages.footer8}</li>
                    <li>{messages.footer9}</li>
                    <li>{messages.footer10}</li>
                    <li>{messages.footer11}</li>
                    <li>{messages.footer12}</li>
                </ul>
                <p className='text-gray-500 text-center lg:pt-8 lg:text-base md:text-base text-xs'>Copyright 2023. {messages.complete8} All rights reserved.</p>                
            </div>
        </div>
    );
}

export default Footer