import React from "react"
import style from "@/styles/scss/app.module.scss"
import LogonSidebar from "@/components/logonSidebar"
import { PhotoBlog03 } from "@/components/images"
import ForgotForm from "./forgot/forgotForm"
import { SiteMaster } from "@/components/header/master"

const Forgot = () => {
	return (
		<>
			<SiteMaster pageTitle="Forget Password" />
			<section id={style.logon}>
				<LogonSidebar bg_image={PhotoBlog03} />
				<ForgotForm />
			</section>
		</>
	)
}

export default Forgot
