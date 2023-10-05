import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import Modal from './Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { addDoc, collection, doc, getFirestore, serverTimestamp, updateDoc  } from 'firebase/firestore';
import { useEffect } from "react";
import { data } from "autoprefixer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
`;

const InnerContainer = styled.div`
  margin: 0 4px;
  max-width: 1280px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  width: auto;
  height: auto;
  margin-top: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding-right: 50px;
`;

const ContentInner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-top: 10px;
`;

const TextInput = styled.input`
  height: 40px;
  border: 1px solid #e5e7eb;
  flex-basis: 75%;
`;

const ContentInputWrapper = styled.div`
  width: auto;
  margin-top: 20px;
  margin-left: 70px;
`;

const ContentLabel = styled.p`
  margin-bottom: 15px;
`;

const ButtonWrap = styled.div`
    display: flex;
	  justify-content: space-between;
`

const Button = styled.div`
    border-radius: 0.5rem;
    margin: 20px 0px;
    background-color: #eb7a7a;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: bold;
    color: white;
    display: flex; align-items: center;
    outline: none; border: none;
    cursor: pointer;
	&:nth-child(1){
	    background-color: #f1a7a7;
	}
	a{color : white;}
	svg{margin-right: 12px;}
`

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
           console.log(error)
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
        <Container>
            <InnerContainer>
              <ContentWrapper>
                  <ContentInner>
                  <Title>제목</Title>
                  <TextInput value={txtTitle} type="text" onChange={(e)=>{setTxtTitle(e.target.value)}} />
                  </ContentInner>
                  <ContentInputWrapper>
                  <ContentLabel>내용</ContentLabel>
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
                          // console.log( { event, editor, data } );
                      } }
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                  />
                      <ButtonWrap>
                          <Button onClick={dataSubmit}>
                              <FontAwesomeIcon icon={faPen} />완료
                          </Button>
                      </ButtonWrap>
                  </ContentInputWrapper>
              </ContentWrapper>
            </InnerContainer>
        </Container>
        </>
    );
}

export default Ckeditor;
