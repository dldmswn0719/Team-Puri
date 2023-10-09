import {useNavigate, useSearchParams} from "react-router-dom";
import enMessages from "./../locales/en.json";
import krMessages from "./../locales/kr.json";
import { useSelector } from "react-redux";

export function SuccessPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const language = useSelector((state) => state.language);
    const messages = language === "en" ? enMessages : krMessages;

    return (
        <div className="w-full flex items-center justify-center bg-white dark:bg-[#272929] h-[100vh]">
            <div className="w-full px-3">
                <div className='lg:w-1/3 md:w-1/2 w-full mx-auto  dark:border-none text-white bg-[#86bcd5] text-center border px-5 py-10 dark:bg-[#404343]'>
                    <h1 className=" text-[17px] lg:text-[30px] md:text-[25px] fold:text-[13px] font-bold pt-3">{messages.success}</h1>
                    <div className="text-[17px] lg:text-[25px] md:text-[20px] fold:text-[10px] pt-10">{`${messages.success1}: ${searchParams.get("orderId")}`}</div>
                    <div className="text-[17px] lg:text-[25px] md:text-[20px] fold:text-[10px] pb-10">{`${messages.success2}: ${Number(searchParams.get("amount")).toLocaleString()}${messages.won}`}</div>
                    <div className="text-[18px] lg:text-[20px] md:text-[15px] fold:text-[10px] border py-3 cursor-pointer bg-white text-[#327290]  dark:border-none dark:bg-[#292929] dark:text-[#ebf4f1]" onClick={()=>{navigate('/support')}}>
                        <p>{messages.success3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}