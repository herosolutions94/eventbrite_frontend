import React, { useState, useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import Cookies from "js-cookie"

const ConfirmAcceptancePopup = (props: any) => {
	const { popupClose, acceptId, teams } = props
	const handleAccept = async (id: any) => {
		try {
			if (id) {
				const res = await axios.post(`${process.env.API_URL}/accept_team/${id}`, {
					user_id: Cookies.get("user_id"),
				}, {
					headers: {
						Authorization: `Bearer ${Cookies.get("token")}`,
					},
				});
				if (res.status === 200) {
					if (res?.data?.status === 1) {
						toast.success(res?.data?.msg)
						popupClose({ show: false, team_id: null })
						// handleTeams(teams)
						setTimeout(() => {
							window.location.reload()
						}, 2000);
					}
					else {
						toast.error(res?.data?.msg)
					}

				}
			}
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<>
			<ToastContainer />
			<div id={style.add_team_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className="row justify-content-center">
								<div className="col-md-6">
									<div className={style._inner}>
										<button type="button" className={style.x_btn} onClick={() => popupClose({ show: false, team_id: null })}></button>
										<h4 className="mb-5">Confirm Acceptance of Team</h4>
										<div className={`${style.btn_blk} justify-content-center`}>
											<button type="button" className={`${style.site_btn} ${style.red}`} onClick={() => popupClose({ show: false, team_id: null })}>
												No
											</button>
											<button
												type="button"
												className={`${style.site_btn} ${style.green}`}
												onClick={
													() => {
														handleAccept(acceptId)
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

export default ConfirmAcceptancePopup
