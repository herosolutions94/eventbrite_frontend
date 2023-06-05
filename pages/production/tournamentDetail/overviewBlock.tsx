import React from "react"
import style from "@/styles/scss/app.module.scss"

const OverviewBlock = (details : any) => {
	return (
		<>
		{details?.details?.address &&
			<div className={style.blk}>
				<p>{details?.details?.address}</p>
			</div>
		}
		{details?.details?.overview &&
			<div className={style.blk}>
				<h5>Tournament Overview</h5>
				<p>{details?.details?.overview}</p>
				</div>
		}
		{details?.details?.rules &&
			<div className={style.blk}>
				<h5>Rules and Regulations</h5>
				<p>{details?.details?.rules}</p>
			</div>
		}
		</>
	)
}

export default OverviewBlock
