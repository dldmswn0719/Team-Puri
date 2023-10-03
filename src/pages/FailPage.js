import { useSearchParams } from "react-router-dom";

export function FailPage() {
  const [searchParams] = useSearchParams();

  return (
    <div className="w-full bg-white dark:bg-[#272929] h-[100vh] ">
        <div className='text-white w-[700px] bg-[#162c58] text-center border absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-5 py-10 dark:bg-[#404343]'>
            <h1 className=" text-[25px] font-bold py-3">결제 실패</h1>
            <div className="text-[18px]">{`사유: ${searchParams.get("message")}`}</div>
        </div>
    </div>
  );
}