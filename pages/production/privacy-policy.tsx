import React from "react"
import style from "@/styles/scss/app.module.scss"
import TermsContent from "./privacy-policy/termsContent"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"

const PrivacyPolicy = () => {
	return (
		<>
			<Header pageTitle="Privacy Policy" />
			<SubBanner title="Privacy Policy" />
			<section id={style.terms}>
				<div className={style.contain}>
					<TermsContent />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default PrivacyPolicy
