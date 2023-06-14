import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"

type Props = {
	wallet: any
}
const WithdrawBlock = ({ wallet }: Props) => {
	const [withdraw, setWithdraw] = useState(false)
	const withdrawHandle = () => {
		setWithdraw(!withdraw)
	}
	return (
		<>
			<div className={style.balance_blk}>
				<div className={style.price}>
					Payouts: <span className="price">£{wallet.wallet.payouts}</span>
				</div>
				<div className={style.price}>
					Current Balance: <span className="price">£{wallet.wallet.current_balance}</span>
				</div>
				<button type="button" className={`${style.site_btn} ${style.sm}`} onClick={withdrawHandle}>
					Withdraw Funds
				</button>
			</div>
			{withdraw ? (
				<div className={style.popup}>
					<div className={style.table_dv}>
						<div className={style.table_cell}>
							<div className={style.contain}>
								<div className="row justify-content-center">
									<div className="col-lg-6 col-sm-7 col-12">
										<div className={style._inner}>
											<button type="button" className={style.x_btn} onClick={withdrawHandle}></button>
											<h5 className="mb-4">Add Payment method</h5>
											<form action="" method="post">
												<div className={style.withdraw_block}>
													<div className={style.lbl_btn}>
														<input type="radio" name="payment" id="bank" value="bank-account" checked={true} />
														<label htmlFor="bank">Bank Account</label>
													</div>
													<div className={style.inside_blk}>
														<h6>Bank Account</h6>
														<div className={style.form_blk}>
															<select name="" id="" className={style.input}>
																<option value="">Select</option>
																<option value="">Wells Fargo Checking Account</option>
																<option value="">SunTrust Checking Account</option>
															</select>
														</div>
													</div>
													<hr />
													<div className={style.lbl_btn}>
														<input type="radio" name="payment" id="paypal" value="paypal" />
														<label htmlFor="paypal">Paypal</label>
													</div>
													<div className={style.inside_blk}>
														<h6>PayPal Address</h6>
														<div className={style.form_blk}>
															<input type="email" name="" id="" className={style.input} placeholder="eg: spfr2013qz7@nomail.com" />
														</div>
													</div>
												</div>
												<div className={`${style.btn_blk} mt-5 justify-content-center`}>
													<button type="submit" className={style.site_btn}>
														Submit
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}

export default WithdrawBlock
