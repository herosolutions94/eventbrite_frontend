import React from "react"
import style from "@/styles/scss/app.module.scss"
import LogonSidebar from "@/components/logonSidebar"
import { PhotoBlog01 } from "@/components/images"
import SignUpForm from "./signup/signUpForm"
import { SiteMaster } from "@/components/header/master"
import { GetServerSideProps } from 'next';

interface ServerSideProps {
	email?: string | null;
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {
	const { req } = context;
	const email = req.cookies['email'] || null;
	const role = req.cookies['role'] || null;

	if (email !== null) {
		if (role === 'organizer') {
			return {
				redirect: {
					destination: '/organizer',
					permanent: false,
				},
			};
		} else {
			return {
				redirect: {
					destination: '/player',
					permanent: false,
				},
			};
		}
	}

	return { props: { email } };
};
const SignUp = () => {
	return (
		<>
			<SiteMaster pageTitle="Sign Up" />
			<section id={style.logon}>
				<LogonSidebar bg_image={PhotoBlog01} />
				<SignUpForm />
			</section>
		</>
	)
}

export default SignUp
