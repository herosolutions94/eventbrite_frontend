import React, { useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import LogonSidebar from "@/components/logonSidebar"
import { PhotoBlog02 } from "@/components/images"
import VerifyEmailForm from "./verify-email/verifyEmailForm"
import { SiteMaster } from "@/components/header/master"
import Cookies from "js-cookie"
import axios from "axios"
import { useRouter } from "next/router"

const Verify = () => {
	const router = useRouter()
	const [profileData, setProfileData] = React.useState<null>(null);
	const fetchProfileData = async () => {
		try {
			const response = await axios.post(`${process.env.API_URL}/get-user-profile`, {
				"email": Cookies.get("email")
			});
			if (response.status === 200) {
				if (response.data.data?.status === 'active') {
					if (Cookies.get("role") === 'organizer') {
						router.push("/organizer")
					}
					else {
						router.push("/player")
					}

				}
				setProfileData(response.data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {

		fetchProfileData()
	}, []);
	if (profileData === null || profileData?.id <= 0) {
		return (
			<div className={style.loading_page}>
				<img src="/images/loading.gif" />
			</div>
		)
	}
	return (
		<>
			<SiteMaster pageTitle="Verify email" />
			<section id={style.logon}>
				<LogonSidebar bg_image={PhotoBlog02} />
				<VerifyEmailForm />
			</section>
		</>
	)
}

export default Verify
