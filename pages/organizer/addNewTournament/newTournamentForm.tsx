import React, {useState, useEffect} from "react"
import style from "@/styles/scss/app.module.scss"
import axios from "axios";

const NewTournamentForm = () => {
	const [tournamentData, setTournamentData] = useState<any>({})
	useEffect(() => {
		fetchTournamentData()
	}, [])
	useEffect(() => {
		console.log(tournamentData.tournamentTypes);
	}, [tournamentData])
	
	const fetchTournamentData = async () => {
		try {
			const res = await axios.get(
				`${process.env.API_URL}/tournament-details`
			)
			if (res.status === 200) {
				console.log(res.data)
				setTournamentData(res.data)
			}
		} catch (err) {
			console.log(err)
		}
	}
	const [fieldset, setFieldset] = useState("tournament_details")
	const [tournamentDetails, setTournamentDetails] = useState({
		tournamentName: "",
		tournamentCategory: "",
		tournamentType: "",
		tournamentStartDate: "",
		tournamentEndDate: "",
		registrationDeadline: "",
		eventType: "",
		country: "",
		city: "",
		postalCode: "",
		address: "",
		numberOfTeams: "",
		tournamentFormat: "",
		entryFee: "",
		prizeDistribution: "",
		tournamentLevel: "",
		rules:"",
		code_of_conduct:"",
		age: "",
		equipment_requirements: "",
		schedule_date: "",
		schedule_time: "",
		schedule_breaks: "",
		venue_availability: "",
		second_match_date: "",
		second_match_time: "",
		second_match_breaks: "",
		second_venue_availability: "",
		third_match_date: "",
		third_match_time: "",
		third_match_breaks: "",
		third_venue_availability: "",
		fourth_match_date: "",
		fourth_match_time: "",
		fourth_match_breaks: "",
		fourth_venue_availability: "",
		contact_information: "",
		roles_and_responsibilities: "",
		sponsor_information: "",
	})

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setTournamentDetails({ ...tournamentDetails, [name]: value })
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		console.log(tournamentDetails)
	}

	return (
		<>
			<form action="" method="post" onSubmit={handleSubmit}>
				{fieldset === "tournament_details" ? (
					<>
						<fieldset className={style.blk}>
							<h5 className="mb-5">Tournament Details</h5>
							<div className="row">
								<div className="col-sm-12">
									<h6>Tournament Name</h6>
									<div className={style.form_blk}>
										<input 
											type="text" 
											name="tournamentName"
											id="" 
											className={style.input} 
											placeholder="eg: Lorem ipsum dollar"
											onChange={handleChange} 
										/>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Category</h6>
									<div className={style.form_blk}>
										{tournamentData.categories &&
											<select name="tournamentCategory" id="" className={style.input} onChange={handleChange}>
												{tournamentData.categories.map((category : any) => {
													return (
															<option value={category.id}>{category.name}</option>
													)
												})}
											</select>
										}
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Type</h6>
									<div className={style.form_blk}>
										{tournamentData.tournamentTypes &&
											<select name="tournamentType" id="" className={style.input} onChange={handleChange}>
											
												{tournamentData.tournamentTypes.map((type : any) => {
													return (
														<option value={type.id}>{type.name}</option>
													)
												})}
											</select>
										}
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Start Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="tournamentStartDate" id="" className={style.input} placeholder="eg: 04-12-2020" onChange={handleChange} />
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament End Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="tournamentEndDate" id="" className={style.input} placeholder="eg: 04-12-2020" onChange={handleChange} />
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Registration Deadline</h6>
									<div className={style.form_blk}>
										<input type="text" name="registrationDeadline" id="" className={style.input} placeholder="eg: 04-12-2020" onChange={handleChange} />
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Event Type</h6>
									<div className={style.form_blk}>
										<select name="eventType" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
										
											{tournamentData.eventTyeps && tournamentData.eventTyeps.map((eventType : any) => {
												return (
													<option value={eventType.id}>{eventType.name}</option>
												)
											})}
										
										</select>
									</div>
								</div>
								<div className="col-sm-5">
									<h6>Country</h6>
									<div className={style.form_blk}>
										<select name="country" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											{tournamentData.countries && tournamentData.countries.map((country : any) => {
												return (
													<option value={country.id}>{country.name}</option>
												)
											})}
									
										</select>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>City</h6>
									<div className={style.form_blk}>
										<input type="text" name="city" id="city" className={style.input} placeholder="eg: California" onChange={handleChange}/>
									</div>
								</div>
								<div className="col-sm-3">
									<h6>Postal code</h6>
									<div className={style.form_blk}>
										<input type="text" name="postalCode" id="zip_code" className={style.input} placeholder="eg: BL0 0WY" onChange={handleChange}/>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Address</h6>
									<div className={style.form_blk}>
										<input type="text" name="address" id="address" className={style.input} placeholder="eg: 123 Main Street, California" onChange={handleChange} />
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Number of Teams</h6>
									<div className={style.form_blk}>
										<select name="numberOfTeams" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											{tournamentData.numberOfTeams && tournamentData.numberOfTeams.map((numberOfTeam : any) => {
												return (
													<option value={numberOfTeam.id}>{numberOfTeam.number_of_teams}</option>
												)
											})}
									
										</select>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Format</h6>
									<div className={style.form_blk}>
										<select name="tournamentFormat" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											{tournamentData.tournamentFormats && tournamentData.tournamentFormats.map((tournamentFormat : any) => {
												return (
													<option value={tournamentFormat.id}>{tournamentFormat.name}</option>
												)
											})}
										</select>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Entry Fee</h6>
									<div className={style.form_blk}>
										<input type="text" name="entryFee" id="" className={style.input} placeholder="eg: 100" onChange={handleChange} />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Prize Distribution</h6>
									<div className={style.form_blk}>
										<input type="text" name="prizeDistribution" id="" className={style.input} placeholder="eg: 100" onChange={handleChange}/>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Tournament Level</h6>
									<div className={style.form_blk}>
										<select name="tournamentLevel" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											{tournamentData.tournamentLevels && tournamentData.tournamentLevels.map((tournamentLevel : any) => {
												return (
													<option value={tournamentLevel.id}>{tournamentLevel.name}</option>
												)
											})}
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
										<textarea name="rules" id="" rows={5} className={style.input} placeholder="Type something here" onChange={handleChange}></textarea>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Code of Conduct</h6>
									<div className={style.form_blk}>
										<textarea name="code_of_conduct" id="" rows={5} className={style.input} placeholder="Type something here" onChange={handleChange}></textarea>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Age or Skill Level Restrictions</h6>
									<div className={style.form_blk}>
										<input type="text" name="age" id="" className={style.input} placeholder="eg: 18" onChange={handleChange}/>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Equipment Requirements</h6>
									<div className={style.form_blk}>
										<input type="text" name="equipment_requirements" id="" className={style.input} placeholder="eg: Lorem, Ipsum, Smit" onChange={handleChange}/>
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
										<input type="text" name="schedule_date" id="" className={style.input} placeholder="eg: 04-12-2020"  onChange={handleChange} />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="schedule_time" id="" className={style.input} placeholder="eg: 16:00" onChange={handleChange} />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Breaks</h6>
									<div className={style.form_blk}>
										<select name="schedule_breaks" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											
										</select>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk}>
										<input type="text" name="venue_availability" id="" className={style.input} placeholder="eg: 123 Main Street, California" onChange={handleChange} />
									</div>
								</div>
							</div>
							<hr />
							<h6 className={style.text_prime}>02. Match</h6>
							<div className="row">
								<div className="col-sm-4">
									<h6>Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="second_match_date" id="" className={style.input} placeholder="eg: 04-12-2020" onChange={handleChange} />
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="second_match_time" id="" className={style.input} placeholder="eg: 16:00" onChange={handleChange}/>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Breaks</h6>
									<div className={style.form_blk}>
										<select name="second_match_breaks" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											<option value="">1</option>
											<option value="">2</option>
										</select>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk}>
										<input type="text" name="second_match_venue_availability"  id="" className={style.input} placeholder="eg: 123 Main Street, California" onChange={handleChange}/>
									</div>
								</div>
							</div>
							<hr />
							<h6 className={style.text_prime}>03. Match</h6>
							<div className="row">
								<div className="col-sm-4">
									<h6>Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="third_match_date" id="" className={style.input} placeholder="eg: 04-12-2020" onChange={handleChange}/>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="third_match_time" id="" className={style.input} placeholder="eg: 16:00" onChange={handleChange}/>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Breaks</h6>
									<div className={style.form_blk}>
										<select name="third_match_breaks" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											<option value="">1</option>
											<option value="">2</option>
										</select>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk}>
										<input type="text" name="third_venue_availability" id="" className={style.input} placeholder="eg: 123 Main Street, California" onChange={handleChange}/>
									</div>
								</div>
							</div>
							<hr />
							<h6 className={style.text_prime}>04. Match</h6>
							<div className="row">
								<div className="col-sm-4">
									<h6>Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="fourth_match_date" id="" className={style.input} placeholder="eg: 04-12-2020"  onChange={handleChange}/>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="fourth_match_time" id="" className={style.input} placeholder="eg: 16:00"  onChange={handleChange}/>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Breaks</h6>
									<div className={style.form_blk}>
										<select name="fourth_match_breaks" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											<option value="">1</option>
											<option value="">2</option>
										</select>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk} >
										<input type="text" name="fourth_venue_availability" id="" className={style.input} placeholder="eg: 123 Main Street, California"  onChange={handleChange} />
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
										<input type="text" name="contact_information" id="" className={style.input} placeholder="eg: 194349034234" onChange={handleChange}/>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Roles and Responsibilities</h6>
									<div className={style.form_blk}>
										<select name="roles_and_responsibilities" id="" className={style.input} onChange={handleChange}>
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
										<textarea name="sponsor_information" id="" rows={5} className={style.input} placeholder="Type something here" onChange={handleChange}></textarea>
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
