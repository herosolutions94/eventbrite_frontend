import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/router"
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
	const [errorMessage, setErrorMessage] = useState("")

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const data = {
			email: formData.email,
			password: formData.password,
		}
		try {
			const res = await axios.post(process.env.API_URL + "/login", data)

			if (res.status === 200) {
				Cookies.set("user_id", res.data.user.id)
				Cookies.set("email", res.data.user.email)
				Cookies.set("role", res.data.user.role)
				Cookies.set("token", res.data.token)
				if (res.data.user.role == 'organizer') {
					router.push("/organizer")
				}
				if (res.data.user.role == 'player') {
					router.push("/player")
				}

			}
		}
		catch (err) {
			if (axios.isAxiosError(err)) {
				if (err.response?.status === 422) {
					setError(err.response.data.error)
				} else if (err.response?.status === 401) {
					setErrorMessage(err.response.data.message)
				}
			}
		}
	}

	return (
		<>
			<div className={style.logon_form}>
				<form autoComplete="off" action="" method="POST" onSubmit={handleSubmit}>
					<div className={style.log_blk}>
						<div className={style.txt}>
							<h2>Sign in</h2>
							<p>Please login to see this page.</p>
							<p className="text-danger">{errorMessage}</p>
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
										autoComplete="none"
									/>
									<p className="text-danger">{error?.email}</p>
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
										autoComplete="none"
									/>
									<i className={style.icon_eye}></i>
									<p className="text-danger">{error?.password}</p>
								</div>
							</div>
						</div>
						<div className={style.btn_blk + " " + style.form_blk + " mt-5"}>
							<button type="submit" className={style.site_btn + " " + style.block}>
								Sign in
							</button>
						</div>
						<div className={style.forgot}>
							Forget password? <Link href="/forgot">Reset now</Link>
						</div>
						<div className={style.account + " mt-2"}>
							Don’t have an account? <Link href="/signup">Create an account</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignInForm
