import { PhotoMainSlide } from "@/components/images"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import MainSearch from "@/components/mainSearch"

const Banner = () => {
	return (
		<section id={style.banner} style={{ backgroundImage: `url("${PhotoMainSlide.src}")` }}>
			<div className={style.contain}>
				<div className={style.outer}>
					<div className={style.content}>
						<h1>You Speak Of Justice?</h1>
						<p>Orange County’s Top Speak Agent</p>
						{/* <div className={style.btn_blk + " mt-5 justify-content-center"}>
							<Link href="/about" className={style.site_btn + " " + style.simple}>
								About us
							</Link>
							<Link href="/booking" className={style.site_btn}>
								Book Now
							</Link>
						</div> */}
						<MainSearch />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner
