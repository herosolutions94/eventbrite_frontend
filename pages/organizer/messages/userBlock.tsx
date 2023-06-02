import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { IconSearch } from "@/components/images"

const UserBlock = () => {
	return (
		<>
			<div className={style.user_blk}>
				<div className={style.srch_blk}>
					<Image width={100} height={100} src={IconSearch} alt="" />
					<input type="text" name="" id="" className={style.input} placeholder="Search here" />
				</div>
				<ul className={style.user_list}>
					<li>
						<div className={style.inr}>
							<div className={style.name}>John S. Glen</div>
							<p>Lorem Ipsum is simply dummy printing site emmet</p>
						</div>
						<div className={style.date}>Today</div>
					</li>
					<li className={style.active}>
						<div className={style.inr}>
							<div className={style.name}>Guy H. Harden</div>
							<p>Lorem Ipsum is simply dummy printing site emmet</p>
						</div>
						<div className={style.date}>Yesterday</div>
					</li>
					<li>
						<div className={style.inr}>
							<div className={style.name}>Mike Kendrick</div>
							<p>Lorem Ipsum is simply dummy printing site emmet</p>
						</div>
						<div className={style.date}>Saturday</div>
					</li>
					<li>
						<div className={style.inr}>
							<div className={style.name}>James L. Cantara</div>
							<p>Lorem Ipsum is simply dummy printing site emmet</p>
						</div>
						<div className={style.date}>Monday</div>
					</li>
					<li>
						<div className={style.inr}>
							<div className={style.name}>Mike Kendrick</div>
							<p>Lorem Ipsum is simply dummy printing site emmet</p>
						</div>
						<div className={style.date}>Wednesday</div>
					</li>
					<li>
						<div className={style.inr}>
							<div className={style.name}>John S. Glen</div>
							<p>Lorem Ipsum is simply dummy printing site emmet</p>
						</div>
						<div className={style.date}>Friday</div>
					</li>
					<li>
						<div className={style.inr}>
							<div className={style.name}>Guy H. Harden</div>
							<p>Lorem Ipsum is simply dummy printing site emmet</p>
						</div>
						<div className={style.date}>Friday</div>
					</li>
					<li>
						<div className={style.inr}>
							<div className={style.name}>Mike Kendrick</div>
							<p>Lorem Ipsum is simply dummy printing site emmet</p>
						</div>
						<div className={style.date}>12/01/2023</div>
					</li>
					<li>
						<div className={style.inr}>
							<div className={style.name}>James L. Cantara</div>
							<p>Lorem Ipsum is simply dummy printing site emmet</p>
						</div>
						<div className={style.date}>10/01/2023</div>
					</li>
					<li>
						<div className={style.inr}>
							<div className={style.name}>Mike Kendrick</div>
							<p>Lorem Ipsum is simply dummy printing site emmet</p>
						</div>
						<div className={style.date}>07/01/2023</div>
					</li>
				</ul>
			</div>
		</>
	)
}

export default UserBlock
