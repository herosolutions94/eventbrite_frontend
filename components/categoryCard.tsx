import React from "react"
import style from "@/styles/scss/app.module.scss"
import { IconCalendar } from "./images"
import Image from "next/image"
import Link from "next/link"
import RatingStars from "./ratingStars"

const CategoryCard = (props: any) => {
	const { title, link, tag, date, text, img, wishlist, rating } = props
	return (
		<>
			<div className={style.category_card}>
				<button type="button" className={`${style.heart} ${wishlist ? `${style.fill}` : ""}`}></button>
				<div className={style.fig}>
					<Image width={1000} height={1000} src={img} alt="" />
				</div>
				<div className={style.txt}>
					<span className={style.tag}>{tag}</span>
					<h4>
						<Link 
							href={link}
						>{title}</Link>
					</h4>
					<div className={style.date}>
						<Image width={100} height={100} src={IconCalendar} alt="" /> {date}
					</div>
					<RatingStars value={rating} />
					<p>{text}</p>
				</div>
			</div>
		</>
	)
}

export default CategoryCard
