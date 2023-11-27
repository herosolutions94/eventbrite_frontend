import React from "react"
import style from "@/styles/scss/app.module.scss"
import LogonSidebar from "@/components/logonSidebar"
import { PhotoBlog02 } from "@/components/images"
import SignInForm from "./signin/signInForm"
import { SiteMaster } from "@/components/header/master"
import { parse } from 'cookie';

export const getServerSideProps = async (context) => {
    const { req } = context;
    const cookieHeader = req.headers.cookie || '';

    // Parse the cookie header to extract the specific cookie value
    const cookieValue = parse(cookieHeader);
    const email = cookieValue['email'] !== undefined && cookieValue['email'] !== null && cookieValue['email'] !== '' ? cookieValue['email'] : null;
    const role = cookieValue['role'] !== undefined && cookieValue['role'] !== null && cookieValue['role'] !== '' ? cookieValue['role'] : null;
    if (email !== null) {
		if(role==='organizer'){
			return {
				redirect: {
					destination: '/organizer', // Replace '/dashboard' with the appropriate URL
					permanent: false,
				},
			};
		}
		else{
			return {
				redirect: {
					destination: '/player', // Replace '/dashboard' with the appropriate URL
					permanent: false,
				},
			};
		}
        
    }
   
    return { props: { email } };
};
const SignIn = () => {
	return (
		<>
			<SiteMaster pageTitle="Login" />
			<section id={style.logon}>
				<LogonSidebar bg_image={PhotoBlog02} />
				<SignInForm />
			</section>
		</>
	)
}

export default SignIn
