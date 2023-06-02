import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"

const FaqBlock = (props: any) => {
	const { question, answer } = props
	const [faqView, setFaqView] = useState(false)
	const faqHandle = () => {
		setFaqView(!faqView)
	}
	return (
		<>
			<div className={`${style.faq_blk} ${faqView ? `${style.active}` : ""} `} onClick={faqHandle}>
				<h5>{question}</h5>
				<div className={style.txt}>
					<p>{answer}</p>
				</div>
			</div>
		</>
	)
}

export default FaqBlock
