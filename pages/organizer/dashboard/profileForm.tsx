import React, { useState, useEffect, useRef } from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoAboutMe } from "@/components/images"
import countries from '../../api/countries'
import axios from 'axios'
import { toast } from 'react-toastify';
import Cookies from "js-cookie"
import GetServerImage from "@/components/getServerImage"

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
	const [error, setError] = useState<{ name?: string, email?: string, phone_number?: string, password?: string, confirmPassword?: string, org_name?: string, org_website?: string, org_mailing_address?: string, org_communication_method?: string, org_timezone?: string, postal_code?: string, confirm_password?: string, country?: string, city?: string, address?: string, firstname?: string, lastname?: string, secondary_phone?: string, secondary_email?: string, facebook?: string, twitter?: string, instagram?: string, linkedIn?: string, state?: string }>({});

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
	});
	const handleSubmitForm = async (e: any) => {
		e.preventDefault();
		setProfileLoading(true)
		const newFrmData = { ...formData, user_image: userThumbnail, type: "organizer" }
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
	const fileInputRef = useRef(null);
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
		let user_email = Cookies.get("email");
		let user_id = Cookies.get("user_id");
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
						<div className="col-lg-6 col-6">
							<h6>First Name</h6>
							<div className={style.form_blk}>
								<input type="text" name="firstname" id="" value={formData.firstname} className={style.input} placeholder="eg: John"
									onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
								<p className="text-danger">{error?.firstname}</p>
							</div>
						</div>
						<div className="col-lg-6 col-6">
							<h6>Last Name</h6>
							<div className={style.form_blk}>
								<input type="text" name="lastname" id="" value={formData.lastname} className={style.input} placeholder="eg: Wick" onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
								<p className="text-danger">{error?.lastname}</p>
							</div>
						</div>
						<div className="col-lg-6 col-6">
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
						<div className="col-lg-6 col-6">
							<h6>Email Address</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="" value={formData.email}
									className={style.input} placeholder="eg: sample@gmail.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
								<p className="text-danger">{error?.email}</p>
							</div>
						</div>
					</div>
					<hr className="my-5" />
					<h4 className="mb-4">Organization information</h4>
					<div className={`${style.form_row} row`}>
						<div className="col-lg-6 col-6">
							<h6>Organization Name</h6>
							<div className={style.form_blk}>
								<input type="text" name="address" id="address" className={style.input} placeholder="eg: Warmongers" value={formData.org_name}
									onChange={(e) => setFormData({ ...formData, org_name: e.target.value })} />
								<p className="text-danger">{error?.org_name}</p>
							</div>
						</div>
						<div className="col-lg-6 col-6">
							<h6>Organization Website</h6>
							<div className={style.form_blk}>
								<input type="text" name="address" id="address" className={style.input} placeholder="eg: www.website.com" value={formData.org_website}
									onChange={(e) => setFormData({ ...formData, org_website: e.target.value })} />
								<p className="text-danger">{error?.org_website}</p>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Mailing Address</h6>
							<div className={style.form_blk}>
								<input type="text" name="address" id="address" className={style.input} placeholder="eg: sample@gmail.com" value={formData.org_mailing_address}
									onChange={(e) => setFormData({ ...formData, org_mailing_address: e.target.value })} />
								<p className="text-danger">{error?.org_mailing_address}</p>

							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Preferred Communication Method</h6>
							<div className={style.form_blk}>
								<select name="org_communication_method" id="" className={style.input}>
									<option value="">Select</option>
									<option value="email" selected={profileData?.org_communication_method === 'email'}>Email</option>
									<option value="phone" selected={profileData?.org_communication_method === 'phone'} >Phone</option>
									<option value="messaging app" selected={profileData?.org_communication_method === 'messaging app'}>Messaging App</option>
								</select>
								<p className="text-danger">{error?.org_communication_method}</p>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<h6>Time Zone</h6>
							<div className={style.form_blk}>
								<input type="text" name="address" id="address" className={style.input} placeholder="eg: EEST" value={formData.org_timezone}
									onChange={(e) => setFormData({ ...formData, org_timezone: e.target.value })} />
								<p className="text-danger">{error?.org_timezone}</p>
							</div>
						</div>
					</div>
					<hr className="my-5" />
					<h4 className="mb-4">Secondary contact information</h4>
					<div className={`${style.form_row} row`}>
						<div className="col-lg-6 col-6">
							<h6>Phone Number</h6>
							<div className={style.form_blk}>
								<input type="text" name="secondary_phone" id="" value={formData.secondary_phone} className={style.input} placeholder="eg: +92300 0000 000" onChange={(e) => setFormData({ ...formData, secondary_phone: e.target.value })} />
								<p className="text-danger">{error?.secondary_phone}</p>
							</div>
						</div>
						<div className="col-lg-6 col-6">
							<h6>Email Address</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="secondary_email" value={formData.secondary_email} className={style.input} placeholder="eg: sample@gmail.com" onChange={(e) => setFormData({ ...formData, secondary_email: e.target.value })} />
								<p className="text-danger">{error?.secondary_email}</p>
							</div>
						</div>
					</div>
					<hr className="my-5" />
					<h4 className="mb-4">Address information</h4>
					<div className={`${style.form_row} row`}>
						<div className="col-lg-4 col-6">
							<h6>Country</h6>
							<div className={style.form_blk}>
								<select name="country" id="" className={style.input} value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}>
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
									<option value="">Select</option>
									<option value="Isle of Wight">Isle of Wight</option>
									<option value="St Helens">St Helens</option>
									<option value="London Borough of Brent">London Borough of Brent</option>
									<option value="Walsall">Walsall</option>
									<option value="Trafford">Trafford</option>
									<option value="City of Southampton">City of Southampton</option>
									<option value="Sheffield">Sheffield</option>
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
					<hr className="my-5" />
					<h4 className="mb-4">Social Media Handles</h4>
					<div className={`${style.form_row} row`}>
						<div className="col-lg-6 col-6">
							<h6>Facebook</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="facebook" value={formData.facebook} className={style.input} placeholder="eg: www.facebook.com" onChange={(e) => setFormData({ ...formData, facebook: e.target.value })} />
								<p className="text-danger">{error?.facebook}</p>
							</div>
						</div>
						<div className="col-lg-6 col-6">
							<h6>Twitter</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="twitter" value={formData.twitter} className={style.input} placeholder="eg: www.twitter.com" onChange={(e) => setFormData({ ...formData, twitter: e.target.value })} />
								<p className="text-danger">{error?.twitter}</p>
							</div>
						</div>
						<div className="col-lg-6 col-6">
							<h6>Instagram</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="instagram" value={formData.instagram} className={style.input} placeholder="eg: www.instagram.com" onChange={(e) => setFormData({ ...formData, instagram: e.target.value })} />
								<p className="text-danger">{error?.instagram}</p>
							</div>
						</div>
						<div className="col-lg-6 col-6">
							<h6>linkedin</h6>
							<div className={style.form_blk}>
								<input type="text" id="" name="linkedIn" value={formData.linkedIn} className={style.input} placeholder="eg: www.linkedin.com" onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })} />
								<p className="text-danger">{error?.linkedIn}</p>
							</div>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-center mt-5`} >
						<button type="submit" className={`${style.site_btn} ${style.px}`} onClick={handleSubmitForm} disabled={imageLoading || profileLoading}>
							Save {
								profileLoading ? <div className={style.lds_dual_ring}></div> : ""
							}
						</button>
					</div>
				</div>
			</form >
		</>
	)
}

export default ProfileForm
