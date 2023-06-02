import React from "react"
import style from "@/styles/scss/app.module.scss"
import MatchCard from "@/components/matchCard"
import { PhotoTeam01, PhotoTeam02, PhotoTeam03, PhotoTeam04, PhotoTeam05, PhotoTeam06, PhotoTeam07 } from "@/components/images"

const MATCH_CARD = [
	{
		id: 1,
		title: "NECROMANCY AMPLIFIER",
		team: "TRIARCHY",
		team_logo: PhotoTeam01,
		date: "31st December 2022, 07:00",
		time: "07:15",
		stream_link: "/production/tournament-detail",
		tags: "all matches, latest results, upcoming",
	},
	{
		id: 2,
		title: "Legendary Battles",
		team: "TEUTON SONS",
		team_logo: PhotoTeam02,
		date: "20th October 2022, 12:00",
		time: "12:30",
		stream_link: "/production/tournament-detail",
		tags: "all matches, latest results, upcoming",
	},
	{
		id: 3,
		title: "Battle Creek Onslaught",
		team: "KAIJU RED",
		team_logo: PhotoTeam03,
		date: "15th February 2023, 15:00",
		time: "15:00",
		stream_link: "/production/tournament-detail",
		tags: "all matches, latest results, upcoming",
	},
	{
		id: 4,
		title: "Nay Corral Gundown",
		team: "HACKSAW",
		team_logo: PhotoTeam04,
		date: "14th September 2022, 15:00",
		time: "07:15",
		stream_link: "/production/tournament-detail",
		tags: "all matches, latest results, upcoming",
	},
]

type MatchesProps = {
	trandingMatches : any;
}
const Matches = (props: MatchesProps) => {
	const { trandingMatches } = props;
	return (
		<>
			<section id={style.matches}>
				<div className={style.contain}>
					<div className={style.content + " text-center"}>
						<h5 className={style.subheading}>Tournaments</h5>
						<h2>Trending Tournaments</h2>
					</div>
					<div className={style.match_cards}>
						{MATCH_CARD.map((data) => {
							return <MatchCard {...data} key={data.id} />
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default Matches
