import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { IconTick, PhotoSpeciality } from "@/components/images"

const Specialities = () => {
	return (
		<>
			<section id={style.specialities}>
				<div className={style.contain}>
					<div className={style.flex_row + " row align-items-center justify-content-between"}>
						<div className={style.column1}>
							<div className={style.image}>
								<Image width={1000} height={1000} src={PhotoSpeciality} alt="" />
							</div>
						</div>
						<div className={style.column2}>
							<div className={style.content}>
								<h5 className={style.subheading}>Services</h5>
								<h2>Specialities</h2>
								<ul className={style.list}>
									<li>
										<Image width={100} height={100} src={IconTick} alt="" />
										<span>About the Clan</span>
									</li>
									<li>
										<Image width={100} height={100} src={IconTick} alt="" />
										<span>Listing Agent</span>
									</li>
									<li>
										<Image width={100} height={100} src={IconTick} alt="" />
										<span>Our Squad</span>
									</li>
									<li>
										<Image width={100} height={100} src={IconTick} alt="" />
										<span>Equipment</span>
									</li>
									<li>
										<Image width={100} height={100} src={IconTick} alt="" />
										<span>Gaming Management</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Specialities
