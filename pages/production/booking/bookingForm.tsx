import React, { useState, useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import countries from '../../api/countries'
import axios from 'axios'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const BookingForm = () => {
	const router = useRouter();
	const [countriesData, setCountriesData] = useState<any[]>([]);
	const [error, setError] = useState<{ full_name?: string, email?: string, tournament_title?: string, country_id?: string, state?: string, city?: string, zip_code?: string, address?: string, description?: string,phone:string }>();
	const [formData, setFormData] = useState({
		full_name: '',
		email: '',
		tournament_title: '',
		country_id: '',
		state: '',
		city: '',
		zip_code: '',
		address: '',
		phone: '',
		description: '',
		user_id: Cookies.get('user_id'),
	});
	
	const handleSubmitForm = async (e: any) => {
		e.preventDefault();
		console.log('form data is ',formData);
		try {
			const response = await axios.post(process.env.API_URL + '/create-booking', formData)
			if (response.status === 200) {
				toast.success('Booking created successfully');
				setFormData({
					full_name: '',
					email: '',
					tournament_title: '',
					country_id: '',
					state: '',
					city: '',
					zip_code: '',
					address: '',
					phone: '',
					description: '',
					user_id: Cookies.get('user_id'),
				});
				setError({
					full_name: '',
					email: '',
					tournament_title: '',
					country_id: '',
					state: '',
					city: '',
					zip_code: '',
					address: '',
					phone: '',
					description: '',
				});
				
				router.push('/production/booking');
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
	return (
		<>
			<h3 className="text-center mb-5">Book new Tournament</h3>
			<form action="" method="post">
				<h5 className="mb-4">Tournament Information</h5>
				<div className={`${style.form_row} row`}>
					<div className="col-6">
						<h6>Full Name</h6>
						<div className={style.form_blk}>
							<input type="text" name="full_name" id="" className={style.input} placeholder="eg: John Wick" value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} />
							<p className="text-danger">{error?.full_name}</p>
						</div>
					</div>
					<div className="col-6">
						<h6>Email Address</h6>
						<div className={style.form_blk}>
							<input type="text" name="email" id="" className={style.input} placeholder="eg: sample@gmail.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
							<p className="text-danger">{error?.email}</p>
						</div>
					</div>
					<div className="col-6">
						<h6>Phone</h6>
						<div className={style.form_blk}>
							<input 
								type="text" 
								name="phone" 
								id="" 
								className={style.input} 
								placeholder="eg: sample@gmail.com" 
								value={formData.phone} 
								onChange={(e) => setFormData({...formData, phone: e.target.value})} 
							/>
							<p className="text-danger">{error?.phone}</p>
						</div>
					</div>
					<div className="col-6">
						<h6>Tournament Title</h6>
						<div className={style.form_blk}>
							<input type="text" name="tournament_title" id="" className={style.input} placeholder="eg: Lorem ipsum omnis dolor repellendus" value={formData.tournament_title} onChange={(e) => setFormData({...formData, tournament_title: e.target.value})} />
							<p className="text-danger">{error?.tournament_title}</p>
						</div>
					</div>
				</div>
				<hr className="my-5" />
				<h5 className="mb-4">Address Information</h5>
				<div className={`${style.form_row} row`}>
					<div className="col-4">
						<h6>Country</h6>
						<div className={style.form_blk}>
							<select name="country_id" id="" className={style.input} value={formData.country_id} onChange={(e) => setFormData({...formData, country_id: e.target.value})}>
							<option value="">Select</option>
									{ countriesData.map((country ,index) => (
										<option value={country.id} key={index}  >{country.name}</option>
									))}
							</select>
							<p className="text-danger">{error?.country_id}</p>
						</div>
					</div>
					<div className="col-4">
						<h6>State</h6>
						<div className={style.form_blk}>
							<select name="state" id="" className={style.input} value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})}>
								<option value="">Select</option>
								<option value="2289">Isle of Wight</option>
								<option value="2290">St Helens</option>
								<option value="2291">London Borough of Brent</option>
								<option value="2292">Walsall</option>
								<option value="2293">Trafford</option>
								<option value="2294">City of Southampton</option>
								<option value="2295">Sheffield</option>
							</select>
							<p className="text-danger">{error?.state}</p>
						</div>
					</div>
					<div className="col-4">
						<h6>City</h6>
						<div className={style.form_blk}>
							<input type="text" name="city" id=""  className={style.input} placeholder="eg: California" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
							<p className="text-danger">{error?.city}</p>
						</div>
					</div>
					<div className="col-4">
						<h6>Zip Code</h6>
						<div className={style.form_blk}>
							<input type="text" id="" name="zip_code" data-type="hotel" data-way="1" className={style.input} placeholder="eg: BL0 0WY" value={formData.zip_code} onChange={(e) => setFormData({...formData, zip_code: e.target.value})} />
							<p className="text-danger">{error?.zip_code}</p>
						</div>
					</div>
					<div className="col-8">
						<h6>Address</h6>
						<div className={style.form_blk}>
							<input type="text" id="" name="address" className={style.input} placeholder="eg: 123 Main Street, California" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
							<p className="text-danger">{error?.address}</p>
						</div>
					</div>
				</div>
				<hr className="my-5" />
				<h5 className="mb-4">Description</h5>
				<div className={`${style.form_row} row`}>
					<div className="col-12">
						<div className={style.form_blk}>
							<textarea name="description" id="" rows={6} className={style.input} placeholder="Type something here..." value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}>


							</textarea>
							<p className="text-danger">{error?.description}</p>
						</div>
					</div>
				</div>
				<div className={`${style.btn_blk} mt-5 justify-content-center`}>
					<button type="submit" className={style.site_btn} onClick={handleSubmitForm}>
						Book Now
					</button>
				</div>
			</form>
		</>
	)
}

export default BookingForm
