import {useEffect, useRef } from "react";
import {loadPaymentWidget} from "@tosspayments/payment-widget-sdk";
import {nanoid} from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../store";
import { useNavigate } from "react-router-dom";
import enMessages from "./../locales/en.json";
import krMessages from "./../locales/kr.json";


const selector = "#payment-widget";
const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export function CheckoutPage() {
    const paymentWidgetRef = useRef(null);
    const paymentMethodsWidgetRef = useRef(null);
    const price = useSelector(state => state.price);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const language = useSelector((state) => state.language);
    const messages = language === "en" ? enMessages : krMessages;

    const deliveryFee = price >= 50000 ? 0 : 3000; // 상품 금액이 5만원 이상일 경우 무료배송

    useEffect(() => {
        (async () => {
            const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

            const totalAmountWithDeliveryFee = price + deliveryFee;

            const paymentMethodsWidget = paymentWidget.renderPaymentMethods(selector, {value: totalAmountWithDeliveryFee});

            paymentWidgetRef.current = paymentWidget;
            paymentMethodsWidgetRef.current = paymentMethodsWidget;
        })();
    }, [price]);

    useEffect(() => {
        const deliveryFeeUpdated= price >= 50000 ? 0 : 3000; // 상품 금액이 업데이트될 때마다 무료배송 조건 체크
        const paymentMethodsWidget = paymentMethodsWidgetRef.current;

        if (paymentMethodsWidget == null) {
            return;
        }

        const totalAmountWithDeliveryFeeUpdated= price + deliveryFeeUpdated;

        if (paymentMethodsWidgetRef.current) {
        paymentMethodsWidgetRef.current.updateAmount(totalAmountWithDeliveryFeeUpdated, 
        paymentMethodsWidgetRef.current.UPDATE_REASON.COUPON);
        }

        dispatch(setPrice(totalAmountWithDeliveryFeeUpdated));

    }, [price,dispatch]);

    useEffect(() => {
        localStorage.setItem('price', price);
    }, [price]);

    return (
        <div className="w-full bg-white dark:bg-[#272929] h-[100vh]">
            <div className="max-w-7xl mx-auto p-5">
                <div className='text-center border bg-white p-5 dark:bg-[#404343] dark:border-none dark:text-[#ebf4f1]'>
                    <h1 className=" text-3xl font-bold py-3">{messages.checkout}</h1>
                    <span className="lg:text-xl"> {messages.checkout1} : {`${price.toLocaleString()}${messages.won}`} + </span>
                    <span className="lg:text-xl"> {messages.checkout2} : {`${deliveryFee.toLocaleString()}${messages.won}`}</span>
                    <br />
                    <span className="lg:text-xl"> {messages.checkout3} : {`${(price + deliveryFee).toLocaleString()}${messages.won}`}</span>
                    <div className="pt-4" id="payment-widget"/>
                        <button className="w-full py-3 bg-[#86bcd5] text-white dark:bg-[#272929]" onClick={async () => {
                            const paymentWidget = paymentWidgetRef.current;

                            try {
                                await paymentWidget?.requestPayment({
                                    orderId: nanoid(),
                                    orderName: `${messages.checkout4}`,
                                    customerName: `${messages.checkout5}`,
                                    customerEmail: "puripuri1010@gmail.com",
                                    successUrl: `${window.location.origin}/success`,
                                    failUrl: `${window.location.origin}/fail`
                                });
                            } catch (error) {
                                // handle error
                            }
                        }}>{messages.checkout6}
                        </button>
                </div>
                <p onClick={()=>{navigate(-1)}} className="cursor-pointer text-right mt-3 dark:text-[#ebf4f1]">{messages.checkout7}</p>                
            </div>
        </div>);
}
