import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoUser_01, PhotoUser_02, PhotoUser_03, PhotoUser_04, PhotoUser_05, PhotoUser_06, PhotoUser_07, PhotoUser_08, PhotoUser_09, PhotoUser_10 } from "@/components/images"

const MembersPopup = (props: any) => {
	const { popupClose } = props
	return (
		<>
			<div id={style.add_team_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className={style._inner}>
								<button type="button" className={style.x_btn} onClick={popupClose}></button>
								<h4 className="mb-5">Team Members</h4>
								<div className={style.table_blk_wrap}>
									<div className={style.table_blk}>
										<table>
											<thead>
												<tr>
													<th>Image</th>
													<th>Full Name</th>
													<th>Email Address</th>
													<th>Phone Number</th>
													<th>Role/Position</th>
													<th>Emergency Contact Name</th>
													<th>Emergency Contact Phone</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div className={`${style.ico} ${style.fill} ${style.round}`}>
															<Image width={200} height={200} src={PhotoUser_01} alt="" />
														</div>
													</td>
													<td>John Wick</td>
													<td>sample@gmail.com</td>
													<td>194349034234</td>
													<td>Captain</td>
													<td>Monica Cajarval</td>
													<td>194349034234</td>
												</tr>
												<tr>
													<td>
														<div className={`${style.ico} ${style.fill} ${style.round}`}>
															<Image width={200} height={200} src={PhotoUser_02} alt="" />
														</div>
													</td>
													<td>John Wick</td>
													<td>sample@gmail.com</td>
													<td>194349034234</td>
													<td>Captain</td>
													<td>Monica Cajarval</td>
													<td>194349034234</td>
												</tr>
												<tr>
													<td>
														<div className={`${style.ico} ${style.fill} ${style.round}`}>
															<Image width={200} height={200} src={PhotoUser_03} alt="" />
														</div>
													</td>
													<td>John Wick</td>
													<td>sample@gmail.com</td>
													<td>194349034234</td>
													<td>Captain</td>
													<td>Monica Cajarval</td>
													<td>194349034234</td>
												</tr>
												<tr>
													<td>
														<div className={`${style.ico} ${style.fill} ${style.round}`}>
															<Image width={200} height={200} src={PhotoUser_04} alt="" />
														</div>
													</td>
													<td>John Wick</td>
													<td>sample@gmail.com</td>
													<td>194349034234</td>
													<td>Captain</td>
													<td>Monica Cajarval</td>
													<td>194349034234</td>
												</tr>
												<tr>
													<td>
														<div className={`${style.ico} ${style.fill} ${style.round}`}>
															<Image width={200} height={200} src={PhotoUser_05} alt="" />
														</div>
													</td>
													<td>John Wick</td>
													<td>sample@gmail.com</td>
													<td>194349034234</td>
													<td>Captain</td>
													<td>Monica Cajarval</td>
													<td>194349034234</td>
												</tr>
												<tr>
													<td>
														<div className={`${style.ico} ${style.fill} ${style.round}`}>
															<Image width={200} height={200} src={PhotoUser_06} alt="" />
														</div>
													</td>
													<td>John Wick</td>
													<td>sample@gmail.com</td>
													<td>194349034234</td>
													<td>Captain</td>
													<td>Monica Cajarval</td>
													<td>194349034234</td>
												</tr>
												<tr>
													<td>
														<div className={`${style.ico} ${style.fill} ${style.round}`}>
															<Image width={200} height={200} src={PhotoUser_07} alt="" />
														</div>
													</td>
													<td>John Wick</td>
													<td>sample@gmail.com</td>
													<td>194349034234</td>
													<td>Captain</td>
													<td>Monica Cajarval</td>
													<td>194349034234</td>
												</tr>
												<tr>
													<td>
														<div className={`${style.ico} ${style.fill} ${style.round}`}>
															<Image width={200} height={200} src={PhotoUser_08} alt="" />
														</div>
													</td>
													<td>John Wick</td>
													<td>sample@gmail.com</td>
													<td>194349034234</td>
													<td>Captain</td>
													<td>Monica Cajarval</td>
													<td>194349034234</td>
												</tr>
												<tr>
													<td>
														<div className={`${style.ico} ${style.fill} ${style.round}`}>
															<Image width={200} height={200} src={PhotoUser_09} alt="" />
														</div>
													</td>
													<td>John Wick</td>
													<td>sample@gmail.com</td>
													<td>194349034234</td>
													<td>Captain</td>
													<td>Monica Cajarval</td>
													<td>194349034234</td>
												</tr>
												<tr>
													<td>
														<div className={`${style.ico} ${style.fill} ${style.round}`}>
															<Image width={200} height={200} src={PhotoUser_10} alt="" />
														</div>
													</td>
													<td>John Wick</td>
													<td>sample@gmail.com</td>
													<td>194349034234</td>
													<td>Captain</td>
													<td>Monica Cajarval</td>
													<td>194349034234</td>
												</tr>
											</tbody>
										</table>
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

export default MembersPopup
