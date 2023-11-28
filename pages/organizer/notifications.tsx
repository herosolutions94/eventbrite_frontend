"use client"
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";

import Header from "@/components/header/header"
import React, { useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import NotificationsTable from "./notifications/notificationsTable"
import { useRouter } from "next/router";

const Notifications = () => {
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
		if (profileData?.role === 'player') {
			router.push("/player")
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
			<Header pageTitle="Notifications" profileData={profileData} />
			<section className={style.dashboard} id={style.notifications}>
				<div className={style.contain}>
					<h5 className="mb-4">Notifications</h5>
					<NotificationsTable />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Notifications
