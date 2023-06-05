import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoTeam01, PhotoTeam02, PhotoTeam03 } from "@/components/images"
import MembersPopup from "./membersPopup"

const TournamentContent = () => {
	const [membersPopup, setMembersPopup] = useState(false)
	const membersPopupHandle = () => {
		setMembersPopup(!membersPopup)
	}
	return (
		<>
			<div id={style.overview}>
				<div className={style.team_block}>
					<div className={style.icon}>
						<Image width={200} height={200} src={PhotoTeam01} alt="" />
					</div>
					<div className={style.text}>
						<ul className={style.team_list}>
							<li>
								<span>Team Name:</span>
								<strong>Triarchy</strong>
							</li>
							<li>
								<span>Team Captain:</span>
								<strong>Samira Jones</strong>
							</li>
						</ul>
					</div>
					<div className={style.btn_blk}>
						<button type="button" className={`${style.site_btn} ${style.sm}`} onClick={membersPopupHandle}>
							Show Members
						</button>
					</div>
				</div>
				<div className={style.team_block}>
					<div className={style.icon}>
						<Image width={200} height={200} src={PhotoTeam02} alt="" />
					</div>
					<div className={style.text}>
						<ul className={style.team_list}>
							<li>
								<span>Team Name:</span>
								<strong>Triarchy</strong>
							</li>
							<li>
								<span>Team Captain:</span>
								<strong>Samira Jones</strong>
							</li>
						</ul>
					</div>
					<div className={style.btn_blk}>
						<button type="button" className={`${style.site_btn} ${style.sm}`} onClick={membersPopupHandle}>
							Show Members
						</button>
					</div>
				</div>
				<div className={style.team_block}>
					<div className={style.icon}>
						<Image width={200} height={200} src={PhotoTeam03} alt="" />
					</div>
					<div className={style.text}>
						<ul className={style.team_list}>
							<li>
								<span>Team Name:</span>
								<strong>Triarchy</strong>
							</li>
							<li>
								<span>Team Captain:</span>
								<strong>Samira Jones</strong>
							</li>
						</ul>
					</div>
					<div className={style.btn_blk}>
						<button type="button" className={`${style.site_btn} ${style.sm}`} onClick={membersPopupHandle}>
							Show Members
						</button>
					</div>
				</div>
			</div>
			{membersPopup ? <MembersPopup popupClose={membersPopupHandle} /> : null}
		</>
	)
}

export default TournamentContent
