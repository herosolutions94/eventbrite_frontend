import React,{useEffect, useState} from "react"
import style from "@/styles/scss/app.module.scss"
import TermsContent from "./terms-conditions/termsContent"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import axios from "axios"

type TermsAndConditions = {
	title: string,
	content: string,
	image: string
}

const TermsConditions = (TermsAndConditions: TermsAndConditions) => {

	useEffect(() => {
		getPrivacyPolicy()
	}, [])
	const [termsAndConditions, setTermsAndConditions] = useState(TermsAndConditions)
	
	const getPrivacyPolicy = async () => {
		try {
			const res = await axios.get(process.env.API_URL + "/terms-and-conditions")
			if(res.status === 200) {
				setTermsAndConditions(res.data.data)
			}

		} catch (err) {
			console.log(err);
		}
	}
	return (
		<>
			<Header pageTitle={termsAndConditions.title} />
			<SubBanner title={termsAndConditions.title} background={process.env.ASSET_URL+termsAndConditions.image}  />
			<section id={style.terms}>
				<div className={style.contain}>
					<TermsContent content={termsAndConditions.content}/>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default TermsConditions
