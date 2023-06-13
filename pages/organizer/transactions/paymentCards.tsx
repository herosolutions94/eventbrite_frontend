import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { IconEdit, IconTrash, VectorBank, VectorPaypal, VectorVisa } from "@/components/images"
import Link from "next/link"

const PaymentCards = () => {
	const [paypal, setPaypal] = useState(false)
	const [bank, setBank] = useState(false)
	const paypalHandle = () => {
		setPaypal(!paypal)
	}
	const bankHandle = () => {
		setBank(!bank)
	}
	return (
		<>
			<div className={`${style.flex_row} row`}>
				<div className="col-lg-4">
					<div className={style.pay_blk}>
						<div className={style.inr}>
							<div className={style.txt}>
								<div className={style.head}>
									<div className={style.icon}>
										<Image width={400} height={400} src={VectorPaypal} alt="" />
									</div>
								</div>
								<div className={style.cvc}>upcarx@paypal-demo.com</div>
								<div className={style.date}>Added on 10/09/2021</div>
							</div>
						</div>
						<div className={style.btm}>
							<ul className={style.action_btn}>
								<li>
									<button type="button" onClick={paypalHandle}>
										<Image width={100} height={100} src={IconEdit} alt="" /> Edit
									</button>
								</li>
								<li>
									<Link href="?">
										<Image width={100} height={100} src={IconTrash} alt="" /> Delete
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <div className="col-lg-4">
					<div className={style.pay_blk}>
						<div className={style.inr}>
							<div className={style.txt}>
								<div className={style.head}>
									<div className={style.icon}>
										<Image width={400} height={400} src={VectorVisa} alt="" />
									</div>
								</div>
								<div className={style.cvc}>*** *** *** 4242</div>
								<div className={style.date}>Added on 10/09/2021</div>
							</div>
						</div>
						<div className={style.btm}>
							<ul className={style.action_btn}>
								<li>
									<Link href="?">
										<Image width={100} height={100} src={IconEdit} alt="" /> Edit
									</Link>
								</li>
								<li>
									<Link href="?">
										<Image width={100} height={100} src={IconTrash} alt="" /> Delete
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div> */}
				<div className="col-lg-4">
					<div className={style.pay_blk}>
						<div className={style.inr}>
							<div className={style.txt}>
								<div className={style.head}>
									<div className={style.icon}>
										<Image width={400} height={400} src={VectorBank} alt="" />
									</div>
								</div>
								<div className={style.cvc}>*************AS33F</div>
								<div className={style.date}>Added on 10/09/2021</div>
							</div>
						</div>
						<div className={style.btm}>
							<ul className={style.action_btn}>
								<li>
									<button type="button" onClick={bankHandle}>
										<Image width={100} height={100} src={IconEdit} alt="" /> Edit
									</button>
								</li>
								<li>
									<Link href="?">
										<Image width={100} height={100} src={IconTrash} alt="" /> Delete
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{paypal ? (
				<div className={style.popup}>
					<div className={style.table_dv}>
						<div className={style.table_cell}>
							<div className={style.contain}>
								<div className="row justify-content-center">
									<div className="col-lg-6 col-sm-7 col-12">
										<div className={style._inner}>
											<button type="button" className={style.x_btn} onClick={paypalHandle}></button>
											<h5 className="mb-4">Edit Paypal Address</h5>
											<form action="" method="post">
												<div className="row">
													<div className="col-sm-12">
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
			{bank ? (
				<div className={style.popup}>
					<div className={style.table_dv}>
						<div className={style.table_cell}>
							<div className={style.contain}>
								<div className="row justify-content-center">
									<div className="col-lg-6 col-sm-7 col-12">
										<div className={style._inner}>
											<button type="button" className={style.x_btn} onClick={bankHandle}></button>
											<h5 className="mb-4">Edit Bank Account</h5>
											<form action="" method="post">
												<div className="row">
													<div className="col-sm-12">
														<h6>Account Title</h6>
														<div className={style.form_blk}>
															<input type="email" name="" id="" className={style.input} placeholder="eg: John Wick" />
														</div>
													</div>
													<div className="col-sm-12">
														<h6>Account Number</h6>
														<div className={style.form_blk}>
															<input type="email" name="" id="" className={style.input} placeholder="eg: 9898 6554 3509 7600" />
														</div>
													</div>
													<div className="col-sm-12">
														<h6>Routing Number</h6>
														<div className={style.form_blk}>
															<input type="email" name="" id="" className={style.input} placeholder="eg: spfr2013qz789sd798asd898m" />
														</div>
													</div>
													<div className="col-sm-12">
														<h6>Bank Name</h6>
														<div className={style.form_blk}>
															<select name="" id="" className={style.input}>
																<option value="">Select</option>
																<option value="">Wells Fargo Checking Account</option>
																<option value="">SunTrust Checking Account</option>
															</select>
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

export default PaymentCards
