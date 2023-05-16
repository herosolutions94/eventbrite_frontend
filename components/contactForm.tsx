import React from "react"
import style from "@/styles/scss/app.module.scss"

const ContactForm = () => {
	return (
		<>
			<form action="" method="POST">
				<div className={style.form_row + " row"}>
					<div className="col-md-12 col-sm-12">
						<div className={style.form_blk}>
							<input type="text" name="" id="" className={style.input} placeholder="Full Name" />
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className={style.form_blk}>
							<input type="text" name="" id="" className={style.input} placeholder="Phone Number" />
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className={style.form_blk}>
							<input type="text" name="" id="" className={style.input} placeholder="Email Address" />
						</div>
					</div>
					<div className="col-md-12 col-sm-12">
						<div className={style.form_blk}>
							<select name="" id="" className={style.input}>
								<option value="">What are you looking for?</option>
								<option value="">Option 01</option>
								<option value="">Option 02</option>
								<option value="">Option 03</option>
								<option value="">Option 04</option>
								<option value="">Option 05</option>
							</select>
						</div>
					</div>
					<div className="col-md-12 col-sm-12">
						<div className={style.form_blk}>
							<textarea name="" id="" className={style.input} rows={4} placeholder="Enter your topic"></textarea>
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
