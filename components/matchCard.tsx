import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { IconCalendar, PhotoVS } from "./images"
import Link from "next/link"

const MatchCard = (props: any) => {
	const { title, team, team_logo, date, time, stream_link, tags } = props
	return (
		<>
			<div className={style.match_card}>
				<div className={style.teams}>
					<div className={style.member}>
						<div className={style.icon}>
							<Image width={400} height={400} src={team_logo} alt="" />
						</div>
						<div className={style.name}>{team}</div>
					</div>
				</div>
				<div className={style.txt}>
					<ul className={style.tags}>
						<li>
							<span>all matches</span>
						</li>
						<li>
							<span>latest results </span>
						</li>
						<li>
							<span> upcoming</span>
						</li>
					</ul>
					{/* {tags.map((txt: any) => {
						return <p>{txt}</p>
					})} */}
					{/* <ul className={style.tags}>
						{tags.map((data: any) => {
							return (
								<li>
									<span>{data.split(",")}</span>
								</li>
							)
						})}
					</ul> */}
					<h4>{title}</h4>
					<div className={style.date}>
						<Image width={100} height={100} src={IconCalendar} alt="" /> {date}
					</div>
				</div>
				<div className={style.time}>{time}</div>
				<Link href={stream_link}></Link>
			</div>
		</>
	)
}

export default MatchCard
