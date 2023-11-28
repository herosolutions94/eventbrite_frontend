import React from "react"
import style from "@/styles/scss/app.module.scss"
import LogonSidebar from "@/components/logonSidebar"
import { PhotoBlog02 } from "@/components/images"
import SignInForm from "./signin/signInForm"
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
