import React from "react"
import style from "@/styles/scss/app.module.scss"
import LogonSidebar from "@/components/logonSidebar"
import { PhotoBlog02 } from "@/components/images"
import SignInForm from "./signin/signInForm"

const SignIn = () => {
	return (
		<>
			<section id={style.logon}>
				<LogonSidebar bg_image={PhotoBlog02} />
				<SignInForm />
			</section>
		</>
	)
}

export default SignIn
