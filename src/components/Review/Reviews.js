import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';
import {Mainlist,enMainlist} from './../../data/Mainlist';
import {Detaillist,enDetaillist} from './../../data/Detaillist';

function Reviews() {

  let [good, setGood] = useState(0)

  function goodFun(){
          setGood(good+1)
  }
  
  useEffect(() => {
    AOS.init();
  })
  
  const [currentPage, setCurrentPage] = useState(1);
  const [showInfiniteButton, setShowInfiniteButton] = useState(true);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [moreButtonClickCount, setMoreButtonClickCount] = useState(0);

  const handleInfiniteButtonClick = () => {
    setCurrentPage(currentPage + 77);
    setShowInfiniteButton(false);
    setShowMoreButton(false); 
  };

  const handleMoreButtonClick = () => {
    setCurrentPage(currentPage + 1);
    setMoreButtonClickCount(moreButtonClickCount + 1);

    if (moreButtonClickCount >=2) {
      setShowInfiniteButton(false);
      setShowMoreButton(false); 
    }
  };

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
  const theme = useSelector(state => state.dark);
  
  const toggleLike = (index) =>{
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index]
    setLikes(newLikes);
  }

  const messages = language === 'en' ? enMessages : krMessages;

  return (
    <>
      <div className="w-full bg-white relative dark:bg-[#272929]">
          <div className="max-w-[1400px] mx-auto">
              <div className="max-w-[1280px] mx-auto max-lg:w-11/12 md:w-5/6 sm:w-1/3">
              </div>
          </div>
      </div>        
          <div className="w-full bg-white pt-[60px] relative dark:bg-[#272929]">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-[1280px] mx-auto max-lg:w-11/12 md:w-5/6"> 
                <div className="flex text-[15px] gap-y-5 gap-[5px] flex-wrap justify-between mb-[30px] m-3 0">
                  {
                    review.filter(item => item.group <= currentPage).map((e, i) => {
                      return (
                        <div className="sm:basis-full md:basis-1/3 lg:basis-1/5 relative border border-[#f1f1ef] w-[310px] h-[480px] shadow-lg rounded-[20px]
                        sm:w-full lg:w-[24%] max-lg:h-[500px] md:w-[49%]" key={i} data-aos="zoom-in">
                          <ul className='flex w-[250px] lg:justify-between md:justify-between sm:justify-between mx-auto pt-5 max-lg:w-[90%]'>
                            <li>
                              <img className='w-7 h-6'
                              src={theme === 'light' ?
                              "./../Images/Review/camera-light.png" : "./../Images/Review/camera-dark.png"}
                              alt="camera" />
                            </li>
                            <li>
                              <p className='text-[16px] title3 mt-[2px] dark:text-[#ebf4f1]'>PURIPURI STORY</p>
                            </li>
                            <li>
                              <img className='w-[27px] h-[27px]'
                              src={theme === 'light' ?
                              "./../Images/Review/airplane-light.png" : "./../Images/Review/airplane-dark.png"}
                              alt="aiplane" />
                            </li>
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
                          }} className='w-full h-[220px] 
                          sm:w-full max-lg:w-full' src={e.img} alt="1" />
                          <div className="pl-[10px] pt-[10px] flex relative">
                            <FontAwesomeIcon icon={faHeart} 
                            color={likes[i] ? '#FAE5E9' : '#ff5b5b'}
                            className='w-[18px] h-[18px] hover:brightness-75 cursor-pointer' onClick={() => { document.querySelector("html")
                            toggleLike(i)}} />

                            <img className='w-6 h-5 mx-[10px] cursor-pointer'
                            id="loginAlert" onClick={() => alert(messages.alert[5])} 
                            src={theme === 'light' ?
                            "./../Images/Review/chat-light.png" : "./../Images/Review/chat-dark.png" }
                            alt="chat" />
                            
                            <img className='w-5 cursor-pointer' 
                            id="loginAlert" onClick={() => alert(messages.alert[5])}
                            src={theme === 'light' ?
                            "./../Images/Review/airplane-light.png "  : "./../Images/Review/airplane-dark.png"}
                            alt="airplane" />

                            <img className='w-5 h-6 absolute right-[10px] hover:brightness-75 cursor-pointer'
                            id="loginAlert" onClick={() => alert(messages.alert[5])}
                            src={theme === 'light' ?
                            "./../Images/Review/mark-light.png" : "./../Images/Review/mark-dark.png"}
                            alt="mark-dark" />

                          </div>
                          <div className="flex my-[10px]">
                            <div className="sto"></div>
                            <FontAwesomeIcon icon={faHeart} color='#ff5b5b' className='w-[15px] h-[15px] ml-5 mt-[3px] ' />
                            <p className='text-[12px] ml-[10px] mt-[1px] dark:text-[#ebf4f1]' >PURI_PURI {messages.reviewlike1} <span className='font-bold cursor-pointer' 
                            onClick={() => { document.querySelector("html").classList.add("fixed")
                            setModalOpen1(true);
                            setOne(i); 
                          }}>{messages.reviewlike2}</span>{messages.reviewlike3} </p>
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
              
                <div className="flex justify-center pb-10 ">
                  {showInfiniteButton && showMoreButton && moreButtonClickCount <3 && (
                <button
                  onClick={handleMoreButtonClick}
                  className='bg-[#8DBCD6] text-white w-[160px] h-[50px] rounded-md  mr-2 dark:bg-[#404343]'
                >
                {messages.reviewmore} +
                </button>
              )}
              
                {showInfiniteButton  && showMoreButton && (
            <button
              onClick={handleInfiniteButtonClick}
              className='bg-[#8DBCD6] text-white w-[160px] h-[50px] rounded-md a dark:bg-[#404343]'
            >무한스크롤</button>
          )}
          </div>
                
              </div>
            </div>
          </div>

      {
        modalOpen &&
        <div>
          <div onClick={() => { setModalOpen(false); document.querySelector("html").classList.remove("fixed") }}
           className="opacity-60 fixed left-2/4 lg:top-2/4 md:top-1/2 w-full h-full bg-[#e6e6e6] p-[20%] -translate-x-2/4 z-[60] -translate-y-2/4  sm:top-1/2 "></div>
          <div className="relative">
            <div className="fixed z-[70] left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 lg:w-[900px] w-11/12 p-5 lg:h-[500px] md:h-[500px] h-[600px] bg-white rounded-[20px] md:w-5/6">
              <FontAwesomeIcon onClick={() => { setModalOpen(false); document.querySelector("html").classList.remove("fixed") }} icon={faXmark} className='hover:text-[pink] cursor-pointer absolute w-[30px] h-[30px] right-[1%] top-[2%] z-40 sm:hidden' />
              <div className="lg:flex md:flex  w-full lg:h-full md:h-full h-48  relative">
                <div style={{ backgroundImage: `url(${Mainlist[one].img})`, backgroundSize: "cover", backgroundPosition: "center", flexBasis: "55%", height: "100%", margin: 0 }} className='rounded-tl-[20px] rounded-l-[20px]'></div>
                <div className="relative lg:w-1/2 md:w-1/2 
                  h-4/5">
                  <div className="mt-[30px] mb-[10px] lg:pl-8">
                    <div className="flex items-center fixed">
                      <div className="w-10 h-10 overflow-hidden mx-[10px]">
                        {
                          <img src={review[one].rogo} alt="로고" />
                        }
                      </div>
                      <div>
                        <p className='text-[14px] font-bold'>PURI_PURI</p>
                        <p className='text-[13px]'>{review2[one].Name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:pt-10  md:pt-10 sm:pt-12">
                    <div className="h-72 overflow-y-auto w-full md:px-10 lg:px-10 md:h-[310px] lg:h-80 sm:h-[230px]">
                      <p>{review2[one].story}</p>
                    </div>
                </div>
                  <div className="w-full border-t-2 pt-[10px] lg:px-10 md:px-10 ">
                    <div className="flex justify-between mb-[10px]">
                      <ul className="flex">
                        <li>
                          <FontAwesomeIcon icon={faHeart} color='#ff5b5b' className='w-[18px] h-[18px]' />
                        </li>
                        <li>
                          <img className='w-[18px] h-[18px] mx-[10px] mt-1 ' src="./../Images/Review/chat-light.png" alt="chat" />
                        </li>
                        <li>
                          <img className='w-[20px] h-[20px] mt-1' src="./../Images/Review/airplane-light.png" alt="airplane" />
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <img className='w-[20px] h-[20px]' src="./../Images/Review/mark.svg" alt="mark" />
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex items-center">
                        <li className='mr-[7px]'>
                          <img className='w-5 h-5' src="./../Images/Review/human.svg" alt="사람" />
                        </li>
                        <li className='flex items-center'>
                          <span className='text-[12px]'>PURI_PURI {messages.reviewlike} </span>
                        </li>
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
          <div className="relative">
            <div className="fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[250px] h-[300px] bg-white rounded-[20px] md:w-6/5 ">
              <FontAwesomeIcon onClick={() => { setModalOpen1(false); document.querySelector("html").classList.remove("fixed") }} icon={faXmark}className='hover:text-[green] absolute w-[30px] h-[30px] right-[1%] top-[2%] z-40 ' />
              <div className="lg:flex md:flex  w-10 lg:h-full md:h-full h-10  relative">
                <div style={{ backgroundImage: `url(${Mainlist[one].img})`, backgroundSize: "cover", backgroundPosition: "center", flexBasis: "55%", height: "100%", margin: 0 }}></div>
                <div className="relative lg:w-1/2 md:w-1/2 h-4/5">
                  <div className="mt-[30px] mb-[10px] lg:pl-8">
                    <div className="flex items-center fixed">
                      <div className="w-10 h-10 overflow-hidden mx-[10px]">
                        {
                          <img src={review[one].rogo} alt="로고" />
                        }
                      </div>
                      <div>
                        <p className='text-[14px] font-bold'>PURI_PURI</p>
                        <p className='text-[13px]'>{review2[one].Name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:pt-10  md:pt-10 sm:pt-12">
                    <div className="h-72 overflow-y-auto w-full md:px-10 lg:px-10 md:h-[30px] lg:h-30 sm:h-[30px]">
                  </div>
                </div>
                  <div className="w-full border-t-2 pt-[10px] lg:px-10 md:px-10">
                    <div className="flex justify-between mb-[10px]">
                      <ul className="flex">
                        <li>
                          <FontAwesomeIcon icon={faHeart} color='#ff5b5b' className='w-[18px] h-[18px]' />
                        </li>
                        <li>
                          <img className='w-[18px] h-[18px] mx-[10px] mt-1 ' src="./../Images/Review/chat.svg" alt="chat" />
                        </li>
                        <li>
                          <img className='w-[10px] h-[10px] mt-1' src="./../Images/Review/4.png" alt="airplane" />
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <img className='w-[10px] h-[10px]' src="./../Images/Review/mark.svg" alt="airplane" />
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex items-center">
                        <li className='mr-[7px]'>
                          <img className='w-5 h-5' src="./../Images/Review/human.svg" alt="사람" />
                        </li>
                        <li className='flex items-center'>
                          <span className='text-[12px]'>PURI_PURI {messages.reviewlike} </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Reviews
