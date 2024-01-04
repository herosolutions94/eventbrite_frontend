import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoTeam01 } from "@/components/images"
import StartTournamentPopup from "@/pages/tournamentDetail/startTournamentPopup"
// import { SingleElimination } from "./eliminationBracket"

type TournamentHeaderProps = {
	category: string
	type: string
	title: string
	start_date: string
	end_date: string
	schedule_time: string
	overview: string
	acceptedTeamsCount:number
	tournamentId: number | null
}
const TournamentHeader = ({ category, type, title, start_date, end_date, schedule_time, overview,acceptedTeamsCount ,tournamentId}: TournamentHeaderProps) => {
	const [popupShow, setPopupShow] = useState<{ show: boolean; item: number | null }>({
		show: false,
		item: null,
	  });
	const TogglePoup = () =>{
		setPopupShow({show:false,item:null});
	}
	return (
		<>
			<div className={style.data}>
				<div className={style.data_logo}>
					<Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
				</div>
				<div className={style.data_text}>
					<div className={style.tags_blk}>
						<strong className={style.text_prime}>{category}</strong>
						<span className={style.tag}>{type}</span>
					</div>
					<h2>{title}</h2>
					<ul className={style.date_time_list}>
						<li>
							Start Date: <span>{start_date}</span>
						</li>
						<li>●</li>
						<li> {end_date}</li>
						<li>●</li>
						<li>
							Time: <span>{schedule_time}</span>
						</li>
					</ul>
				</div>
				{
					acceptedTeamsCount >= 2 ?
				<div className={`${style.btn_blk} ps-4 ms-auto`}>
					<button type="button" className={`${style.site_btn} ${style.sm}`} onClick={() => setPopupShow({ show: true, item: tournamentId !== null ? tournamentId : null })}>
						Generate Bracket
					</button>
				</div>
				:
				""
}
			</div>
			<div className={style.content}>
				<h5>Tournament Overview</h5>
				<div dangerouslySetInnerHTML={{ __html: overview }}></div>
			</div>
			<div id={style.tournament_bracket}>
				{/* <SingleElimination /> */}
				<div className="my_gracket"></div>
			</div>

			{/* ===============popup=============== */}
			<StartTournamentPopup popupShow={popupShow} TogglePoup={TogglePoup} />
		</>
	)
}

export default TournamentHeader
