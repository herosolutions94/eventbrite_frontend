import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoTeam01 } from "@/components/images"
import StartTournamentPopup from "@/pages/tournamentDetail/startTournamentPopup"
import Link from "next/link"
// import { SingleElimination } from "./eliminationBracket"

type TournamentHeaderProps = {
	category: string
	type: string
	title: string
	start_date: string
	end_date: string
	schedule_time: string
	overview: string
	acceptedTeamsCount:number | null
	tournamentId: number | null
	is_started:number | null,
	in_progress_round:any | null
}
const TournamentHeader = ({ category, type, title, start_date, end_date, schedule_time, overview,acceptedTeamsCount ,tournamentId,is_started,in_progress_round}: TournamentHeaderProps) => {
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
					acceptedTeamsCount!==null && acceptedTeamsCount >= 2 && is_started!=1 ?
				<div className={`${style.btn_blk} ps-4 ms-auto`}>
					<button type="button" className={`${style.site_btn} ${style.sm}`} onClick={() => setPopupShow({ show: true, item: tournamentId !== null ? tournamentId : null })}>
						Generate Bracket
					</button>
				</div>
				:
				is_started===1 ?
				in_progress_round!==null && in_progress_round?.id > 0 ?
				<div className={`${style.btn_blk} ps-4 ms-auto`}>
					<Link href={"/organizer/select-team/"+in_progress_round?.tournament_id+"/"+in_progress_round?.id} className={`${style.site_btn} ${style.sm}`}>
						Tournament Matches
					</Link>
				</div>
				:
				""
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
