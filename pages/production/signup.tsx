import React from "react"
import style from "@/styles/scss/app.module.scss"
import LogonSidebar from "@/components/logonSidebar"
import { PhotoBlog01 } from "@/components/images"
import SignUpForm from "./signup/signUpForm"

const SignUp = () => {
	return (
		<>
			<section id={style.logon}>
				<LogonSidebar bg_image={PhotoBlog01} />
				<SignUpForm />
			</section>
		</>
	)
}

export default SignUp
