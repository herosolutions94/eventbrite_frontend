import React, {useState, useEffect} from "react"
import style from "@/styles/scss/app.module.scss"
import axios from "axios";

const NewTournamentForm = () => {
	const [tournamentData, setTournamentData] = useState<any>([])
	const [errors, setErrors] = useState<any>({})
	const [errorMessage, setErrorMessage] = useState("")
	const [fieldset, setFieldset] = useState("tournament_details")
	// const [tournamentDetails, setTournamentDetails] = useState({
	// 	title: "",
	// 	category_id: "",
	// 	type: "",
	// 	start_date: "",
	// 	end_date: "",
	// 	registration_dead_line: "",
	// 	event_type: "",
	// 	country_id: "",
	// 	city: "",
	// 	postal_code: "",
	// 	address: "",
	// 	number_of_teams: "",
	// 	format: "",
	// 	entry_fee: "",
	// 	prize_distribution: "",
	// 	level: "",
	// 	rules:"",
	// 	code_of_conduct:"",
	// 	age: "",
	// 	equipment_requirements: "",
	// 	schedule_date: "",
	// 	schedule_time: "",
	// 	schedule_breaks: "",
	// 	venue_availability: "",
	// 	second_match_date: "",
	// 	second_match_time: "",
	// 	second_match_breaks: "",
	// 	second_venue_availability: "",
	// 	third_match_date: "",
	// 	third_match_time: "",
	// 	third_match_breaks: "",
	// 	third_venue_availability: "",
	// 	fourth_match_date: "",
	// 	fourth_match_time: "",
	// 	fourth_match_breaks: "",
	// 	fourth_venue_availability: "",
	// 	contact_information: "",
	// 	roles_and_responsibilities: "",
	// 	sponsor_information: "",
	// 	logos: [] as any,
	// 	banners: [] as any,
	// })
	const [tournamentDetails, setTournamentDetails] = useState({
		title: "tournament title",
		category_id: "1",
		type: "1",
		start_date: "2021-09-01",
		end_date: "2021-09-01",
		registration_dead_line: "2021-09-01",
		event_type: "1",
		country_id: "1",
		city: "city",
		postal_code: "12345",
		address: "address",
		number_of_teams: "1",
		format: "1",
		entry_fee: "1",
		prize_distribution: "1",
		level: "1",
		rules:"rules",
		code_of_conduct:"code of conduct",
		age: "1",
		equipment_requirements: "equipment requirements",
		schedule_date: "2021-09-01",
		schedule_time: "2021-09-01",
		schedule_breaks: "1",
		venue_availability: "1",
		second_match_date: "2021-09-01",
		second_match_time: "2021-09-01",
		second_match_breaks: "1",
		second_venue_availability: "1",
		third_match_date: "2021-09-01",
		third_match_time: "2021-09-01",
		third_match_breaks: "1",
		third_venue_availability: "1",
		fourth_match_date: "2021-09-01",
		fourth_match_time: "2021-09-01",
		fourth_match_breaks: "1",
		fourth_venue_availability: "1",
		contact_information: "this is contact information",
		roles_and_responsibilities: "Referees",
		sponsor_information: "this is sponsor information",
		logos: [] as any,
		banners: [] as any,
	})
	useEffect(() => {
		fetchTournamentData()
	}, [])
	useEffect(() => {
		console.log(tournamentDetails)
	}, [tournamentDetails])
	
	const fetchTournamentData = async () => {
		try {
			const res = await axios.get(
				`${process.env.API_URL}/tournament-details`
			)
			if (res.status === 200) {
				setTournamentData(res.data)
			}
		} catch (err) {
			console.log(err)
		}
	}

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setTournamentDetails({ ...tournamentDetails, [name]: value })
	}

	const handleLogoFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// get and save the selected files
		const selectedFiles = event.target.files;
		if (selectedFiles) {
		  const fileList = Array.from(selectedFiles);
		  setTournamentDetails({ ...tournamentDetails, logos: fileList });
		}

	};
	  
	const handleBannerFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = event.target.files;
		if (selectedFiles) {
		  const fileList = Array.from(selectedFiles);
		  setTournamentDetails({ ...tournamentDetails, banners: fileList });
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		console.log(tournamentDetails)
		try {
			const res = await axios.put(process.env.API_URL + "/tournaments-create", tournamentDetails, {
				headers: {
					'Content-Type': 'multipart/form-data',
				}
			})
			if (res.status === 200) {
				alert('Record has been inserted successfully.')
			}	
		}
		catch (err) {
			if(axios.isAxiosError(err)) {
				if(err.response?.status === 422) {
					setErrorMessage('Please fill out all the fields');
					setErrors(err.response?.data.errors)

				} else if(err.response?.status === 401) {
					alert('You are not authorized to perform this action.')
				}
			}
		}
	}

	return (
		<>
			<form action="" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
				{/* {errors.address && (
					
					<div className="alert alert-danger">
						<p className="text-danger">this is for testing purpose</p>
						{errors.map((error: any) => (
							<p key={error} className="text-danger">{error}</p>
						))}
					</div>
				)} */}
				{errorMessage && (
					<div className="alert alert-danger">
						<p className="text-danger">{errorMessage}</p>
					</div>
				)}
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
											name="title"
											id="" 
											className={style.input} 
											placeholder="eg: Lorem ipsum dollar"
											onChange={handleChange} 
											value={tournamentDetails.title}
										/>
									</div>
									<p className="text-danger">{errors?.title}</p>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Category</h6>
									<div className={style.form_blk}>
										{tournamentData.categories &&
											<select name="category_id" id="" className={style.input} onChange={handleChange}>
												<option value="">Select Category</option>
												{tournamentData.categories.map((category : any) => {
													return (
														<option 
															value={category.id}
															selected={tournamentDetails.category_id == category.id}
														>{category.name}</option>
													)
												})}
											</select>
										}
										<p className="text-danger">{errors?.category_id}</p>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Type</h6>
									<div className={style.form_blk}>
										{tournamentData.tournamentTypes &&
											<select name="type" id="" className={style.input} onChange={handleChange}>
												<option value="">Select Type</option>
												{tournamentData.tournamentTypes.map((type : any) => {
													return (
														<option 
															value={type.id}
															selected={tournamentDetails.type == type.id}
														>{type.name}</option>
													)
												})}
											</select>
										}
										<p className="text-danger">{errors?.type}</p>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Start Date</h6>
									<div className={style.form_blk}>
										<input 
											type="text" 
											name="start_date" 
											id="" 
											className={style.input} 
											placeholder="eg: 04-12-2020" 
											onChange={handleChange} 
											value={tournamentDetails.start_date}
										/>
										<p className="text-danger">{errors?.start_date}</p>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament End Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="end_date" id="" className={style.input} placeholder="eg: 04-12-2020" 
											onChange={handleChange}
											value={tournamentDetails.start_date}
										/>
										<p className="text-danger">{errors?.end_date}</p>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Registration Deadline</h6>
									<div className={style.form_blk}>
										<input type="text" name="registration_dead_line" id="" className={style.input} placeholder="eg: 04-12-2020" 
											onChange={handleChange}
											value={tournamentDetails.registration_dead_line}	
										/>
										<p className="text-danger">{errors?.end_date}</p>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Event Type</h6>
									<div className={style.form_blk}>
										<select name="event_type" id="" className={style.input} onChange={handleChange}>
											<option value="">Select Type</option>
										
											{tournamentData.eventTyeps && tournamentData.eventTyeps.map((eventType : any) => {
												return (
													<option 
														value={eventType.id}
														selected={tournamentDetails.event_type == eventType.id}
													>{eventType.name}</option>
												)
											})}
										
										</select>
										<p className="text-danger">{errors?.event_type}</p>
									</div>
								</div>
								<div className="col-sm-5">
									<h6>Country</h6>
									<div className={style.form_blk}>
										<select name="country_id" id="" className={style.input} onChange={handleChange}>
											<option value="">Select Country</option>
											{tournamentData.countries && tournamentData.countries.map((country : any) => {
												return (
													<option 
														value={country.id}
														selected={tournamentDetails.country_id == country.id}
													>{country.name}</option>
												)
											})}
									
										</select>
										<p className="text-danger">{errors?.country_id}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>City</h6>
									<div className={style.form_blk}>
										<input type="text" name="city" id="city" className={style.input} placeholder="eg: California" 
											onChange={handleChange}
											value={tournamentDetails.city}
										/>
										<p className="text-danger">{errors?.city}</p>
									</div>
								</div>
								<div className="col-sm-3">
									<h6>Postal code</h6>
									<div className={style.form_blk}>
										<input type="text" name="postal_code" id="zip_code" className={style.input} placeholder="eg: BL0 0WY" 
											onChange={handleChange}
											value={tournamentDetails.postal_code}
										/>
										<p className="text-danger">{errors?.postal_code}</p>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Address</h6>
									<div className={style.form_blk}>
										<input type="text" name="address" id="address" className={style.input} placeholder="eg: 123 Main Street, California" 
											onChange={handleChange}
											value={tournamentDetails.address}
										 />
										 <p className="text-danger">{errors?.postal_code}</p>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Number of Teams</h6>
									<div className={style.form_blk}>
										<select name="number_of_teams" id="" className={style.input} onChange={handleChange}>
											<option value="">Select Number</option>
											{tournamentData.numberOfTeams && tournamentData.numberOfTeams.map((numberOfTeam : any) => {
												return (
													<option 
														value={numberOfTeam.id}
														selected={tournamentDetails.number_of_teams == numberOfTeam.id}
													>{numberOfTeam.number_of_teams}</option>
												)
											})}
									
										</select>
										<p className="text-danger">{errors?.number_of_teams}</p>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Tournament Format</h6>
									<div className={style.form_blk}>
										<select name="format" id="" className={style.input} onChange={handleChange}>
											<option value="">Select Format</option>
											{tournamentData.tournamentFormats && tournamentData.tournamentFormats.map((tournamentFormat : any) => {
												return (
													<option 
														value={tournamentFormat.id}
														selected={tournamentDetails.format == tournamentFormat.id}
													>{tournamentFormat.name}</option>
												)
											})}
										</select>
										<p className="text-danger">{errors?.format}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Entry Fee</h6>
									<div className={style.form_blk}>
										<input type="text" name="entry_fee" id="" className={style.input} placeholder="eg: 100" 
											onChange={handleChange} 
											value={tournamentDetails.entry_fee}
										/>
										<p className="text-danger">{errors?.entry_fee}</p>

									</div>
								</div>
								<div className="col-sm-4">
									<h6>Prize Distribution</h6>
									<div className={style.form_blk}>
										<input type="text" name="prize_distribution" id="" className={style.input} placeholder="eg: 100" 
											onChange={handleChange}
											value={tournamentDetails.prize_distribution}
										/>
										<p className="text-danger">{errors?.prize_distribution}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Tournament Level</h6>
									<div className={style.form_blk}>
										<select name="level" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											{tournamentData.tournamentLevels && tournamentData.tournamentLevels.map((tournamentLevel : any) => {
												return (
													<option 
														value={tournamentLevel.id}
														selected={tournamentDetails.level === tournamentLevel.id}
													>{tournamentLevel.level}</option>
												)
											})}
										</select>
										<p className="text-danger">{errors?.level}</p>
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
										<textarea name="rules" id="" rows={5} className={style.input} placeholder="Type something here" onChange={handleChange}>
											{tournamentDetails.rules}
										</textarea>
										<p className="text-danger">{errors?.rules}</p>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Code of Conduct</h6>
									<div className={style.form_blk}>
										<textarea name="code_of_conduct" id="" rows={5} className={style.input} placeholder="Type something here" onChange={handleChange}>
											{tournamentDetails.code_of_conduct}
										</textarea>
										<p className="text-danger">{errors?.code_of_conduct}</p>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Age or Skill Level Restrictions</h6>
									<div className={style.form_blk}>
										<input type="text" name="age" id="" className={style.input} placeholder="eg: 18" 
											onChange={handleChange}
											value={tournamentDetails.age}
											/>
										<p className="text-danger">{errors?.age}</p>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Equipment Requirements</h6>
									<div className={style.form_blk}>
										<input type="text" name="equipment_requirements" id="" className={style.input} placeholder="eg: Lorem, Ipsum, Smit" 
										onChange={handleChange}
										value={tournamentDetails.equipment_requirements}
										/>
										<p className="text-danger">{errors?.equipment_requirements}</p>
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
										<input type="text" name="schedule_date" id="" className={style.input} placeholder="eg: 04-12-2020"  
											onChange={handleChange}
											value={tournamentDetails.schedule_date}
										/>
										<p className="text-danger">{errors?.schedule_date}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="schedule_time" id="" className={style.input} placeholder="eg: 16:00" 
											onChange={handleChange} 
											value={tournamentDetails.schedule_time}
										/>
										<p className="text-danger">{errors?.schedule_time}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Breaks</h6>
									<div className={style.form_blk}>
										<select name="schedule_breaks" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											<option value="1" selected={tournamentDetails.schedule_breaks == '1'}
											>1</option>
											<option value="2" selected={tournamentDetails.schedule_breaks == '2'}>2</option>
											<option value="3" selected={tournamentDetails.schedule_breaks == '3'}>3</option>
											
										</select>
										<p className="text-danger">{errors?.schedule_breaks}</p>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk}>
										<input type="text" name="venue_availability" id="" className={style.input} placeholder="eg: 123 Main Street, California" onChange={handleChange} />
										<p className="text-danger">{errors?.venue_availability}</p>
									</div>
								</div>
							</div>
							<hr />
							<h6 className={style.text_prime}>02. Match</h6>
							<div className="row">
								<div className="col-sm-4">
									<h6>Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="second_match_date" id="" className={style.input} placeholder="eg: 04-12-2020" 
											onChange={handleChange}
											value={tournamentDetails.second_match_date}
											/>
										<p className="text-danger">{errors?.second_match_date}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="second_match_time" id="" className={style.input} placeholder="eg: 16:00" 
											onChange={handleChange}
											value={tournamentDetails.second_match_time}
										/>
										<p className="text-danger">{errors?.second_match_time}</p>

									</div>
								</div>
								<div className="col-sm-4">
									<h6>Breaks</h6>
									<div className={style.form_blk}>
										<select name="second_match_breaks" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											<option value="1" selected={tournamentDetails.second_match_breaks == '1'}>1</option>
											<option value="2" selected={tournamentDetails.second_match_breaks == '2'}>2</option>
										</select>
										<p className="text-danger">{errors?.second_match_breaks}</p>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk}>
										<input type="text" name="second_venue_availability"  id="" className={style.input} placeholder="eg: 123 Main Street, California" 
											onChange={handleChange}
											value={tournamentDetails.second_venue_availability}
										/>
										<p className="text-danger">{errors?.second_venue_availability}</p>
									</div>
								</div>
							</div>
							<hr />
							<h6 className={style.text_prime}>03. Match</h6>
							<div className="row">
								<div className="col-sm-4">
									<h6>Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="third_match_date" id="" className={style.input} placeholder="eg: 04-12-2020" 
										onChange={handleChange}
										value={tournamentDetails.third_match_date}
										/>
										<p className="text-danger">{errors?.third_match_date}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="third_match_time" id="" className={style.input} placeholder="eg: 16:00"
										 onChange={handleChange}
										 value={tournamentDetails.third_match_time}
										 />
										<p className="text-danger">{errors?.third_match_time}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Breaks</h6>
									<div className={style.form_blk}>
										<select name="third_match_breaks" id="" className={style.input} onChange={handleChange}>
											<option value="">Select</option>
											<option value="1" selected={tournamentDetails.third_match_breaks == '1'}>1</option>
											<option value="2" selected={tournamentDetails.third_match_breaks == '2'}>2</option>
										</select>
										<p className="text-danger">{errors?.third_match_breaks}</p>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk}>
										<input type="text" name="third_venue_availability" id="" className={style.input} placeholder="eg: 123 Main Street, California"
										onChange={handleChange}
										value={tournamentDetails.third_venue_availability}
										/>
										<p className="text-danger">{errors?.third_venue_availability}</p>
									</div>
								</div>
							</div>
							<hr />
							<h6 className={style.text_prime}>04. Match</h6>
							<div className="row">
								<div className="col-sm-4">
									<h6>Date</h6>
									<div className={style.form_blk}>
										<input type="text" name="fourth_match_date" id="" className={style.input} placeholder="eg: 04-12-2020"  
										onChange={handleChange}
										value={tournamentDetails.fourth_match_date}
										/>
										<p className="text-danger">{errors?.fourth_match_date}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="text" name="fourth_match_time" id="" className={style.input} placeholder="eg: 16:00"  
										onChange={handleChange}
										value={tournamentDetails.fourth_match_time}
										/>
										<p className="text-danger">{errors?.fourth_match_time}</p>
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
										<p className="text-danger">{errors?.fourth_match_breaks}</p>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Venue Availability</h6>
									<div className={style.form_blk} >
										<input type="text" name="fourth_venue_availability" id="" className={style.input} placeholder="eg: 123 Main Street, California"  
										onChange={handleChange} 
										value={tournamentDetails.fourth_venue_availability}
										/>
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
										<input type="text" name="contact_information" id="" className={style.input} placeholder="eg: 194349034234" 
										onChange={handleChange}
										value={tournamentDetails.contact_information}
										/>
									</div>
								</div>
								<div className="col-sm-6">
									<h6>Roles and Responsibilities</h6>
									<div className={style.form_blk}>
										<select name="roles_and_responsibilities" id="" className={style.input} onChange={handleChange}>
											<option value="Select">Select</option>
											<option value="Referees" selected={tournamentDetails.roles_and_responsibilities == 'Referees'}>Referees</option>
											<option value="Scorekeepers" selected={tournamentDetails.roles_and_responsibilities == 'Scorekeepers'}>Scorekeepers</option>
										</select>
										<p className="text-danger">{errors?.roles_and_responsibilities}</p>
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
										<textarea name="sponsor_information" id="" rows={5} className={style.input} placeholder="Type something here" 
											onChange={handleChange}
											value={tournamentDetails.sponsor_information}
										></textarea>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Upload Logos</h6>
									<div className={style.form_blk}>
										{/* <button type="button" name="" id="" className={style.input}>
											Upload Logos
										</button> */}
										<input 
											type="file" 
											name="logos[]" 
											id="" 
											className={style.input} 
											multiple 
											onChange={handleLogoFileChange}
										/>
										<p className="text-danger">{errors?.logos}</p>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Upload Banners</h6>
									<div className={style.form_blk}>
										{/* <button type="button" name="" id="" className={style.input}>
											Upload Banners
										</button> */}
										<input type="file" name="banners[]" id="" className={style.input} multiple onChange={handleBannerFileChange}/>
										<p className="text-danger">{errors?.banners}</p>
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
