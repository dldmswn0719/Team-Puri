import React from 'react'

function DetailNav() {

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
  
  return (
    <>
      <div className="w-full dark:bg-[#272929]">
        <div className="w-[1200px] my-0 mx-auto">
          <div className="pt-10 border-b border-[#EADBC8] dark:border-b dark:border-[#dadbdb]">
            <ul className="mb-[35px] text-[#797979] text-xl text-center flex justify-around font-medium">
              <li className="cursor-pointer hover:text-[#222] hover:font-bold dark:text-[#fbfdfd] dark:hover:text-[#ebf4f1]" onClick={MoveDetail}>
                <p>상세정보</p>
              </li>
              <li className="cursor-pointer hover:text-[#222] hover:font-bold dark:text-[#fbfdfd] dark:hover:text-[#ebf4f1]" onClick={MoveReview}>
                <p>상품후기(0)</p>
              </li>
              <li className="cursor-pointer hover:text-[#222] hover:font-bold dark:text-[#fbfdfd]  dark:hover:text-[#ebf4f1]" onClick={MoveQa}>
                <p>Q&amp;A</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailNav