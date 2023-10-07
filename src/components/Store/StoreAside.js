import { faAngleUp, faBackward } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';


function StoreAside() {

    const MoveToTop = () =>{
        window.scrollTo({
          top:0,behavior:'smooth'
        })
      } //aside버튼 위 화살표 누르면 위로 이동
    
      const MoveToDown = () =>{
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior : "smooth"
        })
      } //aside버튼 아래 화살표 누르면 아래로 이동

      const navigate = useNavigate();

    return (
        <>
            <div className="fixed right-2 md:right-4 lg:right-4 bottom-3 z-10">
                <div onClick={MoveToTop} className="w-11 h-11 lg:w-12 lg:h-12 rounded-[45%] bg-[#86bcd5] mb-2 dark:bg-[#404343]">
                    <FontAwesomeIcon icon={faAngleUp} size='2x' color='white' className='pt-2 pl-[8px] lg:pl-[10px] cursor-pointer dark:text-[#ebf4f1]'/>
                </div>
                <div onClick={MoveToDown} className="w-11 h-11 lg:w-12 lg:h-12 rounded-[45%] bg-[#86bcd5] mb-2 dark:bg-[#404343]">
                    <FontAwesomeIcon icon={faAngleDown} size='2x' color='white' className='pt-2 pl-[8px] lg:pl-[10px] cursor-pointer dark:text-[#ebf4f1]'/>
                </div>     
                <div onClick={()=>{navigate(-1)}} className="w-11 h-11 lg:w-12 lg:h-12 rounded-[45%] bg-[#86bcd5] mb-2 dark:bg-[#404343]">
                    <FontAwesomeIcon icon={faBackward} size='2x' color='white' className='pt-[6px] pl-[5px] lg:pl-[8px] lg:pt-2 cursor-pointer dark:text-[#ebf4f1]'/>
                </div>     
            </div>
        </>
    )
}

export default StoreAside