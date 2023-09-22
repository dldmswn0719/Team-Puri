import React from 'react'
import { useNavigate } from 'react-router-dom';

function Member_c() {

    function imgChange() {
        document.querySelector(".real-upload").click();
    }

    const navigate = useNavigate();

    return (
        <>
            <div className='w-[400px] h-[600px] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white dark:bg-[#272929]'>
                <h1 className='pt-[30px] pb-[20px] text-[24px] font-bold dark:text-[#ebf4f1]'>회원가입</h1>
                <ul>
                    <li>
                        <img src="https://via.placeholder.com/100" alt="100" className='mb-[20px] mx-auto rounded-full cursor-pointer change' onClick={imgChange} />
                        <input type="file" class="real-upload hidden" accept="image/*" required multiple />
                    </li>
                    <li>
                        <input type="text" placeholder='아이디' autoFocus className='w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#404343] dark:text-[#ebf4f1] dark:border-none' />
                    </li>
                    <li>
                        <input type="password" placeholder='비밀번호' className='w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#404343] dark:text-[#ebf4f1] dark:border-none' />
                    </li>
                    <li>
                        <input type="password" placeholder='비밀번호 확인' className='w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#404343] dark:text-[#ebf4f1] dark:border-none' />
                    </li>
                    <li>
                        <input type="text" placeholder='이름' className='w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#404343] dark:text-[#ebf4f1] dark:border-none' />
                    </li>
                    <li>
                        <input type="tel" placeholder='휴대폰 번호' className='w-[360px] h-[50px] mb-[10px] border text-[16px] p-[17px] text-[#bbb] dark:bg-[#404343] dark:text-[#ebf4f1] dark:border-none' />
                    </li>
                    <li>
                        <button className='w-[360px] h-[60px] bg-[#162c58] text-white text-[18px] rounded-[10px] mt-[10px] cursor-pointer dark:bg-[#404343]' onClick={() => {navigate('/login');}}>가입하기</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Member_c