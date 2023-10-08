import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import enMessages from './../../locales/en.json';
import krMessages from './../../locales/kr.json';
import { collection, getDocs, getFirestore, orderBy, query } from '@firebase/firestore';

function ProductNav() {
  
  const MoveDetail = () => {
      window.scrollTo({
        top: document.querySelector(".detail").getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
      })
    }
  
  const MoveReview = () => {
    window.scrollTo({
      top: document.querySelector(".review").getBoundingClientRect().top,
      left: 0,
      behavior: "instant"
    })
  }

  const MoveQa = () => {
    window.scrollTo({
      top: document.querySelector(".qa").getBoundingClientRect().top,
      left: 0,
      behavior: "instant"
    })
  }

  const language = useSelector(state => state.language);
  const messages = language === 'en' ? enMessages : krMessages;
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const q = query(
        collection(getFirestore(), "qna"),
        orderBy("timestamp", "desc")
      );
      const snapShot = await getDocs(q);
      const postArray = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postArray);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
      <>
      <div className="w-full dark:bg-[#272929]">
        <div className="max-w-7xl mx-auto p-5">
          <div className="py-5 border-b border-[#86bcd5] dark:border-b dark:border-[#dadbdb]">
            <ul className="text-[#797979] text-lg lg:text-[21px] text-center flex justify-around font-medium">
              <li className="cursor-pointer hover:text-[#222] hover:font-bold dark:text-[#fbfdfd] dark:hover:text-[#ebf4f1]" onClick={MoveDetail}>
                <p>{messages.detailinformation}</p>
              </li>
              <li className="cursor-pointer hover:text-[#222] hover:font-bold dark:text-[#fbfdfd] dark:hover:text-[#ebf4f1]" onClick={MoveReview}>
                <p>{messages.productreview} (0)</p>
              </li>
              <li className="cursor-pointer hover:text-[#222] hover:font-bold dark:text-[#fbfdfd]  dark:hover:text-[#ebf4f1]" onClick={MoveQa}>
                <p>{messages.qna} ({posts.length})</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductNav