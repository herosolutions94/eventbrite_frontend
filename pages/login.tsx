import React, { useEffect } from "react";
import style from "@/styles/scss/app.module.scss";
import LogonSidebar from "@/components/logonSidebar";
import { PhotoBlog02 } from "@/components/images";
import SignInForm from "./login-component";
import { SiteMaster } from "@/components/header/master";
import { useRouter } from "next/router";

const SignIn = () => {
	const router = useRouter();

	useEffect(() => {
		// Check cookies on the client side
		const email = document.cookie
			.split("; ")
			.find((row) => row.startsWith("email="))
			?.split("=")[1];
		const role = document.cookie
			.split("; ")
			.find((row) => row.startsWith("role="))
			?.split("=")[1];

		if (email) {
			if (role === "organizer") {
				router.push("/organizer");
			} else {
				router.push("/player");
			}
		}
	}, [router]);

	return (
		<>
			<SiteMaster pageTitle="Login" />
			<section id={style.logon}>
				<LogonSidebar bg_image={PhotoBlog02} />
				<SignInForm />
			</section>
		</>
	);
};

export default SignIn;
