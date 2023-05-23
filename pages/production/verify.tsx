import React from "react"
import style from "@/styles/scss/app.module.scss"
import LogonSidebar from "@/components/logonSidebar"
import { PhotoBlog02 } from "@/components/images"
import VerifyEmailForm from "./verify-email/verifyEmailForm"

const Verify = () => {
	return (
		<>
			<section id={style.logon}>
				<LogonSidebar bg_image={PhotoBlog02} />
				<VerifyEmailForm />
			</section>
		</>
	)
}

export default Verify
