import React from "react"
import style from "@/styles/scss/app.module.scss"
import TablePagination from "@/components/tablePagination"

type BookingData = {
	otp: string;
	fullName: string;
	email: string;
	phoneNumber: string;
	intrests: string;
}

type BookingTableProps = {
	bookingData: BookingData[];
}
const BookingTable = ({ bookingData }: BookingTableProps) => {
	return (
		<>
			<div className={style.table_blk_wrap}>
				<div className={style.table_blk}>
					<table>
						<thead>
							<tr>
								<th style={{ width: "14rem" }}>OTP</th>
								<th style={{ width: "15rem" }}>Full Name</th>
								<th style={{ width: "20rem" }}>Email</th>
								<th style={{ width: "15rem" }}>Phone Number</th>
								<th style={{ width: "28rem" }}>Interest</th>
							</tr>
						</thead>
						<tbody>
							{bookingData.map((data:any) => {
								return (
									<tr key={data.otp}>
										<td>{data.otp}</td>
										<td>{data.full_name}</td>
										<td>{data.email}</td>
										<td>{data.phone}</td>
										<td className={style.interest}>
											{data.intrests.map((interest:any) => {
												return (
													<span key={interest.id}>{interest.full_name}</span>
												)
											}
											)}
										</td>
									</tr>
								)
							})}
							
						</tbody>
					</table>
				</div>
				<TablePagination />
			</div>
		</>
	)
}

export default BookingTable
