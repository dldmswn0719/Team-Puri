import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Ckeditor from "../Ckeditor";
import { deleteDoc, doc } from 'firebase/firestore';
import {collection, getDocs , getFirestore , orderBy , query} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faAngleUp, faLock, faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import enMessages from "./../../locales/en.json";
import krMessages from "./../../locales/kr.json";


function StoreQna() {
  const language = useSelector((state) => state.language);
  const messages = language === "en" ? enMessages : krMessages;
  const memberProfile = useSelector(state => state.user);
  const [showEditor, setShowEditor] = useState(false);
  const [editEditor,setEditEditor] = useState(false)
  const [posts, setPosts] = useState([]);
  const [viewState, setViewState] = useState(null)
  const [editingPostId,setEditingPostId]=useState(null);
 
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

  const editPost = (postId) => {
    setEditingPostId(postId);
    setEditEditor(!editEditor);
  };

  const deletePost = async (data)=>{
    if(window.confirm(messages.qna2)){
        const docRef= doc(getFirestore(),"qna" ,data);
        await deleteDoc(docRef)
        alert(messages.qna1);
        setViewState(null);
        fetchPosts();
    }else{
        alert(messages.cancel)
    }
}

  return (
    <>
      <div className="w-full h-full bg-white dark:bg-[#272929]">
        <div className="max-w-7xl mx-auto qa">
          <div className="pt-[8%] px-5">
            <div className="text-[18px] lg:text-[22px] flex leading-10 dark:text-[#ebf4f1]">
              <p className="pr-1">{messages.qna}</p>
              <p className="text-[#86bcd5] dark:text-[#ebf4f1]">( {posts.length} )</p>
            </div>
            <p className="dark:text-[#ebf4f1] lg:text-[17px] text-[#ababab]">{messages.desc23}</p>
            <div className="w-[170px] h-[55px] bg-[#86bcd5] mt-[20px] cursor-pointer dark:bg-[#404343]"onClick={() => setShowEditor(true)}>
              <p className="text-white leading-[55px] text-center dark:text-[#ebf4f1] lg:text-[17px]">
                {messages.desc24}
              <FontAwesomeIcon icon={faPenToSquare} className="pl-2" />
              </p>
            </div>
            <div className="max-w-7xl h-auto lg:text-[20px]  border-t border-[#86bcd5] mt-8 pb-[15%] lg:mt-[40px] text-center dark:border-none   dark:border-[#dadbdb]">
            {
            showEditor && 
              <Ckeditor hideEditor={() => setShowEditor(false)} refreshPosts={fetchPosts} resetViewState={() => setViewState(null)}/>
            }
              <>
              {
                posts.length === 0 ?
                <>
                  <FontAwesomeIcon icon={faCircleQuestion} className="mt-[230px] mx-auto dark:text-[#ebf4f1]" color="#86bcd5" size="2x" />
                  <p className="text-[#86bcd5] pt-[35px] dark:text-[#ebf4f1]">
                    {messages.desc25}
                  </p>
                </>
                :
                <div className="max-w-7xl mx-auto text-[14px] lg:text-[18px]">
                  <ul className="flex py-2  bg-[#86bcd5] dark:text-[#ebf4f1] text-white dark:bg-[#404343]">
                    <li className="lg:basis-[15%] basis-[12%]">{messages.qnatitle1}</li>                
                    <li className="basis-[80%]">{messages.qnatitle2}</li>
                    <li className="lg:basis-[20%] md:basis-[15%] basis-[30%]">{messages.qnatitle3}</li>
                    <li className="lg:basis-[20%] md:basis-[15%] sm:hidden fold:hidden">{messages.qnatitle4}</li>
                  </ul>
                  {posts.map((e, i) => {
                    return (
                      <React.Fragment key={i}>
                        <ul className="cursor-pointer flex border-b border-[#86bcd5] dark:text-[#ebf4f1] dark:border-[#dadbdb]" onClick={()=>{
                             if(e.isSecret && memberProfile.uid !== e.uid){
                              alert(messages.secretalert); 
                              return;
                            }
                            
                            if(viewState === i){
                                setViewState(null)
                            }else{
                                setViewState(i)
                                setEditEditor(false)
                            }
                        }}>
                            <li className="py-[10px] px-1 lg:px-5 text-center lg:basis-[15%] basis-[10%]">{posts.length - i}</li>
                            <li className="py-[10px] px-2 lg:px-5 text-left basis-[80%] text-ellipsis whitespace-nowrap overflow-hidden">
                              {
                                e.isSecret && <FontAwesomeIcon icon={faLock} className="mr-1" />
                              }
                              {e.title}
                            </li>
                            <li className="pt-3">
                              {viewState === i ? 
                                <FontAwesomeIcon icon={faAngleUp} />
                               : 
                                <FontAwesomeIcon icon={faAngleDown} />
                              }
                            </li>
                            <li className="py-[10px] lg:px-5 text-center lg:basis-[20%] md:basis-[15%] basis-[30%] ">{e.name}</li>
                            <li className="py-[10px] lg:px-5 text-center lg:basis-[20%] md:basis-[15%] sm:hidden fold:hidden">{e.timestamp.toDate().toLocaleDateString()}</li>
                        </ul>
                      {
                        viewState === i &&
                        <ul className="flex items-center justify-between border-b border-[#86bcd5] py-10 dark:text-[#ebf4f1] dark:border-[#dadbdb]">
                            <li className=" px-5 lg:pl-[14%] md:pl-[9%] pl-[10%] text-left w-full">
                            {
                              e.isSecret && memberProfile.uid !== e.uid ? (
                                <p>{messages.secret1}</p> 
                              )
                              :
                              (<p dangerouslySetInnerHTML={{__html: e.content}} />)
                            }
                            </li>
                            <li className="text-right pr-5 fold:pr-0">
                              {memberProfile.uid === e.uid && (
                                <>
                                  <button onClick={()=>{editPost(e.id)}}><FontAwesomeIcon icon={faPenSquare} className="text-[#3981a3] dark:text-[#ebf4f1]" /> {messages.member6}</button>
                                  <button onClick={()=>{deletePost(e.id)}}><FontAwesomeIcon icon={faTrash} className="text-[#b8b8b8] dark:text-[#ebf4f1]" /> {messages.delete} </button>
                                </>
                                )}
                            </li>
                        </ul>
                      }
                      {
                        viewState === i &&
                        editEditor && 
                        <Ckeditor hideEditor={() => setEditEditor(false)} refreshPosts={fetchPosts} resetViewState={() => setViewState(null)} title={e.title} content={e.content} postId={editingPostId} isSecret={e.isSecret} />
                      }
                      </React.Fragment>
                    );
                  })}
                </div>
              }
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreQna;
