import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contactForm"
import ContactInfo from "./contact/contactInfo"
import axios from "axios"

const Contact: React.FC = () => {
	const [contactPageData, setContactPageData] = useState<any>(null)
	
	useEffect(() => {
		fetchContactContent()
	}, [])
	const fetchContactContent = async () => {
		try {
			const res = await axios.get(
				`${process.env.API_URL}/contact-us`
			)
			if (res.status === 200) {
				setContactPageData(res.data.data)
			}
		} catch (err) {
			console.log(err)
		}
	}

	if (!contactPageData) {
		return <div>Loading...</div>;
	  }

	return (
		<>
			<Header pageTitle={contactPageData?.title} />
			<SubBanner 
				title = {contactPageData?.title}
				background = {contactPageData?.image ? process.env.ASSET_URL + contactPageData.image : ''}
			/>
			<section id={style.contact}>
				<div className={style.contain}>
					<div className="row">
						<div className="col-lg-5">
							<ContactInfo content={contactPageData} />
						</div>
						<div className="col-lg-7">
							<div className={style.blk}>
								<ContactForm />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Contact
