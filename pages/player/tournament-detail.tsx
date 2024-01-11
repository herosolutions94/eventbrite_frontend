"use client"
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";

import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import TournamentHeader from "./tournamentDetail/tournamentHeader"
import TournamentContent from "./tournamentDetail/tournamentContent"
import { useRouter } from 'next/router';
import axios from "axios"
import { PhotoTeam01 } from "@/components/images"
import Cookies from "js-cookie"


const TournamentDetail = () => {
	const router = useRouter()

	const [tournamentDetails, setTournamentDetails] = useState<any>([]);
	const [teams, setTeams] = useState<any>([]);
	const { id } = router.query;

	useEffect(() => {
		if (id !== undefined) {
			fetchData();
		}
	}, [id]);
	const handleTeams = (teams: any) => {

	}
	const fetchData = async () => {
		try {
			const response = await axios.get(process.env.API_URL + "/tournament-details/" + id, {});
			if (response.status === 200) {
				setTournamentDetails(response.data.data);
				setTeams(response.data.data.teams);
			}
		} catch (error) {
			console.log(error);
		}
	};
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
	if (!tournamentDetails) {
		return 'Loading...';
	}

	return (
		<>
			<Header pageTitle="Tournaments" profileData={profileData} />
			<section className={`${style.dashboard} ${style.organizer_detail}`} id={style.tournament_detail}>
				<div className={style.contain}>
					<div className={style.blk}>

						<TournamentHeader
							category={tournamentDetails?.category?.name}
							type={tournamentDetails?.tournament_type?.name}
							title={tournamentDetails?.title}
							start_date={tournamentDetails?.start_date}
							end_date={tournamentDetails?.end_date}
							schedule_time={tournamentDetails?.schedule_time}
							overview={tournamentDetails?.overview}
							
						/>
						{tournamentDetails?.teams?.length > 0 ?
							<TournamentContent
								teams={teams}
								handleTeams={handleTeams}
							/>
							: ''
						}

					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default TournamentDetail
