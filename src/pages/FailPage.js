import { useNavigate, useSearchParams } from "react-router-dom";
import enMessages from "./../locales/en.json";
import krMessages from "./../locales/kr.json";
import { useSelector } from "react-redux";

export function FailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const language = useSelector((state) => state.language);
  const messages = language === "en" ? enMessages : krMessages;

  return (
    <div className="w-full flex items-center justify-center bg-white dark:bg-[#272929] h-[100vh]">
      <div className="max-w-7xl mx-auto">
        <div className='dark:border-none text-white bg-[#86bcd5] text-center border px-[80px] py-[40px] dark:bg-[#404343]'>
            <h1 className=" text-[35px] font-bold">{messages.fail}</h1>
            <div className="text-[20px] py-6">{`${messages.fail1}: ${searchParams.get("message")}`}</div>
              <div className="border py-3 px-20 cursor-pointer bg-white text-[#327290] text-[18px] dark:border-none dark:bg-[#292929] dark:text-[#ebf4f1]" onClick={()=>{navigate('/support')}}>
                  <p>{messages.success3}</p>
              </div>
        </div>
      </div>
    </div>
  );
}