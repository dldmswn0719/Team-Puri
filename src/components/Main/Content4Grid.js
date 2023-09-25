import React from 'react'
import { NavLink } from 'react-router-dom';

function Content4Grid() {
    return (
        <div className='w-[1200px] m-auto pt-[130px] pb-[147px]'>
            <ul className='flex flex-wrap gap-x-5 gap-y-10'>
                <li className='w-[285px] cursor-pointer hover:scale-105 duration-300'><NavLink><img src="./../../Images/Main/1.jpg" alt="1" /><p>수리 입양 후 근황입니다:)</p></NavLink></li>
                <li className='w-[285px] cursor-pointer hover:scale-105 duration-300'><NavLink><img src="./../../Images/Main/2.jpg" alt="2" /><p>형아 껌딱지 머핀이 근황사진입니다!</p></NavLink></li>
                <li className='w-[285px] cursor-pointer hover:scale-105 duration-300'><NavLink><img src="./../../Images/Main/3.jpg" alt="3" /><p>궁금해하실 빵이 근황입니다.</p></NavLink></li>
                <li className='w-[285px] cursor-pointer hover:scale-105 duration-300'><NavLink><img src="./../../Images/Main/4.jpg" alt="4" /><p>안녕하세요~ 저희 천재 강아지 ♥시루♡ 입양 후 소식 전해드립니다^0^~</p></NavLink></li>
                <li className='w-[285px] cursor-pointer hover:scale-105 duration-300'><NavLink><img src="./../../Images/Main/5.jpg" alt="5" /><p>리본센터에 잭팟 등장!</p></NavLink></li>
                <li className='w-[285px] cursor-pointer hover:scale-105 duration-300'><NavLink><img src="./../../Images/Main/6.jpg" alt="6" /><p>미원이 소식입니다:)</p></NavLink></li>
                <li className='w-[285px] cursor-pointer hover:scale-105 duration-300'><NavLink><img src="./../../Images/Main/7.jpg" alt="7" /><p>[강남이와가족된후기] 감사합니다</p></NavLink></li>
                <li className='w-[285px] cursor-pointer hover:scale-105 duration-300'><NavLink><img src="./../../Images/Main/8.jpg" alt="8" /><p>너무 늦게 소식을 전합니다^^</p></NavLink></li>
            </ul>
        </div>
    );
}

export default Content4Grid