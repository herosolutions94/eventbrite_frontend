import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoTeam01, PhotoTeam02, PhotoTeam03 } from "@/components/images"
import MembersPopup from "./membersPopup"
import ConfirmationPopup from "./ConfirmationPopup"
import ConfirmDeletionPopup from "../../tournamentDetail/confirmDeletionPopup"

const TournamentContent = (props: any) => {
	const { teams, handleTeams, is_player = false,allow_withdraw=null } = props
	const [membersPopup, setMembersPopup] = useState(false)
	const [members, setMembers] = useState([])
	const membersPopupHandle = () => {
		setMembersPopup(!membersPopup)
	}

	const deletePopupHandle = () => {
		setDeletePopup(!deletePopup)
	}
	const [deletePopup, setDeletePopup] = useState(false)
	const [deleteId, setDeleteId] = useState<any>(null);
	return (
		<>
			<div id={style.overview}>
				{teams && teams.map((team: any, index: number) => (
					<div className={style.team_block} key={index}>
						<div className={style.icon}>
							{team.logo ? (
								<Image width={200} height={200} src={process.env.ASSET_URL + team.logo} alt="" />
							) : (
								<Image width={200} height={200} src={PhotoTeam01} alt="" />
							)}
						</div>
						<div className={style.text}>
							<ul className={style.team_list}>
								<li>
									<span>Team Name:</span>
									<strong>{team.team_name}</strong>
								</li>
								{/* <li>
									{team?.team_members?.length > 0 ? (
										<strong>{
											team?.team_members?.find(
												(member: any) =>
													member?.role === 'captain' ?
														<span>Team Captain:{member.mem_name}</span>
														:
														""
											)
										}</strong>
									) : (
										'N/A'
									)}
								</li> */}
							</ul>
						</div>
						{team.team_members.length > 0 ? (
							<div className={style.btn_blk}>
								<button
									type="button"
									className={`${style.site_btn} ${style.sm}`}
									onClick={
										() => {
											setMembers(team.team_members)
											setMembersPopup(true)
										}
									}
								>
									Show Members
								</button>
								{
									is_player && team?.status !== 'accepted' && allow_withdraw===1 ?
										<button
											type="button"
											className={`${style.site_btn} ${style.sm}`}
											onClick={
												() => {
													deletePopupHandle()
													setDeleteId(team?.id)
												}
											}
										>
											Withdraw Your Team
										</button>
										:
										""
								}
								{
							team?.status === 'accepted' ?
								<span className={style.accepted_badge}>Accepted</span>
								:
								""
						}
							</div>
						) : null}
						

					</div>
				))}
			</div>
			{membersPopup ? <MembersPopup
				popupClose={membersPopupHandle}
				members={members}
			/> : null}
			{deletePopup ?
				<ConfirmDeletionPopup
					popupClose={deletePopupHandle}
					deleteId={deleteId}
					teams={teams}
					handleTeams={handleTeams}
				/> : null}
		</>
	)
}

export default TournamentContent
