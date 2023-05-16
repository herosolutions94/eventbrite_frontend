import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoAboutMe } from "@/components/images"

const ProfileForm = () => {
	return (
		<>
			<form action="" method="POST">
				<div className={style.blk}>
					<h4 className="mb-4">Personal information</h4>
					<div className={style.dp_blk}>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={1000} height={1000} src={PhotoAboutMe} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.btn_blk}>
								<button type="button" className={style.change_photo_btn}>
									Change Photo
								</button>
								<input type="file" name="" id="" />
							</div>
							<div className="pt-4"></div>
							<div>Acceptable only jpg, png</div>
							<div>The maximum file size is 500 kb and the minimum size is 80 kb.</div>
						</div>
					</div>
					<div className={`${style.form_row} row`}>
						<div className="col-lg-4 col-6">
							<h6>First Name</h6>
							<div className={style.form_blk}>
								<input type="text" name="" id="" value="Jennifer" className={style.input} placeholder="eg: John" />
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Last Name</h6>
							<div className={style.form_blk}>
								<input type="text" name="" id="" value="Kem" className={style.input} placeholder="eg: Wick" />
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Phone Number</h6>
							<div className={style.form_blk}>
								<input type="text" name="" id="" value="02077829920" className={style.input} placeholder="eg: +92300 0000 000" />
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Email Address</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="" value="buyer@gmail.com" className={style.input} placeholder="eg: sample@gmail.com" />
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Date of Birth</h6>
							<div className={style.form_blk}>
								<input type="text" name="" id="" value="12-31-1969" className={style.input} placeholder="eg: 01-01-1998" />
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Gender</h6>
							<div className={style.form_blk}>
								<select name="" id="" className={style.input}>
									<option value="">Select</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="others">Others</option>
								</select>
							</div>
						</div>
					</div>
					<hr className="my-5" />
					<h4 className="mb-4">Address information</h4>
					<div className={`${style.form_row} row`}>
						<div className="col-lg-4 col-6">
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
						<div className="col-lg-4 col-6">
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
						<div className="col-lg-4 col-6">
							<h6>City</h6>
							<div className={style.form_blk}>
								<input type="text" name="" id="" value="" className={style.input} placeholder="eg: California" />
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Zip Code</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="" value="" className={style.input} placeholder="eg: BL0 0WY" />
							</div>
						</div>
						<div className="col-lg-8 col-12">
							<h6>Address</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="" value="" className={style.input} placeholder="eg: 123 Main Street, California" />
							</div>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-center mt-5`}>
						<button type="submit" className={`${style.site_btn} ${style.px}`}>
							Save
						</button>
					</div>
				</div>
			</form>
		</>
	)
}

export default ProfileForm
