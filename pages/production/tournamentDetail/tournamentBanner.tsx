import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import { IconHeart, PhotoAbout, PhotoBlog02, PhotoMainSlide, PhotoTeam01 } from "@/components/images"
import Image from "next/image"
import AddTeamPopup from "./addTeamPopup"

const TournamentBanner =(details:any,fetchData:any) => {
	const [addTeamPopup, setAddTeamPopup] = useState(false)
	const addTeamPopupHandle = () => {
		setAddTeamPopup(!addTeamPopup)
	}
	return (
		<>
			<div className={style.banner}>
				<div className={style.contain}>
					<div className={style.image_blk}>
						{details?.details?.images?.length > 0 ? (
							details?.details?.images.map((image:any, index:any) => {
							if(image.caption === "banner"){
								return <div className={style.image} key={index}>
									<Image
										width={1000}
										height={1000}
										src={process.env.ASSET_URL + image.image}
										alt=""
									/>
								</div>
							}
						})
						) :null}
					
					</div>
					<div className={style.data}>
						<div className={style.data_logo}>
						{details?.details?.images?.length > 0 ? (
							<Image width={200} height={200} src={process.env.ASSET_URL +  details?.details?.images[0].image} alt="Team Logo" />
						) :
							// <Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
							null
						}
						</div>
						<div className={style.data_text}>
							<div className={style.tags_blk}>

								{details?.details?.tournament_type?.name ? (
									<strong className={style.text_prime}>{details?.details?.tournament_type?.name}</strong>
								) : null}
									
								{details?.details?.category?.name ? (
									<span className={style.tag}>{details?.details?.category?.name}</span>
								) : null}
							</div>
							<h2>{details?.details?.title}</h2>
							<div className={`${style.btn_blk} align-items-center`}>
								<button type="button" className={style.site_btn} onClick={addTeamPopupHandle}>
									Add your Team
								</button>
								<button className={style.heart_btn}>
									<Image width={40} height={40} src={IconHeart} alt="Heart" /> Add to wishlist
								</button>
							</div>
							<ul className={style.date_time_list_update}>
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
			{addTeamPopup ? 
				<AddTeamPopup 
					popupClose={addTeamPopupHandle}
					tournamentId = {details?.details?.id} 
					fetchData={fetchData}

				/> : null}
		</>
	)
}

export default TournamentBanner
