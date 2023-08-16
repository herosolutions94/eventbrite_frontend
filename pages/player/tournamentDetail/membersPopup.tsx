import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoUser_01, PhotoUser_02, PhotoUser_03, PhotoUser_04, PhotoUser_05, PhotoUser_06, PhotoUser_07, PhotoUser_08, PhotoUser_09, PhotoUser_10 } from "@/components/images"

const MembersPopup = (props: any) => {
	const { popupClose,members } = props
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
												{members && members.map((member: any, index: number) => (
												<tr key={index}>
													<td>
														<div className={`${style.ico} ${style.fill} ${style.round}`}>
															<Image width={200} height={200} src={PhotoUser_01} alt="" />
														</div>
													</td>
													<td>{member.mem_name}</td>
													<td>{member.mem_email}</td>
													<td>{member.mem_phone}</td>
													<td>{member.role}</td>
													<td>{member.emergency_name}</td>
													<td>{member.emergency_phone}</td>
												</tr>
												))}

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
