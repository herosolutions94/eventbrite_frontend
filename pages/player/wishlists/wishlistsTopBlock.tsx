import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { IconSearch } from "@/components/images"

const WishlistsTopBlock = (props: any) => {
	const { fetchWishlistsItems,page } = props
	return (
		<>
			<div className={style.table_top_block}>
				<div className={style.form_blk}>
					<Image width={100} height={100} src={IconSearch} alt="" />
					<input type="search" placeholder="Search tournaments" className={style.input} onChange={(e) => fetchWishlistsItems(page,'desc',e.target.value)} />
				</div>
				<div className={style.btn_blk}>
					<select name="" id="" className={style.input} onChange={(e) => fetchWishlistsItems(page,e.target.value)}>
						<option value="">Sort by</option>
						<option value="desc">Latest added</option>
						<option value="asc">Oldest added</option>
					</select>
				</div>
			</div>
		</>
	)
}

export default WishlistsTopBlock
