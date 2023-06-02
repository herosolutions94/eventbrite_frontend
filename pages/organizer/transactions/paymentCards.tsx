import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { IconEdit, IconTrash, VectorBank, VectorPaypal, VectorVisa } from "@/components/images"
import Link from "next/link"

const PaymentCards = () => {
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
				</div>
				<div className="col-lg-4">
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
				</div>
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
				</div>
			</div>
		</>
	)
}

export default PaymentCards
