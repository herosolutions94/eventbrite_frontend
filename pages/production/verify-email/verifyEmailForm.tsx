import React, {useEffect, useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import axios from "axios"
import {useRouter} from "next/router"
import Cookies from "js-cookie"

const VerifyEmailForm = () => {
	const router = useRouter()
	const [code, setCode] = useState("");
    const [codeError, setCodeError] = useState("");

	const handleChange = (e: any) => {
        setCode(e.target.value)
	}

	return (
		<>
			<div className={style.logon_form}>
				<form action="" method="POST">
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
									<p className="text-danger">{codeError}</p>
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
