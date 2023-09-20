import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faCloudMoon, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom';


function Nav() {
    <FontAwesomeIcon />
    return (
        <div className="w-full bg-[#fff]">
            <div className="w-[1200px] mx-auto flex justify-between items-center my-6">
                <div><NavLink to="/"><img className="items-center w-[200px] h-[65px]" src="./../Images/logo_s1.png" alt="logo" /></NavLink></div>
                <div className='w-[50%]'>
                    <ul className='flex justify-between'>
                        <li className='basis-full text-center hover:font-bold text-[16px] relative after:w-0 hover:after:w-full hover:after:h-[3px] after:transition-all hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0'><NavLink to="/" className="text-[#797979] hover:text-[#222] ">소개</NavLink></li>
                        <li className='hover:font-bold text-[16px]  text-center after:transition-all basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0'><NavLink to="/" className="text-[#797979] hover:text-[#222]">동물친구 소개</NavLink></li>
                        <li className='hover:font-bold text-[16px]  text-center after:transition-all basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0'><NavLink to="/" className="text-[#797979] hover:text-[#222]">입양후기</NavLink></li>
                        <li className='hover:font-bold text-[16px] text-center after:transition-all basis-full relative after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:absolute hover:after:bg-[#162c58] hover:after:bottom-[-23px] hover:after:left-0'><NavLink to="/support" className="text-[#797979] hover:text-[#222]">후원/스토어</NavLink></li>
                    </ul>
                </div>
                <div className='w-[10%]'>
                    <ul className='flex justify-between'>
                        <li><NavLink><FontAwesomeIcon icon={faEarthAmericas} className='text-[20px]' /></NavLink></li>
                        <li><NavLink><FontAwesomeIcon icon={faCloudMoon} className='text-[20px]' /></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>  
    );
}

export default Nav