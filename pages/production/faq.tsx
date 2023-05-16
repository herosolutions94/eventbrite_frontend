import React from "react"
import style from "@/styles/scss/app.module.scss"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import FaqData from "./faq/faqData"

const Faq = () => {
	return (
		<>
			<Header pageTitle="FAQ's" />
			<SubBanner title="FAQ's" />
			<section id={style.faq}>
				<div className={style.contain}>
					<FaqData />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Faq
