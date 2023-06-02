import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import { IconHeart, PhotoAbout, PhotoBlog02, PhotoMainSlide, PhotoTeam01 } from "@/components/images"
import Image from "next/image"
import AddTeamPopup from "./addTeamPopup"

const TournamentBanner =(details:any) => {
	const [addTeamPopup, setAddTeamPopup] = useState(false)
	const addTeamPopupHandle = () => {
		setAddTeamPopup(!addTeamPopup)
	}
	console.log(details?.details.title)
	return (
		<>
			<div className={style.banner}>
				<div className={style.contain}>
					<div className={style.image_blk}>
						<div className={style.image}>
							<Image width={1000} height={1000} src={PhotoBlog02} alt="" />
						</div>
						<div className={style.image}>
							<Image width={1000} height={1000} src={PhotoAbout} alt="" />
						</div>
						<div className={style.image}>
							<Image width={1000} height={1000} src={PhotoMainSlide} alt="" />
						</div>
					</div>
					<div className={style.data}>
						<div className={style.data_logo}>
							<Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
						</div>
						<div className={style.data_text}>
							<div className={style.tags_blk}>
								<strong className={style.text_prime}>Double Elimination</strong>
								<span className={style.tag}>Sport</span>
							</div>
							<h2>{details?.details.title}</h2>
							<div className={`${style.btn_blk} align-items-center`}>
								<button type="button" className={style.site_btn} onClick={addTeamPopupHandle}>
									Add your Team
								</button>
								<button className={style.heart_btn}>
									<Image width={40} height={40} src={IconHeart} alt="Heart" /> Add to wishlist
								</button>
							</div>
							<ul className={style.date_time_list}>
								<li>Start Date: <span>
									{new Date(details?.details?.start_date).toLocaleDateString('en-US', {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
								})}</span></li>
								<li>●</li>
								<li> {new Date(details?.details?.schedule_date).toLocaleDateString('en-US', {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
								})}</li>
								<li>●</li>
								<li>Time: <span>{details?.details?.schedule_time}</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{addTeamPopup ? <AddTeamPopup popupClose={addTeamPopupHandle} /> : null}
		</>
	)
}

export default TournamentBanner
