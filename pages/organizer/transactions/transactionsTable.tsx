import React from "react"
import style from "@/styles/scss/app.module.scss"
import TablePagination from "@/components/tablePagination"
import Link from "next/link"

const TransactionsTable = () => {
	return (
		<>
			<div className={style.table_blk_wrap}>
				<div className={style.table_blk}>
					<table>
						<thead>
							<tr>
								<th>Order No.</th>
								<th>Owner Name</th>
								<th>Tournament</th>
								<th style={{ width: "14rem" }}>Amount</th>
								<th>Date</th>
								<th style={{ width: "8rem" }}>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>000011</td>
								<td>John Wick</td>
								<td>
									<Link href="production/tournament-detail">NECROMANCY AMPLIFIER</Link>
								</td>
								<td className={style.price}>$10.00</td>
								<td>Fri, 12 Nov 2021</td>
								<td>
									<span className={`${style.badge} ${style.green}`}>Completed</span>
								</td>
							</tr>
							<tr>
								<td>000010</td>
								<td>Brent Phillips</td>
								<td>
									<Link href="production/tournament-detail">Legendary Battles</Link>
								</td>
								<td className={style.price}>$30.00</td>
								<td>Tue, 09 Nov 2021</td>
								<td>
									<span className={`${style.badge} ${style.green}`}>Completed</span>
								</td>
							</tr>
							<tr>
								<td>000009</td>
								<td>Monica Cajrval</td>
								<td>
									<Link href="production/tournament-detail">Battle Creek Onslaught</Link>
								</td>
								<td className={style.price}>$60.00</td>
								<td>Wed, 03 Nov 2021</td>
								<td>
									<span className={`${style.badge} ${style.green}`}>Completed</span>
								</td>
							</tr>
							<tr>
								<td>000008</td>
								<td>Sasha Smith</td>
								<td>
									<Link href="production/tournament-detail">Nay Corral Gundown</Link>
								</td>
								<td className={style.price}>$10.00</td>
								<td>Wed, 27 Oct 2021</td>
								<td>
									<span className={`${style.badge} ${style.green}`}>Completed</span>
								</td>
							</tr>
							<tr>
								<td>000007</td>
								<td>Lara Benz</td>
								<td>
									<Link href="production/tournament-detail">NECROMANCY AMPLIFIER</Link>
								</td>
								<td className={style.price}>$65.00</td>
								<td>Thu, 30 Sep 2021</td>
								<td>
									<span className={`${style.badge} ${style.green}`}>Completed</span>
								</td>
							</tr>
							<tr>
								<td>000003</td>
								<td>Tom Hankle</td>
								<td>
									<Link href="production/tournament-detail">Legendary Battles</Link>
								</td>
								<td className={style.price}>$50.00</td>
								<td>Thu, 23 Sep 2021</td>
								<td>
									<span className={`${style.badge} ${style.green}`}>Completed</span>
								</td>
							</tr>
							<tr>
								<td>000002</td>
								<td>Samira Jones</td>
								<td>
									<Link href="production/tournament-detail">Battle Creek Onslaught</Link>
								</td>
								<td className={style.price}>$32.00</td>
								<td>Thu, 23 Sep 2021</td>
								<td>
									<span className={`${style.badge} ${style.green}`}>Completed</span>
								</td>
							</tr>
							<tr>
								<td>000001</td>
								<td>Jennifer Kem</td>
								<td>
									<Link href="production/tournament-detail">Nay Corral Gundown</Link>
								</td>
								<td className={style.price}>$10.00</td>
								<td>Thu, 23 Sep 2021</td>
								<td>
									<span className={`${style.badge} ${style.green}`}>Completed</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<TablePagination />
			</div>
		</>
	)
}

export default TransactionsTable
