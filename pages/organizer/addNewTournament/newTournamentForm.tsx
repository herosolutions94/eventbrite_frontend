import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"

const NewTournamentForm = () => {
	const [fieldset, setFieldset] = useState("tournament_details")
	return (
		<>
			<form action="" method="post">
				{fieldset === "tournament_details" ? (
					<>
						<fieldset className={style.blk}>
							<h5 className="mb-5">Tournament Details</h5>
							<div className="row">
								<div className="col-sm-12">
									<h6>Tournament Name</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: Lorem ipsum dollar" />
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Category</h6>
									<div className={style.form_blk}>
										<select name="" id="" className={style.input}>
											<option value="">Select</option>
											<option value="sport">Sport</option>
											<option value="game">Game</option>
										</select>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Type</h6>
									<div className={style.form_blk}>
										<select name="" id="" className={style.input}>
											<option value="">Select</option>
											<option value="">Single</option>
											<option value="">Double Elimination</option>
											<option value="">Round Robin</option>
											<option value="">Swiss</option>
										</select>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Start Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 04-12-2020" />
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament End Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 04-12-2020" />
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Registration Deadline</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 04-12-2020" />
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Event Type</h6>
									<div className={style.form_blk}>
										<select name="" id="" className={style.input}>
											<option value="">Select</option>
											<option value="">Physical</option>
											<option value="">Online</option>
										</select>
									</div>
								</div>
								<div className="col-sm-5">
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
								<div className="col-sm-4">
									<h6>City</h6>
									<div className={style.form_blk}>
										<input type="text" name="city" id="city" className={style.input} placeholder="eg: California" />
									</div>
								</div>
								<div className="col-sm-3">
									<h6>Postal code</h6>
									<div className={style.form_blk}>
										<input type="text" name="zip_code" id="zip_code" className={style.input} placeholder="eg: BL0 0WY" />
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Address</h6>
									<div className={style.form_blk}>
										<input type="text" name="address" id="address" className={style.input} placeholder="eg: 123 Main Street, California" />
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Number of Teams</h6>
									<div className={style.form_blk}>
										<select name="" id="" className={style.input}>
											<option value="">Select</option>
											<option value="">2</option>
											<option value="">3</option>
										</select>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Format</h6>
									<div className={style.form_blk}>
										<select name="" id="" className={style.input}>
											<option value="">Select</option>
											<option value="">Number of Groups</option>
											<option value="">Knockout Stages</option>
										</select>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Entry Fee</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 100" />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Prize Distribution</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 100" />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Tournament Level</h6>
									<div className={style.form_blk}>
										<select name="" id="" className={style.input}>
											<option value="">Select</option>
											<option value="">Dutch Eredivisie</option>
											<option value="">Spanish División de Honor Juvenil de Fútbol</option>
										</select>
									</div>
								</div>
							</div>
							<div className={`${style.btn_blk} justify-content-center mt-5`}>
								<button type="button" className={style.site_btn} onClick={() => setFieldset("tournament_rules")}>
									Continue
								</button>
							</div>
						</fieldset>
					</>
				) : fieldset === "tournament_rules" ? (
					<>
						<fieldset className={style.blk}>
							<h5 className="mb-5">Rules and Regulations</h5>
							<div className="row">
								<div className="col-sm-12">
									<h6>Specific rules for the tournament</h6>
									<div className={style.form_blk}>
										<textarea name="" id="" rows={5} className={style.input} placeholder="Type something here"></textarea>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Code of Conduct</h6>
									<div className={style.form_blk}>
										<textarea name="" id="" rows={5} className={style.input} placeholder="Type something here"></textarea>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Age or Skill Level Restrictions</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 18" />
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Equipment Requirements</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: Lorem, Ipsum, Smit" />
									</div>
								</div>
							</div>
							<div className={`${style.btn_blk} justify-content-center mt-5`}>
								<button type="button" className={`${style.site_btn} ${style.simple}`} onClick={() => setFieldset("tournament_details")}>
									Back
								</button>
								<button type="button" className={style.site_btn} onClick={() => setFieldset("tournament_schedule")}>
									Continue
								</button>
							</div>
						</fieldset>
					</>
				) : fieldset === "tournament_schedule" ? (
					<>
						<fieldset className={style.blk}>
							<h5 className="mb-5">Tournament Schedule</h5>
							<h6 className={style.text_prime}>01. Match</h6>
							<div className="row">
								<div className="col-sm-4">
									<h6>Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 04-12-2020" />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 16:00" />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Breaks</h6>
									<div className={style.form_blk}>
										<select name="" id="" className={style.input}>
											<option value="">Select</option>
											<option value="">1</option>
											<option value="">2</option>
										</select>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 123 Main Street, California" />
									</div>
								</div>
							</div>
							<hr />
							<h6 className={style.text_prime}>02. Match</h6>
							<div className="row">
								<div className="col-sm-4">
									<h6>Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 04-12-2020" />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 16:00" />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Breaks</h6>
									<div className={style.form_blk}>
										<select name="" id="" className={style.input}>
											<option value="">Select</option>
											<option value="">1</option>
											<option value="">2</option>
										</select>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 123 Main Street, California" />
									</div>
								</div>
							</div>
							<hr />
							<h6 className={style.text_prime}>03. Match</h6>
							<div className="row">
								<div className="col-sm-4">
									<h6>Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 04-12-2020" />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 16:00" />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Breaks</h6>
									<div className={style.form_blk}>
										<select name="" id="" className={style.input}>
											<option value="">Select</option>
											<option value="">1</option>
											<option value="">2</option>
										</select>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 123 Main Street, California" />
									</div>
								</div>
							</div>
							<hr />
							<h6 className={style.text_prime}>04. Match</h6>
							<div className="row">
								<div className="col-sm-4">
									<h6>Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 04-12-2020" />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 16:00" />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Breaks</h6>
									<div className={style.form_blk}>
										<select name="" id="" className={style.input}>
											<option value="">Select</option>
											<option value="">1</option>
											<option value="">2</option>
										</select>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 123 Main Street, California" />
									</div>
								</div>
							</div>
							<div className={`${style.btn_blk} justify-content-center mt-5`}>
								<button type="button" className={`${style.site_btn} ${style.simple}`} onClick={() => setFieldset("tournament_rules")}>
									Back
								</button>
								<button type="button" className={style.site_btn} onClick={() => setFieldset("tournament_staff")}>
									Continue
								</button>
							</div>
						</fieldset>
					</>
				) : fieldset === "tournament_staff" ? (
					<>
						<fieldset className={style.blk}>
							<h5 className="mb-5">Tournament Staff & Volunteers</h5>
							<div className="row">
								<div className="col-sm-6">
									<h6>Contact Information</h6>
									<div className={style.form_blk}>
										<input type="text" name="" id="" className={style.input} placeholder="eg: 194349034234" />
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Roles and Responsibilities</h6>
									<div className={style.form_blk}>
										<select name="" id="" className={style.input}>
											<option value="Select">Select</option>
											<option value="Referees">Referees</option>
											<option value="Scorekeepers">Scorekeepers</option>
										</select>
									</div>
								</div>
							</div>
							<div></div>
							<div className={`${style.btn_blk} justify-content-center mt-5`}>
								<button type="button" className={`${style.site_btn} ${style.simple}`} onClick={() => setFieldset("tournament_schedule")}>
									Back
								</button>
								<button type="button" className={style.site_btn} onClick={() => setFieldset("tournament_sponsorship")}>
									Continue
								</button>
							</div>
						</fieldset>
					</>
				) : fieldset === "tournament_sponsorship" ? (
					<>
						<fieldset className={style.blk}>
							<h5 className="mb-5">Sponsorship and Marketing</h5>
							<div className="row">
								<div className="col-sm-12">
									<h6>Sponsor Information</h6>
									<div className={style.form_blk}>
										<textarea name="" id="" rows={5} className={style.input} placeholder="Type something here"></textarea>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Upload Logos</h6>
									<div className={style.form_blk}>
										<button type="button" name="" id="" className={style.input}>
											Upload Logos
										</button>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Upload Banners</h6>
									<div className={style.form_blk}>
										<button type="button" name="" id="" className={style.input}>
											Upload Banners
										</button>
									</div>
								</div>
							</div>
							<div className={`${style.btn_blk} justify-content-center mt-5`}>
								<button type="button" className={`${style.site_btn} ${style.simple}`} onClick={() => setFieldset("tournament_staff")}>
									Back
								</button>
								<button type="submit" className={style.site_btn}>
									Create Tournament
								</button>
							</div>
						</fieldset>
					</>
				) : null}
			</form>
		</>
	)
}

export default NewTournamentForm
