import { Editor } from '@toast-ui/react-editor'
import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { useNavigate } from 'react-router-dom';
// theme="dark" 다크모드 쓸려면 추가하기

function Review_Input() {

    const editorRef = useRef();
    const handleRegisterButton =() =>{
        console.log(editorRef.current?.getInstance().getHTML()); //콘솔창에 html <p></p>형태로 출력
        console.log(editorRef.current?.getInstance().getMarkdown()); 
    }

    const navigate = useNavigate();

    return (
        <>
            <div className="flex border-b pb-8 ">
                <h3 className='text-[18px] pl-5 mt-[8px]'>Review</h3>
                <button onClick={handleRegisterButton} className='border px-[30px] py-[8px] bg-[#EADBC8] text-white absolute right-[30px]'>등록</button>        
                <button className='border px-[30px] py-[8px] absolute right-[7.5%]' onClick={() => {navigate(-1);}}>취소</button>        
            </div>
            <div className='mt-10 mx-10'>
                <img src="./../img/user_icon.svg" alt="user_icon" className='mb-2' />        
                <div className="flex">
                    <input type="text" placeholder='작성자 이름' className='border-b mr-[45px] w-[200px] h-[50px] focus:outline-none' />
                    <input type="password" placeholder='비밀번호' className='border-b mr-[45px] w-[200px] focus:outline-none' />
                </div>
                <input type="text" placeholder='제목' className='border-b mr-[45px] w-[445px] h-[50px] focus:outline-none text-[19px] my-5' />
                <Editor 
                    ref={editorRef}
                    placeholder='내용을 입력해주세요'
                    previewStyle='vertical'
                    height='500px'
                    initialEditType='wysiwyg'
                    toolbarItems={[
                        ['heading' , 'bold' , 'italic', 'strike'],
                        ['hr' , 'quote'],
                        ['ul' , 'ol' , 'task' , 'indent' , 'outdent'],
                        ['table','image','link'],
                        ['code' , 'codeblock']
                    ]}
                    useCommandShortcut={false}
                    hideModeSwitch={true}
                    usageStatistics={false}
                    language="ko-KR"
                ></Editor> 
            </div>
        </>
    )
}

export default Review_Input