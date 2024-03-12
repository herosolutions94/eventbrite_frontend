import React, { useState, useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/router"

const ConfirmDeletionPopup = (props: any) => {
	const router = useRouter()
	const { popupClose, deleteId, teams, handleTeams } = props
	const handleDelete = async (id: any) => {
		try {
			if (id) {
				const res = await axios.delete(
					`${process.env.API_URL}/teams/${id}`
				)
				if (res.status === 200) {
					toast.success("Team deleted successfully")
					popupClose()
					teams.splice(teams.findIndex((team: any) => team.id === id), 1)
					// handleTeams(teams)
					// window.location.reload()
					router.push("/player/booking");
				}
			}
		} catch (err) {
			console.log(err)
		}
	}
	console.log(deleteId)
	return (
		<>
			<div id={style.add_team_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className="row justify-content-center">
								<div className="col-md-6">
									<div className={style._inner}>
										<button type="button" className={style.x_btn} onClick={popupClose}></button>
										<h4 className="mb-5">Confirm Deletion Team</h4>
										<div className={`${style.btn_blk} justify-content-center`}>
											<button type="button" className={`${style.site_btn} ${style.green}`} onClick={popupClose}>
												No
											</button>
											<button
												type="button"
												className={`${style.site_btn} ${style.red}`}
												onClick={
													() => {
														handleDelete(deleteId)
													}
												}
											>
												Yes
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ConfirmDeletionPopup
