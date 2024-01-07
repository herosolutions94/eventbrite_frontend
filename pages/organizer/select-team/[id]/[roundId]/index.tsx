import React, { useEffect , useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import { useRouter } from 'next/router';	
import axios from "axios"

const SelectTeam = () => {
	const router = useRouter();
	const matches =[
		[
			{ name: "Erik Zettersten", id: "erik-zettersten", seed: 1, displaySeed: "D1", score: 47 },
			{ name: "Andrew Miller", id: "andrew-miller", seed: 2 },
		],
		[
			{ name: "James Coutry", id: "james-coutry", seed: 3 },
			{ name: "Sam Merrill", id: "sam-merrill", seed: 4 },
		],
		[
			{ name: "Anothy Hopkins", id: "anthony-hopkins", seed: 5 },
			{ name: "Everett Zettersten", id: "everett-zettersten", seed: 6 },
		],
		[
			{ name: "John Scott", id: "john-scott", seed: 7 },
			{ name: "Teddy Koufus", id: "teddy-koufus", seed: 8 },
		],
		[
			{ name: "Arnold Palmer", id: "arnold-palmer", seed: 9 },
			{ name: "Ryan Anderson", id: "ryan-anderson", seed: 10 },
		],
		[
			{ name: "Jesse James", id: "jesse-james", seed: 1 },
			{ name: "Scott Anderson", id: "scott-anderson", seed: 12 },
		],
		[
			{ name: "Josh Groben", id: "josh-groben", seed: 13 },
			{ name: "Sammy Zettersten", id: "sammy-zettersten", seed: 14 },
		],
		[
			{ name: "Jake Coutry", id: "jake-coutry", seed: 15 },
			{ name: "Spencer Zettersten", id: "spencer-zettersten", seed: 16 },
		],
	];
	const [tournamentDetails, setTournamentDetails] = useState<any>([]);
	const [teams, setTeams] = useState<any>([]);
	const [acceptedTeamsCount, setAcceptedTeamsCount] = useState<any>(0);
	
	const { id,roundId } = router.query;
	useEffect(() => {
		if(id !== undefined){
			fetchData();
		}
	}, [id]);
	const fetchData = async () => {
		try {
			const response = await axios.get(process.env.API_URL + "/tournament-round-details/" + id+"/"+roundId, {});
			if (response.status === 200) {
				if(response?.data?.data?.is_started!==1){
					router.push("/organizer/tournamanet-detail/"+response?.data?.data?.id);return;
				}
				setTournamentDetails(response.data.data);
				setTeams(response.data.data.teams);
				setAcceptedTeamsCount(response?.data?.acceptedTeamsCount)
			}
		} catch (error) {
			console.log(error);
		}
	};
	if(!tournamentDetails || tournamentDetails===null || tournamentDetails===undefined){
		return 'Loading...';
	}
	console.log(tournamentDetails)
	return (
		<>
			<Header pageTitle="Select Team" />
			<section className={`${style.dashboard} ${style.organizer_detail}`} id={style.tournament_select_team}>
				<div className={style.contain}>
					<div id={style.select_teams} className={style.blk}>
						<div className={style.round_blk_wrapper}>
							<div className={style.round_blk}>
								<h4 className="mb-4">Round {tournamentDetails?.round?.round_no}</h4>
								{
									tournamentDetails?.round?.matches?.length > 0 ?
									tournamentDetails?.round?.matches?.map((match: any, index: number)=>{
										return(
<div className={`${style.match_blk} mb-5`} key={index}>
									<h6 className={style.text_prime}>Match {index + 1}</h6>
									<div className={style.match_team_blk}>
										<div className={style.inner_blk}>
											<div className={style.input}>
												<span >{match?.team_1?.team_name}</span>
												<input type="number" className={style.input} placeholder="Team 1 Score" />
											</div>
											<div className={style.input}>
												<span>{match?.team_2?.team_name}</span>
												<input type="number" className={style.input} placeholder="Team 2 Score" />
											</div>
										</div>
										<select name="" id="" className={style.input}>
											<option value="">Select Winner</option>
											<option value={match?.team_1?.id}>{match?.team_1?.team_name}</option>
											<option value={match?.team_2?.id}>{match?.team_2?.team_name}</option>
										</select>
									</div>
								</div>
										)
									})
									:
									""
								}
								
								
								<div className={`${style.btn_blk} mt-5`}>
									<button type="button" className={style.read_more_btn}>
										Add New Match
									</button>
									<br />
									<button type="button" className={`${style.site_btn} w-100`}>
										Start Round
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default SelectTeam
