import React from 'react'
import { useSelector } from 'react-redux'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';

function ProductNav() {

    const MoveDetail = (e) => {
        console.log(e)
        window.scrollTo({
          top: document.querySelector(".detail").getBoundingClientRect().top,
          left: 0,
          behavior: "smooth"
        })
      }
    
      const MoveReview = (e) => {
        console.log(e)
        window.scrollTo({
          top: document.querySelector(".review").getBoundingClientRect().top,
          left: 0,
          behavior: "instant"
        })
      }
    
      const MoveQa = (e) => {
        console.log(e)
        window.scrollTo({
          top: document.querySelector(".qa").getBoundingClientRect().top,
          left: 0,
          behavior: "instant"
        })
      }

      const language = useSelector(state => state.language);
      const messages = language === 'en' ? enMessages : krMessages;

      return (
          <>
          <div className="w-full dark:bg-[#272929]">
            <div className="max-w-7xl mx-auto p-5">
              <div className="pb-5 border-b border-[#EADBC8] dark:border-b dark:border-[#dadbdb]">
                <ul className="text-[#797979] lg:text-xl text-center flex justify-around font-medium">
                  <li className="cursor-pointer hover:text-[#222] hover:font-bold dark:text-[#fbfdfd] dark:hover:text-[#ebf4f1]" onClick={MoveDetail}>
                    <p>{messages.detailinformation}</p>
                  </li>
                  <li className="cursor-pointer hover:text-[#222] hover:font-bold dark:text-[#fbfdfd] dark:hover:text-[#ebf4f1]" onClick={MoveReview}>
                    <p>{messages.productreview}(0)</p>
                  </li>
                  <li className="cursor-pointer hover:text-[#222] hover:font-bold dark:text-[#fbfdfd]  dark:hover:text-[#ebf4f1]" onClick={MoveQa}>
                    <p>{messages.qna}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )
}

export default ProductNav