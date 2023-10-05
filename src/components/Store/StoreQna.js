import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import enMessages from "./../../locales/en.json";
import krMessages from "./../../locales/kr.json";
import Ckeditor from "../Ckeditor";
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import {collection, getDocs , getFirestore , orderBy , query} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const BoardWrapper = styled.div`
  max-width: 1280px;
  margin: 10px auto;
`;

const List = styled.ul`
  display: flex;
  border-bottom: 1px solid #86bcd5;
`;

const ListItem = styled.li`
  padding: 10px 20px;
  text-align: center;
  flex-basis: 10%;
  &:nth-child(2) {
    flex-basis: 50%;
  } //제목
  &:nth-child(3) {
    flex-basis: 20%;
  } //작성자
  &:nth-child(4) {
    flex-basis: 20%;
  } //작성일
`;



function StoreQna() {
  const language = useSelector((state) => state.language);
  const messages = language === "en" ? enMessages : krMessages;
  const memberProfile = useSelector(state => state.user);

  const [showEditor, setShowEditor] = useState(false);
  const [editEditor,setEditEditor] = useState(false)
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

  const [viewState, setViewState] = useState(null)
  const [editingPostId,setEditingPostId]=useState(null);

  const editPost = (postId) => {
    setEditingPostId(postId);
    setEditEditor(true);
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
      <div className="w-full bg-white dark:bg-[#272929]">
        <div className="max-w-7xl mx-auto qa">
          <div className="pt-[8%] text-xl px-5">
            <div className="flex leading-10 dark:text-[#ebf4f1]">
              <p className="pr-1">{messages.qna}</p>
              <p className="text-[#86bcd5] dark:text-[#ebf4f1]">(0)</p>
            </div>
            <p className="dark:text-[#ebf4f1]">{messages.desc23}</p>
            <div className="w-[170px] h-[55px] bg-[#86bcd5] mt-[25px] cursor-pointer dark:bg-[#404343]"onClick={() => setShowEditor(true)}>
              <p className="text-white leading-[55px] text-center dark:text-[#ebf4f1]">
                {messages.desc24}
              </p>
            </div>
            <div className="max-w-7xl h-[550px] border-t border-[#86bcd5] mt-[50px] text-center dark:border-[#dadbdb]">
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
                <BoardWrapper>
                  {posts.map((e, i) => {
                    return (
                      <React.Fragment key={i}>
                        <List onClick={()=>{
                            if(viewState === i){
                                setViewState(null)
                            }else{
                                setViewState(i)
                            }
                        }}>
                            <ListItem>{posts.length - i}</ListItem>
                            <ListItem>{e.title}</ListItem>
                            <ListItem>{e.name}</ListItem>
                            <ListItem>{e.timestamp.toDate().toLocaleDateString()}</ListItem>
                        </List>
                      {
                        viewState === i &&
                        <List>
                            <li className="basis-3/4">
                                <p dangerouslySetInnerHTML={{__html : e.content}} />  
                            </li>
                            <li>
                            {memberProfile.uid === e.uid && (
                              <>
                              <button onClick={()=>{editPost(e.id)}}><FontAwesomeIcon icon={faPenSquare} /> 수정</button>
                              <button onClick={()=>{deletePost(e.id)}}><FontAwesomeIcon icon={faTrash} /> 삭제</button>
                              </>
                              )}
                            </li>
                        </List>
                      }
                      {
                        viewState === i &&
                        editEditor && 
                        <Ckeditor hideEditor={() => setEditEditor(false)} refreshPosts={fetchPosts} resetViewState={() => setViewState(null)} title={e.title} content={e.content} postId={editingPostId} />
                      }
                      </React.Fragment>
                    );
                  })}
                </BoardWrapper>
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
