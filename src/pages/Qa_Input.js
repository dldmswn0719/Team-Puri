import { Editor } from '@toast-ui/react-editor'
import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

function Qa_Input() {

    const editorRef = useRef();
    const handleRegisterButton =() =>{
        console.log(editorRef.current?.getInstance().getHTML()); //콘솔창에 html <p></p>형태로 출력
        console.log(editorRef.current?.getInstance().getMarkdown()); 
    }

    const navigate = useNavigate();

    return (
        <>
            <Nav />
            <div className="w-full dark:bg-[#272929]">
                <h3 className='text-[20px] pl-5 pt-[8px] dark:text-[#ebf4f1]'>Q & A</h3>
                <div className="flex border-b pb-8 justify-end">
                    <button className='border px-[30px] py-[8px] dark:bg-[#404343] dark:text-[#ebf4f1] mr-[30px]' onClick={() => {navigate(-1);}}>취소</button>        
                    <button onClick={handleRegisterButton} className='border px-[30px] py-[8px] bg-[#EADBC8] text-white dark:bg-[#404343] dark:text-[#ebf4f1] mr-[15px]'>등록</button>        
                </div>
                <div className='mt-10 mx-10'>
                    <FontAwesomeIcon icon={faCircleUser} color='#DAC0A3' className='w-10 h-10 dark:text-[#ebf4f1]' />        
                    <div className="flex">
                        <input type="text" placeholder='작성자 이름' className='border-b mr-[45px] w-[200px] h-[50px] focus:outline-none dark:bg-[#272929] dark:text-[#ebf4f1]' />
                        <input type="password" placeholder='비밀번호' className='border-b mr-[45px] w-[200px] focus:outline-none dark:bg-[#272929] dark:text-[#ebf4f1]' />
                    </div>
                    <input type="text" placeholder='제목' className='border-b mr-[45px] w-[445px] h-[50px] focus:outline-none text-[19px] my-5 dark:bg-[#272929] dark:text-[#ebf4f1]' />
                    <Editor
                        // theme={"dark"} //다크모드
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
            </div>
        </>
    )
}

export default Qa_Input