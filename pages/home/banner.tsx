import { PhotoMainSlide } from "@/components/images"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import MainSearch from "@/components/mainSearch"

type BannerProps = {
	title: string;
	content: string;
	image: string;
	categories: any[]
}

const Banner = (props: BannerProps) => {
	const { title, content, image, categories } = props;
	return (
		<section id={style.banner} style={{ backgroundImage: `url("${image}")` }}>

			<div className={style.contain}>
				<div className={style.outer}>
					<div className={style.content}>
						<h1>{title}</h1>
						<p>{content}</p>
						{/* <div className={style.btn_blk + " mt-5 justify-content-center"}>
							<Link href="/about" className={style.site_btn + " " + style.simple}>
								About us
							</Link>
							<Link href="/booking" className={style.site_btn}>
								Book Now
							</Link>
						</div> */}
						<MainSearch
							setTournaments={() => { }}
							categoriesArr={categories}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner
