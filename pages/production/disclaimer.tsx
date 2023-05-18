import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import TermsContent from "./disclaimer/termsContent"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import axios from "axios"

type DisclamerContentData = {
	title: string;
	content: string;
	image: string;
}

const Disclaimer = () => {
	const [termsContent, setTermsContent] = useState<DisclamerContentData | null>(null);

	useEffect(() => {
		fetchTermsContent();
	}, []);
	
	const fetchTermsContent = async () => {
		try {
			const response = await axios.get(`${process.env.API_URL}/disclaimer`);
			if (response.status === 200) {
				setTermsContent(response.data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (!termsContent) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Header pageTitle={termsContent.title} />
			<SubBanner
				title={termsContent.title}
				background={process.env.ASSET_URL + termsContent.image}
			/>
			<section id={style.terms}>
				<div className={style.contain}>
					<TermsContent content={termsContent.content} />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Disclaimer
