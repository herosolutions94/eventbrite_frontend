import React, { useState, useEffect } from "react"
import style from "@/styles/scss/app.module.scss"

const ConfirmDeletionPopup = (props: any) => {
	const { popupClose } = props
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
										<h4 className="mb-5">Confirm Deletion Team Member</h4>
										<div className={`${style.btn_blk} justify-content-center`}>
											<button type="button" className={`${style.site_btn} ${style.green}`}>
												No
											</button>
											<button type="button" className={`${style.site_btn} ${style.red}`}>
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
