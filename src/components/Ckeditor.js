import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faPen } from "@fortawesome/free-solid-svg-icons";
import { addDoc, collection, doc, getFirestore, serverTimestamp, updateDoc  } from 'firebase/firestore';
import Modal from './Modal'

function Ckeditor({hideEditor , refreshPosts, resetViewState ,title,content,postId }) {

    const [txtTitle,setTxtTitle] = useState("");
    const [writeData,setWriteData] = useState("");
    const [isModal,setIsModal] = useState(true);
    const navigate = useNavigate();
    const memberProfile = useSelector(state => state.user);

    useEffect(() => {
      if(title || content){
          setTxtTitle(title)
          setWriteData(content)
      }
  }, [title, content])

    if(!memberProfile.loggedIn){
        return(
          <>
            {
              isModal && <Modal error="로그인 이후 이용해주시길 바랍니다." onClose={()=>{setIsModal(false); navigate('/login')}} />
            } 
          </>
        )
      }
      
      const dataSubmit = async ()=>{
        if(txtTitle.length === 0){
            alert("제목을 입력해주세요.")
            return;
        }else if(writeData.length === 0){
            alert("내용을 입력해주세요.")
            return;
        }
        if(postId){
          try{
            const docRef= doc(getFirestore(),"qna" ,postId);
            await updateDoc(docRef,{
              title : txtTitle,
              content : writeData
            })
            alert("게시글이 성공적으로 수정 되었습니다.")

            hideEditor();
            refreshPosts(); 
          }catch(error){
          //  console.log(error)
         }
        }else{
          try{
              await addDoc(collection(getFirestore(),"qna"),{
                  title : txtTitle,
                  content : writeData,
                  uid : memberProfile.uid,
                  name : memberProfile.data.name,
                  email : memberProfile.data.email,
                  timestamp : serverTimestamp()
              })
  
              alert("게시글이 성공적으로 등록 되었습니다.")
              hideEditor();
              refreshPosts();
              resetViewState();
  
          }catch(error){
              setIsModal(!isModal);
          }
        }
      }

    return (
        <>
        <div className="w-full h-auto py-2">
            <div className="max-w-7xl mx-auto">
              <div className="w-auto h-auto mt-[10px] border border-[#e5e7eb] rounded-[4.5px]">
                  <div className="flex justify-start w-full mt-[10px] text-center flex-wrap px-5">
                    <h2 className="text-xl mt-4 mr-3 dark:text-[#ebf4f1]">제목</h2>
                    <input className="mt-[10px] py-1 border border-[#e5e7eb] w-3/4" value={txtTitle} type="text" onChange={(e)=>{setTxtTitle(e.target.value)}} />
                  </div>
                  <div className="w-auto mt-5 px-5">
                  <CKEditor
                      editor={ClassicEditor}
                      data={writeData}
                      config={{
                      placeholder: "내용을 입력하세요.",
                      }}
                      onReady={(editor) => {}}
                      onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          setWriteData(data);
                      } }
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                  />
                      <div className="flex justify-end">
                          <div className="rounded-md my-5 bg-[#86bcd5] py-2 px-4 text-xs leading-4 font-bold text-white flex items-center outline-none border-none cursor-pointer dark:bg-[#404343]" onClick={dataSubmit}>
                              <FontAwesomeIcon className="mr-3" icon={faPen} />완료
                          </div>
                          <div className="rounded-md my-5 bg-[#86bcd5] py-2 px-4 text-xs leading-4 font-bold text-white flex items-center outline-none border-none cursor-pointer dark:bg-[#404343]" onClick={()=>{hideEditor()}}>
                              <FontAwesomeIcon className="mr-3" icon={faCancel} />취소
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        </>
    );
}

export default Ckeditor;
