import React from "react"
import style from "@/styles/scss/app.module.scss"
import MainSearch from "@/components/mainSearch"

const TopFilters = () => {
	return (
		<>
			<MainSearch />
			<div className={style.top_head}>
				<div className={style.txt}>
					<h3>Search Tournaments</h3>
					<p className="opacity-50">Showing 1-30 of 33,013 search results.</p>
				</div>
				<div className={style.btn_blk}>
					<select name="" id="" className={style.input}>
						<option value="">Sort by</option>
						<option value="">Newest Listings</option>
						<option value="">Oldest Listings</option>
						<option value="">Closest</option>
					</select>
				</div>
			</div>
		</>
	)
}

export default TopFilters
