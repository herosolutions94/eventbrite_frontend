import React from "react"
import style from "@/styles/scss/app.module.scss"

const MainSearch = () => {
	return (
		<>
			<form action="" method="post" className={style.main_search_form}>
				<input type="text" name="" id="" className={style.input} placeholder="Search by Categories" />
				<input type="text" name="" id="" className={style.input} placeholder="Post code" />
				<button type="submit" className={style.site_btn}>
					Search
				</button>
			</form>
		</>
	)
}

export default MainSearch
