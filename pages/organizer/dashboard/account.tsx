import React from "react"
import style from "@/styles/scss/app.module.scss"
import ChangePassword from "./changePassword"
import ProfileBlock from "./profileBlock"
import ProfileForm from "./profileForm"
type AccountProps = {
	content : any
}
const Account = (props:AccountProps) => {
	const {content} = props;
	return (
		<>
			<section className={style.dashboard} id={style.account}>
				<div className={style.contain}>
					<ProfileBlock profileData = {content} />
					<div className="pt-5"></div>
					<ProfileForm />
					<div className="pt-5"></div>
					<ChangePassword />
				</div>
			</section>
		</>
	)
}

export default Account
