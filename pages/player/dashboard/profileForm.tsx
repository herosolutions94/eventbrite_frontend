import React, { useState, useEffect, useRef, RefObject } from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoAboutMe } from "@/components/images"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import countries from "@/pages/api/countries"
import Cookies from "js-cookie"
import GetServerImage from "@/components/getServerImage"
import DatePicker from "react-datepicker";
import states from "@/pages/api/states"

import "react-datepicker/dist/react-datepicker.css";
type ProfileFormProps = {
	profileData: any
}
type ProfileFormState = {
	id: number;
	firstname: string;
	lastname: string;
	phone_number: string;
	email: string;
	org_name: string;
	org_website: string;
	org_mailing_address: string;
	org_communication_method: string;
	org_timezone: string;
	country: string;
	city: string;
	state: string;
	postal_code: string;
	address: string;
	secondary_phone: string;
	secondary_email: string;
	facebook: string;
	twitter: string;
	instagram: string;
	linkedIn: string;
	user_image: string;
}
const ProfileForm = ({ profileData }: ProfileFormProps) => {
	const [imageLoading, setImageLoading] = useState<boolean>(false);
	const [profileLoading, setProfileLoading] = useState<boolean>(false);
	const [userThumbnail, setUserThumbnail] = useState<null>(null);

	const [countriesData, setCountriesData] = useState<any[]>([]);
	const [statesData, setStatesData] = useState<any[]>([]);
	const [error, setError] = useState<{ name?: string, email?: string, phone_number?: string, password?: string, confirmPassword?: string, gender?: string, dob?: string, postal_code?: string, confirm_password?: string, country?: string, city?: string, address?: string, firstname?: string, lastname?: string, state?: string }>({});

	useEffect(() => {
		if (profileData) {
			setFormData({
				id: profileData.id || '',
				firstname: profileData.firstname || '',
				lastname: profileData.lastname || '',
				phone_number: profileData.phone_number || '',
				email: profileData.email || '',
				org_name: profileData.org_name || '',
				org_website: profileData.org_website || '',
				org_mailing_address: profileData.org_mailing_address || '',
				org_communication_method: profileData.org_communication_method || '',
				org_timezone: profileData.org_timezone || '',
				country: profileData.country || '',
				city: profileData.city || '',
				state: profileData.state || '',
				postal_code: profileData.postal_code || '',
				address: profileData.address || '',
				secondary_phone: profileData.secondary_phone || '',
				secondary_email: profileData.secondary_email || '',
				facebook: profileData.facebook || '',
				twitter: profileData.twitter || '',
				instagram: profileData.instagram || '',
				linkedIn: profileData.linkedIn || '',
				dob:
					profileData.dob !== undefined && profileData.dob !== null && profileData.dob !== ''
						? new Date(profileData.dob).toISOString()
						: '',
				gender: profileData.gender || '',
			});
			setUserThumbnail(profileData.user_image)
		}
	}, [profileData]);

	const [formData, setFormData] = useState({
		id: '',
		firstname: '',
		lastname: '',
		phone_number: '',
		email: '',
		org_name: '',
		org_website: '',
		org_mailing_address: '',
		org_communication_method: '',
		org_timezone: '',
		country: '',
		city: '',
		state: '',
		postal_code: '',
		address: '',
		secondary_phone: '',
		secondary_email: '',
		facebook: '',
		twitter: '',
		instagram: '',
		linkedIn: '',
		dob: '',
		gender: '',
	});

	const handleSubmitForm = async (e: any) => {
		e.preventDefault();

		// if (formData?.dob === undefined || formData?.dob === null || formData?.dob === '') {
		// 	setError({ ...error, dob: "Required" }); return;
		// }
		if (formData?.gender === undefined || formData?.gender === null || formData?.gender === '') {
			setError({ ...error, gender: "Required" }); return;
		}
		const newFrmData = { ...formData, user_image: userThumbnail, type: "player" }
		setProfileLoading(true)
		try {
			const response = await axios.post(process.env.API_URL + '/update-user-profile', newFrmData)
			toast.success(response.data.message);
			if (response.status === 200) {
				setProfileLoading(false)
				toast.success(response.data.message);
				setError({
					firstname: '',
					lastname: '',
					phone_number: '',
					email: '',
					country: '',
					city: '',
					state: '',
					postal_code: '',
					address: '',
					gender: '',
					dob: '',
				});

			}
		} catch (error) {
			setProfileLoading(false)
			if (axios.isAxiosError(error) && error.response?.status === 422) {
				toast.error(error.response.data.message);
				const validationErrors = error.response.data.error;
				setError(validationErrors);
			} else {
				// Handle other errors
			}
		}

	}
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
	}, []);
	useEffect(() => {
		const fetchStatesData = async () => {

			if (parseInt(formData?.state) > 0) {
				console.log("formData?.state", formData?.country);
				try {
					const data = await states(formData?.country);
					console.log(data)
					setStatesData(data);
				} catch (error) {
					console.error('Error fetching states data:', error);
				}
			}

		};

		fetchStatesData();
	}, [formData?.state]);
	const handlerCountryChange = async (country_id: any) => {
		setFormData({ ...formData, country: country_id })
		try {
			const data = await states(country_id);
			setStatesData(data);
		} catch (error) {
			console.error('Error fetching countries data:', error);
		}

	};
	const fileInputRef: RefObject<HTMLInputElement> = useRef(null);
	// const [value, setValue] = useState()
	const handleChooseDp = () => {
		if (fileInputRef?.current) {
			fileInputRef?.current?.click();
		}

	};
	const handleUpload = async (e: any) => {
		e.preventDefault();
		const files = e.target.files[0];
		setImageLoading(true);
		const fd = new FormData();
		const user_email = Cookies.get("email");
		const user_id = Cookies.get("user_id");
		fd.append("image", files);
		fd.append("user_email", user_email || "");
		fd.append("user_id", user_id || "");

		try {
			const response = await axios.post(process.env.API_URL + '/upload-image', fd);
			toast.success(response.data.message);
			if (response) {
				setImageLoading(false);
				const res = response.data;
				if (res.status === 1) {
					setUserThumbnail(res.image_name)
				}
			}
		} catch (error) {
			setImageLoading(false);
			if (axios.isAxiosError(error) && error.response?.status === 422) {
				toast.error(error.response.data.message);
				const validationErrors = error.response.data.error;
				setError(validationErrors);
			} else {
				// Handle other errors
			}
		}
	};
	return (
		<>
			<form action="" method="POST">
				<div className={style.blk}>
					<h4 className="mb-4">Personal information</h4>
					<div className={style.dp_blk}>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<GetServerImage src="uploads" image={userThumbnail} isLoading={imageLoading} />
						</div>
						<div className={style.txt}>
							<div className={style.btn_blk}>
								<button type="button" className={style.change_photo_btn} onClick={handleChooseDp} disabled={imageLoading}>
									Change Photo
								</button>
								<input type="file"
									ref={fileInputRef}
									id="profile_dp"
									onChange={handleUpload}
									accept="image/*" />
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
								<input type="text" name="firstname" id="" value={formData.firstname} className={style.input} placeholder="eg: John" onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
								<p className="text-danger">{error?.firstname}</p>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Last Name</h6>
							<div className={style.form_blk}>
								<input type="text" name="lastname" id="" value={formData.lastname} className={style.input} placeholder="eg: Wick" onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
								<p className="text-danger">{error?.lastname}</p>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Phone Number</h6>
							<div className={style.form_blk}>
								<input type="text" name="phone_number" id=""
									value={formData.phone_number}
									onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
									className={style.input}
									placeholder="eg: +92300 0000 000"
								/>
								<p className="text-danger">{error?.phone_number}</p>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Email Address</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="" value={formData.email}
									className={style.input} placeholder="eg: sample@gmail.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} readOnly />
								<p className="text-danger">{error?.email}</p>
							</div>
						</div>
						{/* <div className="col-lg-4 col-6">
							<h6>Date of Birth</h6>
							<div className={style.form_blk}>
								<DatePicker selected={formData?.dob} onChange={(date) => setFormData({ ...formData, dob: date })} className={style.input} />
								<p className="text-danger">{error?.dob}</p>
							</div>
						</div> */}
						<div className="col-lg-4 col-6">
							<h6>Gender</h6>
							<div className={style.form_blk}>
								<select name="gender" id="" className={style.input} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
									<option value="">Select</option>
									<option value="male" selected={formData?.gender === 'male' ? true : false}>Male</option>
									<option value="female" selected={formData?.gender === 'female' ? true : false}>Female</option>
									<option value="others" selected={formData?.gender === 'others' ? true : false}>Others</option>
								</select>
								<p className="text-danger">{error?.gender}</p>
							</div>
						</div>
					</div>
					<hr className="my-5" />
					<h4 className="mb-4">Address information</h4>
					<div className={`${style.form_row} row`}>
						<div className="col-lg-4 col-6">
							<h6>Country</h6>
							<div className={style.form_blk}>
								<select name="country" id="" className={style.input} value={formData.country} onChange={(e) => handlerCountryChange(e.target.value)}>
									<option value="">Select</option>
									{countriesData.map((country, index) => (
										parseInt(formData?.country) === country.id ?
											<option value={country.id} key={index} selected={true}>{country.name}</option>
											:
											<option value={country.id} key={index}>{country.name}</option>
									))}
								</select>
								<p className="text-danger">{error?.country}</p>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>State</h6>
							<div className={style.form_blk}>
								<select name="state" id="" className={style.input} value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })}>
									{statesData.map((state, index) => (
										parseInt(formData?.state) === state.id ?
											<option value={state.id} key={index} selected={true}>{state.name}</option>
											:
											<option value={state.id} key={index}>{state.name}</option>
									))}
								</select>
								<p className="text-danger">{error?.state}</p>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>City</h6>
							<div className={style.form_blk}>
								<input type="text" name="" id="" value={formData.city} className={style.input} placeholder="eg: California" onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
								<p className="text-danger">{error?.city}</p>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Zip Code</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="postal_code" value={formData.postal_code} className={style.input} placeholder="eg: BL0 0WY" onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })} />
								<p className="text-danger">{error?.postal_code}</p>
							</div>
						</div>
						<div className="col-lg-8 col-12">
							<h6>Address</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="address" value={formData.address} className={style.input} placeholder="eg: 123 Main Street, California" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
								<p className="text-danger">{error?.address}</p>
							</div>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-center mt-5`}>
						<button type="submit" className={`${style.site_btn} ${style.px}`} onClick={handleSubmitForm} disabled={imageLoading || profileLoading}>
							Save {
								profileLoading ? <div className={style.lds_dual_ring}></div> : ""
							}
						</button>
					</div>
				</div>
			</form>
		</>
	)
}

export default ProfileForm
