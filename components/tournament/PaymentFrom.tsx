import React, { useMemo, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import { CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js"
import axios from "axios"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import { toast } from "react-toastify"

const useOptions = () => {
	const options = useMemo(
		() => ({
			style: {
				base: {
					display: "block",
					width: "100%",
					height: "2rem",
					fontSize: "0.875",
					fontFamily: "'Poppins', sans-serif",
					fontWeight: "400",
					color: "rgba(255, 255, 255, 0.8)",
					background: "#fff",
					textAlign: "left",
					padding: "0.6rem 1.4rem",
					"::placeholder": {
						color: "rgba(255, 255, 255, 0.4)",
						fontSize: "0.875",
					},
				},
				invalid: {
					color: "#e71939",
				},
			},
		}),
		[]
	)

	return options
}
const PaymentForm = () => {
	const options = useOptions()
	const stripe = useStripe()
	const elements = useElements()
	const [cardError, setCardError] = useState("")

  
  const chargePayment = async (clientSecret: any, paymentMethodReq: any, setup_id: any, paymentMethodSetup: any, customer_id: any) => {
    const result = await stripe!.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodSetup,
        setup_future_usage: 'off_session'
    });
    if (result.error) {
      toast.error(result.error.message)
      return;
    } else if (result.paymentIntent?.status === "succeeded") {
      toast.success("Payment Successful")
    }
  }

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
    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      });
      if (paymentMethodReq.error) {
        console.log(paymentMethodReq.error.message);
      } else {
        var form_data = new FormData();
        form_data.append('payment_token', paymentMethodReq.paymentMethod?.id as string);
        form_data.append('user_id', Cookies.get('user_id') as string);
        form_data.append('amount', 100 as any);
        await axios.post(process.env.API_URL + "/create-indent-payment", form_data).then((data : any) => {
          let client_secret = data.data.data.arr.client_secret;
          let client_secret_setup = data.data.data.arr.setup_client_secret;

          if (data.data.data.status === 1) {
              let card_result = stripe.confirmCardSetup(client_secret_setup, {
                  payment_method: {
                      card: cardElement,
                  },
              });
              card_result.then(response => {
                if(response.error) {
                  toast.error(response.error.message)
                }
                else {
                  let paymentMethod = response.setupIntent.payment_method;
                  let setup_intent_id = response.setupIntent.id;
                  chargePayment(client_secret, paymentMethodReq, setup_intent_id, paymentMethod, data.data.data.arr.customer);
                }
              })
          }
        })
      }
  };

	return (
		<div className={style.stripe_payment_form}>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-12">
						<h6 className="require">Name on Card</h6>
						<div className={style.form_blk}>
							<input type="text" className={style.input} placeholder="Name on card" />
							<span className="validation-error"></span>
						</div>
					</div>
					<div className="col-12">
						<h6 className="require">Card Number</h6>
						<div className={style.form_blk}>
							<div className={style.input_blk}>
								<CardNumberElement options={options} />
								<span>
									<img src="/images/card.svg" alt="" />
								</span>
							</div>
						</div>
					</div>
					<div className="col-6">
						<h6 className="require">Expiry Date</h6>
						<div className={style.form_blk}>
							<div className={style.input_blk}>
								<CardExpiryElement options={options} />
							</div>
						</div>
					</div>
					<div className="col-6">
						<h6 className="require">CVC</h6>
						<div className={style.form_blk}>
							<div className={style.input_blk}>
								<CardCvcElement options={options} />
							</div>
						</div>
					</div>
				</div>
				<span className="validation-error" style={{ color: "red" }}>
					{cardError}
				</span>
				<div className={`${style.btn_blk} justify-content-center mt-5`}>
					<button type="submit" className={`${style.site_btn} ${style.sm}`}>
						Pay Now
					</button>
				</div>
			</form>
		</div>
	)
}

export default PaymentForm
