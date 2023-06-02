import React, { useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import axios from 'axios'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'





type ProfileFormProps = {
	user_id : any
}
const ChangePassword = ({user_id}:ProfileFormProps) => {
	const [error, setError] = React.useState<any>({});
	const [formData, setFormData] = React.useState({
		password:'',
		new_password:'',
		confirm_new_password:'',
		id:'',

	})
	const handleSubmitForm = async (e: any) => {
		e.preventDefault();
			try {
				const response = await axios.post(process.env.API_URL + '/reset-password', formData)
					toast.success(response.data.message);
				if (response.status === 200) {
					toast.success('Password changed successfully');
					setFormData({
						password:'',
						new_password:'',
						confirm_new_password:'',
						id:'',
					});
				}
			} catch (error) {
				if (axios.isAxiosError(error) && error.response?.status === 422) {
					toast.error(error.response.data.message);
				const validationErrors = error.response.data.error;
				setError(validationErrors);
				} else {
				}
			}
	}
	useEffect(() => {
		setFormData({...formData,id:user_id})
	},[user_id]);
	return (
		<>
			<form action="" method="POST">
				<div className={style.blk}>
					<h4 className="mb-4">Change Password</h4>
					<div className={`${style.form_row} row`}>
						<div className="col-lg-4 col-12">
							<div className={style.form_blk}>
								<input type="password" name="password" id="" className={style.input} placeholder="Current password" value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} />
								<p className="text-danger">{error?.password}</p>
							</div>
						</div>
						<div className="col-lg-4 col-12">
							<div className={style.form_blk}>
								<input type="password" name="new_password" id="" className={style.input} placeholder="New password" value={formData.new_password} onChange={(e)=>setFormData({...formData,new_password:e.target.value})} />
								<p className="text-danger">{error?.new_password}</p>
							</div>
						</div>
						<div className="col-lg-4 col-12">
							<div className={style.form_blk}>
								<input type="password" name="confirm_new_password" id="" className={style.input} placeholder="Confirm new password" value={formData.confirm_new_password} onChange={(e)=>setFormData({...formData,confirm_new_password:e.target.value})} />
								<p className="text-danger">{error?.confirm_new_password}</p>
							</div>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-center mt-5`}>
						<button type="submit" className={style.site_btn} onClick={handleSubmitForm}>
							Change Password
						</button>
					</div>
				</div>
			</form>
		</>
	)
}

export default ChangePassword
