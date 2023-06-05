import React from "react"
import style from "@/styles/scss/app.module.scss"

const OverviewBlock = (details : any) => {
	return (
		<>
			<div className={style.blk}>
				<p>{details?.details?.address}</p>
			</div>
			<div className={style.blk}>
				<h5>Tournament Overview</h5>
				<p>{details?.details?.overview}</p>
				</div>
			<div className={style.blk}>
				<h5>Rules and Regulations</h5>
				<p>{details?.details?.rules}</p>
			</div>
		</>
	)
}

export default OverviewBlock
