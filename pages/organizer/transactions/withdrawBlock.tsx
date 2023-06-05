import React from "react"
import style from "@/styles/scss/app.module.scss"

const WithdrawBlock = () => {
	return (
		<>
			<div className={style.balance_blk}>
				<div className={style.price}>
					Payouts: <span className="price">£1,258.5</span>
				</div>
				<div className={style.price}>
					Current Balance: <span className="price">£40.0</span>
				</div>
				<button type="button" className={`${style.site_btn} ${style.sm}`}>
					Withdraw Funds
				</button>
			</div>
		</>
	)
}

export default WithdrawBlock
