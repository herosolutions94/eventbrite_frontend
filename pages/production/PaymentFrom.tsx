
import React, { useMemo,useState } from "react";
import style from "@/styles/scss/app.module.scss"
import {
    CardElement,
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement
  } from "@stripe/react-stripe-js";
import axios from "axios"
import {useRouter} from "next/router"
import Cookies from "js-cookie"
import { toast } from 'react-toastify';


  const useOptions = () => {
    const options = useMemo(
      () => ({
        style: {
          base: {
            display: "block",
            width: "100%",
            height: "5.3rem",
            fontFamily: "'Red Hat Display', sans-serif",
            fontWeight: "500",
            color: "#061237",
            background: "#fff",
            "text-align": "left",
            padding: "0.6rem 1.4rem",
            "::placeholder": {
              color: "#130a2952",
              fontSize: "15px"
            }
          },
          invalid: {
            color: "#9e2146"
          }
        }
      }),
      []
    );
  
    return options;
  };
const PaymentForm = () => {
  const options = useOptions();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardNumberElement);
    if (!cardElement) {
        alert();
      return;
    }
    const result = await stripe.createToken(cardElement as any);
    if (result.error) {
        setCardError(result.error.message as any); 
    } else {
      // Send the token to your server for further processing
      console.log(result.token);
      const formData = new FormData();
      formData.append('payment_token', result.token.id);
      formData.append('user_id', Cookies.get('user_id') as string);
      formData.append('amount', 100 as any);

      try {const res = await axios.post(process.env.API_URL + "/create-indent-payment", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
           console.log(res.data)
        }
        catch (err) {
            if(axios.isAxiosError(err)) {
                console.log(err.response?.data)
            }
        }
    }
  };

  return (
    <div style={{background: "white"}}>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name on Card*</label>
                <input
                type="text"
                className="input"
                placeholder="Name on card"
                />
                <span className="validation-error"></span>
            </div>
            <div>
                <label>Card Number*</label>
                <div>
                <CardNumberElement options={options} />
                <span>
                    <img src="/images/card.svg" alt="" />
                </span>
                </div>
            </div>
            <div>
                <div >
                <label>Expiry date*</label>
                <CardExpiryElement options={options} />
                </div>
                <div >
                <label>CVC*</label>
                <CardCvcElement options={options} />
                </div>
            </div>
            <span className="validation-error" style={{color: "red"}}>{cardError}</span>
          
            <div>
                <button type="submit">
                    Pay Now
                </button>
            </div>
            </form>
    </div>
  );
};

export default PaymentForm;