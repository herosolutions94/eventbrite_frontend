import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoTeam01, PhotoTeam02, PhotoUser_01, PhotoUser_02, PhotoUser_03, PhotoUser_04, PhotoUser_05, PhotoUser_06, PhotoUser_07, PhotoUser_08, PhotoUser_09, PhotoUser_10 } from "@/components/images"


type ReviewsProps = {
	teams : any
}
const TournamentTeams = (teams: ReviewsProps ) => {
	console.log(teams?.teams);
	const teamsData = teams?.teams;
	return (
		<>
			<div className={style.blk}>
				<h5 className="mb-4">Tournament Teams</h5>
				
				{teamsData?.map((team:any) => (
				<div className={style.team_block}>
					<div className={style.icon}>
						<Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
					</div>
					<div className={style.text}>
						<ul className={style.team_list}>
							<li>
								<span>Team Name:</span>
								<strong>{team?.team_name}</strong>
							</li>
							<li>
								<span>Team Captain:</span>
								<strong>{team?.full_name}</strong>
							</li>
							<li>
								<span>Team Members:</span>
								<ul className={style.team_list_member}>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_02} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_03} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_04} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_05} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_06} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_07} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_08} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_09} alt="" />
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					
				</div>
				
				))}
				{/* <div className={style.team_block}>
					<div className={style.icon}>
						<Image width={200} height={200} src={PhotoTeam02} alt="Team Logo" />
					</div>
					<div className={style.text}>
						<ul className={style.team_list}>
							<li>
								<span>Team Name:</span>
								<strong>Teuton Sons</strong>
							</li>
							<li>
								<span>Team Captain:</span>
								<strong>John Wick</strong>
							</li>
							<li>
								<span>Team Members:</span>
								<ul className={style.team_list_member}>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_07} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_10} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_02} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_03} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_04} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_08} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_09} alt="" />
										</div>
									</li>
									<li>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_05} alt="" />
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div> */}
			</div>
		</>
	)
}

export default TournamentTeams
