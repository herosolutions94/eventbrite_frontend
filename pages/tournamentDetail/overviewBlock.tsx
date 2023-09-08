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
					<div dangerouslySetInnerHTML={{ __html: details?.details?.overview }}  />
				</div>
		}
		{details?.details?.rules &&
			<div className={style.blk}>
				<h5>Rules and Regulations</h5>
				<div dangerouslySetInnerHTML={{ __html: details?.details?.rules }}  />
			</div>
		}
		</>
	)
}

export default OverviewBlock
