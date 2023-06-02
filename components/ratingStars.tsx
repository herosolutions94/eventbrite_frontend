import React from "react"
import style from "@/styles/scss/app.module.scss"

const RatingStars = (props: any) => {
	const { value } = props
	return (
		<>
			<div className={style.rating} data-value={value} aria-readonly>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
			</div>
		</>
	)
}

export default RatingStars
