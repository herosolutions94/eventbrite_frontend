import React from "react"
import style from "@/styles/scss/app.module.scss"

const BookingForm = () => {
	return (
		<>
			<h3 className="text-center mb-5">Book new Tournament</h3>
			<form action="" method="post">
				<h5 className="mb-4">Tournament Information</h5>
				<div className={`${style.form_row} row`}>
					<div className="col-6">
						<h6>Full Name</h6>
						<div className={style.form_blk}>
							<input type="text" name="" id="" className={style.input} placeholder="eg: John Wick" />
						</div>
					</div>
					<div className="col-6">
						<h6>Email Address</h6>
						<div className={style.form_blk}>
							<input type="text" name="" id="" className={style.input} placeholder="eg: sample@gmail.com" />
						</div>
					</div>
					<div className="col-12">
						<h6>Tournament Title</h6>
						<div className={style.form_blk}>
							<input type="text" name="" id="" className={style.input} placeholder="eg: Lorem ipsum omnis dolor repellendus" />
						</div>
					</div>
				</div>
				<hr className="my-5" />
				<h5 className="mb-4">Address Information</h5>
				<div className={`${style.form_row} row`}>
					<div className="col-4">
						<h6>Country</h6>
						<div className={style.form_blk}>
							<select name="" id="" className={style.input}>
								<option value="">Select</option>
								<option value="232">United Kingdom</option>
								<option value="232">United Kingdom</option>
								<option value="232">United Kingdom</option>
								<option value="232">United Kingdom</option>
								<option value="232">United Kingdom</option>
								<option value="232">United Kingdom</option>
							</select>
						</div>
					</div>
					<div className="col-4">
						<h6>State</h6>
						<div className={style.form_blk}>
							<select name="" id="" className={style.input}>
								<option value="">Select</option>
								<option value="2289">Isle of Wight</option>
								<option value="2290">St Helens</option>
								<option value="2291">London Borough of Brent</option>
								<option value="2292">Walsall</option>
								<option value="2293">Trafford</option>
								<option value="2294">City of Southampton</option>
								<option value="2295">Sheffield</option>
							</select>
						</div>
					</div>
					<div className="col-4">
						<h6>City</h6>
						<div className={style.form_blk}>
							<input type="text" name="" id="" value="" className={style.input} placeholder="eg: California" />
						</div>
					</div>
					<div className="col-4">
						<h6>Zip Code</h6>
						<div className={style.form_blk}>
							<input type="text" id="" name="" data-type="hotel" data-way="1" value="" className={style.input} placeholder="eg: BL0 0WY" />
						</div>
					</div>
					<div className="col-8">
						<h6>Address</h6>
						<div className={style.form_blk}>
							<input type="text" id="" name="" value="" className={style.input} placeholder="eg: 123 Main Street, California" />
						</div>
					</div>
				</div>
				<hr className="my-5" />
				<h5 className="mb-4">Description</h5>
				<div className={`${style.form_row} row`}>
					<div className="col-12">
						<div className={style.form_blk}>
							<textarea name="" id="" rows={6} className={style.input} placeholder="Type something here..."></textarea>
						</div>
					</div>
				</div>
				<div className={`${style.btn_blk} mt-5 justify-content-center`}>
					<button type="submit" className={style.site_btn}>
						Book Now
					</button>
				</div>
			</form>
		</>
	)
}

export default BookingForm
