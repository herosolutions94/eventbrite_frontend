import React, {useState, useEffect} from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import axios from "axios";
import Cookies from "js-cookie"
import {useRouter} from "next/router"
import { toast } from 'react-toastify';


const AddTeamPopup = (props: any) => {
	const { popupClose } = props
	
	const router = useRouter();
	const [fieldset, setFieldset] = useState("team_info")
	const [errors, setErrors] = useState<{ team_name?: string, affiliation?: string, team_color?: string, skill?: string, logo?: string, full_name?: string, email?: string, phone?: string, payment_method?: string, payment_prof?: string, waivers_email?: string, waivers_file?: string }>();
	const [teamMembers, setTeamMembers] = useState<any[]>([]); 
	const formData = new FormData();
	const [teams, setTeams] = useState({
		mem_name: "",
		mem_email: "",
		mem_phone: "",
		role: "",
		emergency_name: "",
		emergency_phone: "",
	})
	const [teamDetails, setTeamDetails] = useState({
		team_name: "",
		affiliation: "",
		team_color: "",
		skill: "",
		logo : "",
		full_name: "",
		email: "",
		phone: "",
		payment_method: "",
		payment_prof: "",
		waivers_email: "",
		waivers_file: "",
		teams: [
			{
				mem_name: "",
				mem_email: "",
				mem_phone: "",
				role: "",
				emergency_name: "",
				emergency_phone: "",
			},
		],
	})

	const addMoreTeams =(e: any) => {
		const { name, value } = e.target
		setTeams({
			...teams, 
			[name]: value
		})
		// empty the form
		setTeams({
			mem_name: "",
			mem_email: "",
			mem_phone: "",
			role: "",
			emergency_name: "",
			emergency_phone: "",
		})
		setTeamMembers([...teamMembers, teams])
	}

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setTeamDetails({ ...teamDetails, [name]: value })

	}
	const handleNext = (fieldset: string) => (e: any) => {
		e.preventDefault();
		setFieldset(fieldset)
		setTeamDetails({...teamDetails, teams: teamMembers})
	}
	const handleTeamSubmit = async (e: any) => {
		e.preventDefault();
		formData.append('team_name', teamDetails.team_name)
		formData.append('affiliation', teamDetails.affiliation)
		formData.append('team_color', teamDetails.team_color)
		formData.append('skill', teamDetails.skill)
		formData.append('logo', teamDetails.logo)
		formData.append('full_name', teamDetails.full_name)
		formData.append('email', teamDetails.email)
		formData.append('phone', teamDetails.phone)
		formData.append('payment_method', teamDetails.payment_method)
		formData.append('payment_prof', teamDetails.payment_prof)
		formData.append('waivers_email', teamDetails.waivers_email)
		formData.append('waivers_file', teamDetails.waivers_file)
		formData.append('teams', JSON.stringify(teamMembers))
		
		try {const res = await axios.post(process.env.API_URL + "/", formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		console.log(formData);

			if (res.status === 200) {
				toast.success('Record has been inserted successfully.')
				router.push("/production/tournament-detail")
			}	
		}
		catch (err) {
			if(axios.isAxiosError(err)) {
				if(err.response?.status === 422) {
					toast.error('Please fill out all the fields')
					setErrors(err.response?.data.errors)

				} else if(err.response?.status === 401) {
					toast.error('You are not authorized to perform this action.')
				}
			}
		}
	}
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
															<input type="text" 
																name="team_name" 
																id="" 
																className={style.input} 
																placeholder="eg: Warmongers" 
																onChange={handleChange} 
																value={teamDetails.team_name}
															/>
														</div>
													</div>
													<div className="col-sm-6">
														<h6>Affiliation</h6>
														<div className={style.form_blk}>
															<select name="affiliation" id="" className={style.input} onChange={handleChange} value={teamDetails.affiliation}>
																<option value="">Select</option>
																<option value="school">School</option>
																<option value="sports club">Sports Club</option>
																<option value="companies">Companies</option>
																<option value="comunity sports team">Community Sports Team</option>
															</select>
														</div>
													</div>
													<div className="col-sm-6">
														<h6>Team Logo</h6>
														<div className={style.form_blk}>
															<input type="file" name="logo" id="" className={style.input} onChange={handleChange} value={teamDetails.logo} />
															
														</div>
													</div>
													<div className="col-sm-6">
														<h6>Team Colors</h6>
														<div className={style.form_blk}>
															<input type="text" name="team_color" id="" className={style.input} placeholder="eg: Yellow & Black"  onChange={handleChange} value={teamDetails.team_color} />
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Skill Level/Category</h6>
														<div className={style.form_blk}>
															<input type="text" name="skill" id="" className={style.input} placeholder="eg: Dutch Eredivisie" onChange={handleChange} value={teamDetails.skill} />
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
															<input type="text" name="full_name" id="email" className={style.input} placeholder="eg: John Wick" value={teamDetails.full_name} onChange={handleChange} />
														</div>
													</div>
													<div className="col-sm-4">
														<h6 className="require">Email Address</h6>
														<div className={style.form_blk}>
															<input type="text" name="email" id="email" className={style.input} placeholder="eg: sample@gmail.com" value={teamDetails.email} onChange={handleChange} />
														</div>
													</div>
													<div className="col-sm-4">
														<h6 className="require">Phone Number</h6>
														<div className={style.form_blk}>
															<input type="text" name="phone" id="phone" className={style.input} placeholder="eg: 194349034234" value={teamDetails.phone} onChange={handleChange} />
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
															<input type="text" name="mem_name" id="email" 
																className={style.input}
																placeholder="eg: John Wick" 
																value={teams.mem_name}
																onChange={(e) => setTeams({...teams, mem_name: e.target.value})}
															/>
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Email Address</h6>
														<div className={style.form_blk}>
															<input type="text" name="mem_email" id="email" className={style.input}
																placeholder="eg: sample@gmail.com" 
																value={teams.mem_email}
																onChange={(e) => setTeams({...teams, mem_email: e.target.value})}
															/>
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Phone Number</h6>
														<div className={style.form_blk}>
															<input type="text" name="mem_phone" id="phone" 	
																className={style.input} placeholder="eg: 194349034234" 
																value={teams.mem_phone}
																onChange={(e) => setTeams({...teams, mem_phone: e.target.value})}
															/>
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Role/Position</h6>
														<div className={style.form_blk}>
															<input type="text" name="role" id="role" 
																className={style.input} placeholder="eg: Captain" 
																value={teams.role}
																onChange={(e) => setTeams({...teams, role: e.target.value})}
															/>
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Emergency Contact Name</h6>
														<div className={style.form_blk}>
															<input type="text" name="emergency_name" id="phone" 
																className={style.input} placeholder="eg: John Wick" 
																value={teams.emergency_name}
																onChange={(e) => setTeams({...teams, emergency_name: e.target.value})}
															/>
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Emergency Contact Phone Number</h6>
														<div className={style.form_blk}>
															<input type="text" name="emergency_phone" id="phone" 
																className={style.input} placeholder="eg: 194349034234" 
																value={teams.emergency_phone}
																onChange={(e) => setTeams({...teams, emergency_phone: e.target.value})}
															/>
														</div>
													</div>
													<div className="col-sm-12 pt-0">
														<div className="d-flex justify-content-end">
															<button type="button" className={`${style.site_btn} ${style.sm}`} onClick={addMoreTeams}>
																Add Member
															</button>
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
																	<th>Action</th>
																</tr>
															</thead>
															<tbody>
																{teamMembers.map((team: any, index: number) => (
																	<tr key={index}>
																		<td>{team.mem_name}</td>
																		<td>{team.mem_email}</td>
																		<td>{team.mem_phone}</td>
																		<td>{team.role}</td>
																		<td>{team.emergency_name}</td>
																		<td>{team.emergency_phone}</td>
																		<td><button type="button" className={style.text_prime}>Delete</button></td>
																	</tr>
																))}
																{/* <tr>
																	<td>John Wick</td>
																	<td>sample@gmail.com</td>
																	<td>194349034234</td>
																	<td>Captain</td>
																	<td>Monica Cajarval</td>
																	<td>194349034234</td>
																</tr> */}
															</tbody>
														</table>
													</div>
												</div>
												<div className={`${style.btn_blk} justify-content-center mt-5`}>
													<button type="button" className={`${style.site_btn} ${style.simple}`} onClick={() => setFieldset("captain_info")}>
														Back
													</button>
													<button type="button" className={style.site_btn} onClick={handleNext('fee_info')}>
														Continue
													</button>
												</div>
											</fieldset>
										</>
									) : fieldset === "fee_info" ? (
										<>
											<fieldset>
												<h5 className="mb-5">Payment Method</h5>
												<div className="row">
													<div className="col-sm-6">
														<h6 className="require">Card Number</h6>
														<div className={style.form_blk}>
															<input type="text" name="" id="" className={style.input} placeholder="eg: 1234567890"/>
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Card Holder</h6>
														<div className={style.form_blk}>
															<input type="text" name="" id="" className={style.input} placeholder="eg: John Wick"/>
														</div>
													</div>
													<div className="col-sm-4">
														<h6 className="require">Month</h6>
														<div className={style.form_blk}>
															<select name="" id="" className={style.input}>
																<option>Select</option>
																<option value="01">01</option>
																<option value="02">02</option>
																<option value="03">03</option>
																<option value="04">04</option>
																<option value="05">05</option>
																<option value="06">06</option>
																<option value="07">07</option>
																<option value="08">08</option>
																<option value="09">09</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
															</select>
														</div>
													</div>
													<div className="col-sm-4">
														<h6 className="require">Year</h6>
														<div className={style.form_blk}>
															<select name="" id="" className={style.input}>
																<option>Select</option>
																<option value="2021">2021</option>
																<option value="2022">2022</option>
																<option value="2023">2023</option>
																<option value="2024">2024</option>
																<option value="2025">2025</option>
																<option value="2026">2026</option>
																<option value="2027">2027</option>
																<option value="2028">2028</option>
																<option value="2029">2029</option>
																<option value="2030">2030</option>
																<option value="2031">2031</option>
															</select>
														</div>
													</div>
													<div className="col-sm-4">
														<h6 className="require">CVC?</h6>
														<div className={style.form_blk}>
															<input type="text" name="" id="" className={style.input} placeholder="eg: 1234"/>
														</div>
													</div>
													{/* <div className="col-sm-6">
														<h6>Payment Method</h6>
														<div className={style.form_blk}>
															<select name="payment_method" id="" className={style.input} onChange={handleChange} value={teamDetails.payment_method}>
																<option value="">Select</option>
																<option value="bank account">Bank Account</option>
																<option value="paypal">Paypal</option>
																<option value="credit card">Credit Card</option>
															</select>
														</div>
													</div>
													<div className="col-sm-6">
														<h6>Payment Confirmation</h6>
														<div className={style.form_blk}>
															<input type="file" name="payment_prof" id="" className={style.input} onChange={handleChange} value={teamDetails.payment_prof} />
																
														</div>
													</div> */}
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
															<input type="text" name="waivers_email" id="email" className={style.input} placeholder="eg: sample@gmail.com" value={teamDetails.waivers_email} onChange={handleChange} />
														</div>
													</div>
													<div className="col-sm-6">
														<h6>File Upload</h6>
														<div className={style.form_blk} >
															<input type="file" name="waivers_file" id="" className={style.input} onChange={handleChange} value={teamDetails.waivers_file} />
																
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
													<button type="submit" className={style.site_btn} onClick={handleTeamSubmit}>
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
