import {useEffect, useRef, useState} from "react";
import {loadPaymentWidget} from "@tosspayments/payment-widget-sdk";
import {nanoid} from "nanoid";
import {data} from "autoprefixer";
import {orderBy} from "firebase/firestore";

const selector = "#payment-widget";
const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export function CheckoutPage() {
    const paymentWidgetRef = useRef(null);
    const paymentMethodsWidgetRef = useRef(null);
    const [price, setPrice] = useState(30_000);

    useEffect(() => {
        (async () => {
            const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

            const paymentMethodsWidget = paymentWidget.renderPaymentMethods(selector, {value: price});

            paymentWidgetRef.current = paymentWidget;
            paymentMethodsWidgetRef.current = paymentMethodsWidget;
        })();
    }, []);

    useEffect(() => {
        const paymentMethodsWidget = paymentMethodsWidgetRef.current;

        if (paymentMethodsWidget == null) {
            return;
        }

        paymentMethodsWidget.updateAmount(price, paymentMethodsWidget.UPDATE_REASON.COUPON);
    }, [price]);


    return (
        <div className="w-full bg-white dark:bg-[#272929] h-[100vh] ">
            <div className="max-w-7xl mx-auto px-5 py-10">
                <div className='text-center border bg-white p-5 dark:bg-[#404343]'>
                    <h1 className=" text-3xl font-bold py-3">주문서</h1>
                    <span className="text-xl">결제금액 : {`${price.toLocaleString()}원`}</span>
                    {/*<div>*/}
                    {/*    <label>*/}
                    {/*        <input*/}
                    {/*            type="checkbox"*/}
                    {/*            onChange={(event) => {*/}
                    {/*                setPrice(event.target.checked ? price - 5_000 : price + 5_000);*/}
                    {/*            }}*/}
                    {/*        />*/}
                    {/*        5,000원 할인 쿠폰 적용*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                    <div id="payment-widget"/>
                    <button className="w-full py-3 bg-[#162c58] text-white" onClick={async () => {
                        const paymentWidget = paymentWidgetRef.current;

                        try {
                            await paymentWidget?.requestPayment({
                                orderId: nanoid(),
                                orderName: "토스 티셔츠 외 2건",
                                customerName: "김토스",
                                customerEmail: "customer123@gmail.com",
                                successUrl: `${window.location.origin}/success`,
                                failUrl: `${window.location.origin}/fail`
                            });
                        } catch (error) {
                            // handle error
                        }
                    }}>결제하기
                    </button>
                </div>
                
            </div>
        </div>);
}
