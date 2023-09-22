import React from 'react'

function Mypage_c() {
    return (
        <>
            <div className='w-full h-[95vh] bg-white pt-10 dark:bg-[#272929]'>
                <div className='w-[1200px] mx-auto flex justify-between'>
                    <div>
                        <ul>
                            <li className='pb-[48px]'>
                                <h1 className='text-[32px] pb-12 font-bold dark:text-[#ebf4f1]'>마이페이지</h1>
                            </li>
                            <li>
                                <h2 className='text-[24px] pb-[32px] font-bold dark:text-[#ebf4f1]'>쇼핑정보</h2>
                            </li>
                            <li className='text-[#949494] pb-[26px] dark:text-[#ebf4f1]'>구매 내역</li>
                            <li className='text-[#949494] pb-[26px] dark:text-[#ebf4f1]'>장바구니</li>
                            <li className='text-[#949494] pb-[26px] dark:text-[#ebf4f1]'>주문배송</li>
                            <li>
                                <h2 className='text-[24px] pb-[32px] font-bold dark:text-[#ebf4f1]'>내 정보</h2>
                            </li>
                            <li className='text-[#949494] pb-[26px] dark:text-[#ebf4f1]'>프로필 관리</li>
                            <li className='text-[#949494] pb-[26px] dark:text-[#ebf4f1]'>결제 정보</li>
                            <li className='text-[#949494] pb-[26px] dark:text-[#ebf4f1]'>현금영수증 정보</li>
                        </ul>
                    </div>
                    <div>
                        <div className='w-[900px] h-[250px] bg-[#162c58] rounded-[20px] dark:bg-[#404343]'>
                            <ul className='flex p-[50px] items-center'>
                                <li>
                                    <img src="https://via.placeholder.com/150" alt="150" className='rounded-full mr-[50px]' />
                                </li>
                                <li>
                                    <p className='text-4xl text-white font-bold pb-[7px]'>dkdlel123님
                                        <button className='block w-[120px] h-[50px] bg-white rounded-[15px] text-[20px] text-black mt-[7px] cursor-pointer font-normal dark:bg-[#272929] dark:text-[#ebf4f1]'>프로필 관리</button>
                                    </p>
                                </li>
                                <li className='pl-[191px] pr-[30px]'>
                                    <span className='text-white text-2xl font-bold'>일반회원
                                        <em className='block text-[18px] font-normal text-center not-italic'>회원등급</em>
                                    </span>
                                </li>
                                <li>
                                    <span className='text-white text-2xl font-bold'>1,000P
                                        <em className='block text-[18px] font-normal text-center not-italic'>포인트</em>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='w-[900px] h-[300px] bg-white border rounded-[20px] mt-[50px] dark:bg-[#404343] dark:border-none'>
                            <ul className='flex justify-around dark:text-[#ebf4f1]'>
                                <li>
                                    <p className='text-2xl pt-10'>주문배송
                                        <span className='block text-center text-4xl font-bold'>1</span>
                                    </p>
                                    </li>
                                <li>
                                    <p className='text-2xl pt-10'>장바구니
                                        <span className='block text-center text-4xl font-bold'>1</span>
                                    </p></li>
                                <li>
                                    <p className='text-2xl pt-10'>최근본상품
                                        <span className='block text-center text-4xl font-bold'>20</span>
                                    </p></li>
                                <li>
                                    <p className='text-2xl pt-10'>상품Q&A
                                        <span className='block text-center text-4xl font-bold'>0</span>
                                    </p>
                                </li>
                            </ul>          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mypage_c