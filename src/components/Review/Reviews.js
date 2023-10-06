import React, { useEffect, useState } from 'react'
import {Mainlist,enMainlist} from './../../data/Mainlist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import {Detaillist,enDetaillist} from './../../data/Detaillist';
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from 'react-redux';


function Reviews() {

  let [good, setGood] = useState(0)

  function goodFun(){
          setGood(good+1)
  }
  console.log(good)

  
  useEffect(() => {
    AOS.init();
  })
  
  // const [review , setReview] = useState(Mainlist); 
  //데이터 가져올떄 사용
  const [currentPage, setCurrentPage] = useState(1);

  const [one, setOne] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const language = useSelector(state => state.language);
  const [review2, setReview2] = useState(Detaillist);
  const [review, setReview] = useState(Mainlist);
  useEffect(()=>{
    if(language === "en"){
      setReview2(enDetaillist);
      setReview(enMainlist);
    }else{
      setReview2(Detaillist);
      setReview(Mainlist);
    }

  },[language])

  const [likes, setLikes] = useState(Array(Detaillist.length).fill(1));


  const theme = useSelector(state => state.dark)

  // const toggleLike = (index) =>{
  //                   const newLikes = [...likes];
  //                       newLikes[index] = !newLikes[index]
  //                       setLikes(newLikes);
  //                   }


  const toggleLike = (index) =>{
    // 1. 원래 값을 복사
    // 2. 복사한 배열의 원하는 인덱스 번호의 값을 변경
    // 3. 그 값을 원래 값에 붙여 넣기
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index]
    setLikes(newLikes);
  }

  return (
    <>

    
    {/* <div className="mx-auto w-[160px] h-[5] dark:bg-[#272929] ">
        <button className='bg-[#D3C09D] text-white w-[160px] h-[35px] '>후기 작성하기</button>
          </div> */}
            
      <div className="w-full bg-white pt-[60px] relative dark:bg-[#272929]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[1280px] mx-auto max-lg:w-11/12 md:w-5/6">
            
            <div className="flex text-[15px] gap-y-5 gap-[6px] flex-wrap justify-between mb-[30px]">
              {
                Mainlist.filter(item => item.group <= currentPage).map((e, i) => {
                  return (
                    <div className="relative border border-[#f1f1ef] w-[310px] h-[480px] shadow-lg rounded-[20px] 
                    // 두개
                    sm:w-full max-lg:w-[32%] max-lg:h-[500px]" key={i} data-aos="zoom-in">
                      <ul className='flex w-[250px] justify-between mx-auto pt-5 max-lg:w-[90%]'>
                        <li><img className='w-7 h-6' src={theme === 'light' ?
                        "./../Images/Review/camera-light.png" : "./../Images/Review/camera-dark.png"}
                        alt="camera" /></li>
                        <li><p className='text-[16px] title3 mt-[2px] dark:text-[#ebf4f1]'>PURIPURI STORY</p></li>
                        <li><img className='w-[27px] h-[27px]' src={theme === 'light' ?
                        "./../Images/Review/airplane-light.png" : "./../Images/Review/airplane-dark.png"}
                        alt="aiplane" /></li>
                      </ul>
                      <div className="flex p-[15px]">
                        <img className='w-[40px] h-[40px]' src={e.rogo} alt="1" />
                        <div className="ml-[10px]">
                          <p className='font-bold text-[14px] dark:text-[#ebf4f1]'>PURI_PURI</p>
                          <p className='text-[13px] dark:text-[#ebf4f1]'>{e.region}</p>
                        </div>
                      </div>
                      <img onClick={() => { document.querySelector("html").classList.add("fixed")
                        setModalOpen(true);
                        setOne(i);
                      }} className='w-[310px] h-[220px] 
                      // 1개
                      sm:w-full max-lg:w-full' src={e.img} alt="1" />
                      
                      <div className="pl-[10px] pt-[10px] flex relative">
                        < FontAwesomeIcon icon={faHeart} 
                        color={likes[i] ? '#FAE5E9' : '#ff5b5b'}
                         className='w-[18px] h-[18px] hover:brightness-75 cursor-pointer' onClick={() => { document.querySelector("html")
                         toggleLike(i)}} />
                    



                        <img className='w-6 h-5 mx-[10px] ' src={theme === 'light' ?
                        "./../Images/Review/chat-light.png" : "./../Images/Review/chat-dark.png"}
                         alt="chat" />
                        
                        <img className='w-5 ' src={theme === 'light' ?
                        "./../Images/Review/airplane-light.png "  : "./../Images/Review/airplane-dark.png"}
                        alt="airplane" />

                        <img className='w-5 h-6 absolute right-[10px] hover:brightness-75'
                         src={theme === 'light' ?
                        "./../Images/Review/mark-light.png" : "./../Images/Review/mark-dark.png"}
                        alt="airplane" />

                      </div>
                      <div className="flex my-[10px]">
                        <div className="sto" ></div>
                        <FontAwesomeIcon icon={faHeart} color='#ff5b5b' className='w-[15px] h-[15px] ml-5 mt-[3px] ' />
                        <p className='text-[12px] ml-[10px] mt-[1px] dark:text-[#ebf4f1]' >PURI_PURI 님 외 <span className='font-bold cursor-pointer' 
                        onClick={() => { document.querySelector("html").classList.add("fixed")
                        setModalOpen1(true);
                        setOne(i); 
                      }}>여러 명</span>이 좋아합니다 </p>
                      </div>
                      <div className="text-[13px] ml-[20px]">
                        <p className='font-bold dark:text-[#ebf4f1]'>PURI_PURI</p>
                        <p className='mb-[3px] text-ellipsis whitespace-nowrap overflow-hidden dark:text-[#ebf4f1]'>
                          
                        {review2[i].story}

                          </p>
                      </div>
                      <p className='text-[13px] font-[500] text-[#164682] ml-5 dark:text-[#aff8ff]'>{e.Text}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className="mx-auto w-[160px]">
              <button onClick={() => { setCurrentPage(currentPage + 1) }} className='bg-[#D3C09D] text-white w-[160px] h-[50px] my-[40px] '>더보기 +</button>
            </div>
          </div>
        </div>
      </div>




      {
        modalOpen &&
        <div>
          <div className="opacity-60 fixed left-2/4 lg:top-2/4 md:top-1/2 w-full h-full bg-[#e6e6e6] p-[20%] -translate-x-2/4 z-[60] -translate-y-2/4  sm:top-1/2 "></div>
          <div className="relative">
            <div className="fixed z-[70] left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 lg:w-[900px] w-11/12 p-5 lg:h-[500px] md:h-[500px] h-[600px] bg-white rounded-[20px] md:w-5/6">


              <FontAwesomeIcon onClick={() => { setModalOpen(false); document.querySelector("html").classList.remove("fixed") }} icon={faXmark} className='hover:text-[pink] absolute w-[30px] h-[30px] right-[1%] top-[2%] z-40' />

              <div className="lg:flex md:flex  w-full lg:h-full md:h-full h-48  relative">
                <div style={{ backgroundImage: `url(${Mainlist[one].img})`, backgroundSize: "cover", backgroundPosition: "center", flexBasis: "55%", height: "100%", margin: 0 }} className='rounded-tl-[20px] rounded-l-[20px]'></div>
                {/* <img src={Mainlist[one].img} className='w-[500px] h-[500px]' alt="review_img"/> */}
                {/* <div className='basis-[45%]'>
                <p >{review2[one].Name}</p>
                <p >{review2[one].story}</p> 
                </div> */}
                <div className="flex">
                  <div className="w-10 h-10 overflow-hidden ml-[10px] mt-[30px] mr-[10px]">
                    {
                      <img src={review[one].rogo} alt="로고" />
                    }
                  </div>
                  <div className=" mt-[30px] mb-[10px] flex lg:hidden md:hidden">
                    <div className="">
                      <p className='text-[14px] font-bold'>PURI_PURI</p>
                      <p className='text-[13px]'>{review2[one].Name}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full lg:pr-10 md:pr-10 relative">
                  <div className=" mt-[30px] mb-[10px] flex sm:hidden">
                    <div className="">
                      <p className='text-[14px] font-bold'>PURI_PURI</p>
                      <p className='text-[13px]'>{review2[one].Name}</p>
                    </div>
                  </div>
                  <div className="">
                    <p>{review2[one].story}</p>
                  </div>
                  <div className="absolute lg:bottom-[25px] md:bottom-[25px] lg:w-[370px] border-t-2 pt-[10px] md:w-[95%] w-11/12 sm:left-1/2 sm:-translate-x-1/2">
                    <div className="flex justify-between mb-[10px]">
                      <ul className="flex">
                        <li><FontAwesomeIcon icon={faHeart} color='#ff5b5b' className='w-[18px] h-[18px]' /></li>
                        <li><img className='w-[18px] h-[18px] mx-[10px] mt-1 ' src="./../Images/Review/chat.svg" alt="chat" /></li>
                        <li><img className='w-[20px] h-[20px] mt-1' src="./../Images/Review/4.png" alt="airplane" /></li>
                      </ul>
                      <ul>
                        <li><img className='w-[20px] h-[20px]' src="./../Images/Review/mark.svg" alt="airplane" /></li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex items-center">
                        <li className='mr-[7px]'><img className='w-5 h-5' src="./../Images/Review/human.svg" alt="사람" /></li>
                        <li className='flex items-center'><span className='text-[12px]'>PURI_PURI님 외 여러 명이 좋아합니다 </span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }





      {
        modalOpen1 &&
        <div>
          {/* <div className="opacity-60 fixed left-2/4 top-2/4 w-full h-full bg-[#e6e6e6] p-[20%] -translate-x-2/4 -translate-y-2/4 "></div> */}
          <div className="relative">
            <div className="fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[250px] h-[300px] bg-white rounded-[20px] md:w-6/5 ">


              <FontAwesomeIcon onClick={() => { setModalOpen1(false); document.querySelector("html").classList.remove("fixed") }} icon={faXmark}className='hover:text-[green] absolute w-[30px] h-[30px] right-[1%] top-[2%] z-40 ' />

              <div className="flex w-full h-full relative">
                {/* <div></div> */}
                <div className="w-10 h-10 overflow-hidden ml-[10px] mt-[30px] mr-[10px]">
                  {
                    <img src={review[one].img} alt="로고" />
                  }
                </div>
                <div className=" w-1/2 pr-[160px] relative">
                  
                  <div className=" mt-[30px] mb-[10px] flex">
                    <div className="">
                      
                      <p className='text-[14px] font-bold'>PURI_PURI</p>
                      <p className='text-[13px] justify-between'>{review2[one].Name}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-[15px] w-[170px] border-t-2 pt-[10px] md:w-[95%]">
                    <div className="flex justify-between mb-[10px]">
                      <ul className="flex">
                        <li ><FontAwesomeIcon icon={faHeart} color='#ff5b5b' className='w-[18px] h-[18px]' /></li>
                        <li><img className='w-[18px] h-[18px] mx-[10px] mt-1 ' src="./../Images/Review/chat.svg" alt="chat" /></li>
                        <li><img className='w-[20px] h-[20px] mt-1' src="./../Images/Review/airplane.svg" alt="airplane" /></li>
                      </ul>
                      <ul>
                        <li><img className='w-[20px] h-[20px]' src="./../Images/Review/mark.svg" alt="airplane" /></li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex items-center">
                        <li className='mr-[7px]'><img className='w-5 h-5' src="./../Images/Review/human.svg" alt="사람" /></li>
                        <li className='flex items-center'><span className='text-[12px]'>PURI_PURI님 외 여러 명이 좋아합니다 </span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }







        {/* <div className='w-100 bg-sky-200 z-10'>
          <div className='rounded-[20px]   bg-sky-800'>
            <div className='text-10'>
              <p className='text-[14px] font-bold'>PURI_PURI{review2[one].Name}</p>
            </div>
          </div>
        </div> */}


    </>
  )
}

export default Reviews
