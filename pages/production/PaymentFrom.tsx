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

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		if (!stripe || !elements) {
			return
		}
		const cardElement = elements.getElement(CardNumberElement)
		if (!cardElement) {
			alert()
			return
		}
		const result = await stripe.createToken(cardElement as any)
		if (result.error) {
			setCardError(result.error.message as any)
		} else {
			// Send the token to your server for further processing
			console.log(result.token)
			const formData = new FormData()
			formData.append("payment_token", result.token.id)
			formData.append("user_id", Cookies.get("user_id") as string)
			formData.append("amount", 100 as any)

			try {
				const res = await axios.post(process.env.API_URL + "/create-indent-payment", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				console.log(res.data)
			} catch (err) {
				if (axios.isAxiosError(err)) {
					console.log(err.response?.data)
				}
			}
		}
	}

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
