import React, { useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
// import ChangePassword from "./changePassword"
import ProfileBlock from "./profileBlock"
import ProfileForm from "./profileForm"
import ChangePassword from "@/pages/organizer/dashboard/changePassword"

type AccountProps = {
	content: any
}
const Account = (props: AccountProps) => {
	const { content } = props;
	return (
		<>
			<section className={style.dashboard} id={style.account}>
				<div className={style.contain}>
					<ProfileBlock
						profileData={content}
					/>
					<div className="pt-5"></div>
					<ProfileForm profileData={content} />
					<div className="pt-5"></div>
					<ChangePassword user_id={content?.id} />
				</div>
			</section>
		</>
	)
}

export default Account
