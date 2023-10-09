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
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';

function Ckeditor({hideEditor , refreshPosts, resetViewState ,title,content,postId,isSecret: initialIsSecret }) {

    const [txtTitle,setTxtTitle] = useState("");
    const [writeData,setWriteData] = useState("");
    const [isModal,setIsModal] = useState(true);
    const navigate = useNavigate();
    const memberProfile = useSelector(state => state.user);
    const [isSecret, setIsSecret] = useState(false);
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    useEffect(() => {
      if(title || content){
          setTxtTitle(title)
          setWriteData(content)
      }
      if (initialIsSecret !== undefined) {
        setIsSecret(initialIsSecret);
      }
  }, [title, content,initialIsSecret])

    if(!memberProfile.loggedIn){
        return(
          <>
            {
              isModal && <Modal error={messages.editor} onClose={()=>{setIsModal(false); navigate('/login')}} />
            } 
          </>
        )
      }
      
      const dataSubmit = async ()=>{
        if(txtTitle.length === 0){
            alert(messages.editor1)
            return;
        }else if(writeData.length === 0){
            alert(messages.editor2)
            return;
        }
        if(postId){
          try{
            const docRef= doc(getFirestore(),"qna" ,postId);
            await updateDoc(docRef,{
              title : txtTitle,
              content : writeData,
              isSecret: isSecret
            })
            alert(messages.editor3)

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
                  timestamp : serverTimestamp(),
                  isSecret: isSecret
              })
  
              alert(messages.editor4)
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
                  <div className="flex justify-between w-full mt-[10px] text-center flex-wrap px-5">
                    <h2 className="text-xl mt-4 mr-3 dark:text-[#ebf4f1]">{messages.title}</h2>
                    <input className="mt-[10px] py-1 border border-[#e5e7eb] w-3/4" value={txtTitle} type="text" onChange={(e)=>{setTxtTitle(e.target.value)}} />
                    <div className="flex">
                      <input className="mt-4 sm:mt-5" type="checkbox" checked={isSecret} onChange={(e) => setIsSecret(e.target.checked)} />
                      <p className="mt-4 pl-2 dark:text-[#ebf4f1]">{messages.secret}</p>
                    </div>
                  </div>
                  <div className="w-auto mt-5 px-5">
                  <CKEditor
                      editor={ClassicEditor}
                      data={writeData}
                      config={{
                      placeholder: messages.entercontent,
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
                              <FontAwesomeIcon className="mr-3" icon={faPen} />{messages.complete}
                          </div>
                          <div className="ml-4 rounded-md my-5 bg-[#db4437] py-2 px-4 text-xs leading-4 font-bold text-white flex items-center outline-none border-none cursor-pointer dark:bg-[#404343]" onClick={()=>{hideEditor()}}>
                              <FontAwesomeIcon className="mr-3" icon={faCancel} />{messages.cancel}
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
