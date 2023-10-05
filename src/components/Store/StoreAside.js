import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

    return (
        <>
            <div className="fixed right-4 bottom-3 z-10">
                <div className="w-12 h-12 rounded-[45%] bg-[#86bcd5] mb-2 dark:bg-[#404343]">
                    <FontAwesomeIcon icon={faAngleUp} size='2x' color='white' className='pt-2 pl-[10px] cursor-pointer dark:text-[#ebf4f1]' onClick={MoveToTop}/>
                </div>
                <div className="w-12 h-12 rounded-[45%] bg-[#86bcd5] mb-2 dark:bg-[#404343]">
                    <FontAwesomeIcon icon={faAngleDown} size='2x' color='white' className='pt-2 pl-[10px] cursor-pointer dark:text-[#ebf4f1]' onClick={MoveToDown}/>
                </div>     
            </div>
        </>
    )
}

export default StoreAside