import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import TournamentHeader from "../../tournamentDetail/tournamentHeader"
import TournamentContent from "../../tournamentDetail/tournamentContent"
import { useRouter } from 'next/router';
import axios from "axios"
import { PhotoTeam01 } from "@/components/images"

const TournamentDetail = () => {
	const [tournamentDetails, setTournamentDetails] = useState<any>([]);
	const [teams, setTeams] = useState<any>([]);
	const [acceptedTeamsCount, setAcceptedTeamsCount] = useState<any>(0);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		if (id !== undefined) {
			fetchData();
		}
	}, [id]);
	const fetchData = async () => {
		try {
			const response = await axios.get(process.env.API_URL + "/tournament-details/" + id, {});
			if (response.status === 200) {
				setTournamentDetails(response.data.data);
				setTeams(response.data.data.teams);
				setAcceptedTeamsCount(response?.data?.acceptedTeamsCount)
			}
		} catch (error) {
			console.log(error);
		}
	};
	if (!tournamentDetails) {
		return 'Loading...';
	}
	console.log(tournamentDetails)
	return (
		<>
			<Header pageTitle="Tournaments" />
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
							acceptedTeamsCount={acceptedTeamsCount}
							tournamentId={tournamentDetails?.id}
							is_started={tournamentDetails?.is_started}
							in_progress_round={tournamentDetails?.in_progress_round}
						/>
						{tournamentDetails?.teams?.length > 0 ?
							<TournamentContent
								teams={teams}
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
