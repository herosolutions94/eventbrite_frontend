import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoTeam01 } from "@/components/images"
// import { SingleElimination } from "./eliminationBracket"

type TournamentHeaderProps = {
	category: string
	type: string
	title: string
	start_date: string
	end_date: string
	schedule_time: string
	overview: string
}
const TournamentHeader = ({ category, type, title, start_date, end_date, schedule_time, overview }: TournamentHeaderProps) => {
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
				<div className={`${style.btn_blk} ps-4 ms-auto`}>
					<button type="button" className={`${style.site_btn} ${style.sm}`}>
						Generate Bracket
					</button>
				</div>
			</div>
			<div className={style.content}>
				<h5>Tournament Overview</h5>
				<div dangerouslySetInnerHTML={{ __html: overview }} />
			</div>
			<div id={style.tournament_bracket}>
				{/* <SingleElimination /> */}
				<div className="my_gracket"></div>
			</div>
		</>
	)
}

export default TournamentHeader
