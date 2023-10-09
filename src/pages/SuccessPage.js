import { useNavigate, useSearchParams } from "react-router-dom";
import enMessages from "./../locales/en.json";
import krMessages from "./../locales/kr.json";
import { useSelector } from "react-redux";

export function SuccessPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const language = useSelector((state) => state.language);
    const messages = language === "en" ? enMessages : krMessages;

    return (
        <div className='fixed top-0 left-0 w-full h-full dark:bg-[#272929]  flex justify-center items-center px-5'>
            <div className='dark:text-[#ebf4f1] basis-[700px] dark:border-none bg-white border border-[#ddd] pt-[55px] px-5 pb-11 rounded-lg text-center justify-center flex-wrap dark:bg-[#404343]'>
                <p className='text-[23px] lg:text-[25px] md:text-[25px] fold:text-[17px] font-bold pt-3'>
                    {messages.success}
                </p>
                <p className="text-[20px] lg:text-[20px] md:text-[20px] fold:text-[15px] pt-10">
                    {`${messages.success1}: ${searchParams.get("orderId")}`}
                </p>
                <p className="text-[20px] lg:text-[20px] md:text-[20px] fold:text-[15px] pb-10">
                    {`${messages.success2}: ${Number(searchParams.get("amount")).toLocaleString()}${messages.won}`}
                </p>
                <button className='w-full px-[10px] py-[14px] rounded-md bg-[#60a7c8] border-none text-white cursor-pointer hover:bg-[#327290] dark:bg-[#272929]' onClick={() => { navigate('/support') }}>
                    {messages.success3}
                </button>
            </div>
        </div>
    );
}