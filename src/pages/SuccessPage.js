import {useSearchParams} from "react-router-dom";

export function SuccessPage() {
    const [searchParams] = useSearchParams();

    return (
        <div className="w-full bg-white dark:bg-[#272929] h-[100vh] ">
            <div
                className='text-white w-[700px] bg-[#162c58] text-center border absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-5 py-10 dark:bg-[#404343]'>
                <h1 className=" text-[25px] font-bold py-3">결제가 완료되었습니다.</h1>
                <div className="text-[18px]">{`주문 아이디: ${searchParams.get("orderId")}`}</div>
                <div className="text-[18px] pb-10">{`결제 금액: ${Number(searchParams.get("amount")).toLocaleString()}원`}</div>
                <div>상품 더 보러가기</div>
            </div>
        </div>
    );
}