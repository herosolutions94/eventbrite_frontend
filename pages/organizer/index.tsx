import Header from "@/components/header/header"
import React, { useEffect } from "react"
import Account from "./dashboard/account"
import Footer from "@/components/footer"
import axios from "axios"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import { useSelector, useDispatch } from "react-redux";
import { fetchMemberData } from '../../states/actions/dashboard';
import { RootState } from '../../states/reducers/rootReducer'; // Replace with the actual path

import style from "@/styles/scss/app.module.scss"

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
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMemberData());
	}, []);
	const profileData = useSelector((state: RootState) => state.dashboard.content);
	const isLoading = useSelector((state: RootState) => state.dashboard.isLoading);

	// const [profileData, setProfileData] = React.useState<ProfileProps | null>(null);
	const role = Cookies.get("role");
	const router = useRouter()
	useEffect(() => {
		if (profileData?.role === 'player') {
			router.push("/player")
		}
	}, [profileData]);
	// useEffect(() => {

	// 	if (role == 'player') {

	// 		router.push("/player")
	// 	}
	// 	fetchProfileData()
	// }, [role, router]);

	// const fetchProfileData = async () => {
	// 	try {
	// 		const response = await axios.post(`${process.env.API_URL}/get-user-profile`, {
	// 			"email": Cookies.get("email")
	// 		});
	// 		console.log(response);
	// 		if (response.status === 200) {
	// 			setProfileData(response.data.data);
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	if (isLoading) {
		return (
			<div className={style.loading_page}>
				<img src="/images/loading.gif" />
			</div>
		)
	}
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
