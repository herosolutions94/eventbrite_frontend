import React, {useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import axios from "axios"
import {useRouter} from "next/router"
import Cookies from "js-cookie"

const SignInForm = () => {
	const router = useRouter()
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})

	const [error, setError] = useState({
		email: "",
		password: "",
	})

	const handleChange = (e: any) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const data = {
			email: formData.email,
			password: formData.password,
		}
		try {
			const res = await axios.post(process.env.API_URL + "/login", data)
			if (res.data.status === 200) {
				Cookies.set("email", res.data.data.email)
				Cookies.set("role", res.data.data.role)
				Cookies.set("token", res.data.data.token)
				router.push("/production/dashboard")
			}
		}
		catch (err) {
			if(axios.isAxiosError(err)) {
				if(err.response?.status === 422) {
					setError(err.response?.data.errors)
				} else if(err.response?.status === 401) {
					setError(err.response?.data.errors)
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
							<h2>Sign in</h2>
							<p>Please login to see this page.</p>
						</div>
						<div className={style.form_row + " row"}>
							<div className="col-sm-12">
								<h6>Email Address</h6>
								<div className={style.form_blk}>
									<input 
										type="text" 
										name="email" 
										id="email" 
										className={style.input} 
										placeholder="eg: sample@gmail.com" 
										value={formData.email}
										onChange={handleChange} 
									/>
									<p className={style.error}>{error.email}</p>
								</div>
							</div>
							<div className="col-sm-12">
								<h6>Password</h6>
								<div className="form_blk pass_blk">
									<input 
										type="password" 
										name="password" 
										id="password" 
										className={style.input} 
										placeholder="eg: PassLogin%7" 
										value={formData.password}
										onChange={handleChange} 
									/>
									<i className={style.icon_eye}></i>
									<p className={style.error}>{error.password}</p>
								</div>
							</div>
						</div>
						<div className={style.btn_blk + " " + style.form_blk + " mt-5"}>
							<button type="submit" className={style.site_btn + " " + style.block}>
								Sign in
							</button>
						</div>
						<div className={style.forgot}>
							Forget password? <Link href="/production/forgot">Reset now</Link>
						</div>
						<div className={style.account + " mt-2"}>
							Don’t have an account? <Link href="/production/signup">Create an account</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignInForm
