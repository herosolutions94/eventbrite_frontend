import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import Cookies from "js-cookie";
import { toast,ToastContainer } from "react-toastify";
import { useRouter } from 'next/router';
import {
    CardElement,
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement
  } from "@stripe/react-stripe-js";
import style from "@/styles/scss/app.module.scss";
const NewCreditBuyForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [checkoutError, setCheckoutError] = useState<string | undefined>();
    const {
        register,
        trigger,
        handleSubmit,
        setValue,
        control,
        watch,
        formState: { errors, isValid }
      } = useForm({ mode: "all" });
    const handleCardDetailsChange = (ev: { error: { message: string } } | any) => {
        ev.error ? setCheckoutError(ev.error.message) : setCheckoutError(undefined);
    };
    
    const onSubmit = async (frmData: any) => {

        // e.preventDefault()
        setIsProcessing(true);

        if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
        }

        const cardElement = elements.getElement(CardElement);
        if(cardElement){
            try {
                const paymentMethodReq = await stripe.createPaymentMethod({
                    type: "card",
                    card: cardElement,
                    // billing_details: billingDetails
                });
                if (paymentMethodReq.error) {
                    setCheckoutError(paymentMethodReq.error.message);
                    setIsProcessing(false);
                    return;
                }
                else{
                    var payment_form_data = new FormData();
                    payment_form_data.append(
                      "payment_token",
                      paymentMethodReq.paymentMethod?.id as string
                    );
                    payment_form_data.append("user_id", Cookies.get("user_id") as string);
                    payment_form_data.append("amount", frmData?.amount as any);
                    await axios
                      .post(
                        process.env.API_URL + "/create-indent-payment",
                        payment_form_data
                      )
                      .then((data: any) => {
                        let client_secret = data.data.data.arr.client_secret;
                        let client_secret_setup = data.data.data.arr.setup_client_secret;
                        if (data.data.data.status === 1) {
                          let card_result = stripe.confirmCardSetup(client_secret_setup, {
                            payment_method: {
                              card: cardElement
                            }
                          });
                          card_result.then((response) => {
                            if (response.error) {
                              toast.error(response.error.message);return;
                              setIsProcessing(false);
                            } else {
                              let paymentMethod = response.setupIntent.payment_method;
                              let setup_intent_id = response.setupIntent.id;
                              chargePayment(
                                client_secret,
                                paymentMethodReq,
                                setup_intent_id,
                                paymentMethod,
                                data.data.data.arr.customer,
                                frmData?.amount
                              );
                            }
                          });
                        }
                      });
                }
            } catch (err: any) {
                setCheckoutError(err.message);
                setIsProcessing(false);
            }
        }
        else{
            setCheckoutError('Please fill in all required card details.');
            setIsProcessing(false);
        }
        
    };
    const router = useRouter();
    const chargePayment = async (
        clientSecret: any,
        paymentMethodReq: any,
        setup_id: any,
        paymentMethodSetup: any,
        customer_id: any,
        amount:any
      ) => {
        const result = await stripe!.confirmCardPayment(clientSecret, {
            payment_method: paymentMethodSetup,
            setup_future_usage: "off_session"
          });
          if (result.error) {
            setIsProcessing(false);
            toast.error(result.error.message);return;
          } else if (result.paymentIntent?.status === "succeeded") {
            console.log(result.paymentIntent.id,customer_id,paymentMethodReq.paymentMethod?.id,amount)
            const formData = new FormData();
            formData.append("user_id", Cookies.get("user_id") as string);
            formData.append("amount", amount);
            formData.append("payment_intent_id", result.paymentIntent.id);
            formData.append("customer_id", customer_id);
            formData.append("payment_method_id", paymentMethodReq.paymentMethod?.id);
            try {
                const res = await axios.post(
                    process.env.API_URL + "/save-user-buy-credits",
                    formData,
                    {
                      headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${Cookies.get("token")}`
                      }
                    }
                  );
                  //   logFormDataKeys(formData);
                  console.log(res);
                  setIsProcessing(false);
                    // return;
                  if (res.status === 200) {
                    if(res?.data?.status===1){
                        toast.success(res?.data?.msg);
                        setTimeout(() => {
                            router.reload()
                        }, 2000);
                    }
                    else{
                        toast.error(res?.data?.msg);
                    }
                    
                  }
            }
            catch (err) {
                if (axios.isAxiosError(err)) {
                  if (err.response?.status === 422) {
                    toast.error("Please fill out all the fields");
                  } else if (err.response?.status === 401) {
                    toast.error("You are not authorized to perform this action.");
                  }
                }
              }
          }
      }
    return(
        <form  action=""
            method="post"
            onSubmit={handleSubmit(onSubmit)}>
                <ToastContainer />
                <fieldset className={style.blk}>
                    <div className="row">
                        <div className="col-12">
                            <div className={style.credit_buy_input}>
                                <div className={style.form_blk}>
                                    <input
                                    type="text"
                                    className={style.input}
                                    placeholder=""
                                    {...register("amount", {
                                        required: "Amount is required",
                                        pattern: {
                                          value: /^\d+(\.\d{1,2})?$/, // Allows whole numbers or numbers with up to two decimal places
                                          message: "Invalid value"
                                        },
                                        min: {
                                          value: 5, // Minimum value is now 5
                                          message: "Amount should be greater than $5"
                                        }
                                      })}
                                    />
                                    <strong className={style.dollar_label}>$</strong>
                                </div>
                                <ErrorMessage
                                    errors={errors}
                                    name="amount"
                                    render={({ message }) => (
                                    <p className={style.error}>
                                        <i className="fi-warning"></i> {message}
                                    </p>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <h6 className="require">Card Number</h6>
                            <div className={style.stripeCol}>
                                <div className={style.form_blk}>
                                    <div className={style.input}>
                                        <CardElement options={{
                                            style: {
                                                base: {
                                                    fontSize: '14px',
                                                    color: '#fff',
                                                        '::placeholder': {
                                                        color: '#aab7c4',
                                                    },
                                                },
                                                invalid: {
                                                    color: '#9e2146',
                                                },
                                            },
                                        }} onChange={handleCardDetailsChange} />
                                    </div>
                                </div>
                            </div>
                            {checkoutError && <div className="alert alert-danger">{checkoutError}</div>}
                        </div>
                    </div>
                    <div className={`${style.btn_blk} justify-content-center mt-5`}>
                        <button type="submit" className={style.site_btn} disabled={isProcessing}>
                                Submit {isProcessing ? <i className="spinner"></i> : ""}
                        </button>
                    </div>
                </fieldset>
            </form>
    )
}
export default NewCreditBuyForm