import {useNavigate, useSearchParams} from "react-router-dom";

export function SuccessPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    return (
        <div className="w-full flex items-center justify-center bg-white dark:bg-[#272929] h-[100vh]">
            <div className="max-w-7xl mx-auto">
                <div className='dark:border-none text-white bg-[#86bcd5] text-center border px-20 py-10 dark:bg-[#404343]'>
                    <h1 className=" text-[30px] font-bold pt-3">결제가 완료되었습니다.</h1>
                    <div className="text-[20px] pt-10">{`주문 아이디: ${searchParams.get("orderId")}`}</div>
                    <div className="text-[20px] pb-10">{`결제 금액: ${Number(searchParams.get("amount")).toLocaleString()}원`}</div>
                    <div className="border py-3 cursor-pointer bg-white text-[#327290] text-[18px] dark:border-none dark:bg-[#292929] dark:text-[#ebf4f1]" onClick={()=>{navigate('/support')}}>
                        <p>상품 더 보러가기</p>
                    </div>
                </div>
            </div>
        </div>
    );
}