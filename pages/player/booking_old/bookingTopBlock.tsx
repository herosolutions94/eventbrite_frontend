import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { IconDownloadCsv, IconSearch } from "@/components/images"

const BookingTopBlock = () => {
	return (
		<>
			<div className={style.table_top_block}>
				<div className={style.form_blk}>
					<Image width={100} height={100} src={IconSearch} alt="" />
					<input type="search" placeholder="Search bookings" className={style.input} />
				</div>
				<div className={style.btn_blk}>
					<button type="button" className={style.site_btn}>
						<Image width={100} height={100} src={IconDownloadCsv} alt="" />
						Download CSV
					</button>
				</div>
			</div>
		</>
	)
}

export default BookingTopBlock
