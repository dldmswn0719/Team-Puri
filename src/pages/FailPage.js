import { useNavigate, useSearchParams } from "react-router-dom";

export function FailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center justify-center bg-white dark:bg-[#272929] h-[100vh]">
      <div className="max-w-7xl mx-auto">
        <div className='dark:border-none text-white bg-[#86bcd5] text-center border px-[150px] py-[40px] dark:bg-[#404343]'>
            <h1 className=" text-[35px] font-bold">결제 실패</h1>
            <div className="text-[20px] py-6">{`사유: ${searchParams.get("message")}`}</div>
              <div className="border py-3 px-20 cursor-pointer bg-white text-[#327290] text-[18px] dark:border-none dark:bg-[#292929] dark:text-[#ebf4f1]" onClick={()=>{navigate('/support')}}>
                  <p>상품 더 보러가기</p>
              </div>
        </div>
      </div>
    </div>
  );
}