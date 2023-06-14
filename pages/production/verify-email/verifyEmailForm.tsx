import React, {useEffect, useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import axios from "axios"
import {useRouter} from "next/router"
import Cookies from "js-cookie"
import { toast } from 'react-toastify';

const VerifyEmailForm = () => {
	const router = useRouter()
	const [code, setCode] = useState("");
    const [error, setError]  = useState("");
	const [errorMessage, setErrorMessage] = useState("")

	const handleChange = (e: any) => {
        setCode(e.target.value)
	}
	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const data = {
			verify_token: code,
			email: Cookies.get('email')
		}
		try {
			const res = await axios.post(process.env.API_URL + "/verify-code", data)
			if (res.status === 200) {
				Cookies.set("user_id", res.data.user.id)
				Cookies.set("email", res.data.user.email)
				Cookies.set("role", res.data.user.role)
				Cookies.set("token", res.data.user.token)
				if(res.data.user.role == 'organizer'){
					router.push("/organizer")
				}
				if(res.data.user.role == 'player'){
					router.push("/player")
				}
			
			}
		}
		catch (err) {
			if(axios.isAxiosError(err)) {
				if(err.response?.status === 422) {
					setError(err.response.data.message)
					toast.error(err.response.data.message)
				} else if(err.response?.status === 401) {
					toast.error(err.response.data.message)
				}else{
					toast.error('Something went wrong.');
				}
			}
		}
	}

	return (
		<>
			<div className={style.logon_form}>
				<form action="" method="POST" onSubmit={handleSubmit}>
					<div className={style.log_blk}>
						<div className={style.txt}>
							<h2>Verify Email</h2>
							<p>Please Verify Your Email Address</p>
						</div>
						<div className={style.form_row + " row"}>
							<div className="col-sm-12">
								<h6>Verification Code</h6>
								<div className={style.form_blk}>
									<input 
										type="text" 
										name="code" 
										id="code" 
										className={style.input} 
										placeholder="123456" 
										value={code}
										onChange={handleChange} 
									/>
									<p className="text-danger">{error}</p>
								</div>
							</div>
						</div>
						<div className={style.btn_blk + " " + style.form_blk + " mt-5"}>
							<button type="submit" className={style.site_btn + " " + style.block}>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default VerifyEmailForm
