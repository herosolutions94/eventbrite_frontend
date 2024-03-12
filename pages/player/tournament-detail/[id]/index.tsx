import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import TournamentHeader from "../../tournamentDetail/tournamentHeader"
import TournamentContent from "../../tournamentDetail/tournamentContent"
import { useRouter } from 'next/router';
import axios from "axios"
import { PhotoTeam01 } from "@/components/images"
import OverviewBlock from "@/pages/tournamentDetail/overviewBlock"
interface Team {
	id: number;
	tournament_id: string;
	user_id: string;
	team_name: string;
	affiliation: string;
	team_color: string;
	skill: string;
	logo: string;
	payment_prof: string;
	full_name: string;
	email: string;
	phone: string;
	payment_method: string;
	payment_status: string;
	waivers_email: string;
	waivers_file: string;
	created_at: string;
	updated_at: string;
	status: string;
	team_members: TeamMember[];
}

interface TeamMember {
	id: number;
	mem_name: string;
	mem_email: string;
	mem_phone: string;
	logo: string | null;
	role: string;
	emergency_name: string;
	emergency_phone: string;
	team_id: number;
	created_at: string;
	updated_at: string;
}
const TournamentDetail = () => {
	const [tournamentDetails, setTournamentDetails] = useState<any>([]);
	const [teams, setTeams] = useState<Team[]>([]);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		if (id !== undefined) {
			fetchData();
		}
	}, [id]);
	const handleTeams = (teams: any) => {
		console.log(teams);
	}
	const fetchData = async () => {
		try {
			const response = await axios.get(process.env.API_URL + "/tournament-details/" + id, {});
			if (response.status === 200) {
				// console.log(response?.data?.data)
				setTournamentDetails(response.data.data);
				// if (response.data.data.teams?.length > 0) {
				// 	setTeams(response?.data?.data?.teams);
				// }

			}
		} catch (error) {
			console.log(error);
		}
	};
	if (!tournamentDetails) {
		return 'Loading...';
	}
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
						/>
						{tournamentDetails?.teams?.length > 0 ?
							<TournamentContent
								teams={tournamentDetails?.teams}
								handleTeams={handleTeams}
								is_player={true}
								allow_withdraw={tournamentDetails?.allow_withdraw}
							/>
							: ''
						}

					</div>
					<div id={style.overview}>
						<div className={style.contain}>

							<OverviewBlock details={tournamentDetails} />
							{/* {tournamentDetails?.teams?.length > 0 &&
										<TournamentTeams teams={tournamentDetails?.teams} />
									} */}
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default TournamentDetail
