
import React from "react"
import style from "@/styles/scss/app.module.scss"
import TablePagination from "@/components/tablePagination"
import Link from "next/link"

type Props = {
	wallet: any
}
const TransactionsTable = ({ wallet }: Props) => {
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
							{wallet?.wallet?.transaction?.length > 0 ? (
								wallet.wallet.transaction.map((item: any, index: number) => (
									<tr key={index}>
										<td>{item.order_id}</td>
										<td>{item.owner_name}</td>
										<td>
											<Link href="production/tournament-detail">{item.tournament.title}</Link>
										</td>
										<td className={style.price}>${item.amount}</td>
										<td>{item.created_at}</td>
										<td>
											<span className={`${style.badge} ${style.green}`}>{item.status}</span>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={6} style={{ textAlign: "center" }}>
										No data found
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
				<TablePagination />
			</div>
		</>
	)
}

export default TransactionsTable
