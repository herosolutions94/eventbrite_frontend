import React from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"

const ForgotForm = () => {
	return (
		<>
			<div className={style.logon_form}>
				<form action="" method="POST">
					<div className={style.log_blk}>
						<div className={style.txt}>
							<h2>Forgot Password</h2>
							<p>Don’t worry. Just enter the email address you registered with and we’ll email you instructions to reset your password..</p>
						</div>
						<div className={style.form_row + " row"}>
							<div className="col-sm-12">
								<h6>Email Address</h6>
								<div className={style.form_blk}>
									<input type="text" name="email" id="email" className={style.input} placeholder="eg: sample@gmail.com" value="" />
								</div>
							</div>
						</div>
						<div className={style.btn_blk + " " + style.form_blk + " mt-5"}>
							<button type="submit" className={style.site_btn + " " + style.block}>
								Reset Password
							</button>
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

export default ForgotForm
