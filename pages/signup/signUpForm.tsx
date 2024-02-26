import React, { useState, useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import countries from '../api/countries'
import axios from 'axios'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';


const SignUpForm = () => {

	const router = useRouter();
	const [countriesData, setCountriesData] = useState<any[]>([]);
	const [signup, setSignup] = useState("organizer");
	const [error, setError] = useState<{ name?: string, email?: string, phone_number?: string, password?: string, confirmPassword?: string, org_name?: string, org_website?: string, org_mailing_address?: string, org_communication_method?: string, org_timezone?: string, postal_code?: string, confirm_password?: string, country?: string, city?: string, address?: string }>({})
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone_number: "",
		password: "",
		confirm_password: "",
		terms_and_conditions: false,
		role: signup,
	});
	const [organizerData, setOrganizerData] = useState({
		org_name: "",
		org_website: "",
		org_mailing_address: "",
		org_communication_method: "",
		org_timezone: "",
	});

	const [playerData, setPlayerData] = useState({
		country: "",
		city: "",
		postal_code: "",
		address: "",
	});

	const handleSubmitForm = async (e: any) => {
		e.preventDefault();
		const data = {
			...formData,
			...organizerData,
			...playerData,
		};
		data.role = signup;

		try {
			const response = await axios.post(process.env.API_URL + '/register', data);
			toast.success(response.data.message);
			if (response) {
				router.push('/verify');
				Cookies.set('email', response.data.user.email);
			}
		} catch (error) {
			if (axios.isAxiosError(error) && error.response?.status === 422) {
				toast.error(error.response.data.message);
				const validationErrors = error.response.data.error;
				setError(validationErrors);
			} else {
				// Handle other errors
			}
		}
	};

	useEffect(() => {
		const fetchCountriesData = async () => {
			try {
				const data = await countries();
				setCountriesData(data);
			} catch (error) {
				console.error('Error fetching countries data:', error);
			}
		};

		fetchCountriesData();
	}, [error]);

	return (
		<>
			<div className={style.logon_form}>
				<form action="" method="POST" autoComplete="off">
					<div className={style.log_blk}>
						<div className={style.txt}>
							<h2>Sign up</h2>
							<p>Just register to join with us.</p>
						</div>
						<div className={style.form_row + " row"}>
							<div className="col-sm-12">
								<h6>Sign up as</h6>
								<div className={`${style.form_blk} ${style.btn_blk} ${style.signup_as_btn_blk}`}>
									<button type="button" name="as_player" id="as_player" className={`${style.input} ${signup === "organizer" ? style.active : ""}`} onClick={() => setSignup("organizer")}>
										Organizer
									</button>
									<button type="button" name="as_player" id="as_player" className={`${style.input} ${signup === "player" ? style.active : ""}`} onClick={() => setSignup("player")}>
										Player
									</button>
								</div>
							</div>
							<div className="col-sm-12">
								<h6 className="require">Full Name</h6>
								<div className={style.form_blk}>
									<input
										type="text"
										name="name"
										id="name"
										className={style.input}
										placeholder="eg: John Wick"
										value={formData.name}
										autoComplete="none"
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									/>
									<p className="text-danger">{error.name}</p>
								</div>
							</div>
							<div className="col-sm-12">
								<h6 className="require">Email Address</h6>
								<div className={style.form_blk}>
									<input
										type="text"
										name="email"
										id="email"
										className={style.input}
										placeholder="eg: sample@gmail.com"
										value={formData.email}
										autoComplete="none"
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									/>
									<p className="text-danger">{error.email}</p>
								</div>
							</div>
							<div className="col-sm-12">
								<h6 className="require">Phone Number</h6>
								<div className={style.form_blk}>
									<input
										type="text"
										name="phone_number"
										id="phone"
										className={style.input}
										placeholder="eg: 194349034234"
										value={formData.phone_number}
										autoComplete="none"
										onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
									/>
									<p className="text-danger">
										{error.phone_number}
									</p>
								</div>
							</div>
							{signup === "player" ? (
								<>
									<div className="col-sm-12">
										<h6>Country</h6>
										<div className={style.form_blk}>
											<select name="country" id="" className={style.input} value={playerData.country} onChange={(e) => setPlayerData({ ...playerData, country: e.target.value })}>
												<option value="">Select</option>
												{countriesData.map((country, index) => (
													<option value={country.id} key={index} >{country.name}</option>
												))}
											</select>
											<p className="text-danger">
												{error.country}
											</p>
										</div>
									</div>
									<div className="col-sm-6">
										<h6>City</h6>
										<div className={style.form_blk}>
											<input
												type="text"
												name="city"
												id="city"
												className={style.input}
												placeholder="eg: California"
												value={playerData.city}
												autoComplete="none"
												onChange={(e) => setPlayerData({ ...playerData, city: e.target.value })}
											/>
											<p className="text-danger">
												{error.city}
											</p>
										</div>
									</div>
									<div className="col-sm-6">
										<h6>Postal code</h6>
										<div className={style.form_blk}>
											<input
												type="text"
												name="zip_code"
												id="zip_code"
												className={style.input}
												placeholder="eg: BL0 0WY"
												value={playerData.postal_code}
												autoComplete="none"
												onChange={(e) => setPlayerData({ ...playerData, postal_code: e.target.value })}
											/>
											<p className="text-danger">
												{error.postal_code}
											</p>
										</div>
									</div>
									<div className="col-sm-12">
										<h6>Address</h6>
										<div className={style.form_blk}>
											<input
												type="text"
												name="address"
												id="address"
												className={style.input}
												placeholder="eg: 123 Main Street, California"
												value={playerData.address}
												autoComplete="none"
												onChange={(e) => setPlayerData({ ...playerData, address: e.target.value })}
											/>
											<p className="text-danger">
												{error.address}
											</p>
										</div>
									</div>
								</>
							) : signup === "organizer" ? (
								<>
									<div className="col-sm-12">
										<h6>Organization Name</h6>
										<div className={style.form_blk}>
											<input
												type="text"
												name="address"
												id="address"
												className={style.input}
												placeholder="eg: Warmongers"
												value={organizerData.org_name}
												autoComplete="none"
												onChange={(e) => setOrganizerData({ ...organizerData, org_name: e.target.value })}
											/>
											<p className="text-danger">{error.org_name}</p>
										</div>
									</div>
									<div className="col-sm-12">
										<h6>Organization Website</h6>
										<div className={style.form_blk}>
											<input
												type="text"
												name="org_website"
												id="org_website"
												className={style.input}
												placeholder="eg: www.website.com"
												value={organizerData.org_website}
												autoComplete="none"
												onChange={(e) => setOrganizerData({ ...organizerData, org_website: e.target.value })}
											/>
											<p className="text-danger">{error.org_website}</p>
										</div>
									</div>
									<div className="col-sm-12">
										<h6>Mailing Address</h6>
										<div className={style.form_blk}>
											<input
												type="text"
												name="address"
												id="address"
												className={style.input}
												placeholder="eg: sample@gmail.com"
												value={organizerData.org_mailing_address}
												autoComplete="none"
												onChange={(e) => setOrganizerData({ ...organizerData, org_mailing_address: e.target.value })}
											/>
											<p className="text-danger">
												{error.org_mailing_address}
											</p>
										</div>
									</div>
									<div className="col-sm-12">
										<h6>Preferred Communication Method</h6>
										<div className={style.form_blk}>
											<select name="" id="" className={style.input} value={organizerData.org_communication_method} onChange={(e) => setOrganizerData({ ...organizerData, org_communication_method: e.target.value })}>
												<option value="">Select</option>
												<option value="email">Email</option>
												<option value="phone">Phone</option>
												<option value="messaging app">Messaging App</option>
											</select>
											<p className="text-danger">
												{error.org_communication_method}
											</p>
										</div>
									</div>
									<div className="col-sm-12">
										<h6>Time Zone</h6>
										<div className={style.form_blk}>
											<input
												type="text"
												name="address"
												id="address"
												className={style.input}
												placeholder="eg: EEST"
												value={organizerData.org_timezone}
												autoComplete="none"
												onChange={(e) => setOrganizerData({ ...organizerData, org_timezone: e.target.value })}
											/>
											<p className="text-danger">
												{error.org_timezone}
											</p>
										</div>
									</div>
								</>
							) : null}
							<div className="col-sm-12">
								<h6 className="require">Password</h6>
								<div className="form_blk pass_blk">
									<input
										type="password"
										name="password"
										id="password"
										className={style.input}
										placeholder="eg: PassLogin%7"
										autoComplete="none"
										value={formData.password}
										onChange={(e) => setFormData({ ...formData, password: e.target.value })}
									/>
									<i className={style.icon_eye}></i>
									<p className="text-danger">{error.password}</p>
								</div>
							</div>
							<div className="col-sm-12">
								<h6 className="require">Confirm Password</h6>
								<div className="form_blk pass_blk">
									<input
										type="password"
										name="confirm_password"
										id="password"
										className={style.input}
										placeholder="eg: PassLogin%7"
										autoComplete="none"
										value={formData.confirm_password}
										onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
									/>
									<i className={style.icon_eye}></i>
									<p className="text-danger">{error.confirm_password}</p>
								</div>
							</div>
							<div className="col-sm-12">
								<div className={style.form_blk}>
									<div className={style.lbl_btn}>
										<input
											type="checkbox"
											name="confirm"
											id="confirm"
											checked={formData.terms_and_conditions}
											onChange={(e) => setFormData({ ...formData, terms_and_conditions: e.target.checked })}
										/>
										<label htmlFor="confirm">
											I agree to Eventplus{" "}
											<Link target="_blank" href="/terms-and-conditions">
												Terms & Conditions
											</Link>{" "}
											and{" "}
											<Link target="_blank" href="/privacy-policy">
												Privacy Policy.
											</Link>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className={style.btn_blk + " " + style.form_blk + " mt-5"}>
							<button type="submit" className={style.site_btn + " " + style.block} onClick={handleSubmitForm}>
								Register
							</button>
						</div>
						<div className={style.account + " mt-2"}>
							Already have an account? <Link href="/login">Sign in</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignUpForm
