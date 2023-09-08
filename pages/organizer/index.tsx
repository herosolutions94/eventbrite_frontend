import Header from "@/components/header/header"
import React,{useEffect} from "react"
import Account from "./dashboard/account"
import Footer from "@/components/footer"
import axios from "axios"
import {useRouter} from "next/router"
import Cookies from "js-cookie"

type ProfileProps = {
	name: string;
	email: string;
	phone_number: string;
	org_name: string;
	org_website: string;
	org_mailing_address: string;
	org_communication_method: string;
	org_timezone: string;
	country: string;
	city: string;
	postal_code: string;
	address: string;
	status: string;
	role: string;
}

const Dashboard = () => {
	const [profileData, setProfileData] = React.useState<ProfileProps | null>(null);
	useEffect(() => {
		fetchProfileData()
	}, []);
	
	const fetchProfileData = async () => {
		try {
			const response = await axios.post(`${process.env.API_URL}/get-user-profile`, {
				"email": Cookies.get("email")
			});
			console.log(response);
			if (response.status === 200) {
				setProfileData(response.data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Header pageTitle="Dashboard" />
			<Account
				content={profileData} 
			/>
			<Footer />
		</>
	)
}

export default Dashboard
