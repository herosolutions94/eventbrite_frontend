"use client"
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";

import Header from "@/components/header/header"
import React, { useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import ChatBlock from "./messages/chatBlock"
import UserBlock from "./messages/userBlock"
import ChatFormBlock from "./messages/chatFormBlock"
import { useRouter } from "next/router";

const Messages = () => {
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
			<Header pageTitle="Messages" profileData={profileData} />
			<section id={style.messages}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<UserBlock />
						<div className={style.chat_blk}>
							<ChatBlock />
							<ChatFormBlock />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Messages
