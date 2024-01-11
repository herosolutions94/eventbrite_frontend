import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoTeam01, PhotoTeam02, PhotoTeam03 } from "@/components/images"
import MembersPopup from "./membersPopup"
import ConfirmDeletionPopup from "../../tournamentDetail/confirmDeletionPopup"
import ConfirmAcceptancePopup from "@/pages/tournamentDetail/confirmAcceptancePopup"
interface TeamMember {
	id: number;
	role: string;
	mem_name:string
	// ... add other properties if needed
  }
  interface Team {
	id: number;
	team_name: string;
	team_members: TeamMember[];
	// ... add other properties if needed
  }
const TournamentContent = (props: any) => {
	const teams: Team[] =props?.teams
	// const {teams} = props
	const [membersPopup, setMembersPopup] = useState(false)
	const [members, setMembers] = useState([])

	const [deletePopup , setDeletePopup] = useState(false)
	const [acceptPopup , setAcceptPopup] = useState({show:false,team_id:null})
	const [deleteId , setDeleteId] = useState('')

	const membersPopupHandle = (members: any) => () => {
		setMembers(members)
		setMembersPopup(!membersPopup)
	}
	const deletePopupHandle = () => {
		setDeletePopup(!deletePopup)
	}
	const handleCloseMembersPopup = () => {
		setMembersPopup(false)
	}	
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
							<li>
								
								
								{team.team_members.length > 0 ? (
									<strong>
										{
											team?.team_members && team?.team_members.map((member: any, index: number) => (
												member?.role === 'captain' ? 
												<span className={style.team_list_li_span} key={index}>Team Captain:{member?.mem_name }</span>
												: 
												""
											))
											}
											
											</strong>
								) : (
									'N/A'
								)}
							</li>
						</ul>
					</div>
					{team.team_members.length > 0 ? (
						<div className={style.btn_blk}>
							<div className={style.icon}>
							<a href="#" download>
								{team.payment_prof ? (
									<Image width={200} height={200} src={process.env.ASSET_URL + team.payment_prof} alt="" />
								) : (
									<Image width={200} height={200} src={PhotoTeam01} alt="" />
								)}
							</a>
							</div>	
							<button 
								type="button" 
								className={`${style.site_btn} ${style.sm}`} 
								onClick={membersPopupHandle(team.team_members)}
							>
								Show Members
							</button>
							{
								team?.status==='pending' ?
							<>
							<button 
								type="button" 
								className={`${style.site_btn} ${style.sm} ${style.accept_btn}`} 
								onClick={
									() => {
										setAcceptPopup({show:true,team_id:team?.id})
									}
								}
							>
								Accept
							</button>
							<button 
								type="button" 
								className={`${style.site_btn} ${style.sm}`} 
								onClick={
									() => {
										setDeletePopup(true)
										setDeleteId(team.id)
									}
								}
							>
								Delete
							</button>
							</>
							:
							<span className={style.accepted_badge}>Accepted</span>
}
						</div>
					) : null}
				</div>
				))}
			</div>
			{membersPopup ? <MembersPopup 
								popupClose={handleCloseMembersPopup} 
								members={members}
							/> : null}
			{deletePopup ? 
				<ConfirmDeletionPopup 
					popupClose={deletePopupHandle}
					deleteId={deleteId}
					teams={teams}
				/>:null}
			{acceptPopup?.show ? 
				<ConfirmAcceptancePopup 
					popupClose={setAcceptPopup}
					acceptId={acceptPopup?.team_id}
					teams={teams}
				/>:null}
		</>
	)
}

export default TournamentContent
