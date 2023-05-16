import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"

const AddTeamPopup = (props: any) => {
	const { popupClose } = props
	const [fieldset, setFieldset] = useState("team_info")
	return (
		<>
			<div id={style.add_team_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className={style._inner}>
								<button type="button" className={style.x_btn} onClick={popupClose}></button>
								<h4 className="mb-5">Add Your Team</h4>
								<form action="" method="post">
									{fieldset === "team_info" ? (
										<>
											<fieldset>
												<h5 className="mb-5">Team Information</h5>
												<div className="row">
													<div className="col-sm-6">
														<h6 className="require">Team Name</h6>
														<div className={style.form_blk}>
															<input type="text" name="" id="" className={style.input} placeholder="eg: Warmongers" />
														</div>
													</div>
													<div className="col-sm-6">
														<h6>Affiliation</h6>
														<div className={style.form_blk}>
															<select name="" id="" className={style.input}>
																<option value="">Select</option>
																<option value="">School</option>
																<option value="">Sports Club</option>
																<option value="">Companies</option>
																<option value="">Community Sports Team</option>
															</select>
														</div>
													</div>
													<div className="col-sm-6">
														<h6>Team Logo</h6>
														<div className={style.form_blk}>
															<button type="button" name="" id="" className={style.input}>
																Upload Logo
															</button>
														</div>
													</div>
													<div className="col-sm-6">
														<h6>Team Colors</h6>
														<div className={style.form_blk}>
															<input type="text" name="" id="" className={style.input} placeholder="eg: Yellow & Black" />
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Skill Level/Category</h6>
														<div className={style.form_blk}>
															<input type="text" name="" id="" className={style.input} placeholder="eg: Dutch Eredivisie" />
														</div>
													</div>
												</div>
												<div className={`${style.btn_blk} justify-content-center mt-5`}>
													<button type="button" className={style.site_btn} onClick={() => setFieldset("captain_info")}>
														Continue
													</button>
												</div>
											</fieldset>
										</>
									) : fieldset === "captain_info" ? (
										<>
											<fieldset>
												<h5 className="mb-5">Team Captain/Manager Information</h5>
												<div className="row">
													<div className="col-sm-4">
														<h6 className="require">Full Name</h6>
														<div className={style.form_blk}>
															<input type="text" name="email" id="email" className={style.input} placeholder="eg: John Wick" value="" />
														</div>
													</div>
													<div className="col-sm-4">
														<h6 className="require">Email Address</h6>
														<div className={style.form_blk}>
															<input type="text" name="email" id="email" className={style.input} placeholder="eg: sample@gmail.com" value="" />
														</div>
													</div>
													<div className="col-sm-4">
														<h6 className="require">Phone Number</h6>
														<div className={style.form_blk}>
															<input type="text" name="phone" id="phone" className={style.input} placeholder="eg: 194349034234" value="" />
														</div>
													</div>
												</div>
												<div className={`${style.btn_blk} justify-content-center mt-5`}>
													<button type="button" className={`${style.site_btn} ${style.simple}`} onClick={() => setFieldset("team_info")}>
														Back
													</button>
													<button type="button" className={style.site_btn} onClick={() => setFieldset("members_info")}>
														Continue
													</button>
												</div>
											</fieldset>
										</>
									) : fieldset === "members_info" ? (
										<>
											<fieldset>
												<h5 className="mb-5">Team Members Information</h5>
												<div className="row">
													<div className="col-sm-6">
														<h6 className="require">Full Name</h6>
														<div className={style.form_blk}>
															<input type="text" name="email" id="email" className={style.input} placeholder="eg: John Wick" value="" />
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Email Address</h6>
														<div className={style.form_blk}>
															<input type="text" name="email" id="email" className={style.input} placeholder="eg: sample@gmail.com" value="" />
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Phone Number</h6>
														<div className={style.form_blk}>
															<input type="text" name="phone" id="phone" className={style.input} placeholder="eg: 194349034234" value="" />
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Role/Position</h6>
														<div className={style.form_blk}>
															<input type="text" name="role" id="role" className={style.input} placeholder="eg: Captain" value="" />
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Emergency Contact Name</h6>
														<div className={style.form_blk}>
															<input type="text" name="phone" id="phone" className={style.input} placeholder="eg: John Wick" value="" />
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Emergency Contact Phone Number</h6>
														<div className={style.form_blk}>
															<input type="text" name="phone" id="phone" className={style.input} placeholder="eg: 194349034234" value="" />
														</div>
													</div>
												</div>
												<hr />
												<div className={style.table_blk_wrap}>
													<div className={style.table_blk}>
														<table>
															<thead>
																<tr>
																	<th>Full Name</th>
																	<th>Email Address</th>
																	<th>Phone Number</th>
																	<th>Role/Position</th>
																	<th>Emergency Contact Name</th>
																	<th>Emergency Contact Phone</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>John Wick</td>
																	<td>sample@gmail.com</td>
																	<td>194349034234</td>
																	<td>Captain</td>
																	<td>Monica Cajarval</td>
																	<td>194349034234</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<div className={`${style.btn_blk} justify-content-center mt-5`}>
													<button type="button" className={`${style.site_btn} ${style.simple}`} onClick={() => setFieldset("captain_info")}>
														Back
													</button>
													<button type="button" className={style.site_btn} onClick={() => setFieldset("fee_info")}>
														Continue
													</button>
												</div>
											</fieldset>
										</>
									) : fieldset === "fee_info" ? (
										<>
											<fieldset>
												<h5 className="mb-5">Registration Fee</h5>
												<div className="row">
													<div className="col-sm-6">
														<h6>Payment Method</h6>
														<div className={style.form_blk}>
															<select name="" id="" className={style.input}>
																<option value="">Select</option>
																<option value="">Bank Account</option>
																<option value="">Paypal</option>
																<option value="">Credit Card</option>
															</select>
														</div>
													</div>
													<div className="col-sm-6">
														<h6>Payment Confirmation</h6>
														<div className={style.form_blk}>
															<button type="button" name="" id="" className={style.input}>
																Attach proof of payment
															</button>
														</div>
													</div>
												</div>
												<div className={`${style.btn_blk} justify-content-center mt-5`}>
													<button type="button" className={`${style.site_btn} ${style.simple}`} onClick={() => setFieldset("members_info")}>
														Back
													</button>
													<button type="button" className={style.site_btn} onClick={() => setFieldset("liability_info")}>
														Continue
													</button>
												</div>
											</fieldset>
										</>
									) : fieldset === "liability_info" ? (
										<>
											<fieldset>
												<h5>Waivers and Liability Forms</h5>
												<p className="mb-5 opacity-50">Please make sure each team member reads and signs the waivers and liability forms provided. Upload the signed forms here (if using an online form, allow file upload, or provide an email address to receive the forms)</p>
												<div className="row">
													<div className="col-sm-6">
														<h6 className="require">Email Address</h6>
														<div className={style.form_blk}>
															<input type="text" name="email" id="email" className={style.input} placeholder="eg: sample@gmail.com" value="" />
														</div>
													</div>
													<div className="col-sm-6">
														<h6>File Upload</h6>
														<div className={style.form_blk}>
															<button type="button" name="" id="" className={style.input}>
																Upload Form
															</button>
														</div>
													</div>
													<div className="col-sm-12">
														<div className={style.form_blk}>
															<div className={style.lbl_btn}>
																<input type="checkbox" name="confirm" id="confirm" />
																<label htmlFor="confirm">
																	By submitting this form, you acknowledge that you have read and understood the tournament{" "}
																	<Link target="_blank" href="/terms-and-conditions">
																		rules, format, and schedule
																	</Link>
																	. You also agree to abide by the rules and regulations set forth by the tournament organizers.
																</label>
															</div>
														</div>
													</div>
												</div>
												<div className={`${style.btn_blk} justify-content-center mt-5`}>
													<button type="button" className={`${style.site_btn} ${style.simple}`} onClick={() => setFieldset("fee_info")}>
														Back
													</button>
													<button type="submit" className={style.site_btn}>
														Submit
													</button>
												</div>
											</fieldset>
										</>
									) : null}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddTeamPopup
