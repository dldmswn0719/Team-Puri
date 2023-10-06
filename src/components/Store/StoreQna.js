import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Ckeditor from "../Ckeditor";
import { deleteDoc, doc } from 'firebase/firestore';
import {collection, getDocs , getFirestore , orderBy , query} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
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
    if(window.confirm("정말로 삭제하시겠습니까?")){
        const docRef= doc(getFirestore(),"qna" ,data);
        await deleteDoc(docRef)
        alert("게시물이 삭제되었습니다.");
        setViewState(null);
        fetchPosts();
    }else{
        alert("취소")
    }
}

  return (
    <>
      <div className="w-full h-full bg-white dark:bg-[#272929]">
        <div className="max-w-7xl mx-auto qa">
          <div className="pt-[8%] text-[18px] lg:text-xl px-5">
            <div className="flex leading-10 dark:text-[#ebf4f1]">
              <p className="pr-1">{messages.qna}</p>
              <p className="text-[#86bcd5] dark:text-[#ebf4f1]">( {posts.length} )</p>
            </div>
            <p className="dark:text-[#ebf4f1]">{messages.desc23}</p>
            <div className="w-[170px] h-[55px] bg-[#86bcd5] mt-[25px] cursor-pointer dark:bg-[#404343]"onClick={() => setShowEditor(true)}>
              <p className="text-white leading-[55px] text-center dark:text-[#ebf4f1]">
                {messages.desc24}
              </p>
            </div>
            <div className="max-w-7xl h-[550px] border-t border-[#86bcd5] mt-8 lg:mt-[50px] text-center dark:border-[#dadbdb]">
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
                <div className="max-w-7xl my-2 mx-auto text-[14px] lg:text-[18px]">  
                  {posts.map((e, i) => {
                    return (
                      <React.Fragment key={i}>
                        <ul className="flex border-b border-[#86bcd5] dark:text-[#ebf4f1] dark:border-[#dadbdb]" onClick={()=>{
                            if(viewState === i){
                                setViewState(null)
                            }else{
                                setViewState(i)
                                setEditEditor(false)
                            }
                        }}>
                            <li className="py-[10px] px-1 lg:px-5 text-center lg:basis-[10%] basis-[5%]">{posts.length - i}</li>
                            <li className="py-[10px] px-2 lg:px-5 text-center basis-[80%] text-ellipsis whitespace-nowrap overflow-hidden">{e.title}</li>
                            <li className="py-[10px] lg:px-5 text-center lg:basis-[20%] md:basis-[15%] basis-[30%] ">{e.name}</li>
                            <li className="py-[10px] lg:px-5 text-center lg:basis-[20%] md:basis-[15%] sm:hidden fold:hidden">{e.timestamp.toDate().toLocaleDateString()}</li>
                        </ul>
                      {
                        viewState === i &&
                        <ul className="flex border-b border-[#86bcd5] py-10 dark:text-[#ebf4f1] dark:border-[#dadbdb]">
                            <li className="px-5 lg:w-[77%] md:w-[85%] w-[75%] fold:w-[70%]">
                                <p dangerouslySetInnerHTML={{__html : e.content}} />  
                            </li>
                            <li className="lg:w-[23%] md:w-[15%] w-[25%] fold:w-[30%] text-right pr-5">
                              {memberProfile.uid === e.uid && (
                                <>
                                  <button onClick={()=>{editPost(e.id)}}><FontAwesomeIcon icon={faPenSquare} /> 수정</button>
                                  <button onClick={()=>{deletePost(e.id)}}><FontAwesomeIcon icon={faTrash} /> 삭제</button>
                                </>
                                )}
                            </li>
                        </ul>
                      }
                      {
                        viewState === i &&
                        editEditor && 
                        <Ckeditor hideEditor={() => setEditEditor(false)} refreshPosts={fetchPosts} resetViewState={() => setViewState(null)} title={e.title} content={e.content} postId={editingPostId} />
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
