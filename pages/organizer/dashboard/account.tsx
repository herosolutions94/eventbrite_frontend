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
	const user_id = content?.id;
	return (
		<>
			<section className={style.dashboard} id={style.account}>
				<div className={style.contain}>
					<ProfileBlock profileData = {content} />
					<div className="pt-5"></div>
					{content?.name != '' &&	
						<ProfileForm profileData = {content} />
					}
					<div className="pt-5"></div>
					{user_id != '' &&
					<ChangePassword user_id={user_id} />
					}
				</div>
			</section>
		</>
	)
}

export default Account
