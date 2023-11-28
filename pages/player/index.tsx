"use client"
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";

import Header from "@/components/header/header"
import React, { useEffect } from "react"
import Account from "./dashboard/account"
import Footer from "@/components/footer"
import axios from "axios"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
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
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		// Get rowId or any other necessary data
		const rowId = 123; // Replace with the actual rowId or data you need

		// Dispatch the fetchUsers action with the payload
		dispatch(fetchUsers({ rowId }));
	}, [dispatch]);
	const { profileData, loading, value } = useSelector(
		(state: RootState) => state.user
	);
	const router = useRouter()
	useEffect(() => {
		if (profileData?.role === 'organizer') {
			router.push("/organizer")
		}
	}, [profileData]);
	if (loading) {
		return (
			<div className={style.loading_page}>
				<img src="/images/loading.gif" />
			</div>
		)
	}
	return (
		<>
			<Header pageTitle="Dashboard" profileData={profileData} />
			<Account
				content={profileData}
			/>
			<Footer />
		</>
	)
}

export default Dashboard
