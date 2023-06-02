import React from "react"
import style from "@/styles/scss/app.module.scss"
import TablePagination from "@/components/tablePagination"
import Link from "next/link"
import Image from "next/image"
import { PhotoUser_01, PhotoUser_02, PhotoUser_03, PhotoUser_04, PhotoUser_05, PhotoUser_06, PhotoUser_07 } from "@/components/images"

const NotificationsTable = () => {
	return (
		<>
			<div className={style.table_blk_wrap}>
				<div className={style.table_blk}>
					<table>
						<tbody>
							<tr>
								<td>
									<div className={style.noti_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Link href="?">
												<Image width={400} height={400} src={PhotoUser_01} alt="" />
											</Link>
										</div>
										<div className={style.txt}>
											<h6>New Comment</h6>
											<p>
												Jannifer Kem commented on your order <Link href="?">click here</Link> to view comment.
											</p>
										</div>
									</div>
								</td>
								<td className={`${style.time} text-end`}>2 hours ago</td>
							</tr>
							<tr>
								<td>
									<div className={style.noti_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Link href="?">
												<Image width={400} height={400} src={PhotoUser_02} alt="" />
											</Link>
										</div>
										<div className={style.txt}>
											<h6>Booking Request</h6>
											<p>
												You have a new booking request from Samira Jones <Link href="?">Accept</Link> or <Link href="?">Decline</Link>
											</p>
										</div>
									</div>
								</td>
								<td className={`${style.time} text-end`}>7 hours ago</td>
							</tr>
							<tr>
								<td>
									<div className={style.noti_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Link href="?">
												<Image width={400} height={400} src={PhotoUser_03} alt="" />
											</Link>
										</div>
										<div className={style.txt}>
											<h6>New Order</h6>
											<p>
												You have created a new order for Jennifer Kem <Link href="?">click here</Link> to view detail.
											</p>
										</div>
									</div>
								</td>
								<td className={`${style.time} text-end`}>Yesterday at 5:32 am</td>
							</tr>
							<tr>
								<td>
									<div className={style.noti_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Link href="?">
												<Image width={400} height={400} src={PhotoUser_04} alt="" />
											</Link>
										</div>
										<div className={style.txt}>
											<h6>New Order</h6>
											<p>
												John Wick send a new order to you <Link href="?">click here</Link> to view detail.
											</p>
										</div>
									</div>
								</td>
								<td className={`${style.time} text-end`}>Yesterday at 5:32 am</td>
							</tr>
							<tr>
								<td>
									<div className={style.noti_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Link href="?">
												<Image width={400} height={400} src={PhotoUser_05} alt="" />
											</Link>
										</div>
										<div className={style.txt}>
											<h6>Leave a Review</h6>
											<p>
												Leave a review on your experience with Jennifer Kem <Link href="?">click here</Link>
											</p>
										</div>
									</div>
								</td>
								<td className={`${style.time} text-end`}>Yesterday at 6:20 am</td>
							</tr>
							<tr>
								<td>
									<div className={style.noti_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Link href="?">
												<Image width={400} height={400} src={PhotoUser_06} alt="" />
											</Link>
										</div>
										<div className={style.txt}>
											<h6>Rated a Review</h6>
											<p>You rated Jennifer Kem with 5 stars.</p>
										</div>
									</div>
								</td>
								<td className={`${style.time} text-end`}>Yesterday at 5:32 am</td>
							</tr>
							<tr>
								<td>
									<div className={style.noti_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Link href="?">
												<Image width={400} height={400} src={PhotoUser_07} alt="" />
											</Link>
										</div>
										<div className={style.txt}>
											<h6>New Comment</h6>
											<p>
												Jannifer Kem commented on your order <Link href="?">click here</Link> to view comment.
											</p>
										</div>
									</div>
								</td>
								<td className={`${style.time} text-end`}>March 18 at 8:22 p.m.</td>
							</tr>
						</tbody>
					</table>
				</div>
				<TablePagination />
			</div>
		</>
	)
}

export default NotificationsTable
