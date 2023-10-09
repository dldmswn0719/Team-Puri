import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';
import AnimateNumber from 'animated-number-react';
import 'animate.css';

function Content5Donate() {

    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    const [isView, setIsView] = useState(false);
    useEffect(() => {
        const scrollEvent = () => {
            const rect = document.querySelector("#content1", "#content2").getBoundingClientRect();

            if (rect.top-200 <= window.innerHeight && rect.bottom >= 0) {
                setIsView(true);
            }
        }
        window.addEventListener("scroll", scrollEvent);
        scrollEvent();

        return() => {
            window.removeEventListener("scroll", scrollEvent);
        }
    }, []);

    const num = ["113440", "26"];

    return (
        <div className='content5bg lg:h-[800px] lg:mt-0 h-64 mt-28'>
            <div className='m-auto text-white p-10 md:max-w-[768px] lg:max-w-[1200px] lg:pt-36 lg:text-right'>
                <p className='lg:text-5xl tracking-tight text-2xl'>
                    <span className='font-bold'>
                        {messages.cont5donate1}
                    </span>
                    {messages.cont5donate2}
                    <span className='font-bold'>
                        {messages.cont5donate3}
                    </span>
                </p>
                <p id='content1' className='pt-5 lg:block hidden'>{messages.countnum1} {
                    isView &&
                    <AnimateNumber
                    value={num[0]}
                    duration={5000}
                    formatValue={(value) => `${value.toFixed(0)}`}
                    className='text-2xl font-bold'
                    />
                }{messages.countnum2}<p className='text-xs'>({messages.countnum3})</p></p>
                <p id='content2' className='lg:block hidden'>{messages.countnum4} {
                    isView &&
                    <AnimateNumber
                    value={num[1]}
                    duration={7000}
                    formatValue={(value) => `${value.toFixed(0)}`}
                    delay={2000}
                    className='text-2xl font-bold'
                    />
                }%</p>
                <p className='lg:text-2xl lg:py-[73px] tracking-tight md:text-base text-xs py-4'>
                    {messages.cont5donate4}<br />
                    {messages.cont5donate5}<br />
                    {messages.cont5donate6}
                </p>
                <button className='lg:w-[200px] lg:h-20 lg:text-2xl w-32 h-10 text-lg bg-[#E75A56] rounded-full duration-500 font-bold hover:bg-[#b3312c]'><NavLink to='/supportpay' className='text-white'>{messages.cont5donate7}</NavLink></button>
            </div>
        </div>
    )
}

export default Content5Donate