import React from "react"
import style from "@/styles/scss/app.module.scss"
import TermsContent from "./terms-conditions/termsContent"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"

const TermsConditions = () => {
	return (
		<>
			<Header pageTitle="Terms & Conditions" />
			<SubBanner title="Terms & Conditions" />
			<section id={style.terms}>
				<div className={style.contain}>
					<TermsContent />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default TermsConditions
