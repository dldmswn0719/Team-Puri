import { useNavigate, useSearchParams } from "react-router-dom";

export function FailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white dark:bg-[#272929] h-[100vh] ">
      <div className="max-w-7xl mx-auto px-5">
        <div className='leading-[50px] text-white w-full lg:w-1/3 bg-[#86bcd5] text-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-5 py-10 dark:bg-[#404343]'>
            <h1 className=" text-[35px] font-bold py-3">결제 실패</h1>
            <div className="text-[20px] py-3">{`사유: ${searchParams.get("message")}`}</div>
            <div onClick={()=>{navigate('/support')}} className="py-1 cursor-pointer bg-white text-[#327290] text-[18px] dark:bg-[#292929] dark:text-[#ebf4f1]">
              <p>상품 보러가기</p>
            </div>
        </div>
      </div>
    </div>
  );
}