import {useEffect, useRef } from "react";
import {loadPaymentWidget} from "@tosspayments/payment-widget-sdk";
import {nanoid} from "nanoid";
import { useSelector } from "react-redux";


const selector = "#payment-widget";
const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export function CheckoutPage() {
    const paymentWidgetRef = useRef(null);
    const paymentMethodsWidgetRef = useRef(null);
    const price = useSelector(state => state.price);

    const deliveryFee = price >= 50000 ? 0 : 3000; // 상품 금액이 5만원 이상일 경우 무료배송

    useEffect(() => {
        (async () => {
            const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

            const totalAmountWithDeliveryFee = price + deliveryFee;

            const paymentMethodsWidget = paymentWidget.renderPaymentMethods(selector, {value: totalAmountWithDeliveryFee});

            paymentWidgetRef.current = paymentWidget;
            paymentMethodsWidgetRef.current = paymentMethodsWidget;
        })();
    }, []);

    useEffect(() => {
        const deliveryFeeUpdated= price >= 50000 ? 0 : 3000; // 상품 금액이 업데이트될 때마다 무료배송 조건 체크
        const paymentMethodsWidget = paymentMethodsWidgetRef.current;

        if (paymentMethodsWidget == null) {
            return;
        }

        const totalAmountWithDeliveryFeeUpdated= price + deliveryFee;

        if (paymentMethodsWidgetRef.current) {
        paymentMethodsWidgetRef.current.updateAmount(totalAmountWithDeliveryFeeUpdated, 
        paymentMethodsWidgetRef.current.UPDATE_REASON.COUPON);
        }

    }, [price]);


    return (
        <div className="w-full bg-white dark:bg-[#272929] h-[100vh]  ">
            <div className="max-w-7xl mx-auto px-5 py-10">
                <div className='text-center border bg-white p-5 dark:bg-[#404343]'>
                    <h1 className=" text-3xl font-bold py-3">주문서</h1>
                    <span className="lg:text-xl"> 상품금액 : {`${price.toLocaleString()}원`} + </span>
                    <span className="lg:text-xl"> 배송비 : {`${deliveryFee.toLocaleString()}원`}</span>
                    <br />
                    <span className="lg:text-xl"> 결제금액 : {`${(price + deliveryFee).toLocaleString()}원`}</span>
                    <div id="payment-widget"/>
                        <button className="w-full py-3 bg-[#86bcd5] text-white" onClick={async () => {
                            const paymentWidget = paymentWidgetRef.current;

                            try {
                                await paymentWidget?.requestPayment({
                                    orderId: nanoid(),
                                    orderName: "믹스패밀리 페이스 그립톡 외 2건",
                                    customerName: "푸리",
                                    customerEmail: "puripuri1010@gmail.com",
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
