import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"

const FaqBlock = (props: any) => {
	const { title, text } = props
	const [faqView, setFaqView] = useState(false)
	const faqHandle = () => {
		setFaqView(!faqView)
	}
	return (
		<>
			<div className={`${style.faq_blk} ${faqView ? `${style.active}` : ""} `} onClick={faqHandle}>
				<h5>{title}</h5>
				<div className={style.txt}>
					<p>{text}</p>
				</div>
			</div>
		</>
	)
}

export default FaqBlock
