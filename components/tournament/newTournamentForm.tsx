import React, { useState, useEffect, useMemo } from "react"
import style from "@/styles/scss/app.module.scss"
import axios from "axios";
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { toast } from 'react-toastify';
// import CKeditor from "@/components/ckEditor";
import { CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe('pk_test_51Moz1CFV8hMVqQzQH96smahOCpKUnMix9OMtfhQe3YjnaL4kpLa6An91ycTRcs26A7hZwgr0HelG4ElEdYBAEwbb00MpdTNJhb');


const useOptions = () => {
	const options = useMemo(
		() => ({
			style: {
				base: {
					display: "block",
					width: "100%",
					height: "2rem",
					fontSize: "0.875",
					fontFamily: "'Poppins', sans-serif",
					fontWeight: "400",
					color: "rgba(255, 255, 255, 0.8)",
					background: "#fff",
					textAlign: "left",
					padding: "0.6rem 1.4rem",
					"::placeholder": {
						color: "rgba(255, 255, 255, 0.4)",
						fontSize: "0.875",
					},
				},
				invalid: {
					color: "#e71939",
				},
			},
		}),
		[]
	)

	return options
}
const NewTournamentForm = () => {
	const options = useOptions()
	const stripe = useStripe()
	const elements = useElements()

	const router = useRouter()
	const [tournamentData, setTournamentData] = useState<any>([])
	const [errors, setErrors] = useState<any>({})
	const [errorMessage, setErrorMessage] = useState("")
	const [fieldset, setFieldset] = useState("tournament_details")
	const logos = useState<any>([])
	const banners = useState<any>([])
	const formData = new FormData();
	const [overview, setOverview] = useState<string>("");
	const [rules, setRules] = useState<string>("");
	const [codeOfConduct, setCodeOfConduct] = useState<string>("");
	const [sponsorInformation, setSponsorInformation] = useState<string>("");
	const [cardError, setCardError] = useState("")
	const [tournamentId, setTournamentId] = useState("")
	const [numberOfTeams, setNumberOfTeams] = useState(0);
	const [tournamentDetails, setTournamentDetails] = useState({
		title: "",
		category_id: "",
		type: "",
		start_date: "",
		end_date: "",
		registration_dead_line: "",
		event_type: "",
		country_id: "",
		city: "",
		postal_code: "",
		address: "",
		number_of_teams: "",
		format: "",
		entry_fee: "",
		prize_distribution: "",
		level: "",
		overview: "",
		rules: "",
		code_of_conduct: "",
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
		logos: [] as any,
		banners: [] as any,
	})
	useEffect(() => {
		fetchTournamentData()
	}, [])


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
	const handleNumberOfTeamsChange = (e: any) => {
		const Number = tournamentData.numberOfTeams.find(
			(item: any) => item.id == e.target.value
		)
		setNumberOfTeams(Number.number_of_teams)
	}


	const handleChange = (e: any) => {
		const { name, value } = e.target
		setTournamentDetails({ ...tournamentDetails, [name]: value })
	}

	const handleUploadMultipleLogo = async (e: any) => {
		for (let i = 0; i < e.target.files.length; i++) {
			formData.append('logos[]', e.target.files[i])
		}
	}
	const handleUploadMultipleBanners = async (e: any) => {
		for (let i = 0; i < e.target.files.length; i++) {
			formData.append('banners[]', e.target.files[i])
		}
	}

	const chargePayment = async (clientSecret: any, paymentMethodReq: any, setup_id: any, paymentMethodSetup: any, customer_id: any, tournamentId: any) => {
		const result = await stripe!.confirmCardPayment(clientSecret, {
			payment_method: paymentMethodSetup,
			setup_future_usage: 'off_session'
		});
		// console.log(result);
		if (result.error) {
			toast.error(result.error.message)
			deleteTouranment(tournamentId)
			return;
		} else if (result.paymentIntent?.status === "succeeded") {
			toast.success('Record has been inserted successfully.')
			updatePaymentStatus(tournamentId)
			router.push("/organizer/tournaments")
		}
	}
	const updatePaymentStatus = async (tournamentId: any) => {
		try {
			if (tournamentId) {
				const res = await axios.put(
					`${process.env.API_URL}/update-tournament-payment-status/${tournamentId}`,
					{
						payment_status: "1",
					}
				)
			}
		} catch (err) {
			console.log(err)
		}
	}
	const deleteTouranment = async (tournamentId: any) => {
		try {
			if (tournamentId) {
				const res = await axios.delete(
					`${process.env.API_URL}/tournaments/${tournamentId}`
				)
			}

		} catch (err) {
			console.log(err)
		}
	}

	const submitTournament = async (tournamentId: any) => {
		if (!stripe || !elements) {
			return;
		}
		const cardElement = elements.getElement(CardNumberElement);
		if (!cardElement) {
			alert("Something Went Wrong! Please Try Again Later");
			return;
		}
		try {
			const paymentMethodReq = await stripe.createPaymentMethod({
				type: "card",
				card: cardElement,
			});
			if (paymentMethodReq.error) {

				toast.error(paymentMethodReq.error.message)
				deleteTouranment(tournamentId)
			} else {
				const amount = tournamentData.tournament_fee * numberOfTeams;
				var payment_form_data = new FormData();
				payment_form_data.append('payment_token', paymentMethodReq.paymentMethod?.id as string);
				payment_form_data.append('user_id', Cookies.get('user_id') as string);
				payment_form_data.append('amount', amount as any);
				await axios.post(process.env.API_URL + "/create-indent-payment", payment_form_data).then((data: any) => {

					let client_secret = data.data.data.arr.client_secret;
					let client_secret_setup = data.data.data.arr.setup_client_secret;
					if (data.data.data.status === 1) {
						let card_result = stripe.confirmCardSetup(client_secret_setup, {
							payment_method: {
								card: cardElement,
							},
						});
						card_result.then(response => {
							if (response.error) {
								toast.error(response.error.message)
								deleteTouranment(tournamentId)
							}
							else {
								let paymentMethod = response.setupIntent.payment_method;
								let setup_intent_id = response.setupIntent.id;
								chargePayment(client_secret, paymentMethodReq, setup_intent_id, paymentMethod, data.data.data.arr.customer, tournamentId);
							}
						})
					}
				})
			}
		} catch (err) {
			toast.error("Something Went Wrong! Please Try Again Later")
		}

	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		formData.append('user_id', Cookies.get("user_id") as string)
		formData.append('title', tournamentDetails.title);
		formData.append('category_id', tournamentDetails.category_id);
		formData.append('type', tournamentDetails.type);
		formData.append('start_date', tournamentDetails.start_date);
		formData.append('end_date', tournamentDetails.end_date);
		formData.append('registration_dead_line', tournamentDetails.registration_dead_line);
		formData.append('event_type', tournamentDetails.event_type);
		formData.append('country_id', tournamentDetails.country_id);
		formData.append('city', tournamentDetails.city);
		formData.append('postal_code', tournamentDetails.postal_code);
		formData.append('address', tournamentDetails.address);
		formData.append('number_of_teams', tournamentDetails.number_of_teams);
		formData.append('format', tournamentDetails.format);
		formData.append('entry_fee', tournamentDetails.entry_fee);
		formData.append('prize_distribution', tournamentDetails.prize_distribution);
		formData.append('level', tournamentDetails.level);
		formData.append('overview', tournamentDetails.overview);
		formData.append('rules', tournamentDetails.rules);
		formData.append('code_of_conduct', tournamentDetails.code_of_conduct);
		formData.append('sponsor_information', tournamentDetails.sponsor_information);
		// formData.append('overview', overview);
		// formData.append('rules', rules);
		// formData.append('code_of_conduct', codeOfConduct);
		// formData.append('sponsor_information',sponsorInformation);
		formData.append('age', tournamentDetails.age);
		formData.append('equipment_requirements', tournamentDetails.equipment_requirements);
		formData.append('schedule_date', tournamentDetails.schedule_date);
		formData.append('schedule_time', tournamentDetails.schedule_time);
		formData.append('schedule_breaks', tournamentDetails.schedule_breaks);
		formData.append('venue_availability', tournamentDetails.venue_availability);
		formData.append('second_match_date', tournamentDetails.second_match_date);
		formData.append('second_match_time', tournamentDetails.second_match_time);
		formData.append('second_match_breaks', tournamentDetails.second_match_breaks);
		formData.append('second_venue_availability', tournamentDetails.second_venue_availability);
		formData.append('third_match_date', tournamentDetails.third_match_date);
		formData.append('third_match_time', tournamentDetails.third_match_time);
		formData.append('third_match_breaks', tournamentDetails.third_match_breaks);
		formData.append('third_venue_availability', tournamentDetails.third_venue_availability);
		formData.append('fourth_match_date', tournamentDetails.fourth_match_date);
		formData.append('fourth_match_time', tournamentDetails.fourth_match_time);
		formData.append('fourth_match_breaks', tournamentDetails.fourth_match_breaks);
		formData.append('fourth_venue_availability', tournamentDetails.fourth_venue_availability);
		formData.append('contact_information', tournamentDetails.contact_information);
		formData.append('roles_and_responsibilities', tournamentDetails.roles_and_responsibilities);



		try {
			const res = await axios.post(process.env.API_URL + "/tournaments-create", formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					'Authorization': `Bearer ${Cookies.get('token')}`
				},
			})
			if (res.status === 200) {
				setTournamentId(res.data.tournament_id)
				submitTournament(res.data.tournament_id);
			}
		}
		catch (err) {
			if (axios.isAxiosError(err)) {
				if (err.response?.status === 422) {
					toast.error('Please fill out all the fields')
					setErrorMessage('Please fill out all the fields');
					setErrors(err.response?.data.errors)

				} else if (err.response?.status === 401) {
					toast.error('You are not authorized to perform this action.')
				}
			}
		}
	}
	const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

	useEffect(() => {
		setEditorLoaded(true);
	}, []);



	const handleFieldSet = (fieldSet: string) => {
		if (fieldSet == 'tournament_rules') {
			const runTimeErrors = {
				title: '',
				category_id: '',
				type: '',
				start_date: '',
				end_date: '',
				registration_dead_line: '',
				event_type: '',
				country_id: '',
				city: '',
				postal_code: '',
				address: '',
				number_of_teams: '',
				format: '',
				entry_fee: '',
				prize_distribution: '',
				level: '',
			}
			if (tournamentDetails.title == '') {
				runTimeErrors.title = 'title is required'
			}
			if (tournamentDetails.category_id == '') {
				runTimeErrors.category_id = 'category is required'
			}
			if (tournamentDetails.type == '') {
				runTimeErrors.type = 'type is required'
			}
			if (tournamentDetails.start_date == '') {
				runTimeErrors.start_date = 'start date is required'
			}
			if (tournamentDetails.end_date == '') {
				runTimeErrors.end_date = 'end date is required'
			}
			if (tournamentDetails.registration_dead_line == '') {
				runTimeErrors.registration_dead_line = 'registration deadline is required'
			}
			if (tournamentDetails.event_type == '') {
				runTimeErrors.event_type = 'event type is required'
			}
			if (tournamentDetails.country_id == '') {
				runTimeErrors.country_id = 'country is required'
			}
			if (tournamentDetails.city == '') {
				runTimeErrors.city = 'city is required'
			}
			if (tournamentDetails.postal_code == '') {
				runTimeErrors.postal_code = 'postal code is required'
			}
			if (tournamentDetails.address == '') {
				runTimeErrors.address = 'address is required'
			}
			if (tournamentDetails.number_of_teams == '') {
				runTimeErrors.number_of_teams = 'number of teams is required'
			}
			if (tournamentDetails.format == '') {
				runTimeErrors.format = 'format is required'
			}
			if (tournamentDetails.entry_fee == '') {
				runTimeErrors.entry_fee = 'entry fee is required'
			}
			if (tournamentDetails.prize_distribution == '') {
				runTimeErrors.prize_distribution = 'prize distribution is required'
			}
			if (tournamentDetails.level == '') {
				runTimeErrors.level = 'level is required'
			}
			if (runTimeErrors.title != '' || runTimeErrors.category_id != '' || runTimeErrors.type != '' || runTimeErrors.start_date != '' || runTimeErrors.end_date != '' || runTimeErrors.registration_dead_line != '' || runTimeErrors.event_type != '' || runTimeErrors.country_id != '' || runTimeErrors.city != '' || runTimeErrors.postal_code != '' || runTimeErrors.address != '' || runTimeErrors.number_of_teams != '' || runTimeErrors.format != '' || runTimeErrors.entry_fee != '' || runTimeErrors.prize_distribution != '' || runTimeErrors.level != '') {
				setErrorMessage('Please fill out all the fields');
				setErrors(runTimeErrors)
			} else {
				setFieldset(fieldSet)
				setErrorMessage('')
			}
		} else if (fieldSet == 'tournament_schedule') {
			const runTimeErrors = {
				overview: '',
				rules: '',
				code_of_conduct: '',
				sponsor_information: '',
			}
			if (tournamentDetails.overview == '') {
				runTimeErrors.overview = 'overview is required'
			}
			if (tournamentDetails.rules == '') {
				runTimeErrors.rules = 'rules is required'
			}
			if (tournamentDetails.code_of_conduct == '') {
				runTimeErrors.code_of_conduct = 'code of conduct is required'
			}
			if (runTimeErrors.overview != '' || runTimeErrors.rules != '' || runTimeErrors.code_of_conduct != '') {
				setErrorMessage('Please fill out all the fields');
				setErrors(runTimeErrors)
			} else {
				setFieldset(fieldSet)
				setErrorMessage('')
			}
		} else if (fieldSet == 'tournament_staff') {
			const runTimeErrors = {
				age: '',
				equipment_requirements: '',
				schedule_date: '',
				schedule_time: '',
				schedule_breaks: '',
				venue_availability: '',
				second_match_date: '',
				second_match_time: '',
				second_match_breaks: '',
				second_venue_availability: '',
				third_match_date: '',
				third_match_time: '',
				third_match_breaks: '',
				third_venue_availability: '',
				fourth_match_date: '',
				fourth_match_time: '',
				fourth_match_breaks: '',
				fourth_venue_availability: '',
			}
			if (tournamentDetails.age == '') {
				runTimeErrors.age = 'age is required'
			}
			if (tournamentDetails.equipment_requirements == '') {
				runTimeErrors.equipment_requirements = 'equipment requirements is required'
			}
			if (tournamentDetails.schedule_date == '') {
				runTimeErrors.schedule_date = 'schedule date is required'
			}
			if (tournamentDetails.schedule_time == '') {
				runTimeErrors.schedule_time = 'schedule time is required'
			}
			if (tournamentDetails.schedule_breaks == '') {
				runTimeErrors.schedule_breaks = 'schedule breaks is required'
			}
			if (tournamentDetails.venue_availability == '') {
				runTimeErrors.venue_availability = 'venue availability is required'
			}
			if (tournamentDetails.second_match_date == '') {
				runTimeErrors.second_match_date = 'second match date is required'
			}
			if (tournamentDetails.second_match_time == '') {
				runTimeErrors.second_match_time = 'second match time is required'
			}
			if (tournamentDetails.second_match_breaks == '') {
				runTimeErrors.second_match_breaks = 'second match breaks is required'
			}
			if (tournamentDetails.second_venue_availability == '') {
				runTimeErrors.second_venue_availability = 'second venue availability is required'
			}
			if (tournamentDetails.third_match_date == '') {
				runTimeErrors.third_match_date = 'third match date is required'
			}
			if (tournamentDetails.third_match_time == '') {
				runTimeErrors.third_match_time = 'third match time is required'
			}
			if (tournamentDetails.third_match_breaks == '') {
				runTimeErrors.third_match_breaks = 'third match breaks is required'
			}
			if (tournamentDetails.third_venue_availability == '') {
				runTimeErrors.third_venue_availability = 'third venue availability is required'
			}
			if (tournamentDetails.fourth_match_date == '') {
				runTimeErrors.fourth_match_date = 'fourth match date is required'
			}
			if (tournamentDetails.fourth_match_time == '') {
				runTimeErrors.fourth_match_time = 'fourth match time is required'
			}
			// if(tournamentDetails.fourth_match_breaks == ''){
			// 	runTimeErrors.fourth_match_breaks = 'fourth match breaks is required'
			// }
			if (tournamentDetails.fourth_venue_availability == '') {
				runTimeErrors.fourth_venue_availability = 'fourth venue availability is required'
			}
			if (runTimeErrors.age != '' || runTimeErrors.equipment_requirements != '' || runTimeErrors.schedule_date != '' || runTimeErrors.schedule_time != '' || runTimeErrors.schedule_breaks != '' || runTimeErrors.venue_availability != '' || runTimeErrors.second_match_date != '' || runTimeErrors.second_match_time != '' || runTimeErrors.second_match_breaks != '' || runTimeErrors.second_venue_availability != '' || runTimeErrors.third_match_date != '' || runTimeErrors.third_match_time != '' || runTimeErrors.third_match_breaks != '' || runTimeErrors.third_venue_availability != '' || runTimeErrors.fourth_match_date != '' || runTimeErrors.fourth_match_time != '' || runTimeErrors.fourth_venue_availability != '') {
				setErrorMessage('Please fill out all the fields');
				setErrors(runTimeErrors)
			} else {
				setFieldset(fieldSet)
				setErrorMessage('')
			}
		} else if (fieldSet == 'tournament_sponsorship') {
			const runTimeErrors = {
				contact_information: '',
				roles_and_responsibilities: '',
			}
			if (tournamentDetails.contact_information == '') {
				runTimeErrors.contact_information = 'contact information is required'
			}
			if (tournamentDetails.roles_and_responsibilities == '') {
				runTimeErrors.roles_and_responsibilities = 'roles and responsibilities is required'
			}
			if (runTimeErrors.contact_information != '' || runTimeErrors.roles_and_responsibilities != '') {
				setErrorMessage('Please fill out all the fields');
				setErrors(runTimeErrors)
			} else {
				setFieldset(fieldSet)
				setErrorMessage('')
			}
		}
		// else if(fieldSet == 'tournament_staff'){
		// 	const runTimeErrors = {
		// 		schedule_date : '',
		// 		schedule_time : '',
		// 		schedule_breaks : '',
		// 		venue_availability : '',
		// 	}
		// 	if(tournamentDetails.schedule_date == ''){
		// 		runTimeErrors.schedule_date = 'schedule date is required'
		// 	}
		// 	if(tournamentDetails.schedule_time == ''){
		// 		runTimeErrors.schedule_time = 'schedule time is required'
		// 	}else{
		// 		// time should be like 16:00 
		// 		const time = tournamentDetails.schedule_time.split(':') as any;
		// 		if(time[0] > 24 || time[1] > 60){
		// 			runTimeErrors.schedule_time = 'schedule time is invalid'
		// 		}
		// 	}
		// 	if(tournamentDetails.schedule_breaks == ''){
		// 		runTimeErrors.schedule_breaks = 'schedule breaks is required'
		// 	}
		// 	if(tournamentDetails.venue_availability == ''){
		// 		runTimeErrors.venue_availability = 'venue availability is required'
		// 	}
		// 	if(runTimeErrors.schedule_date != '' || runTimeErrors.schedule_time != '' || runTimeErrors.schedule_breaks != '' || runTimeErrors.venue_availability != ''){
		// 		setErrorMessage('Please fill out all the fields');
		// 		setErrors(runTimeErrors)
		// 	}else{
		// 		setFieldset(fieldSet)
		// 		setErrorMessage('')
		// 	}

		// }
		else {
			setFieldset(fieldSet)
			setErrorMessage('')
		}
		// setFieldset(fieldSet)
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
												{tournamentData.categories.map((category: any) => {
													return (
														<option
															value={category.id}
															selected={tournamentDetails.category_id == category.id}
															key={category.id}
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
												{tournamentData.tournamentTypes.map((type: any) => {
													return (
														<option
															value={type.id}
															selected={tournamentDetails.type == type.id}
															key={type.id}
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
											value={tournamentDetails.end_date}
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

											{tournamentData.eventTyeps && tournamentData.eventTyeps.map((eventType: any) => {
												return (
													<option
														value={eventType.id}
														selected={tournamentDetails.event_type == eventType.id}
														key={eventType.id}
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
											{tournamentData.countries && tournamentData.countries.map((country: any) => {
												return (
													<option
														value={country.id}
														selected={tournamentDetails.country_id == country.id}
														key={country.id}
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
										<select
											name="number_of_teams"
											id=""
											className={style.input}
											onChange={
												(e) => {
													handleChange(e)
													handleNumberOfTeamsChange(e)
												}
											}
										>
											<option value="">Select Number</option>
											{tournamentData.numberOfTeams && tournamentData.numberOfTeams.map((numberOfTeam: any) => {
												return (
													<option
														value={numberOfTeam.id}
														selected={tournamentDetails.number_of_teams == numberOfTeam.id}
														key={numberOfTeam.id}
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
											{tournamentData.tournamentFormats && tournamentData.tournamentFormats.map((tournamentFormat: any) => {
												return (
													<option
														value={tournamentFormat.id}
														selected={tournamentDetails.format == tournamentFormat.id}
														key={tournamentFormat.id}
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
											{tournamentData.tournamentLevels && tournamentData.tournamentLevels.map((tournamentLevel: any) => {
												return (
													<option
														value={tournamentLevel.id}
														selected={tournamentDetails.level === tournamentLevel.id}
														key={tournamentLevel.id}
													>{tournamentLevel.level}</option>
												)
											})}
										</select>
										<p className="text-danger">{errors?.level}</p>
									</div>
								</div>
							</div>
							<div className={`${style.btn_blk} justify-content-center mt-5`}>
								<button type="button" className={style.site_btn} onClick={() => handleFieldSet('tournament_rules')}>
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
									<h6>Tournament Overview</h6>
									<div className={style.form_blk}>
										{/* <CKeditor
											name="overview"
											onChange={(editorData: string) => {
												setOverview(editorData);
											}}
											value={tournamentDetails.overview}
											editorLoaded={editorLoaded}
										/> */}
										<textarea name="overview" id="" cols={30} rows={10} className={style.input} placeholder="eg: Lorem ipsum dollar" onChange={handleChange}>{tournamentDetails.overview}</textarea>
										<p className="text-danger">{errors?.overview}</p>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Specific rules for the tournament</h6>
									<div className={style.form_blk}>
										{/* <CKeditor
											name="rules"
											onChange={(editorData: string) => {
												setRules(editorData);
											}}
											value={tournamentDetails.rules}
											editorLoaded={editorLoaded}
										/> */}
										<textarea name="rules" id="" cols={30} rows={10} className={style.input} placeholder="eg: Lorem ipsum dollar" onChange={handleChange}></textarea>
										<p className="text-danger">{errors?.rules}</p>
									</div>
								</div>
								<div className="col-sm-12">
									<h6>Code of Conduct</h6>
									<div className={style.form_blk}>
										{/* <CKeditor
											name="code_of_conduct"
											onChange={(editorData: string) => {
												setCodeOfConduct(editorData);
											}}
											value={tournamentDetails.code_of_conduct}
											editorLoaded={editorLoaded}
										/> */}
										<textarea name="code_of_conduct" id="" cols={30} rows={10} className={style.input} placeholder="eg: Lorem ipsum dollar" onChange={handleChange}>{tournamentDetails.code_of_conduct}</textarea>

										{/* {JSON.stringify(editorData)} */}
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
								<button type="button" className={style.site_btn} onClick={() => handleFieldSet("tournament_schedule")}>
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
										<input type="date" name="schedule_date" id="" className={style.input} placeholder="eg: 04-12-2020"
											onChange={handleChange}
											value={tournamentDetails.schedule_date}
										/>
										<p className="text-danger">{errors?.schedule_date}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="time" name="schedule_time" id="" className={style.input} placeholder="eg: 16:00"
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
										<input type="date" name="second_match_date" id="" className={style.input} placeholder="eg: 04-12-2020"
											onChange={handleChange}
											value={tournamentDetails.second_match_date}
										/>
										<p className="text-danger">{errors?.second_match_date}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="time" name="second_match_time" id="" className={style.input} placeholder="eg: 16:00"
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
										<input type="text" name="second_venue_availability" id="" className={style.input} placeholder="eg: 123 Main Street, California"
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
										<input type="date" name="third_match_date" id="" className={style.input} placeholder="eg: 04-12-2020"
											onChange={handleChange}
											value={tournamentDetails.third_match_date}
										/>
										<p className="text-danger">{errors?.third_match_date}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="time" name="third_match_time" id="" className={style.input} placeholder="eg: 16:00"
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
										<input type="date" name="fourth_match_date" id="" className={style.input} placeholder="eg: 04-12-2020"
											onChange={handleChange}
											value={tournamentDetails.fourth_match_date}
										/>
										<p className="text-danger">{errors?.fourth_match_date}</p>
									</div>
								</div>
								<div className="col-sm-4">
									<h6>Time</h6>
									<div className={style.form_blk}>
										<input type="time" name="fourth_match_time" id="" className={style.input} placeholder="eg: 16:00"
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
								<button type="button" className={style.site_btn} onClick={() => handleFieldSet("tournament_staff")}>
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
								<button type="button" className={style.site_btn} onClick={() => handleFieldSet("tournament_sponsorship")}>
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
									<div className={style.form_blk}>
										{/* <CKeditor
											name="sponsor_information"
											onChange={(editorData: string) => {
												setSponsorInformation(editorData);
											}}
											value={tournamentDetails.sponsor_information}
											editorLoaded={editorLoaded}
										/> */}
										{/* {JSON.stringify(editorData)} */}
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
											onChange={handleUploadMultipleLogo}
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
										<input type="file" name="banners[]" id="" className={style.input} multiple onChange={handleUploadMultipleBanners} />
										<p className="text-danger">{errors?.banners}</p>
									</div>
								</div>
							</div>
							<h5 className="mb-5 mt-4">Payment | Total: {tournamentData.tournament_fee * numberOfTeams}</h5>
							<div className="row">
								{/* <PaymentPage /> */}
								<div className={style.stripe_payment_form}>

									<div className="row">
										<div className="col-12">
											<h6 className="require">Name on Card</h6>
											<div className={style.form_blk}>
												<input type="text" className={style.input} placeholder="Name on card" />
												<span className="validation-error"></span>
											</div>
										</div>
										<div className="col-12">
											<h6 className="require">Card Number</h6>
											<div className={style.form_blk}>
												<div className={style.input_blk}>
													<CardNumberElement options={options} />
													<span>
														<img src="/images/card.svg" alt="" />
													</span>
												</div>
											</div>
										</div>
										<div className="col-6">
											<h6 className="require">Expiry Date</h6>
											<div className={style.form_blk}>
												<div className={style.input_blk}>
													<CardExpiryElement options={options} />
												</div>
											</div>
										</div>
										<div className="col-6">
											<h6 className="require">CVC</h6>
											<div className={style.form_blk}>
												<div className={style.input_blk}>
													<CardCvcElement options={options} />
												</div>
											</div>
										</div>
									</div>
									<span className="validation-error" style={{ color: "red" }}>
										{cardError}
									</span>

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
