import React, {useState, useEffect} from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import axios from "axios";
import Cookies from "js-cookie"
import {useRouter} from "next/router"
import { toast } from 'react-toastify';
import PaymentPage from '../paymentPage';
import ConfirmDeletionPopup from "./confirmDeletionPopup";

type teamMembers = {
	mem_name: string,
	mem_email: string,
	mem_phone: string,
	role: string,
	emergency_name: string,
	emergency_phone: string,
}
const AddTeamPopup = (props: any) => {
	const { popupClose,tournamentId,fetchData } = props
	
	const router = useRouter();
	const [fieldset, setFieldset] = useState("team_info")
	const [errors, setErrors] = useState<any>({})
	const [teamMembers, setTeamMembers] = useState<teamMembers[]>([])
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
		card_number: "",
		card_holder: "",
		card_month: "",
		card_year: "",
		cvc: "",
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
	// const [teams, setTeams] = useState({
	// 	mem_name: "Member Name",
	// 	mem_email: "member01@gmail.com",
	// 	mem_phone: "1234567890",
	// 	role: "captain",
	// 	emergency_name: "Emergency Name",
	// 	emergency_phone: "1234567890",
	// })
	// const [teamDetails, setTeamDetails] = useState({
	// 	team_name: "Team Abc",
	// 	affiliation: "1",
	// 	team_color: "Red",
	// 	skill: "php,laravel,react",
	// 	logo : "",
	// 	full_name: "Ammar",
	// 	email: "ammar@gmail.com",
	// 	phone: "1234567890",
	// 	payment_method: "1",
	// 	payment_prof: "",
	// 	waivers_email: "ammarwavier@gmail.com",
	// 	waivers_file: "",
	// 	card_number: "",
	// 	card_holder: "",
	// 	card_month: "",
	// 	card_year: "",
	// 	cvc: "",
	// 	teams: [
	// 		{
	// 			mem_name: "",
	// 			mem_email: "",
	// 			mem_phone: "",
	// 			role: "",
	// 			emergency_name: "",
	// 			emergency_phone: "",
	// 		},
	// 	],
	// })

	const addMoreTeams =(e: any) => {
		setTeamMembers([...teamMembers, teams])
		setTeams({
			mem_name: "",
			mem_email: "",
			mem_phone: "",
			role: "",
			emergency_name: "",
			emergency_phone: "",
		})
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
	const [logo, setLogo] = useState<any>(null)
	const [waiver, setWaiver] = useState<any>(null)
	const handleUploadLogo = async (e: any) => {
		setLogo(e.target.files[0])
	}
	const handleUploadWaiver = async (e: any) => {
		setWaiver(e.target.files[0])
	} 
	const handleTeamSubmit = async (e: any) => {
		e.preventDefault();
		formData.append('user_id', Cookies.get("user_id") as string)
		formData.append('tournament_id', tournamentId)
		formData.append('team_name', teamDetails.team_name)
		formData.append('affiliation', teamDetails.affiliation)
		formData.append('team_color', teamDetails.team_color)
		formData.append('skill', teamDetails.skill)
		formData.append('full_name', teamDetails.full_name)
		formData.append('email', teamDetails.email)
		formData.append('phone', teamDetails.phone)
		formData.append('payment_method', teamDetails.payment_method)
		formData.append('payment_prof', teamDetails.payment_prof)
		formData.append('waivers_email', teamDetails.waivers_email)
		formData.append('teams', JSON.stringify(teamDetails.teams))
		formData.append('card_number', teamDetails.card_number)
		formData.append('card_holder', teamDetails.card_holder)
		formData.append('card_month', teamDetails.card_month)
		formData.append('card_year', teamDetails.card_year)
		formData.append('cvc', teamDetails.cvc)
		formData.append('logo', logo)
		formData.append('waivers_file', waiver)	
		
		
		try {const res = await axios.post(process.env.API_URL + "/create-team", formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': 'Bearer ' + Cookies.get("token")
			},
		})
			if (res.status === 200) {
				toast.success('Record has been inserted successfully.')
				popupClose()
				router.push("/tournament-detail/" + tournamentId)
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
	const deleteMemberHandle = () => {
		setDeleteMember(!deleteMember);
	}
	const [deleteMember, setDeleteMember]=useState(false);

	const handleFieldSet = (fieldSet: string) => {
		if(fieldSet == 'captain_info'){
			const runTimeErrors = {
				team_name: "",
				affiliation: "",
				team_color: "",
				skill: "",
			}
			if(teamDetails.team_name == ""){
				runTimeErrors.team_name = "Please enter team name"
			}
			if(teamDetails.affiliation == ""){
				runTimeErrors.affiliation = "Please select affiliation"
			}
			if(teamDetails.team_color == ""){
				runTimeErrors.team_color = "Please enter team color"
			}
			if(teamDetails.skill == ""){
				runTimeErrors.skill = "Please enter skill"
			}
			if(runTimeErrors.team_name != "" || runTimeErrors.affiliation != "" || runTimeErrors.team_color != "" || runTimeErrors.skill != ""){
				setErrors(runTimeErrors)
				
				return false;
			}
			setFieldset(fieldSet)
		}else if(fieldSet == 'members_info'){
			const runTimeErrors = {
				full_name: "",
				email: "",
				phone: "",
			}
			if(teamDetails.full_name == ""){
				runTimeErrors.full_name = "Please enter full name"
			}
			if(teamDetails.email == ""){
				runTimeErrors.email = "Please enter email"
			}
			if(teamDetails.phone == ""){
				runTimeErrors.phone = "Please enter phone"
			}
			if(runTimeErrors.full_name != "" || runTimeErrors.email != "" || runTimeErrors.phone != ""){
				setErrors(runTimeErrors)
				
				return false;
			}
			setFieldset(fieldSet)
		}else if(fieldSet == 'fee_info'){
			// do nothing
		}else{
			// do nothing
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
															<p className="text-danger">{errors?.team_name}</p>
														</div>
													</div>
													<div className="col-sm-6">
														<h6>Affiliation</h6>
														<div className={style.form_blk}>
															<select name="affiliation" id="" className={style.input} onChange={handleChange} value={teamDetails.affiliation}>
																<option value="">Select</option>
																<option value="1">School</option>
																<option value="2">Sports Club</option>
																<option value="3">Companies</option>
																<option value="4">Community Sports Team</option>
															</select>
															<p className="text-danger">{errors?.affiliation}</p>
														</div>
													</div>
													<div className="col-sm-6">
														<h6>Team Logo</h6>
														<div className={style.form_blk}>
															<input 
																type="file" 
																name="logo" 
																id="" 
																className={style.input} 
																onChange={handleUploadLogo} 
															/>
															
														</div>
													</div>
													<div className="col-sm-6">
														<h6>Team Colors</h6>
														<div className={style.form_blk}>
															<input type="text" name="team_color" id="" className={style.input} placeholder="eg: Yellow & Black"  onChange={handleChange} value={teamDetails.team_color} />
															<p className="text-danger">{errors?.team_color}</p>
														</div>
													</div>
													<div className="col-sm-6">
														<h6 className="require">Skill Level/Category</h6>
														<div className={style.form_blk}>
															<input type="text" name="skill" id="" className={style.input} placeholder="eg: Dutch Eredivisie" onChange={handleChange} value={teamDetails.skill} />
															<p className="text-danger">{errors?.skill}</p>
														</div>
													</div>
												</div>
												<div className={`${style.btn_blk} justify-content-center mt-5`}>
													<button type="button" className={style.site_btn} onClick={() => handleFieldSet('captain_info')}>
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
															<p className="text-danger">{errors?.full_name}</p>
														</div>
													</div>
													<div className="col-sm-4">
														<h6 className="require">Email Address</h6>
														<div className={style.form_blk}>
															<input type="text" name="email" id="email" className={style.input} placeholder="eg: sample@gmail.com" value={teamDetails.email} onChange={handleChange} />
															<p className="text-danger">{errors?.email}</p>
														</div>
													</div>
													<div className="col-sm-4">
														<h6 className="require">Phone Number</h6>
														<div className={style.form_blk}>
															<input type="text" name="phone" id="phone" className={style.input} placeholder="eg: 194349034234" value={teamDetails.phone} onChange={handleChange} />
															<p className="text-danger">{errors?.phone}</p>
														</div>
													</div>
												</div>
												<div className={`${style.btn_blk} justify-content-center mt-5`}>
													<button type="button" className={`${style.site_btn} ${style.simple}`} onClick={() => setFieldset("team_info")}>
														Back
													</button>
													<button type="button" className={style.site_btn} onClick={() => handleFieldSet("members_info")}>
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
																		<td><button type="button" className={style.text_prime} onClick={deleteMemberHandle}>Delete</button></td>
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
													<div className="col-sm-12">
														<div className="col-sm-6">
															<h6>Upload Payment Proof</h6>
															<div className={style.form_blk}>
																<input 
																	type="file" 
																	name="logo" 
																	id="" 
																	className={style.input} 
																	onChange={handleUploadLogo} 
																/>
																
															</div>
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
															<input type="text" name="waivers_email" id="email" className={style.input} placeholder="eg: sample@gmail.com" value={teamDetails.waivers_email} onChange={handleChange} />
															<p className="text-danger">{errors?.waivers_email}</p>
														</div>
													</div>
													<div className="col-sm-6">
														<h6>File Upload</h6>
													
														<div className={style.form_blk}>
															<input 
																type="file" 
																name="waivers_file" 
																id="" 
																className={style.input} 
																onChange={handleUploadWaiver} 
															/>
															
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
			{
				deleteMember? <ConfirmDeletionPopup popupClose={deleteMemberHandle}/>:null
			}
		</>
	)
}

export default AddTeamPopup
