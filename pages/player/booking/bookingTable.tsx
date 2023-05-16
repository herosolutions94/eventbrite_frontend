import React from "react"
import style from "@/styles/scss/app.module.scss"
import TablePagination from "@/components/tablePagination"

const BookingTable = () => {
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
							<tr>
								<td>456789</td>
								<td>Dave Chen</td>
								<td>davechen@gmail.com</td>
								<td>+123 456 789</td>
								<td className={style.interest}>
									<span>Nature</span>
									<span>Road Trip</span>
									<span>Travel</span>
								</td>
							</tr>
							<tr>
								<td>534657</td>
								<td>Nicola Adler</td>
								<td>nicolaadler@gmail.com</td>
								<td>+123 534 657</td>
								<td className={style.interest}>
									<span>Socializing</span>
									<span>Sports</span>
								</td>
							</tr>
							<tr>
								<td>645095</td>
								<td>Jordyn Madsen</td>
								<td>jorfynmadsen@gmail.com</td>
								<td>+123 645 095</td>
								<td className={style.interest}>
									<span>Collecting</span>
									<span>Gaming</span>
								</td>
							</tr>
							<tr>
								<td>736185</td>
								<td>Erin Donin</td>
								<td>erindonin@gmail.com</td>
								<td>+123 736 185</td>
								<td className={style.interest}>
									<span>Collecting</span>
									<span>Gaming</span>
									<span>Collecting</span>
								</td>
							</tr>
							<tr>
								<td>645095</td>
								<td>Jordyn Madsen</td>
								<td>jorfynmadsen@gmail.com</td>
								<td>+123 645 095</td>
								<td className={style.interest}>
									<span>Collecting</span>
								</td>
							</tr>
							<tr>
								<td>645095</td>
								<td>Jordyn Madsen</td>
								<td>jorfynmadsen@gmail.com</td>
								<td>+123 645 095</td>
								<td className={style.interest}>
									<span>Collecting</span>
									<span>Gaming</span>
								</td>
							</tr>
							<tr>
								<td>645095</td>
								<td>Jordyn Madsen</td>
								<td>jorfynmadsen@gmail.com</td>
								<td>+123 645 095</td>
								<td className={style.interest}>
									<span>Collecting</span>
									<span>Gaming</span>
									<span>Collecting</span>
								</td>
							</tr>
							<tr>
								<td>645095</td>
								<td>Jordyn Madsen</td>
								<td>jorfynmadsen@gmail.com</td>
								<td>+123 645 095</td>
								<td className={style.interest}>
									<span>Collecting</span>
									<span>Gaming</span>
									<span>Collecting</span>
								</td>
							</tr>
							<tr>
								<td>645095</td>
								<td>Jordyn Madsen</td>
								<td>jorfynmadsen@gmail.com</td>
								<td>+123 645 095</td>
								<td className={style.interest}>
									<span>Collecting</span>
									<span>Gaming</span>
									<span>Collecting</span>
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

export default BookingTable
