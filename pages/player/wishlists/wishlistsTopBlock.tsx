import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { IconSearch } from "@/components/images"

const WishlistsTopBlock = () => {
	return (
		<>
			<div className={style.table_top_block}>
				<div className={style.form_blk}>
					<Image width={100} height={100} src={IconSearch} alt="" />
					<input type="search" placeholder="Search tournaments" className={style.input} />
				</div>
				<div className={style.btn_blk}>
					<select name="" id="" className={style.input}>
						<option value="">Sort by</option>
						<option value="">Distance</option>
						<option value="">Difficulty</option>
						<option value="">Latest added</option>
						<option value="">Popularity</option>
						<option value="">People Enrolled</option>
					</select>
				</div>
			</div>
		</>
	)
}

export default WishlistsTopBlock
