import React from "react"
import style from "@/styles/scss/app.module.scss"
import MatchCard from "@/components/matchCard"
import { PhotoTeam01, PhotoTeam02, PhotoTeam03, PhotoTeam04, PhotoTeam05, PhotoTeam06, PhotoTeam07 } from "@/components/images"

type MatchesProps = {
	trandingMatches: any;
}

const Matches = (props: MatchesProps) => {
	function removeUploadsPrefix(str: string): string {
		const prefix = "uploads/";

		if (str.startsWith(prefix)) {
			console.log(process.env.ASSET_URL + str.slice(prefix.length))
			return process.env.ASSET_URL + str.slice(prefix.length);
		}
		return process.env.ASSET_URL + str;
	}
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
						{trandingMatches && trandingMatches.map((data: any) => {
							return <MatchCard
								title={data.title}
								team={data.teams?.[0]?.team_name}
								team_logo={data.teams?.[0]?.logo ? removeUploadsPrefix(data.teams?.[0]?.logo) : PhotoTeam01}
								date={data.start_date}
								time={data.schedule_time}
								stream_link={`/tournament-detail/${data.id}`}
								tags={data?.category?.name}

								text={'lorem ipsum'}

								img={removeUploadsPrefix(data?.tournament_logo ? data?.tournament_logo : data?.images[0]?.image)}
								key={data.id}
							/>
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default Matches
