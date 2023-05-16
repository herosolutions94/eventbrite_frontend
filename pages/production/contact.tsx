import React from "react"
import style from "@/styles/scss/app.module.scss"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contactForm"
import ContactInfo from "./contact/contactInfo"

const Contact = () => {
	return (
		<>
			<Header pageTitle="Contact us" />
			<SubBanner title="Contact us" />
			<section id={style.contact}>
				<div className={style.contain}>
					<div className="row">
						<div className="col-lg-5">
							<ContactInfo />
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
