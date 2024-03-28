"use client"
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";

import Header from "@/components/header/header"
import React, { useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import TournamentsItems from "./tournaments/tournamentsItems"
import Link from "next/link"
import Cookies from "js-cookie"
import { useRouter } from "next/router"

const Tournaments = () => {

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
			<Header pageTitle="Tournaments" profileData={profileData} />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<div className={style.table_top_block}>
						<h5 className="me-auto">My Tournaments</h5>
						<div className={style.btn_blk}>
							{Cookies.get("role") == "organizer" ? (
								<Link href="/organizer/add-new-tournament" className={style.site_btn}>
									Add new Tournament
								</Link>
							) : (
								""
							)}
						</div>
					</div>
					<TournamentsItems />
				</div>
			</section>
			{/* <Footer /> */}
		</>
	)
}

export default Tournaments
