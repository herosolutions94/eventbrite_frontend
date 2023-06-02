import React from "react"
import style from "@/styles/scss/app.module.scss"

const ChangePassword = () => {
	return (
		<>
			<form action="" method="POST">
				<div className={style.blk}>
					<h4 className="mb-4">Change Password</h4>
					<div className={`${style.form_row} row`}>
						<div className="col-lg-4 col-12">
							<div className={style.form_blk}>
								<input type="password" name="" id="" className={style.input} placeholder="Current password" />
							</div>
						</div>
						<div className="col-lg-4 col-12">
							<div className={style.form_blk}>
								<input type="password" name="" id="" className={style.input} placeholder="New password" />
							</div>
						</div>
						<div className="col-lg-4 col-12">
							<div className={style.form_blk}>
								<input type="password" name="" id="" className={style.input} placeholder="Confirm new password" />
							</div>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-center mt-5`}>
						<button type="submit" className={style.site_btn}>
							Change Password
						</button>
					</div>
				</div>
			</form>
		</>
	)
}

export default ChangePassword
