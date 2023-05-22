import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss"
import axios from "axios"
import {useRouter} from "next/router"
import Cookies from "js-cookie"

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
		looking_for: '',
	})
	const [error, setError] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
		looking_for: '',
	})
	const [errorMessage, setErrorMessage] = useState("")
	const handleChange = (e: any) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const data = {
			name: formData.name,
			email: formData.email,
			mobile_no: formData.phone,
			message: formData.message,
			looking_for: formData.looking_for,
		}
		try {
			const res = await axios.post(process.env.API_URL + "/contact-us", data)
			if (res.status === 200) {
				alert('Your message has been sent successfully.')
				setFormData({
					name: '',
					email: '',
					phone: '',
					message: '',
					looking_for: '',
				})
			}	
		}
		catch (err) {
			if(axios.isAxiosError(err)) {
				if(err.response?.status === 422) {
					setError(err.response.data.error)
				} else if(err.response?.status === 401) {
					setErrorMessage(err.response.data.message)
				}
			}
		}
	}
	return (
		<>
			<form action="" method="POST" onSubmit={handleSubmit}>
				<div className={style.form_row + " row"}>
					<div className="col-md-12 col-sm-12">
						<div className={style.form_blk}>
							<input 
								type="text" 
								name="name" 
								id="" 
								className={style.input} 
								placeholder="Full Name" 
								value={formData.name}
								onChange={handleChange} 
							/>
							<p className="text-danger">{error?.name}</p>
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className={style.form_blk}>
							{/* <input type="text" name="" id="" className={style.input} placeholder="Phone Number" /> */}
							<input
								type="text"
								name="phone"
								id=""
								className={style.input}
								placeholder="Phone Number"
								value={formData.phone}
								onChange={handleChange}
							/>
							<p className="text-danger">{error?.phone}</p>
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className={style.form_blk}>
							<input type="text" name="email" id="" className={style.input} 
								placeholder="Email Address"
								value={formData.email}
								onChange={handleChange}
							 />
							 <p className="text-danger">{error?.name}</p>
						</div>
					</div>
					<div className="col-md-12 col-sm-12">
						<div className={style.form_blk}>
							<select name="looking_for" id="" className={style.input}
								value={formData.looking_for}
								onChange={handleChange}
							>
								<option value="">What are you looking for?</option>
								<option value="option_1">Option 01</option>
								<option value="option_2">Option 02</option>
								<option value="option_3">Option 03</option>
								<option value="option_4">Option 04</option>
								<option value="option_5">Option 05</option>
							</select>
							<p className="text-danger">{error?.looking_for}</p>
						</div>
					</div>
					<div className="col-md-12 col-sm-12">
						<div className={style.form_blk}>
							<textarea name="message" id="" className={style.input} rows={4} 
								placeholder="Enter your topic"
								value={formData.message}
								onChange={handleChange}
							></textarea>
							<p className="text-danger">{error?.message}</p>
						</div>
					</div>
				</div>
				<div className={`${style.btn_blk} mt-5`}>
					<button type="submit" className={style.site_btn + " w-100"}>
						Send Message
					</button>
				</div>
			</form>
		</>
	)
}

export default ContactForm
